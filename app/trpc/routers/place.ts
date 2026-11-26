import { TRPCError } from "@trpc/server";
import {
  and,
  count,
  desc,
  eq,
  inArray,
  notInArray,
  or,
  sql,
} from "drizzle-orm";
import { z } from "zod/v4";
import { citySlug, mapPath, placeParam } from "~/lib/cities";
import { type ContentLang, VERDICTS, type Verdict } from "~/lib/constants";
import {
  listTranslations,
  localize,
  localizeCollection,
  localizePlace,
  mapLanguages,
} from "~/lib/content-lang";
import type { Database } from "~/lib/db";
import {
  collection,
  document,
  documentAttachment,
  photo,
  place,
  proposal,
  route,
  verdict,
} from "~/lib/db/schema";
import { filterFields } from "~/lib/field-filters";
import { withOverride } from "~/lib/overrides";
import { langPrefix } from "~/lib/place-page";
import { type Attributes, contentLangSchema, idSchema } from "~/lib/validation";
import {
  linkOrder,
  mapShows,
  mapToLink,
  type ViewedPlace,
  type ViewMap,
} from "~/lib/views";
import { getAccess } from "../access";
import { publicProcedure, router } from "../init";
import {
  isClusterParentSql,
  listsOf,
  loadViewMap,
  overridesOf,
  poolWhere,
  shapeOf,
  shownWhere,
} from "../map-places";
import { areaPage } from "../place-areas";
import { goneCounts } from "./gone";

/** How many visitors gave each verdict. */
export type VerdictCounts = Record<Verdict, number>;
const noVerdicts = (): VerdictCounts =>
  Object.fromEntries(VERDICTS.map((v) => [v, 0])) as VerdictCounts;

const verdictCounts = async (
  db: Database,
  where: { map: ViewMap } | { placeId: string },
) => {
  const rows = await db
    .select({ placeId: verdict.placeId, verdict: verdict.verdict, n: count() })
    .from(verdict)
    .innerJoin(place, eq(place.id, verdict.placeId))
    .where(
      "placeId" in where
        ? eq(verdict.placeId, where.placeId)
        : shownWhere(where.map),
    )
    .groupBy(verdict.placeId, verdict.verdict);
  const byPlace = new Map<string, VerdictCounts>();
  for (const r of rows) {
    const counts = byPlace.get(r.placeId) ?? noVerdicts();
    counts[r.verdict] = r.n;
    byPlace.set(r.placeId, counts);
  }
  return byPlace;
};

/**
 * Which places to list: what the map shows (default), or with `pool` every
 * published place of its home map at any detail (for scripts that match
 * titles before importing, and for picking a cluster parent).
 */
const listInput = z.object({
  collectionId: idSchema,
  pool: z.boolean().optional(),
  /**
   * Just what the map page needs (it ships the list with the page): texts
   * in the base language plus `lang`, and only the fields it filters on.
   * Scripts leave it out and get everything.
   */
  forMap: z.object({ lang: contentLangSchema.optional() }).optional(),
});

const listWhere = (m: ViewMap, pool: boolean | undefined) =>
  pool ? and(poolWhere(m), eq(place.status, "published")) : shownWhere(m);

/** Keys of the fields map `collectionId` shows as filter chips. */
const mapFilterKeys = async (db: Database, collectionId: string) => {
  const c = await db.query.collection.findFirst({
    where: eq(collection.id, collectionId),
    columns: { id: true, view: true, categories: true, fields: true },
  });
  if (!c) return new Set<string>();
  const { fields } = await shapeOf(db, c);
  return new Set(filterFields(fields).map((f) => f.key));
};

/** Columns a place link needs to decide which map shows the place. */
const linkColumns = {
  id: place.id,
  title: place.title,
  summary: place.summary,
  translations: place.translations,
  collectionId: place.collectionId,
  detail: place.detail,
  borough: place.borough,
  neighbourhood: place.neighbourhood,
  subNeighbourhood: place.subNeighbourhood,
  category: place.category,
  cluster: sql<number>`${isClusterParentSql}`,
};

