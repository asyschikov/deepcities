import { TRPCError } from "@trpc/server";
import { and, count, desc, eq, inArray } from "drizzle-orm";
import { z } from "zod/v4";
import { VERDICTS, type Verdict } from "~/lib/constants";
import { listTranslations } from "~/lib/content-lang";
import type { Database } from "~/lib/db";
import { photo, place, proposal, verdict } from "~/lib/db/schema";
import { idSchema } from "~/lib/validation";
import { getAccess } from "../access";
import { publicProcedure, router } from "../init";
import { goneCounts } from "./gone";

/** How many visitors gave each verdict. */
export type VerdictCounts = Record<Verdict, number>;
const noVerdicts = (): VerdictCounts =>
  Object.fromEntries(VERDICTS.map((v) => [v, 0])) as VerdictCounts;

const verdictCounts = async (
  db: Database,
  where: { collectionId: string } | { placeId: string },
) => {
  const rows = await db
    .select({ placeId: verdict.placeId, verdict: verdict.verdict, n: count() })
    .from(verdict)
    .innerJoin(place, eq(place.id, verdict.placeId))
    .where(
      "placeId" in where
        ? eq(verdict.placeId, where.placeId)
        : eq(place.collectionId, where.collectionId),
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

export const placeRouter = router({
  /** Everything the map needs to draw markers and the list. */
  list: publicProcedure
    .input(z.object({ collectionId: idSchema }))
    .query(async ({ ctx, input }) => {
      const [rows, verdicts, gone] = await Promise.all([
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
        verdictCounts(ctx.db, { collectionId: input.collectionId }),
        goneCounts(ctx.db, { collectionId: input.collectionId }),
      ]);
      return rows.map(({ photoIds, translations, ...p }) => ({
        ...p,
        translations: listTranslations(translations),
        coverPhotoId: photoIds[0] ?? null,
        verdicts: verdicts.get(p.id) ?? noVerdicts(),
        /** Visitors who reported it gone or couldn't find it. */
        goneReports: gone.get(p.id)?.count ?? 0,
      }));
    }),

  byId: publicProcedure
    .input(z.object({ placeId: idSchema }))
    .query(async ({ ctx, input }) => {
      const found = await ctx.db.query.place.findFirst({
        where: eq(place.id, input.placeId),
        with: { author: { columns: { id: true, name: true, avatarId: true } } },
      });
      if (!found)
        throw new TRPCError({ code: "NOT_FOUND", message: "Place not found" });
      const access = await getAccess(ctx.db, found.collectionId, ctx.profile);
      const viewerId = ctx.profile?.id;

      const [verdicts, history, myPending, photoRows] = await Promise.all([
        verdictCounts(ctx.db, { placeId: found.id }),
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
        verdicts: verdicts.get(found.id) ?? noVerdicts(),
        history,
        myPending,
      };
    }),
});
