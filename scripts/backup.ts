#!/usr/bin/env node
/**
 * backup — pull the site's backups to this machine (super admins).
 *
 *   pnpm backup pull [--all] [--no-media] [--private]
 *       Download the newest database dump (--all: every dump not here yet),
 *       load it into <dir>/deepcities.sqlite, and fetch photos not here yet
 *       (--private: also visitors' private check-in photos).
 *   pnpm backup run     Make a backup on the server now.
 *   pnpm backup list    The dumps the server holds.
 *
 * Files go to `backups/` at the root of the main checkout (untracked,
 * shared by every worktree), or to $DC_BACKUP_DIR. Uses the `dc` login
 * (~/.config/deep-cities/config.json, or DC_TOKEN / DC_URL).
 *
 * The server side is app/lib/backup.server.ts: a nightly dump into the
 * `deep-cities-backups` bucket. Query the local copy with
 * `sqlite3 backups/deepcities.sqlite`.
 */
import { execFileSync } from "node:child_process";
import {
  createWriteStream,
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  rmSync,
  statSync,
} from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { DatabaseSync } from "node:sqlite";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import type { ReadableStream as WebReadableStream } from "node:stream/web";
import { gunzipSync } from "node:zlib";

const DEFAULT_URL = "https://deepcities.org";
const CONFIG_PATH = join(homedir(), ".config", "deep-cities", "config.json");
const BOOLEAN_FLAGS = ["all", "no-media", "private"] as const;
const DOWNLOADS_AT_ONCE = 6;

interface Listed {
  key: string;
  size: number;
  uploaded: string;
}

const loadConfig = () => {
  const file: { url?: string; token?: string } = existsSync(CONFIG_PATH)
    ? JSON.parse(readFileSync(CONFIG_PATH, "utf8"))
    : {};
  return {
    url: (process.env.DC_URL ?? file.url ?? DEFAULT_URL).replace(/\/$/, ""),
    token: process.env.DC_TOKEN ?? file.token ?? null,
  };
};

const config = loadConfig();

/** `backups/` next to the main checkout's .git, whichever worktree runs this. */
const backupDir = (): string => {
  if (process.env.DC_BACKUP_DIR) return resolve(process.env.DC_BACKUP_DIR);
  const common = execFileSync(
    "git",
    ["rev-parse", "--path-format=absolute", "--git-common-dir"],
    { encoding: "utf8" },
  ).trim();
  return join(dirname(common), "backups");
};

const api = async (path: string, init: RequestInit = {}): Promise<Response> => {
  if (!config.token)
    throw new Error("Not signed in: run `pnpm dc login <token>` first");
  const res = await fetch(`${config.url}/api/backups/${path}`, {
    ...init,
    headers: { Authorization: `Bearer ${config.token}` },
  });
  if (res.status === 404)
    throw new Error(
      `${config.url} said "not found" for ${path}: the token must be a super admin's`,
    );
  if (!res.ok) throw new Error(`HTTP ${res.status} from ${path}`);
  return res;
};

const listBucket = async (
  bucket: "backups" | "media",
  prefix = "",
): Promise<Listed[]> => {
  const page = async (cursor: string | null): Promise<Listed[]> => {
    const query = new URLSearchParams({ bucket, prefix });
    if (cursor) query.set("cursor", cursor);
    const body = (await (await api(`list?${query}`)).json()) as {
      objects: Listed[];
      cursor: string | null;
    };
    return body.cursor
      ? [...body.objects, ...(await page(body.cursor))]
      : body.objects;
  };
  return page(null);
};

/** Download one object to `file` (via a .part file, so no half files stay). */
const download = async (
  bucket: "backups" | "media",
  key: string,
  file: string,
) => {
  const res = await api(`object?${new URLSearchParams({ bucket, key })}`);
  if (!res.body) throw new Error(`Empty response for ${key}`);
  mkdirSync(dirname(file), { recursive: true });
  const part = `${file}.part`;
  await pipeline(
    Readable.fromWeb(res.body as WebReadableStream),
    createWriteStream(part),
  );
  renameSync(part, file);
};

