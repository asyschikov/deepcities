import { eq } from "drizzle-orm";
import { citySlug, LEGACY_MAP_SLUGS } from "./cities";
import { createDb } from "./db";
import { collection } from "./db/schema";
import type { ServerEnv } from "./server-env";

/** `/m/<slug>/…` (before maps moved under their city) → `/<city>/<map>/…`. */
const legacyMapPath = async (
  pathname: string,
  env: ServerEnv,
): Promise<string | null> => {
  const m = /^\/m\/([^/]+)(\/.*)?$/.exec(pathname);
  if (!m?.[1]) return null;
  const slug = LEGACY_MAP_SLUGS[m[1]] ?? m[1];
  const found = await createDb(env.DB).query.collection.findFirst({
    where: eq(collection.slug, slug),
    columns: { slug: true, city: true },
  });
  return found ? `/${citySlug(found.city)}/${found.slug}${m[2] ?? ""}` : null;
};

/**
 * Redirects before the app: other hosts (workers.dev, www) to the site's
 * own origin, and old map URLs to their new place. The API and media stay on any host so the CLI keeps working.
 */
export const redirectFor = async (
  request: Request,
  env: ServerEnv,
): Promise<Response | null> => {
  if (request.method !== "GET" && request.method !== "HEAD") return null;
  const url = new URL(request.url);
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/media/"))
    return null;
  const origin = new URL(env.SITE_ORIGIN);
  const otherHost = env.APP_ENV === "live" && url.host !== origin.host;
  const legacy = await legacyMapPath(url.pathname, env);
  if (!otherHost && !legacy) return null;
  const target = new URL(
    (legacy ?? url.pathname) + url.search,
    otherHost ? origin : url,
  );
  return Response.redirect(target.toString(), 301);
};
