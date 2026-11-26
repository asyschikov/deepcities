/**
 * /sitemap.xml and /robots.txt. The sitemap lists every public page once, at
 * its canonical URL (the same rule the place page's canonical link uses).
 */
import { eq, isNotNull } from "drizzle-orm";
import { citySlug, mapPath } from "./cities";
import type { Database } from "./db";
import {
  collection,
  collectionPlace,
  document,
  place,
  route,
} from "./db/schema";
import { absoluteUrl } from "./seo";
import { linkOrder, mapToLink } from "./views";

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
  const [maps, places, lists, parents, routes, documents] = await Promise.all([
    db
      .select({
        id: collection.id,
        slug: collection.slug,
        city: collection.city,
        view: collection.view,
      })
      .from(collection),
    db
      .select({
        id: place.id,
        collectionId: place.collectionId,
        detail: place.detail,
        borough: place.borough,
        neighbourhood: place.neighbourhood,
        subNeighbourhood: place.subNeighbourhood,
        category: place.category,
        updatedAt: place.updatedAt,
      })
      .from(place)
      .where(eq(place.status, "published")),
    db
      .select({
        placeId: collectionPlace.placeId,
        collectionId: collectionPlace.collectionId,
      })
      .from(collectionPlace),
    db
      .selectDistinct({ id: place.parentId })
      .from(place)
      .where(isNotNull(place.parentId)),
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
  const listsOf = new Map<string, string[]>();
  lists.forEach((r) => {
    listsOf.set(r.placeId, [...(listsOf.get(r.placeId) ?? []), r.collectionId]);
  });
  const parentIds = new Set(parents.map((p) => p.id));
  const pathIn = (collectionId: string, kind: string, id: string) => {
    const m = mapById.get(collectionId);
    return m ? `${mapPath(m)}/${kind}/${id}` : null;
  };

  const cities = [...new Set(maps.map((m) => citySlug(m.city)))];
  const placeEntries = places.flatMap((p) => {
    const m = mapToLink(
      { ...p, lists: listsOf.get(p.id) },
      parentIds.has(p.id),
      linkOrder("parent", null, maps, p.collectionId),
      maps,
    );
    return m ? [{ path: `${mapPath(m)}/p/${p.id}`, lastmod: p.updatedAt }] : [];
  });
  const owned = (
    rows: { id: string; collectionId: string; updatedAt: Date }[],
    kind: string,
  ) =>
    rows.flatMap((r) => {
      const path = pathIn(r.collectionId, kind, r.id);
      return path ? [{ path, lastmod: r.updatedAt }] : [];
    });

  return [
    ...cities.map((c) => ({ path: `/${c}` })),
    ...maps.map((m) => ({ path: mapPath(m) })),
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
