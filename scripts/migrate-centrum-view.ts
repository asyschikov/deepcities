/**
 * One-off: make Deep Centrum (`centrum`) a view of Deep Amsterdam (`sights`).
 *
 *   node scripts/migrate-centrum-view.ts [--remote] [--dry-run]
 *        [--view centrum] [--source sights] [--borough Centrum]
 *
 * 1. Moves every place of the view map, and every place proposal, to the
 *    source map, at detail "district" (pending and past drafts too, so an
 *    approval can't lift a place back to the citywide map). Check-ins, gone
 *    reports and the photos those places and drafts use move with them.
 * 2. Sets the view map's `view` to {source, where: {borough}, detail: "full"}.
 *
 * Routes, documents and members stay on the view map (routes may stop at
 * any place of the pool; documents may attach them).
 *
 * Idempotent: a second run finds nothing to move and the view already set.
 * Runs against the local D1 unless --remote. --dry-run only reads and
 * prints what it would do. Needs migration 0018 (`collection.view`).
 */
import { execFileSync } from "node:child_process";

const args = process.argv.slice(2);
const flag = (name: string) => args.includes(`--${name}`);
const option = (name: string, fallback: string) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? (args[i + 1] ?? fallback) : fallback;
};
const remote = flag("remote");
const dryRun = flag("dry-run");
const viewSlug = option("view", "centrum");
const sourceSlug = option("source", "sights");
const borough = option("borough", "Centrum");

const q = (v: string) => `'${v.replaceAll("'", "''")}'`;

type Row = Record<string, unknown>;

/** Run SQL on D1; the rows of each statement. */
const d1 = (sql: string): Row[][] => {
  const out = execFileSync(
    "pnpm",
    [
      "exec",
      "wrangler",
      "d1",
      "execute",
      "DB",
      remote ? "--remote" : "--local",
      "--json",
      "--yes",
      "--command",
      sql,
    ],
    { encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] },
  );
  const parsed = JSON.parse(out.slice(out.indexOf("["))) as {
    results: Row[];
  }[];
  return parsed.map((r) => r.results);
};
const rows = (sql: string): Row[] => d1(sql)[0] ?? [];
const num = (sql: string): number => Number(rows(sql)[0]?.n ?? 0);

const fail = (message: string): never => {
  console.error(JSON.stringify({ error: message }, null, 2));
  process.exit(1);
};

const maps = rows(
  `SELECT id, slug, categories, view FROM collection WHERE slug IN (${q(viewSlug)}, ${q(sourceSlug)})`,
);
const view = maps.find((m) => m.slug === viewSlug);
const source = maps.find((m) => m.slug === sourceSlug);
if (!view) fail(`No map "${viewSlug}"`);
if (!source) fail(`No map "${sourceSlug}"`);
const V = String(view?.id);
const S = String(source?.id);
const target = {
  source: S,
  where: { borough: [borough] },
  detail: "full",
};
const targetJson = JSON.stringify(target);

const current = view?.view ? (JSON.parse(String(view.view)) as unknown) : null;
if (current && JSON.stringify(current) !== targetJson)
  fail(
    `${viewSlug} is already a different view: ${JSON.stringify(current)}. Clear it first (dc map-view ${viewSlug} none).`,
  );
if (source?.view) fail(`${sourceSlug} is itself a view; it can't be a source`);

// Places must fit the source's categories (fields: Deep Centrum was created
// from sights, so they are the same).
const sourceCategories = new Set(
  (JSON.parse(String(source?.categories)) as { key: string }[]).map(
    (c) => c.key,
  ),
);
const usedCategories = rows(
  `SELECT DISTINCT category FROM place WHERE collection_id = ${q(V)}`,
).map((r) => String(r.category));
const badCategories = usedCategories.filter((c) => !sourceCategories.has(c));
if (badCategories.length)
  fail(
    `Categories used on ${viewSlug} but missing on ${sourceSlug}: ${badCategories.join(", ")}`,
  );