/**
 * The parent and children of a place, each with the map to link it in:
 * the parent in the current map if it shows it, else its home; children in
 * a full-detail view that shows them, else their home map. `theme` places
 * link only into a list view that includes them.
 */
const familyOf = async (
  db: Database,
  found: { id: string; parentId: string | null; collectionId: string },
  currentSlug: string | undefined,
) => {
  const homeId = found.collectionId;
  const [parentRows, childRows, maps] = await Promise.all([
    found.parentId
      ? db
          .select(linkColumns)
          .from(place)
          .where(
            and(eq(place.id, found.parentId), eq(place.status, "published")),
          )
      : [],
    db
      .select(linkColumns)
      .from(place)
      .where(and(eq(place.parentId, found.id), eq(place.status, "published")))
      .orderBy(place.title),
    db
      .select({
        id: collection.id,
        slug: collection.slug,
        city: collection.city,
        view: collection.view,
      })
      .from(collection)
      .where(
        or(
          eq(collection.id, homeId),
          sql`json_extract(${collection.view}, '$.source') = ${homeId}`,
        ),
      ),
  ]);
  const current = maps.find((m) => m.slug === currentSlug) ?? null;
  const lists = await listsOf(db, [
    ...parentRows.map((p) => p.id),
    ...childRows.map((p) => p.id),
  ]);
  const link = (
    p: ViewedPlace & { id: string; cluster: number },
    kind: "parent" | "child",
  ) => {
    const m = mapToLink(
      { ...p, lists: lists.get(p.id) },
      Boolean(p.cluster),
      linkOrder(kind, current, maps, homeId),
      maps,
    );
    return m ? { city: citySlug(m.city), slug: m.slug } : null;
  };
  const brief = (p: (typeof childRows)[number], kind: "parent" | "child") => ({
    id: p.id,
    title: p.title,
    summary: p.summary,
    translations: listTranslations(p.translations),
    link: link(p, kind),
  });
  const parentRow = parentRows[0];
  return {
    parent: parentRow ? brief(parentRow, "parent") : null,
    children: childRows.map((c) => brief(c, "child")),
  };
};

/** Roughly 1 km around a place, for "nearby" on its own page. */
const NEARBY_LAT = 0.009;
const NEARBY_LNG = 0.015;
const NEARBY_COUNT = 6;

/**
 * A place's own page (`/amsterdam/p/<title>-<id>`), its canonical URL: just
 * the place, in one language, with links out to the maps that show it, the
 * places near it, its routes and documents. Nothing viewer-specific, so the
 * page can be cached for anonymous readers.
 */
