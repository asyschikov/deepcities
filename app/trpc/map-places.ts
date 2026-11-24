/**
 * Which places a map shows, as SQL (the rules are in app/lib/views.ts).
 * Every query that lists, counts or checks "the places of map M" goes
 * through these helpers rather than `eq(place.collectionId, …)`.
 */
import { TRPCError } from "@trpc/server";
import { and, eq, inArray, ne, type SQL, sql } from "drizzle-orm";
import type { Database } from "~/lib/db";
import {
  collection,
  collectionPlace,
  place,
  placeOverride,
} from "~/lib/db/schema";
import { displayedFields } from "~/lib/overrides";
import type { CategoryDef, FieldDef, OverrideDraft } from "~/lib/validation";
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
  const published = [
    eq(place.collectionId, homeIdOf(m)),
    eq(place.status, "published"),
  ];
  // A list view: exactly the places picked for it, at any detail.
  if (view?.list)
    return (
      and(
        ...published,
        sql`${place.id} in (select ${collectionPlace.placeId} from ${collectionPlace} where ${collectionPlace.collectionId} = ${m.id})`,
      ) ?? sql`1`
    );
  const conditions: (SQL | undefined)[] = [
    ...published,
    ...VIEW_WHERE_KEYS.map((k) => {
      const values = view?.where?.[k];
      return values ? inArray(place[k], values) : undefined;
    }),
    ...(view?.detail === "full"
      ? [ne(place.detail, "theme"), sql`not ${isClusterParentSql}`]
      : [eq(place.detail, "city")]),
  ];
  return and(...conditions) ?? sql`1`;
};

/** Ids of the list views that include each of `placeIds`. */
export const listsOf = async (
  db: Database,
  placeIds: string[],
): Promise<Map<string, string[]>> => {
  if (placeIds.length === 0) return new Map();
  const rows = await db
    .select({
      placeId: collectionPlace.placeId,
      collectionId: collectionPlace.collectionId,
    })
    .from(collectionPlace)
    .where(inArray(collectionPlace.placeId, placeIds));
  const out = new Map<string, string[]>();
  for (const r of rows)
    out.set(r.placeId, [...(out.get(r.placeId) ?? []), r.collectionId]);
  return out;
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

/**
 * A view map's overrides of its places, by place id (app/lib/overrides.ts).
 * Home maps have none.
 */
export const overridesOf = async (
  db: Database,
  m: ViewMap,
  placeIds?: string[],
): Promise<Map<string, OverrideDraft>> => {
  if (!m.view || placeIds?.length === 0) return new Map();
  const rows = await db
    .select({
      placeId: placeOverride.placeId,
      attributes: placeOverride.attributes,
      category: placeOverride.category,
    })
    .from(placeOverride)
    .where(
      and(
        eq(placeOverride.collectionId, m.id),
        placeIds ? inArray(placeOverride.placeId, placeIds) : undefined,
      ),
    );
  return new Map(
    rows.map((r) => [
      r.placeId,
      { attributes: r.attributes, category: r.category },
    ]),
  );
};

/**
 * What a map's places are read with: its source's categories (a view's own
 * are ignored), and the source's fields followed by the view's own.
 */
export const shapeOf = async (
  db: Database,
  c: {
    id: string;
    view: ViewMap["view"];
    categories: CategoryDef[];
    fields: FieldDef[];
  },
): Promise<{
  categories: CategoryDef[];
  fields: FieldDef[];
  sourceFields: FieldDef[];
  ownFields: FieldDef[];
}> => {
  if (!c.view)
    return {
      categories: c.categories,
      fields: c.fields,
      sourceFields: c.fields,
      ownFields: c.fields,
    };
  const source = await db.query.collection.findFirst({
    where: eq(collection.id, c.view.source),
    columns: { categories: true, fields: true },
  });
  const sourceFields = source?.fields ?? [];
  return {
    categories: source?.categories ?? c.categories,
    fields: displayedFields(sourceFields, c.fields),
    sourceFields,
    ownFields: c.fields,
  };
};
