/**
 * Which places a map shows, as SQL (the rules are in app/lib/views.ts).
 * Every query that lists, counts or checks "the places of map M" goes
 * through these helpers rather than `eq(place.collectionId, …)`.
 */
import { TRPCError } from "@trpc/server";
import { and, eq, inArray, type SQL, sql } from "drizzle-orm";
import type { Database } from "~/lib/db";
import { collection, place } from "~/lib/db/schema";
import { homeIdOf, VIEW_WHERE_KEYS, type ViewMap } from "~/lib/views";

export { homeIdOf };

/** The map's id and view (enough to resolve its places). */
export const loadViewMap = async (
  db: Database,
  collectionId: string,
): Promise<ViewMap> => {
  const found = await db.query.collection.findFirst({
    where: eq(collection.id, collectionId),
    columns: { id: true, view: true },
  });
  if (!found)
    throw new TRPCError({ code: "NOT_FOUND", message: "Map not found" });
  return found;
};

/** The place has published children (it is a cluster). */
export const isClusterParentSql = sql`exists (select 1 from ${place} as child_place where child_place.parent_id = ${place.id} and child_place.status = 'published')`;

/** Published places map `m` shows (a condition on `place`). */
export const shownWhere = (m: ViewMap): SQL => {
  const view = m.view;
  const conditions: (SQL | undefined)[] = [
    eq(place.collectionId, homeIdOf(m)),
    eq(place.status, "published"),
    ...VIEW_WHERE_KEYS.map((k) => {
      const values = view?.where?.[k];
      return values ? inArray(place[k], values) : undefined;
    }),
    view?.detail === "full"
      ? sql`not ${isClusterParentSql}`
      : eq(place.detail, "city"),
  ];
  return and(...conditions) ?? sql`1`;
};

/**
 * Every place in map `m`'s pool, at any detail and status: its home map's
 * (a view's source's). What routes and documents on the map may refer to.
 */
export const poolWhere = (m: ViewMap): SQL =>
  eq(place.collectionId, homeIdOf(m));

/** Ids of the places map `m` shows (a subquery). */
export const shownPlaceIds = (db: Database, m: ViewMap) =>
  db.select({ id: place.id }).from(place).where(shownWhere(m));

/**
 * The maps whose photos a place, route or document of map `m` may use:
 * its home and every view of that home (they share one pool of places).
 */
export const photoMapIds = async (
  db: Database,
  m: ViewMap,
): Promise<string[]> => {
  const home = homeIdOf(m);
  const views = await db
    .select({ id: collection.id })
    .from(collection)
    .where(sql`json_extract(${collection.view}, '$.source') = ${home}`);
  return [...new Set([home, m.id, ...views.map((v) => v.id)])];
};