const placePage = async (
  db: Database,
  placeId: string,
  lang: ContentLang | undefined,
) => {
  const found = await db.query.place.findFirst({
    where: and(eq(place.id, placeId), eq(place.status, "published")),
  });
  if (!found)
    throw new TRPCError({ code: "NOT_FOUND", message: "Place not found" });
  const homeId = found.collectionId;
  const latDiff = sql`(${place.lat} - ${found.lat})`;
  const lngDiff = sql`(${place.lng} - ${found.lng})`;
  const [
    maps,
    lists,
    photoRows,
    verdicts,
    parentRows,
    childRows,
    nearbyRows,
    routeRows,
    docRows,
  ] = await Promise.all([
    db
      .select({
        id: collection.id,
        slug: collection.slug,
        city: collection.city,
        title: collection.title,
        tagline: collection.tagline,
        description: collection.description,
        language: collection.language,
        languages: collection.languages,
        categories: collection.categories,
        fields: collection.fields,
        translations: collection.translations,
        view: collection.view,
        cityDefault: collection.cityDefault,
      })
      .from(collection)
      .where(
        or(
          eq(collection.id, homeId),
          sql`json_extract(${collection.view}, '$.source') = ${homeId}`,
        ),
      ),
    listsOf(db, [found.id]),
    found.photoIds.length > 0
      ? db
          .select({
            id: photo.id,
            width: photo.width,
            height: photo.height,
            credit: photo.credit,
            license: photo.license,
            sourceUrl: photo.sourceUrl,
          })
          .from(photo)
          .where(inArray(photo.id, found.photoIds))
      : [],
    verdictCounts(db, { placeId: found.id }),
    found.parentId
      ? db
          .select(linkColumns)
          .from(place)
          .where(
            and(eq(place.id, found.parentId), eq(place.status, "published")),
          )
      : [],
    db
      .select(linkColumns)
      .from(place)
      .where(and(eq(place.parentId, found.id), eq(place.status, "published")))
      .orderBy(place.title),
    db
      .select({
        id: place.id,
        title: place.title,
        summary: place.summary,
        translations: place.translations,
        category: place.category,
        lat: place.lat,
        lng: place.lng,
        photoIds: place.photoIds,
      })
      .from(place)
      .where(
        and(
          eq(place.collectionId, homeId),
          eq(place.status, "published"),
          sql`${place.id} <> ${found.id}`,
          sql`${place.lat} between ${found.lat - NEARBY_LAT} and ${found.lat + NEARBY_LAT}`,
          sql`${place.lng} between ${found.lng - NEARBY_LNG} and ${found.lng + NEARBY_LNG}`,
        ),
      )
      .orderBy(sql`${latDiff} * ${latDiff} + 0.37 * ${lngDiff} * ${lngDiff}`)
      .limit(NEARBY_COUNT),
    db
      .select({
        id: route.id,
        title: route.title,
        translations: route.translations,
        stops: route.stops,
        slug: collection.slug,
        city: collection.city,
      })
      .from(route)
      .innerJoin(collection, eq(collection.id, route.collectionId))
      .where(
        and(
          eq(route.status, "published"),
          sql`${route.stops} like ${`%"placeId":"${found.id}"%`}`,
        ),
      ),
    db
      .select({
        id: document.id,
        title: document.title,
        summary: document.summary,
        translations: document.translations,
        photoIds: document.photoIds,
        slug: collection.slug,
        city: collection.city,
      })
      .from(documentAttachment)
      .innerJoin(document, eq(document.id, documentAttachment.documentId))
      .innerJoin(collection, eq(collection.id, document.collectionId))
      .where(
        and(
          eq(documentAttachment.subjectType, "place"),
          eq(documentAttachment.subjectId, found.id),
          eq(document.status, "published"),
        ),
      )
      .orderBy(documentAttachment.position),
  ]);
  const home = maps.find((m) => m.id === homeId);
  if (!home)
    throw new TRPCError({ code: "NOT_FOUND", message: "Place not found" });
  const languages = mapLanguages(home);
  const translateTo =
    lang && lang !== home.language && languages.includes(lang) ? lang : null;
  const localHome = localizeCollection(home, translateTo);
  const isParent = childRows.length > 0;
  const viewed = { ...found, lists: lists.get(found.id) };
  // The maps that show it: the home map first, then views by title.
  const shownOn = maps
    .filter((m) => mapShows(m, viewed, isParent))
    .sort(
      (a, b) =>
        Number(b.id === homeId) - Number(a.id === homeId) ||
        a.title.localeCompare(b.title),
    );
  // Where "show on the map" goes: its home map if that shows it, else a view.
  const mapLink = mapToLink(
    viewed,
    isParent,
    linkOrder("parent", null, maps, homeId),
    maps,
  );
  // Links to other places stay in the reader's language.
  const prefix = langPrefix(translateTo ?? home.language, home.language);
  const pathOf = (p: { id: string; title: string }) =>
    `${prefix}/${citySlug(home.city)}/p/${placeParam(p)}`;
  const brief = (p: { id: string; title: string; summary: string }) => {
    const l = localize(
      p as typeof p & { translations?: Record<string, never> },
      translateTo,
    );
    return {
      id: p.id,
      title: l.title,
      summary: l.summary,
      path: pathOf(p),
    };
  };
  const photoById = new Map(photoRows.map((p) => [p.id, p]));
  const local = localizePlace(found, translateTo);
  const categoryOf = (key: string) =>
    localHome.categories.find((c) => c.key === key) ?? null;

  return {
    place: {
      id: found.id,
      title: local.title,
      summary: local.summary,
      body: local.body,
      category: categoryOf(found.category),
      lat: found.lat,
      lng: found.lng,
      address: found.address,
      area: [
        found.subNeighbourhood,
        found.neighbourhood,
        found.borough,
        found.municipality,
      ].filter((a): a is string => Boolean(a)),
      neighbourhood: found.neighbourhood,
      sub: found.subNeighbourhood,
      municipality: found.municipality,
      links: found.links,
      photoIds: found.photoIds,
      attributes: local.attributes,
      updatedAt: found.updatedAt,
      /** Its URL segment, from the title in the map's own language. */
      slugParam: placeParam(found),
      /** Its borough, or its municipality when outside the city proper. */
      level1:
        found.borough ??
        (found.municipality !== home.city ? found.municipality : null),
    },
    lang: translateTo ?? home.language,
    baseLang: home.language,
    /** Languages this place has a translated title in, base first. */
    languages: languages.filter(
      (l) => l === home.language || Boolean(found.translations[l]?.title),
    ),
    city: { name: home.city, slug: citySlug(home.city) },
    home: { title: localHome.title, slug: home.slug, path: mapPath(home) },
    /** Suggesting an edit happens on the map, in the place's panel. */
    editPath: `${mapPath(home)}/p/${found.id}/edit`,
    fields: localHome.fields,
    photos: found.photoIds.flatMap((id) => photoById.get(id) ?? []),
    verdicts: verdicts.get(found.id) ?? noVerdicts(),
    mapPath: mapLink ? `${mapPath(mapLink)}/p/${found.id}` : null,
    shownOn: shownOn.map((m) => ({
      title: localizeCollection(m, translateTo).title,
      path: mapPath(m),
      placePath: `${mapPath(m)}/p/${found.id}`,
    })),
    parent: parentRows[0] ? brief(parentRows[0]) : null,
    children: childRows.map(brief),
    nearby: nearbyRows.map((p) => ({
      ...brief(p),
      category: categoryOf(p.category),
      photoId: p.photoIds[0] ?? null,
    })),
    routes: routeRows.flatMap((r) => {
      const index = r.stops.findIndex((s) => s.placeId === found.id);
      return index < 0
        ? []
        : [
            {
              id: r.id,
              title: localize(r, translateTo).title,
              path: `${mapPath(r)}/r/${r.id}`,
              stop: index + 1,
              of: r.stops.length,
            },
          ];
    }),
    documents: docRows.map((d) => {
      const l = localize(d, translateTo);
      return {
        id: d.id,
        title: l.title,
        summary: l.summary,
        photoId: d.photoIds[0] ?? null,
        path: `${mapPath(d)}/d/${d.id}`,
      };
    }),
  };
};

