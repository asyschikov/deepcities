import { TRPCError } from "@trpc/server";
import { and, count, desc, eq, inArray, sql } from "drizzle-orm";
import { z } from "zod/v4";
import { listTranslations } from "~/lib/content-lang";
import type { Database } from "~/lib/db";
import { photo, place, proposal, rating } from "~/lib/db/schema";
import { idSchema } from "~/lib/validation";
import { getAccess } from "../access";
import { publicProcedure, router } from "../init";

const ratingSummaries = async (db: Database, collectionId: string) => {
  const rows = await db
    .select({
      placeId: rating.placeId,
      avg: sql<number>`avg(${rating.score})`,
      n: count(),
    })
    .from(rating)
    .innerJoin(place, eq(place.id, rating.placeId))
    .where(eq(place.collectionId, collectionId))
    .groupBy(rating.placeId);
  return new Map(rows.map((r) => [r.placeId, { avg: r.avg, count: r.n }]));
};

export const placeRouter = router({
  /** Everything the map needs to draw markers and the list. */
  list: publicProcedure
    .input(z.object({ collectionId: idSchema }))
    .query(async ({ ctx, input }) => {
      const [rows, ratings] = await Promise.all([
        ctx.db.query.place.findMany({
          where: and(
            eq(place.collectionId, input.collectionId),
            eq(place.status, "published"),
          ),
          columns: {
            id: true,
            title: true,
            summary: true,
            category: true,
            lat: true,
            lng: true,
            address: true,
            municipality: true,
            borough: true,
            neighbourhood: true,
            subNeighbourhood: true,
            attributes: true,
            photoIds: true,
            translations: true,
            updatedAt: true,
          },
          orderBy: (p, { asc }) => asc(p.title),
        }),
        ratingSummaries(ctx.db, input.collectionId),
      ]);
      return rows.map(({ photoIds, translations, ...p }) => ({
        ...p,
        translations: listTranslations(translations),
        coverPhotoId: photoIds[0] ?? null,
        rating: ratings.get(p.id) ?? { avg: null, count: 0 },
      }));
    }),

  byId: publicProcedure
    .input(z.object({ placeId: idSchema }))
    .query(async ({ ctx, input }) => {
      const found = await ctx.db.query.place.findFirst({
        where: eq(place.id, input.placeId),
        with: { author: { columns: { id: true, name: true } } },
      });
      if (!found)
        throw new TRPCError({ code: "NOT_FOUND", message: "Place not found" });
      const access = await getAccess(ctx.db, found.collectionId, ctx.profile);
      const viewerId = ctx.profile?.id;

      const [summary, mine, history, myPending, photoRows] = await Promise.all([
        ctx.db
          .select({ avg: sql<number | null>`avg(${rating.score})`, n: count() })
          .from(rating)
          .where(eq(rating.placeId, found.id)),
        viewerId
          ? ctx.db.query.rating.findFirst({
              where: and(
                eq(rating.placeId, found.id),
                eq(rating.profileId, viewerId),
              ),
            })
          : null,
        ctx.db.query.proposal.findMany({
          where: and(
            eq(proposal.placeId, found.id),
            eq(proposal.status, "approved"),
          ),
          columns: {
            id: true,
            kind: true,
            note: true,
            reviewedAt: true,
            createdAt: true,
          },
          with: {
            author: { columns: { id: true, name: true } },
            reviewer: { columns: { id: true, name: true } },
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
              ),
              columns: { id: true, kind: true, createdAt: true },
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
      ]);
      const photoById = new Map(photoRows.map((p) => [p.id, p]));

      return {
        place: found,
        /** Photo metadata (attribution) in `photoIds` order. */
        photos: found.photoIds.flatMap((id) => photoById.get(id) ?? []),
        /** The map's custom field definitions, for reading `place.attributes`. */
        fields: access.collection.fields,
        role: access.role,
        can: access.can,
        rating: {
          avg: summary[0]?.avg ?? null,
          count: summary[0]?.n ?? 0,
          mine: mine?.score ?? null,
        },
        history,
        myPending,
      };
    }),
});
