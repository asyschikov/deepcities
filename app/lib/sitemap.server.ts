/**
 * /sitemap.xml and /robots.txt. The sitemap lists every public page at its
 * canonical URL: places at their own pages, not their map panels.
 */
import { eq, sql } from "drizzle-orm";
import { citySlug, mapPath, placeParam } from "./cities";
import type { Database } from "./db";
import { collection, document, place, route } from "./db/schema";
import { areasPath, PREFIXED_LANGS, THIN_LIST } from "./place-page";
import { absoluteUrl } from "./seo";

interface Entry {
  path: string;
  lastmod?: Date;
}

const escapeXml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;",
      })[c] ?? c,
  );

const day = (d: Date) => d.toISOString().slice(0, 10);

export const sitemapEntries = async (db: Database): Promise<Entry[]> => {
  const [maps, places, routes, documents] = await Promise.all([
    db
      .select({
        id: collection.id,
        slug: collection.slug,
        city: collection.city,
        view: collection.view,
        language: collection.language,
        languages: collection.languages,
      })
      .from(collection),
    db
      .select({
        id: place.id,
        title: place.title,
        collectionId: place.collectionId,
        municipality: place.municipality,
        borough: place.borough,
        neighbourhood: place.neighbourhood,
        subNeighbourhood: place.subNeighbourhood,
        prefixedTitles: sql<
          string | null
        >`json_extract(${place.translations}, ${`$.${PREFIXED_LANGS[0]}.title`})`,
        updatedAt: place.updatedAt,
      })
      .from(place)
      .where(eq(place.status, "published")),
    db
      .select({
        id: route.id,
        collectionId: route.collectionId,
        updatedAt: route.updatedAt,
      })
      .from(route)
      .where(eq(route.status, "published")),
    db
      .select({
        id: document.id,
        collectionId: document.collectionId,
        updatedAt: document.updatedAt,
      })
      .from(document)
      .where(eq(document.status, "published")),
  ]);
  const mapById = new Map(maps.map((m) => [m.id, m]));
  const owned = (
    rows: { id: string; collectionId: string; updatedAt: Date }[],
    kind: string,
  ) =>
    rows.flatMap((r) => {
      const m = mapById.get(r.collectionId);
      return m
        ? [{ path: `${mapPath(m)}/${kind}/${r.id}`, lastmod: r.updatedAt }]
        : [];
    });

  // Places and area lists: in the map's language, and under each language
  // prefix the home map offers (a place only where it has a translation).
  const placeEntries = places.flatMap((p) => {
    const home = mapById.get(p.collectionId);
    if (!home) return [];
    const path = `/${citySlug(home.city)}/p/${placeParam(p)}`;
    const prefixed = PREFIXED_LANGS.filter(
      (l) =>
        l !== home.language && home.languages.includes(l) && p.prefixedTitles,
    );
    return [
      { path, lastmod: p.updatedAt },
      ...prefixed.map((l) => ({ path: `/${l}${path}`, lastmod: p.updatedAt })),
    ];
  });
  // Each area list once per language, if it isn't too thin to index.
  const areaCounts = new Map<string, number>();
  places.forEach((p) => {
    const home = mapById.get(p.collectionId);
    if (!home) return;
    const level1 =
      p.borough ?? (p.municipality !== home.city ? p.municipality : null);
    const levels = [level1, p.neighbourhood, p.subNeighbourhood];
    const firstGap = levels.indexOf(null);
    const names = (firstGap < 0 ? levels : levels.slice(0, firstGap)).filter(
      (x): x is string => x !== null,
    );
    const langs = PREFIXED_LANGS.filter(
      (l) => l !== home.language && home.languages.includes(l),
    );
    const paths = names.map((_, i) =>
      areasPath(home.city, ...names.slice(0, i + 1)),
    );
    [...paths, ...langs.flatMap((l) => paths.map((x) => `/${l}${x}`))].forEach(
      (x) => areaCounts.set(x, (areaCounts.get(x) ?? 0) + 1),
    );
    [
      areasPath(home.city),
      ...langs.map((l) => `/${l}${areasPath(home.city)}`),
    ].forEach((x) => areaCounts.set(x, Infinity));
  });
  const areaPaths = [...areaCounts.entries()]
    .filter(([, n]) => n >= THIN_LIST)
    .map(([x]) => x);
  const cities = [...new Set(maps.map((m) => citySlug(m.city)))];

  return [
    ...cities.map((c) => ({ path: `/${c}` })),
    ...maps.map((m) => ({ path: mapPath(m) })),
    ...areaPaths.map((path) => ({ path })),
    ...owned(routes, "r"),
    ...owned(documents, "d"),
    ...placeEntries,
  ];
};

export const sitemapXml = (entries: Entry[]): string =>
  [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(
      (e) =>
        `<url><loc>${escapeXml(absoluteUrl(e.path))}</loc>${
          e.lastmod ? `<lastmod>${day(e.lastmod)}</lastmod>` : ""
        }</url>`,
    ),
    "</urlset>",
  ].join("\n");

/** Private and form pages stay out of crawls; everything else is open. */
export const robotsTxt = (): string =>
  [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    "Disallow: /auth",
    "Disallow: /admin",
    "Disallow: /me",
    "Disallow: /media/checkins/",
    "",
    `Sitemap: ${absoluteUrl("/sitemap.xml")}`,
    "",
  ].join("\n");
