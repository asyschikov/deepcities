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
import { citySlug } from "~/lib/cities";
import { VERDICTS, type Verdict } from "~/lib/constants";
import { listTranslations } from "~/lib/content-lang";
import type { Database } from "~/lib/db";
import { collection, photo, place, proposal, verdict } from "~/lib/db/schema";
import { withOverride } from "~/lib/overrides";
import { idSchema } from "~/lib/validation";
import {
  linkOrder,
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
});

const listWhere = (m: ViewMap, pool: boolean | undefined) =>
  pool ? and(poolWhere(m), eq(place.status, "published")) : shownWhere(m);

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

export const placeRouter = router({
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
    const [rows, verdicts, gone, overrides] = await Promise.all([
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
    ]);
    // Effective values: the map's filters and counts run on these.
    return rows.map(({ photoIds, translations, ...p }) => ({
      ...withOverride(p, overrides.get(p.id)),
      translations: listTranslations(translations),
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
        base: { attributes: found.attributes, category: found.category },
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
