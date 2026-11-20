/**
 * Generates scripts/seed.sql: test users for every role and the empty
 * "C-list sights of Amsterdam" map. Run via `pnpm re-seed`, which then
 * imports places with the CLI (see scripts/re-seed.sh).
 */
import { writeFileSync } from "node:fs";
import { amsterdam, categories } from "./seed-data.ts";

const now = Math.floor(Date.now() / 1000);
const daysAgo = (d: number) => now - d * 86_400;
const q = (v: string | number | null): string =>
  v === null
    ? "NULL"
    : typeof v === "number"
      ? String(v)
      : `'${v.replaceAll("'", "''")}'`;
const json = (v: unknown) => q(JSON.stringify(v));

const users = [
  ["u_super", "superadmin@deepcities.local", "Site Owner", "super_admin"],
  ["u_admin", "admin@deepcities.local", "Anna Admin", "user"],
  ["u_mod", "mod@deepcities.local", "Mo Moderator", "user"],
  ["u_contrib", "contributor@deepcities.local", "Cas Contributor", "user"],
  ["u_new", "newbie@deepcities.local", "Nina Newcomer", "user"],
] as const;

const sql: string[] = [
  "DELETE FROM api_token; DELETE FROM rating; DELETE FROM proposal; DELETE FROM photo; DELETE FROM place;",
  "DELETE FROM collection_member; DELETE FROM collection; DELETE FROM session; DELETE FROM login_token; DELETE FROM profile;",
];

sql.push(
  ...users.map(
    ([id, email, name, role], i) =>
      `INSERT INTO profile (id, email, name, role, created_at) VALUES (${q(id)}, ${q(email)}, ${q(name)}, ${q(role)}, ${daysAgo(60 - i)});`,
  ),
);

sql.push(
  `INSERT INTO collection (id, slug, title, tagline, description, city, center_lat, center_lng, zoom, categories, contribution_policy, created_by, created_at) VALUES (${q(amsterdam.id)}, ${q(amsterdam.slug)}, ${q(amsterdam.title)}, ${q(amsterdam.tagline)}, ${q(amsterdam.description)}, ${q(amsterdam.city)}, ${amsterdam.centerLat}, ${amsterdam.centerLng}, ${amsterdam.zoom}, ${json(categories)}, 'open', 'u_super', ${daysAgo(50)});`,
);

sql.push(
  ...(
    [
      ["u_admin", "admin"],
      ["u_mod", "moderator"],
      ["u_contrib", "contributor"],
    ] as const
  ).map(
    ([pid, role]) =>
      `INSERT INTO collection_member (collection_id, profile_id, role, assigned_by, created_at) VALUES (${q(amsterdam.id)}, ${q(pid)}, ${q(role)}, 'u_super', ${daysAgo(49)});`,
  ),
);

writeFileSync(new URL("./seed.sql", import.meta.url), `${sql.join("\n")}\n`);
console.log(`wrote scripts/seed.sql (${sql.length} statements)`);
