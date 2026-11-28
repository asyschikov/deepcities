/**
 * Backups: a nightly SQL dump of the whole database, gzipped, in the
 * `BACKUPS` bucket (`db/<time>.sql.gz`), and a mirror of the media bucket
 * under `media/` (photos are immutable, so only new ones are copied).
 *
 * The dump is plain SQLite SQL (schema, one INSERT per row, then indexes):
 * `pnpm backup pull` downloads it and loads it into a local SQLite file.
 * Tables are read one after another, not in one snapshot; the dump defers
 * foreign keys so a row written mid-backup can't break loading it.
 *
 * Private check-in photos (`checkins/…`) are not mirrored: forgetting a
 * visit must really delete them.
 */
import { getRequestProfile } from "./auth.server";
import { createDb } from "./db";
import { createLog } from "./logger";
import type { ServerEnv } from "./server-env";

const log = createLog("backup");

/** Daily dumps are kept this long; the first of each month is kept for good. */
const KEEP_DAILY_DAYS = 30;
/** Photos copied per run (each is two bucket operations). */
const MEDIA_PER_RUN = 300;
/** Aim for pages of about this much text, whatever the size of the rows. */
const PAGE_TARGET_CHARS = 2_000_000;
const PAGE_MIN_ROWS = 10;
const PAGE_MAX_ROWS = 1000;
/** R2 multipart parts: at least 5 MB and all the same size, except the last. */
const PART_BYTES = 8 * 1024 * 1024;
const PRIVATE_PREFIX = "checkins/";

const ident = (name: string) => `"${name.replaceAll('"', '""')}"`;

