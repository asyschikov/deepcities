/**
 * Custom worker entry point: auth form posts and media serving are plain
 * handlers (full control over Set-Cookie / streaming); everything else goes
 * to TanStack Start.
 */
import handler from "@tanstack/react-start/server-entry";
import { and, eq } from "drizzle-orm";
import {
  clearedSessionCookie,
  destroySession,
  getSessionProfile,
  hasSessionCookie,
  redeemLoginToken,
  sessionCookie,
} from "./lib/auth.server";
import { handleBackups, scheduledBackup } from "./lib/backup.server";
import { createDb } from "./lib/db";
import { checkinPhoto, photo } from "./lib/db/schema";
import { PREFIXED_LANGS } from "./lib/place-page";
import { redirectFor } from "./lib/redirects.server";
import type { ServerEnv } from "./lib/server-env";
import { robotsTxt, sitemapEntries, sitemapXml } from "./lib/sitemap.server";

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ] ?? c,
  );

const page = (body: string) =>
  new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sign in · Deep Cities</title><style>body{font-family:system-ui,sans-serif;background:#f6f4ef;color:#1c1917;display:grid;place-items:center;min-height:100vh;margin:0}main{background:#fff;border:1px solid #e7e5e4;border-radius:14px;padding:32px;max-width:360px;text-align:center}button{background:#134e4a;color:#fff;border:0;border-radius:8px;padding:12px 20px;font-size:16px;cursor:pointer;width:100%}a{color:#134e4a}</style></head><body><main>${body}</main></body></html>`,
    { headers: { "Content-Type": "text/html; charset=utf-8" } },
  );

/** Landing page for the emailed link. Requires a click → POST (see auth.server.ts). */
const verifyPage = (token: string) =>
  page(
    `<h1 style="font-size:22px">Sign in to Deep Cities</h1><form method="post" action="/auth/verify"><input type="hidden" name="token" value="${escapeHtml(token)}"><button type="submit">Continue</button></form>`,
  );

const invalidLinkPage = () =>
  page(
    `<h1 style="font-size:22px">This link has expired</h1><p>Sign-in links work once and expire after 30 minutes.</p><p><a href="/auth">Get a new link</a></p>`,
  );

const handleVerify = async (request: Request, env: ServerEnv) => {
  const url = new URL(request.url);
  if (request.method === "GET") {
    const token = url.searchParams.get("token");
    return token ? verifyPage(token) : invalidLinkPage();
  }
  const form = await request.formData();
  const token = form.get("token");
  if (typeof token !== "string") return invalidLinkPage();
  const result = await redeemLoginToken(createDb(env.DB), token);
  if (!result) return invalidLinkPage();
  return new Response(null, {
    status: 303,
    headers: {
      Location: result.next,
      "Set-Cookie": sessionCookie(result.sessionId, url.protocol === "https:"),
    },
  });
};

const handleSignOut = async (request: Request, env: ServerEnv) => {
  await destroySession(createDb(env.DB), request);
  return new Response(null, {
    status: 303,
    headers: { Location: "/", "Set-Cookie": clearedSessionCookie() },
  });
};

const handleMedia = async (photoId: string, env: ServerEnv) => {
  const row = await createDb(env.DB).query.photo.findFirst({
    where: eq(photo.id, photoId),
    columns: { objectKey: true },
  });
  const object = row ? await env.R2.get(row.objectKey) : null;
  if (!object) return new Response("Not found", { status: 404 });
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("Cache-Control", "public, max-age=31536000, immutable");
  headers.set("ETag", object.httpEtag);
  return new Response(object.body, { headers });
};

/** A check-in photo: private, so only for its owner, and never cached shared. */
const handleCheckinMedia = async (
  request: Request,
  photoId: string,
  env: ServerEnv,
) => {
  const db = createDb(env.DB);
  const viewer = await getSessionProfile(db, request);
  const row = viewer
    ? await db.query.checkinPhoto.findFirst({
        where: and(
          eq(checkinPhoto.id, photoId),
          eq(checkinPhoto.profileId, viewer.id),
        ),
        columns: { objectKey: true },
      })
    : null;
  const object = row ? await env.R2.get(row.objectKey) : null;
  if (!object) return new Response("Not found", { status: 404 });
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("Cache-Control", "private, max-age=86400");
  headers.set("ETag", object.httpEtag);
  return new Response(object.body, { headers });
};

