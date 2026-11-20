/**
 * Passwordless email ("magic link") auth.
 *
 * Flow: user enters email → we store sha256(token) in `login_token` and email
 * a link to /auth/verify?token=… → that page POSTs the token back (so link
 * scanners that prefetch GET URLs can't burn it) → we upsert the profile,
 * create a `session` row and set an HttpOnly cookie holding the raw session
 * id. Only hashes ever touch the database.
 */
import { createId } from "@paralleldrive/cuid2";
import { and, count, eq, gt, isNull } from "drizzle-orm";
import {
  LOGIN_LINKS_PER_HOUR,
  LOGIN_TOKEN_TTL_MINUTES,
  SESSION_COOKIE,
  SESSION_TTL_DAYS,
} from "./constants";
import type { Database } from "./db";
import { apiToken, loginToken, profile, session } from "./db/schema";

const MINUTE = 60_000;
const DAY = 24 * 60 * MINUTE;

const toBase64Url = (bytes: Uint8Array): string =>
  btoa(String.fromCharCode(...bytes))
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/, "");

const randomToken = (): string =>
  toBase64Url(crypto.getRandomValues(new Uint8Array(32)));

const sha256 = async (value: string): Promise<string> => {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value),
  );
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

/** Only same-site relative paths are allowed as post-login redirects. */
export const safeNext = (next: string | null | undefined): string =>
  next?.startsWith("/") && !next.startsWith("//") ? next : "/";

export class RateLimitedError extends Error {}

export const createLoginLink = async (
  db: Database,
  { email, next, origin }: { email: string; next: string; origin: string },
): Promise<string> => {
  const since = new Date(Date.now() - 60 * MINUTE);
  const [recent] = await db
    .select({ n: count() })
    .from(loginToken)
    .where(and(eq(loginToken.email, email), gt(loginToken.createdAt, since)));
  if ((recent?.n ?? 0) >= LOGIN_LINKS_PER_HOUR) throw new RateLimitedError();

  const token = randomToken();
  const now = new Date();
  await db.insert(loginToken).values({
    tokenHash: await sha256(token),
    email,
    next: safeNext(next),
    expiresAt: new Date(now.getTime() + LOGIN_TOKEN_TTL_MINUTES * MINUTE),
    createdAt: now,
  });
  const url = new URL("/auth/verify", origin);
  url.searchParams.set("token", token);
  return url.toString();
};

const nameFromEmail = (email: string): string => {
  const local = email.split("@")[0] ?? "explorer";
  return local.replace(/[._+-]+/g, " ").trim() || "explorer";
};

/**
 * Redeem a magic-link token. Returns the new raw session id and where to go,
 * or null when the token is unknown, expired or already used.
 */
export const redeemLoginToken = async (
  db: Database,
  token: string,
): Promise<{ sessionId: string; next: string } | null> => {
  const now = new Date();
  // Mark used atomically so a token can never be redeemed twice.
  const [row] = await db
    .update(loginToken)
    .set({ usedAt: now })
    .where(
      and(
        eq(loginToken.tokenHash, await sha256(token)),
        isNull(loginToken.usedAt),
        gt(loginToken.expiresAt, now),
      ),
    )
    .returning();
  if (!row) return null;

  await db
    .insert(profile)
    .values({
      id: createId(),
      email: row.email,
      name: nameFromEmail(row.email),
      createdAt: now,
    })
    .onConflictDoNothing();
  const user = await db.query.profile.findFirst({
    where: eq(profile.email, row.email),
  });
  if (!user) return null;

  const sessionId = randomToken();
  await db.insert(session).values({
    idHash: await sha256(sessionId),
    profileId: user.id,
    expiresAt: new Date(now.getTime() + SESSION_TTL_DAYS * DAY),
    createdAt: now,
  });
  return { sessionId, next: row.next };
};

const readCookie = (header: string | null, name: string): string | null => {
  const match = (header ?? "")
    .split(/;\s*/)
    .find((c) => c.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
};

export const getSessionProfile = async (db: Database, request: Request) => {
  const raw = readCookie(request.headers.get("Cookie"), SESSION_COOKIE);
  if (!raw) return null;
  const row = await db.query.session.findFirst({
    where: and(
      eq(session.idHash, await sha256(raw)),
      gt(session.expiresAt, new Date()),
    ),
  });
  if (!row) return null;
  return (
    (await db.query.profile.findFirst({
      where: eq(profile.id, row.profileId),
    })) ?? null
  );
};

export const API_TOKEN_PREFIX = "dc_";

/** Mint a personal API token. The raw token is returned once, never stored. */
export const createApiToken = async (
  db: Database,
  { profileId, name }: { profileId: string; name: string },
): Promise<{ token: string; publicId: string }> => {
  const token = `${API_TOKEN_PREFIX}${randomToken()}`;
  const publicId = `tok_${createId().slice(0, 10)}`;
  await db.insert(apiToken).values({
    idHash: await sha256(token),
    publicId,
    profileId,
    name,
    createdAt: new Date(),
  });
  return { token, publicId };
};

const bearerProfile = async (db: Database, raw: string) => {
  const row = await db.query.apiToken.findFirst({
    where: eq(apiToken.idHash, await sha256(raw)),
  });
  if (!row) return null;
  const now = new Date();
  // Coarse "last used" so a busy script doesn't write on every request.
  if (!row.lastUsedAt || now.getTime() - row.lastUsedAt.getTime() > 3600_000) {
    await db
      .update(apiToken)
      .set({ lastUsedAt: now })
      .where(eq(apiToken.idHash, row.idHash));
  }
  return (
    (await db.query.profile.findFirst({
      where: eq(profile.id, row.profileId),
    })) ?? null
  );
};

/**
 * Who is making this request: an `Authorization: Bearer dc_…` API token
 * (scripts, the CLI) or the browser session cookie.
 */
export const getRequestProfile = async (db: Database, request: Request) => {
  const auth = request.headers.get("Authorization");
  if (auth?.startsWith(`Bearer ${API_TOKEN_PREFIX}`)) {
    return bearerProfile(db, auth.slice("Bearer ".length).trim());
  }
  return getSessionProfile(db, request);
};

export const destroySession = async (db: Database, request: Request) => {
  const raw = readCookie(request.headers.get("Cookie"), SESSION_COOKIE);
  if (raw)
    await db.delete(session).where(eq(session.idHash, await sha256(raw)));
};

export const sessionCookie = (sessionId: string, secure: boolean): string =>
  [
    `${SESSION_COOKIE}=${encodeURIComponent(sessionId)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${SESSION_TTL_DAYS * 24 * 3600}`,
    ...(secure ? ["Secure"] : []),
  ].join("; ");

export const clearedSessionCookie = (): string =>
  `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;

/** Cheap SSR hint: does the request carry a session cookie at all? */
export const hasSessionCookie = (request: Request): boolean =>
  readCookie(request.headers.get("Cookie"), SESSION_COOKIE) !== null;