const before = {
  places: num(`SELECT count(*) AS n FROM place WHERE collection_id = ${q(V)}`),
  publishedPlaces: num(
    `SELECT count(*) AS n FROM place WHERE collection_id = ${q(V)} AND status = 'published'`,
  ),
  placeProposals: num(
    `SELECT count(*) AS n FROM proposal WHERE collection_id = ${q(V)} AND subject = 'place'`,
  ),
  pendingPlaceProposals: num(
    `SELECT count(*) AS n FROM proposal WHERE collection_id = ${q(V)} AND subject = 'place' AND status = 'pending'`,
  ),
  checkins: num(
    `SELECT count(*) AS n FROM checkin WHERE collection_id = ${q(V)}`,
  ),
  goneReports: num(
    `SELECT count(*) AS n FROM gone_report WHERE collection_id = ${q(V)}`,
  ),
  photosOfPlaces: num(
    `SELECT count(DISTINCT j.value) AS n FROM place p, json_each(p.photo_ids) j JOIN photo ph ON ph.id = j.value WHERE p.collection_id = ${q(V)} AND ph.collection_id = ${q(V)}`,
  ),
  routesStaying: num(
    `SELECT count(*) AS n FROM route WHERE collection_id = ${q(V)}`,
  ),
  documentsStaying: num(
    `SELECT count(*) AS n FROM document WHERE collection_id = ${q(V)}`,
  ),
  viewSet: current !== null,
};

// Same title on both maps: after the move both are in one pool. Reported,
// not merged: a person decides (archive one, or keep both).
const sameTitle = rows(
  `SELECT v.id AS viewPlace, s.id AS sourcePlace, v.title AS title, s.detail AS sourceDetail
   FROM place v JOIN place s ON lower(s.title) = lower(v.title)
   WHERE v.collection_id = ${q(V)} AND s.collection_id = ${q(S)}
     AND v.status = 'published' AND s.status = 'published'
   ORDER BY v.title`,
);
const members = rows(
  `SELECT p.email AS email, m.role AS role FROM collection_member m JOIN profile p ON p.id = m.profile_id WHERE m.collection_id = ${q(V)}`,
);

const statements = [
  // 1. Places (and their proposals) live on the source, at district detail.
  `UPDATE place SET collection_id = ${q(S)}, detail = 'district' WHERE collection_id = ${q(V)}`,
  `UPDATE proposal SET collection_id = ${q(S)}, draft = CASE WHEN draft IS NULL THEN NULL ELSE json_set(draft, '$.detail', 'district') END WHERE collection_id = ${q(V)} AND subject = 'place'`,
  `UPDATE checkin SET collection_id = ${q(S)} WHERE collection_id = ${q(V)}`,
  `UPDATE gone_report SET collection_id = ${q(S)} WHERE collection_id = ${q(V)}`,
  // Photos the moved places and drafts use (documents of the view may use
  // them too: a view's documents accept its source's photos).
  `UPDATE photo SET collection_id = ${q(S)} WHERE collection_id = ${q(V)} AND id IN (
     SELECT j.value FROM place p, json_each(p.photo_ids) j WHERE p.collection_id = ${q(S)}
     UNION SELECT j.value FROM proposal pr, json_each(pr.draft, '$.photoIds') j WHERE pr.collection_id = ${q(S)} AND pr.draft IS NOT NULL)`,
  // 2. The map becomes a view.
  `UPDATE collection SET view = json(${q(targetJson)}) WHERE id = ${q(V)}`,
];

const plan = {
  target: remote ? "remote" : "local",
  dryRun,
  view: { slug: viewSlug, id: V },
  source: { slug: sourceSlug, id: S },
  setView: target,
  before,
  sameTitleOnBothMaps: sameTitle,
  viewMembers: {
    note: "Proposals now go to the source's review queue; these people keep their role on the view only",
    members,
  },
};

if (dryRun) {
  console.log(JSON.stringify({ ...plan, wouldRun: statements }, null, 2));
  process.exit(0);
}

d1(statements.join(";\n"));

const after = {
  placesLeftOnView: num(
    `SELECT count(*) AS n FROM place WHERE collection_id = ${q(V)}`,
  ),
  placeProposalsLeftOnView: num(
    `SELECT count(*) AS n FROM proposal WHERE collection_id = ${q(V)} AND subject = 'place'`,
  ),
  districtPlacesOnSource: num(
    `SELECT count(*) AS n FROM place WHERE collection_id = ${q(S)} AND detail = 'district' AND status = 'published'`,
  ),
  view: rows(`SELECT view FROM collection WHERE id = ${q(V)}`)[0]?.view,
};
console.log(JSON.stringify({ ...plan, done: true, after }, null, 2));