const isHere = (file: string, size: number) =>
  existsSync(file) && statSync(file).size === size;

/** Run `task` over `items`, a few at a time. */
const inBatches = async <T>(
  items: T[],
  size: number,
  task: (item: T) => Promise<void>,
): Promise<void> => {
  if (items.length === 0) return;
  await Promise.all(items.slice(0, size).map(task));
  await inBatches(items.slice(size), size, task);
};

/** Load a dump into a fresh SQLite file, replacing the previous one. */
const loadSqlite = (dumpFile: string, target: string) => {
  const tmp = `${target}.tmp`;
  rmSync(tmp, { force: true });
  const db = new DatabaseSync(tmp, { enableForeignKeyConstraints: false });
  const sql = gunzipSync(readFileSync(dumpFile)).toString("utf8");
  db.exec(`BEGIN;\n${sql}\nCOMMIT;`);
  const [row] = db
    .prepare(
      "select count(*) as n from sqlite_master where type = 'table' and name not like 'sqlite_%'",
    )
    .all();
  db.close();
  renameSync(tmp, target);
  return Number(row?.n ?? 0);
};

const pull = async (flags: Set<string>) => {
  const dir = backupDir();
  const dumps = (await listBucket("backups", "db/")).sort((a, b) =>
    a.key.localeCompare(b.key),
  );
  const latest = dumps[dumps.length - 1];
  if (!latest)
    throw new Error("The server has no backups yet: run `pnpm backup run`");
  const wanted = (flags.has("all") ? dumps : [latest]).filter(
    (d) => !isHere(join(dir, d.key), d.size),
  );
  await inBatches(wanted, 1, (d) =>
    download("backups", d.key, join(dir, d.key)),
  );
  const sqlite = join(dir, "deepcities.sqlite");
  const tables = loadSqlite(join(dir, latest.key), sqlite);

  // Photos never change once stored, so only new ones are fetched.
  const media = flags.has("no-media")
    ? []
    : (await listBucket("media")).filter(
        (o) => flags.has("private") || !o.key.startsWith("checkins/"),
      );
  const missing = media.filter(
    (o) => !isHere(join(dir, "media", o.key), o.size),
  );
  await inBatches(missing, DOWNLOADS_AT_ONCE, (o) =>
    download("media", o.key, join(dir, "media", o.key)),
  );
  return {
    dir,
    latest: latest.key,
    dumpsDownloaded: wanted.map((d) => d.key),
    sqlite,
    tables,
    media: flags.has("no-media")
      ? "skipped"
      : { total: media.length, downloaded: missing.length },
  };
};

const commands: Record<string, (flags: Set<string>) => Promise<unknown>> = {
  pull,
  run: async () => (await api("run", { method: "POST" })).json(),
  list: async () => listBucket("backups", "db/"),
};

const main = async () => {
  const [name = "help", ...rest] = process.argv.slice(2);
  const flags = new Set(
    rest.filter((a) => a.startsWith("--")).map((a) => a.slice(2)),
  );
  const unknown = [
    ...rest.filter((a) => !a.startsWith("--")),
    ...[...flags].filter((f) => !BOOLEAN_FLAGS.some((known) => known === f)),
  ];
  const command = commands[name];
  if (!command || unknown.length > 0) {
    process.stderr.write(
      "Usage: pnpm backup pull [--all] [--no-media] [--private] | run | list\n",
    );
    process.exitCode = name === "help" ? 0 : 1;
    return;
  }
  process.stdout.write(`${JSON.stringify(await command(flags), null, 2)}\n`);
};

main().catch((err: unknown) => {
  process.stderr.write(
    `${JSON.stringify({ error: err instanceof Error ? err.message : String(err) })}\n`,
  );
  process.exitCode = 1;
});