export const placeRouter = router({
  /** A city's places by area, for the crawlable lists: see `areaPage`. */
  areaPage: publicProcedure
    .input(
      z.object({
        city: z.string().max(60),
        areas: z.array(z.string().max(80)).max(3),
        lang: contentLangSchema.optional(),
      }),
    )
    .query(({ ctx, input }) => areaPage(ctx.db, input)),

  /** A place's own page: see `placePage`. */
  page: publicProcedure
    .input(z.object({ placeId: idSchema, lang: contentLangSchema.optional() }))
    .query(({ ctx, input }) => placePage(ctx.db, input.placeId, input.lang)),

  /**
   * Every published place in full (all translations, photo ids), for
   * backups, diffs and bulk review. Same visibility as the map itself.
   */
  export: publicProcedure.input(listInput).query(async ({ ctx, input }) => {
    const m = await loadViewMap(ctx.db, input.collectionId);
    const [rows, overrides] = await Promise.all([
      ctx.db
        .select({
          id: place.id,
          title: place.title,
          summary: place.summary,
          body: place.body,
          category: place.category,
          lat: place.lat,
          lng: place.lng,
          address: place.address,
          municipality: place.municipality,
          borough: place.borough,
          neighbourhood: place.neighbourhood,
          subNeighbourhood: place.subNeighbourhood,
          links: place.links,
          attributes: place.attributes,
          photoIds: place.photoIds,
          translations: place.translations,
          parentId: place.parentId,
          detail: place.detail,
          updatedAt: place.updatedAt,
        })
        .from(place)
        .where(listWhere(m, input.pool))
        .orderBy(place.title),
      overridesOf(ctx.db, m),
    ]);
    // A view's own values on top (`overridden` names them).
    return rows.map((p) => withOverride(p, overrides.get(p.id)));
  }),

  /** Everything the map needs to draw markers and the list. */
  list: publicProcedure.input(listInput).query(async ({ ctx, input }) => {
    const m = await loadViewMap(ctx.db, input.collectionId);
    const [rows, verdicts, gone, overrides, filterKeys] = await Promise.all([
      ctx.db
        .select({
          id: place.id,
          title: place.title,
          summary: place.summary,
          category: place.category,
          lat: place.lat,
          lng: place.lng,
          address: place.address,
          municipality: place.municipality,
          borough: place.borough,
          neighbourhood: place.neighbourhood,
          subNeighbourhood: place.subNeighbourhood,
          attributes: place.attributes,
          photoIds: place.photoIds,
          translations: place.translations,
          parentId: place.parentId,
          detail: place.detail,
          updatedAt: place.updatedAt,
        })
        .from(place)
        .where(listWhere(m, input.pool))
        .orderBy(place.title),
      verdictCounts(ctx.db, { map: m }),
      goneCounts(ctx.db, { map: m }),
      overridesOf(ctx.db, m),
      input.forMap ? mapFilterKeys(ctx.db, input.collectionId) : null,
    ]);
    const lang = input.forMap?.lang;
    const slim = <T>(p: T & { attributes: Attributes }) =>
      filterKeys
        ? {
            ...p,
            attributes: Object.fromEntries(
              Object.entries(p.attributes).filter(([k]) => filterKeys.has(k)),
            ),
          }
        : p;
    // Effective values: the map's filters and counts run on these.
    return rows.map(({ photoIds, translations, ...p }) => ({
      ...slim(withOverride(p, overrides.get(p.id))),
      translations: listTranslations(
        input.forMap
          ? lang && translations[lang]
            ? { [lang]: translations[lang] }
            : {}
          : translations,
      ),
      coverPhotoId: photoIds[0] ?? null,
      verdicts: verdicts.get(p.id) ?? noVerdicts(),
      /** Visitors who reported it gone or couldn't find it. */
      goneReports: gone.get(p.id)?.count ?? 0,
    }));
  }),

  byId: publicProcedure
    .input(
      z.object({
        placeId: idSchema,
        /** Slug of the map it is shown on, to link parent and children in. */
        map: z.string().max(60).optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const found = await ctx.db.query.place.findFirst({
        where: eq(place.id, input.placeId),
        with: { author: { columns: { id: true, name: true, avatarId: true } } },
      });
      if (!found)
        throw new TRPCError({ code: "NOT_FOUND", message: "Place not found" });
      const access = await getAccess(ctx.db, found.collectionId, ctx.profile);
      const viewerId = ctx.profile?.id;
      // Opened on a view of its home: that view's own values apply.
      const shownOn = input.map
        ? await ctx.db.query.collection.findFirst({
            where: eq(collection.slug, input.map),
            columns: { id: true, view: true, categories: true, fields: true },
          })
        : undefined;
      const viewMap =
        shownOn?.view?.source === found.collectionId ? shownOn : null;
      // A theme place is only on the list views that include it.
      if (
        found.detail === "theme" &&
        shownOn &&
        (shownOn.id === found.collectionId || viewMap)
      ) {
        const [shown] = await ctx.db
          .select({ id: place.id })
          .from(place)
          .where(and(eq(place.id, found.id), shownWhere(shownOn)));
        if (!shown)
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Place not found on this map",
          });
      }
      // Override and list proposals show in history only on their own map.
      const ofThisMap = or(
        notInArray(proposal.subject, ["override", "membership"]),
        eq(proposal.collectionId, viewMap?.id ?? ""),
      );

      const [
        verdicts,
        history,
        myPending,
        photoRows,
        family,
        overrides,
        shape,
      ] = await Promise.all([
        verdictCounts(ctx.db, { placeId: found.id }),
        ctx.db.query.proposal.findMany({
          where: and(
            eq(proposal.placeId, found.id),
            eq(proposal.status, "approved"),
            ofThisMap,
          ),
          columns: {
            id: true,
            subject: true,
            kind: true,
            note: true,
            reviewedAt: true,
            createdAt: true,
          },
          with: {
            author: { columns: { id: true, name: true, avatarId: true } },
            reviewer: { columns: { id: true, name: true, avatarId: true } },
          },
          orderBy: desc(proposal.reviewedAt),
          limit: 50,
        }),
        viewerId
          ? ctx.db.query.proposal.findMany({
              where: and(
                eq(proposal.placeId, found.id),
                eq(proposal.status, "pending"),
                eq(proposal.proposedBy, viewerId),
                ofThisMap,
              ),
              columns: { id: true, subject: true, kind: true, createdAt: true },
            })
          : [],
        found.photoIds.length > 0
          ? ctx.db
              .select({
                id: photo.id,
                width: photo.width,
                height: photo.height,
                credit: photo.credit,
                license: photo.license,
                sourceUrl: photo.sourceUrl,
              })
              .from(photo)
              .where(inArray(photo.id, found.photoIds))
          : [],
        familyOf(ctx.db, found, input.map),
        viewMap ? overridesOf(ctx.db, viewMap, [found.id]) : undefined,
        viewMap ? shapeOf(ctx.db, viewMap) : undefined,
      ]);
      const photoById = new Map(photoRows.map((p) => [p.id, p]));

      return {
        /** As the map it is opened on shows it (a view's own values merged). */
        place: withOverride(found, overrides?.get(found.id)),
        /** The home place's own values of what a view may override. */
        base: {
          attributes: found.attributes,
          category: found.category,
          translations: found.translations,
        },
        /** The view it is opened on (its values are in `place`), or null. */
        viewId: viewMap?.id ?? null,
        /** Photo metadata (attribution) in `photoIds` order. */
        photos: found.photoIds.flatMap((id) => photoById.get(id) ?? []),
        /**
         * Custom field definitions for reading `place.attributes`: the home
         * map's, plus a view's own when opened on one.
         */
        fields: shape?.fields ?? access.collection.fields,
        /** The place's home map (where it is edited). */
        home: {
          id: access.collection.id,
          slug: access.collection.slug,
          city: access.collection.citySlug,
          title: access.collection.title,
        },
        role: access.role,
        can: access.can,
        verdicts: verdicts.get(found.id) ?? noVerdicts(),
        history,
        myPending,
        /** The cluster it is part of, with the map to link it in. */
        parent: family.parent,
        /** Its parts, if it is a cluster. */
        children: family.children,
      };
    }),
});