/** A profile portrait: public; each upload gets a new id, so cache forever. */
const handleAvatar = async (avatarId: string, env: ServerEnv) => {
  const object = await env.R2.get(`avatars/${avatarId}`);
  if (!object) return new Response("Not found", { status: 404 });
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("Cache-Control", "public, max-age=31536000, immutable");
  headers.set("ETag", object.httpEtag);
  return new Response(object.body, { headers });
};

/**
 * Places' own pages and the area lists, the pages search engines crawl:
 * cached at the edge for readers without a session (nothing on them is
 * personal then), so most visits skip rendering and the database. An edit
 * shows within `PUBLIC_PAGE_TTL`.
 */
const PUBLIC_PAGE = new RegExp(
  `^(/(${PREFIXED_LANGS.join("|")}))?/[a-z0-9-]+/(p|places)(/|$)`,
);
const PUBLIC_PAGE_TTL = 300;

const cachedPublicPage = async (
  request: Request,
  ctx: ExecutionContext,
  render: () => Promise<Response>,
): Promise<Response> => {
  const key = new Request(request.url, { method: "GET" });
  // Workers add `default` to CacheStorage; the DOM typings win here.
  const cache = (caches as unknown as { default: Cache }).default;
  const hit = await cache.match(key);
  if (hit) return hit;
  const res = await render();
  if (res.status !== 200 || res.headers.has("Set-Cookie")) return res;
  const out = new Response(res.body, res);
  out.headers.set("Cache-Control", `public, max-age=${PUBLIC_PAGE_TTL}`);
  ctx.waitUntil(cache.put(key, out.clone()));
  return out;
};

export default {
  async fetch(
    request: Request,
    env: ServerEnv,
    ctx: ExecutionContext,
  ): Promise<Response> {
    const { pathname } = new URL(request.url);

    const redirect = redirectFor(request, env);
    if (redirect) return redirect;

    if (pathname === "/robots.txt")
      return new Response(robotsTxt(), {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=86400",
        },
      });
    if (pathname === "/sitemap.xml")
      return new Response(sitemapXml(await sitemapEntries(createDb(env.DB))), {
        headers: {
          "Content-Type": "application/xml; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
        },
      });

    if (pathname.startsWith("/api/backups/"))
      return handleBackups(request, env);

    if (pathname === "/auth/verify") return handleVerify(request, env);
    if (pathname === "/auth/signout" && request.method === "POST")
      return handleSignOut(request, env);

    const own = /^\/media\/checkins\/([a-z0-9]+)$/.exec(pathname);
    if (own?.[1] && request.method === "GET")
      return handleCheckinMedia(request, own[1], env);

    const avatar = /^\/media\/avatars\/([a-z0-9]+)$/.exec(pathname);
    if (avatar?.[1] && request.method === "GET")
      return handleAvatar(avatar[1], env);

    const media = /^\/media\/photos\/([a-z0-9]+)$/.exec(pathname);
    if (media?.[1] && request.method === "GET")
      return handleMedia(media[1], env);

    const render = () =>
      (
        handler.fetch as (
          req: Request,
          env: ServerEnv,
          ctx: ExecutionContext,
        ) => Promise<Response>
      )(request, env, ctx);
    if (
      env.APP_ENV === "live" &&
      request.method === "GET" &&
      PUBLIC_PAGE.test(pathname) &&
      !hasSessionCookie(request)
    )
      return cachedPublicPage(request, ctx, render);
    return render();
  },

  /** The nightly backup (the cron in wrangler.jsonc). */
  async scheduled(
    _controller: ScheduledController,
    env: ServerEnv,
    ctx: ExecutionContext,
  ): Promise<void> {
    ctx.waitUntil(scheduledBackup(env));
  },
};
