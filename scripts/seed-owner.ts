/**
 * One-off seed for a fresh live database: the owner (super admin) and the empty
 * Amsterdam map. Idempotent (INSERT OR IGNORE), no deletes. Places are then
 * imported with the CLI (`pnpm dc import`).
 *
 *   node scripts/seed-owner.ts you@example.com out.sql
 *   pnpm wrangler d1 execute DB --remote --file out.sql
 */
import { writeFileSync } from "node:fs";
import { amsterdam, categories } from "./seed-data.ts";

const [ownerEmail, outPath] = process.argv.slice(2);
if (!ownerEmail || !outPath)
  throw new Error("usage: seed-owner.ts <ownerEmail> <out.sql>");

const now = Math.floor(Date.now() / 1000);
const q = (v: string | null): string =>
  v === null ? "NULL" : `'${v.replaceAll("'", "''")}'`;
const json = (v: unknown) => q(JSON.stringify(v));
const owner = "u_owner";

const sql = [
  `INSERT OR IGNORE INTO profile (id, email, name, role, created_at) VALUES (${q(owner)}, ${q(ownerEmail.toLowerCase())}, 'Site Owner', 'super_admin', ${now});`,
  `INSERT OR IGNORE INTO collection (id, slug, title, tagline, description, city, center_lat, center_lng, zoom, categories, contribution_policy, created_by, created_at) VALUES (${q(amsterdam.id)}, ${q(amsterdam.slug)}, ${q(amsterdam.title)}, ${q(amsterdam.tagline)}, ${q(amsterdam.description)}, ${q(amsterdam.city)}, ${amsterdam.centerLat}, ${amsterdam.centerLng}, ${amsterdam.zoom}, ${json(categories)}, 'open', ${q(owner)}, ${now});`,
  `INSERT OR IGNORE INTO collection_member (collection_id, profile_id, role, assigned_by, created_at) VALUES (${q(amsterdam.id)}, ${q(owner)}, 'admin', ${q(owner)}, ${now});`,
];
writeFileSync(outPath, `${sql.join("\n")}\n`);
console.log(`wrote ${outPath} (${sql.length} statements)`);