const hex = (bytes: Uint8Array) =>
  [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");

/** A value as a SQLite literal. */
export const sqlLiteral = (v: unknown): string => {
  if (v === null || v === undefined) return "NULL";
  if (typeof v === "number") return Number.isFinite(v) ? String(v) : "NULL";
  if (typeof v === "bigint") return String(v);
  if (typeof v === "boolean") return v ? "1" : "0";
  if (v instanceof ArrayBuffer) return `X'${hex(new Uint8Array(v))}'`;
  if (ArrayBuffer.isView(v))
    return `X'${hex(new Uint8Array(v.buffer, v.byteOffset, v.byteLength))}'`;
  if (Array.isArray(v)) return `X'${hex(Uint8Array.from(v as number[]))}'`;
  return `'${String(v).replaceAll("'", "''")}'`;
};

interface SchemaRow {
  type: string;
  name: string;
  sql: string;
}

/** The app's tables and indexes (not SQLite's or Cloudflare's own). */
const schemaOf = async (d1: D1Database): Promise<SchemaRow[]> => {
  const { results } = await d1
    .prepare(
      "select type, name, sql from sqlite_master where sql is not null and name not like 'sqlite\\_%' escape '\\' and name not like '\\_cf\\_%' escape '\\' order by name",
    )
    .all<SchemaRow>();
  return results;
};

/** One table's rows as INSERT statements, a page at a time. */
async function* tableRows(d1: D1Database, table: string) {
  let after = 0;
  let limit = 200;
  for (;;) {
    const { results } = await d1
      .prepare(
        `select rowid as "__rowid", * from ${ident(table)} where rowid > ? order by rowid limit ?`,
      )
      .bind(after, limit)
      .all<Record<string, unknown>>();
    if (results.length === 0) return;
    const text = results
      .map(({ __rowid, ...row }) => {
        const cols = Object.keys(row);
        return `INSERT INTO ${ident(table)} (${cols.map(ident).join(",")}) VALUES (${cols.map((c) => sqlLiteral(row[c])).join(",")});\n`;
      })
      .join("");
    yield { text, rows: results.length };
    if (results.length < limit) return;
    after = Number(results[results.length - 1]?.__rowid ?? after);
    // Keep pages near the target size: fewer rows when they are big.
    limit = Math.min(
      PAGE_MAX_ROWS,
      Math.max(
        PAGE_MIN_ROWS,
        Math.round((limit * PAGE_TARGET_CHARS) / Math.max(text.length, 1)),
      ),
    );
  }
}

export interface DumpStats {
  tables: number;
  rows: number;
}

/**
 * The whole database as SQL text, in chunks. `stats` is filled in as it
 * goes (complete once the generator is done).
 */
export async function* dumpSql(
  d1: D1Database,
  at: Date,
  stats: DumpStats = { tables: 0, rows: 0 },
): AsyncGenerator<string> {
  const schema = await schemaOf(d1);
  const tables = schema.filter((s) => s.type === "table");
  yield `-- Deep Cities database backup, ${at.toISOString()}\nPRAGMA defer_foreign_keys=TRUE;\n`;
  yield tables.map((t) => `${t.sql};\n`).join("");
  for (const t of tables) {
    stats.tables += 1;
    for await (const page of tableRows(d1, t.name)) {
      stats.rows += page.rows;
      yield page.text;
    }
  }
  // Indexes (and anything else) last: loading is faster without them.
  yield schema
    .filter((s) => s.type !== "table")
    .map((s) => `${s.sql};\n`)
    .join("");
}

/** Gzip text chunks into the bucket as they come (never all in memory). */
const putGzipped = async (
  bucket: R2Bucket,
  key: string,
  chunks: AsyncGenerator<string>,
): Promise<number> => {
  const encoder = new TextEncoder();
  const source = new ReadableStream<Uint8Array>({
    async pull(controller) {
      const next = await chunks.next();
      if (next.done) controller.close();
      else controller.enqueue(encoder.encode(next.value));
    },
  });
  const reader = source
    .pipeThrough(
      new CompressionStream("gzip") as ReadableWritablePair<
        Uint8Array,
        Uint8Array
      >,
    )
    .getReader();
  const upload = await bucket.createMultipartUpload(key, {
    httpMetadata: { contentType: "application/gzip" },
  });
  try {
    // Every part but the last must be exactly the same size.
    const parts: R2UploadedPart[] = [];
    let part = new Uint8Array(PART_BYTES);
    let filled = 0;
    let total = 0;
    const flush = async () => {
      parts.push(
        await upload.uploadPart(parts.length + 1, part.subarray(0, filled)),
      );
      total += filled;
      part = new Uint8Array(PART_BYTES);
      filled = 0;
    };
    for (;;) {
      const { done, value } = await reader.read();
      let rest = value ?? new Uint8Array(0);
      while (rest.byteLength > 0) {
        const take = Math.min(rest.byteLength, PART_BYTES - filled);
        part.set(rest.subarray(0, take), filled);
        filled += take;
        rest = rest.subarray(take);
        if (filled === PART_BYTES) await flush();
      }
      if (done) break;
    }
    if (filled > 0 || parts.length === 0) await flush();
    await upload.complete(parts);
    return total;
  } catch (err) {
    await upload.abort();
    throw err;
  }
};

/** Every object under `prefix` (the buckets hold thousands, not millions). */
const listAll = async (
  bucket: R2Bucket,
  prefix?: string,
): Promise<R2Object[]> => {
  const out: R2Object[] = [];
  let cursor: string | undefined;
  do {
    const page = await bucket.list({ prefix, cursor, limit: 1000 });
    out.push(...page.objects);
    cursor = page.truncated ? page.cursor : undefined;
  } while (cursor);
  return out;
};

/** `db/2026-11-28T03-17-05Z.sql.gz` for a time, and back. */
export const dumpKey = (at: Date) =>
  `db/${at.toISOString().slice(0, 19).replaceAll(":", "-")}Z.sql.gz`;

const dumpTime = (key: string): Date | null => {
  const m = /^db\/(\d{4}-\d{2}-\d{2})T(\d{2})-(\d{2})-(\d{2})Z\.sql\.gz$/.exec(
    key,
  );
  return m ? new Date(`${m[1]}T${m[2]}:${m[3]}:${m[4]}Z`) : null;
};

/** Dumps to delete: older than the daily window and not a month's first. */
export const expiredDumps = (keys: string[], now: Date): string[] =>
  keys.filter((key) => {
    const at = dumpTime(key);
    if (!at) return false;
    const ageDays = (now.getTime() - at.getTime()) / 86_400_000;
    return ageDays > KEEP_DAILY_DAYS && at.getUTCDate() !== 1;
  });

/** Copy media the backup bucket doesn't have yet; returns what is left. */
const mirrorMedia = async (env: ServerEnv) => {
  const [live, have] = await Promise.all([
    listAll(env.R2),
    listAll(env.BACKUPS, "media/"),
  ]);
  const got = new Set(have.map((o) => o.key.slice("media/".length)));
  const missing = live.filter(
    (o) => !o.key.startsWith(PRIVATE_PREFIX) && !got.has(o.key),
  );
  const batch = missing.slice(0, MEDIA_PER_RUN);
  for (const o of batch) {
    const object = await env.R2.get(o.key);
    if (object)
      await env.BACKUPS.put(`media/${o.key}`, object.body, {
        httpMetadata: object.httpMetadata,
      });
  }
  return { copied: batch.length, remaining: missing.length - batch.length };
};

/** One backup run: dump the database, prune old dumps, mirror new media. */
export const runBackup = async (env: ServerEnv, now = new Date()) => {
  const key = dumpKey(now);
  const stats: DumpStats = { tables: 0, rows: 0 };
  const bytes = await putGzipped(env.BACKUPS, key, dumpSql(env.DB, now, stats));
  const expired = expiredDumps(
    (await listAll(env.BACKUPS, "db/")).map((o) => o.key),
    now,
  );
  if (expired.length > 0) await env.BACKUPS.delete(expired);
  const media = await mirrorMedia(env);
  const result = { key, bytes, ...stats, pruned: expired.length, media };
  log.info({ msg: "backup.done", ...result });
  return result;
};

/** The nightly run; a failure is logged (and shows in the cron's history). */
export const scheduledBackup = async (env: ServerEnv) => {
  try {
    await runBackup(env);
  } catch (err) {
    log.error({
      msg: "backup.failed",
      error: err instanceof Error ? err.message : String(err),
      stack: err instanceof Error ? err.stack : undefined,
    });
    throw err;
  }
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

/**
 * `/api/backups/…` for super admins (the `pnpm backup` script, with an API
 * token): `GET list?bucket=backups|media&prefix=&cursor=`, `GET
 * object?bucket=…&key=…`, `POST run`. Anyone else gets a 404.
 */
export const handleBackups = async (
  request: Request,
  env: ServerEnv,
): Promise<Response> => {
  const url = new URL(request.url);
  const viewer = await getRequestProfile(createDb(env.DB), request);
  if (viewer?.role !== "super_admin")
    return new Response("Not found", { status: 404 });
  const action = url.pathname.slice("/api/backups/".length);
  const bucket =
    url.searchParams.get("bucket") === "media" ? env.R2 : env.BACKUPS;

  if (action === "run" && request.method === "POST")
    return json(await runBackup(env));

  if (action === "list" && request.method === "GET") {
    const page = await bucket.list({
      prefix: url.searchParams.get("prefix") ?? undefined,
      cursor: url.searchParams.get("cursor") ?? undefined,
      limit: 1000,
    });
    return json({
      objects: page.objects.map((o) => ({
        key: o.key,
        size: o.size,
        uploaded: o.uploaded.toISOString(),
      })),
      cursor: page.truncated ? page.cursor : null,
    });
  }

  if (action === "object" && request.method === "GET") {
    const object = await bucket.get(url.searchParams.get("key") ?? "");
    if (!object) return new Response("Not found", { status: 404 });
    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set("Content-Length", String(object.size));
    headers.set("Cache-Control", "private, no-store");
    return new Response(object.body, { headers });
  }

  return new Response("Not found", { status: 404 });
};
