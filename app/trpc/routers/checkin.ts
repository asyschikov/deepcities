import { createId } from "@paralleldrive/cuid2";
import { TRPCError } from "@trpc/server";
import { and, count, desc, eq, inArray } from "drizzle-orm";
import { z } from "zod/v4";
import { citySlug } from "~/lib/cities";
import {
  CHECKIN_PHOTO_KINDS,
  MAX_PHOTO_BYTES,
  MAX_PHOTOS_PER_CHECKIN,
  MAX_PHOTOS_PER_PLACE,
  VERDICTS,
} from "~/lib/constants";
import type { Database } from "~/lib/db";
import { checkin, checkinPhoto, photo, place, verdict } from "~/lib/db/schema";
import { draftOfPlace, idSchema } from "~/lib/validation";
import { getAccess, requireCap } from "../access";
import { authedProcedure, router } from "../init";
import { proposalRouter } from "./proposal";

const EXT = {
  "image/webp": "webp",
  "image/jpeg": "jpg",
  "image/png": "png",
} as const;

const verdictSchema = z.enum(VERDICTS);

/** A published place you may check in to (and give a verdict on). */
const placeToVisit = async (
  db: Database,
  profile: Parameters<typeof requireCap>[2],
  placeId: string,
) => {
  const found = await db.query.place.findFirst({
    where: eq(place.id, placeId),
  });
  if (found?.status !== "published") {
    throw new TRPCError({ code: "NOT_FOUND", message: "Place not found" });
  }
  await requireCap(db, found.collectionId, profile, "visit");
  return found;
};

const setVerdictFor = async (
  db: Database,
  placeId: string,
  profileId: string,
  value: (typeof VERDICTS)[number] | null,
) => {
  const mine = and(
    eq(verdict.placeId, placeId),
    eq(verdict.profileId, profileId),
  );
  if (value === null) {
    await db.delete(verdict).where(mine);
    return;
  }
  await db
    .insert(verdict)
    .values({ placeId, profileId, verdict: value, updatedAt: new Date() })
    .onConflictDoUpdate({
      target: [verdict.placeId, verdict.profileId],
      set: { verdict: value, updatedAt: new Date() },
    });
};

/** Your own check-in, or not found. */
const ownCheckin = async (db: Database, id: string, profileId: string) => {
  const found = await db.query.checkin.findFirst({
    where: and(eq(checkin.id, id), eq(checkin.profileId, profileId)),
  });
  if (!found)
    throw new TRPCError({ code: "NOT_FOUND", message: "Check-in not found" });
  return found;
};

export const checkinRouter = router({
  /** "I was here", optionally with a verdict and where you were. */
  create: authedProcedure
    .input(
      z.object({
        placeId: idSchema,
        verdict: verdictSchema.nullish(),
        routeId: idSchema.nullish(),
        position: z
          .object({
            lat: z.number().min(-90).max(90),
            lng: z.number().min(-180).max(180),
            accuracy: z.number().min(0).max(100_000),
          })
          .nullish(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const target = await placeToVisit(ctx.db, ctx.profile, input.placeId);
      const id = createId();
      await ctx.db.insert(checkin).values({
        id,
        collectionId: target.collectionId,
        placeId: target.id,
        profileId: ctx.profile.id,
        routeId: input.routeId ?? null,
        lat: input.position?.lat ?? null,
        lng: input.position?.lng ?? null,
        accuracy: input.position?.accuracy ?? null,
        createdAt: new Date(),
      });
      if (input.verdict)
        await setVerdictFor(ctx.db, target.id, ctx.profile.id, input.verdict);
      return { id };
    }),

  /** Your verdict on a place, or clear it with `verdict: null`. */
  setVerdict: authedProcedure
    .input(z.object({ placeId: idSchema, verdict: verdictSchema.nullable() }))
    .mutation(async ({ ctx, input }) => {
      await placeToVisit(ctx.db, ctx.profile, input.placeId);
      await setVerdictFor(ctx.db, input.placeId, ctx.profile.id, input.verdict);
      return { ok: true };
    }),

  /** Forget a visit (and its photos). Your verdict stays. */
  delete: authedProcedure
    .input(z.object({ checkinId: idSchema }))
    .mutation(async ({ ctx, input }) => {
      await ownCheckin(ctx.db, input.checkinId, ctx.profile.id);
      const photos = await ctx.db.query.checkinPhoto.findMany({
        where: eq(checkinPhoto.checkinId, input.checkinId),
      });
      // Photos offered to the place live on with it; private ones go.
      const privateKeys = photos
        .filter((p) => p.photoId === null)
        .map((p) => p.objectKey);
      if (privateKeys.length > 0) await ctx.env.R2.delete(privateKeys);
      await ctx.db.delete(checkin).where(eq(checkin.id, input.checkinId));
      return { ok: true };
    }),

  /**
   * Add a photo to a check-in, at the time or later. A selfie stays
   * private; a photo of the place is also offered to the place (published
   * at once for moderators, otherwise sent for review).
   */
  addPhoto: authedProcedure
    .input(
      z.object({
        checkinId: idSchema,
        kind: z.enum(CHECKIN_PHOTO_KINDS),
        base64: z.string().max(Math.ceil((MAX_PHOTO_BYTES * 4) / 3) + 4),
        contentType: z.enum(["image/webp", "image/jpeg", "image/png"]),
        width: z.number().int().min(1).max(8000),
        height: z.number().int().min(1).max(8000),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const visit = await ownCheckin(ctx.db, input.checkinId, ctx.profile.id);
      const [{ n } = { n: 0 }] = await ctx.db
        .select({ n: count() })
        .from(checkinPhoto)
        .where(eq(checkinPhoto.checkinId, visit.id));
      if (n >= MAX_PHOTOS_PER_CHECKIN) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `At most ${MAX_PHOTOS_PER_CHECKIN} photos per check-in`,
        });
      }
      const bytes = Uint8Array.from(atob(input.base64), (c) => c.charCodeAt(0));
      if (bytes.length > MAX_PHOTO_BYTES) {
        throw new TRPCError({
          code: "PAYLOAD_TOO_LARGE",
          message: "Photo too large",
        });
      }
      const id = createId();
      const ext = EXT[input.contentType];
      const now = new Date();
      // Only readers who may suggest edits can offer a photo to the place;
      // for everyone else it stays with their visit.
      const offer =
        input.kind === "place" &&
        (await getAccess(ctx.db, visit.collectionId, ctx.profile)).can.propose;
      // A place photo is stored like any map photo; a selfie only privately.
      const objectKey = offer
        ? `collections/${visit.collectionId}/photos/${id}.${ext}`
        : `checkins/${ctx.profile.id}/${id}.${ext}`;
      await ctx.env.R2.put(objectKey, bytes, {
        httpMetadata: { contentType: input.contentType },
      });
      if (offer) {
        await ctx.db.insert(photo).values({
          id,
          collectionId: visit.collectionId,
          objectKey,
          width: input.width,
          height: input.height,
          credit: null,
          license: null,
          sourceUrl: null,
          uploadedBy: ctx.profile.id,
          createdAt: now,
        });
      }
      await ctx.db.insert(checkinPhoto).values({
        id,
        checkinId: visit.id,
        profileId: ctx.profile.id,
        kind: input.kind,
        objectKey,
        width: input.width,
        height: input.height,
        photoId: offer ? id : null,
        createdAt: now,
      });

      if (!offer) return { id, offered: null };
      const target = await ctx.db.query.place.findFirst({
        where: eq(place.id, visit.placeId),
      });
      if (
        target?.status !== "published" ||
        target.photoIds.length >= MAX_PHOTOS_PER_PLACE
      ) {
        return { id, offered: "full" as const };
      }
      const res = await proposalRouter.createCaller(ctx).create({
        kind: "edit",
        placeId: target.id,
        draft: {
          ...draftOfPlace(target),
          photoIds: [...target.photoIds, id],
        },
        note: "Photo from a visit",
      });
      return { id, offered: res.status };
    }),

  /** Remove a photo from your check-in (one offered to the place stays there). */
  deletePhoto: authedProcedure
    .input(z.object({ photoId: idSchema }))
    .mutation(async ({ ctx, input }) => {
      const found = await ctx.db.query.checkinPhoto.findFirst({
        where: and(
          eq(checkinPhoto.id, input.photoId),
          eq(checkinPhoto.profileId, ctx.profile.id),
        ),
      });
      if (!found)
        throw new TRPCError({ code: "NOT_FOUND", message: "Photo not found" });
      if (found.photoId === null) await ctx.env.R2.delete(found.objectKey);
      await ctx.db.delete(checkinPhoto).where(eq(checkinPhoto.id, found.id));
      return { ok: true };
    }),

  /** Your visits to one place, newest first, with your verdict. */
  forPlace: authedProcedure
    .input(z.object({ placeId: idSchema }))
    .query(async ({ ctx, input }) => {
      const [visits, mine] = await Promise.all([
        ctx.db.query.checkin.findMany({
          where: and(
            eq(checkin.placeId, input.placeId),
            eq(checkin.profileId, ctx.profile.id),
          ),
          with: { photos: { orderBy: (p, { asc }) => asc(p.createdAt) } },
          orderBy: desc(checkin.createdAt),
        }),
        ctx.db.query.verdict.findFirst({
          where: and(
            eq(verdict.placeId, input.placeId),
            eq(verdict.profileId, ctx.profile.id),
          ),
        }),
      ]);
      return {
        visits: visits.map((v) => ({
          id: v.id,
          createdAt: v.createdAt,
          routeId: v.routeId,
          photos: v.photos.map((p) => ({
            id: p.id,
            kind: p.kind,
            offered: p.photoId !== null,
          })),
        })),
        verdict: mine?.verdict ?? null,
      };
    }),

  /** Places on a map you have checked in to (for ticks on the map and list). */
  visited: authedProcedure
    .input(z.object({ collectionId: idSchema }))
    .query(async ({ ctx, input }) => {
      const rows = await ctx.db
        .selectDistinct({ placeId: checkin.placeId })
        .from(checkin)
        .where(
          and(
            eq(checkin.collectionId, input.collectionId),
            eq(checkin.profileId, ctx.profile.id),
          ),
        );
      return rows.map((r) => r.placeId);
    }),

  /** Your check-in history, newest first (optionally on one map). */
  mine: authedProcedure
    .input(z.object({ collectionId: idSchema.nullish() }))
    .query(async ({ ctx, input }) => {
      const visits = await ctx.db.query.checkin.findMany({
        where: and(
          eq(checkin.profileId, ctx.profile.id),
          input.collectionId
            ? eq(checkin.collectionId, input.collectionId)
            : undefined,
        ),
        with: {
          photos: { orderBy: (p, { asc }) => asc(p.createdAt) },
          place: {
            columns: {
              id: true,
              title: true,
              category: true,
              translations: true,
              photoIds: true,
              status: true,
            },
          },
          collection: {
            columns: {
              id: true,
              slug: true,
              city: true,
              title: true,
              categories: true,
            },
          },
        },
        orderBy: desc(checkin.createdAt),
        limit: 500,
      });
      const placeIds = [...new Set(visits.map((v) => v.placeId))];
      const verdicts =
        placeIds.length > 0
          ? await ctx.db
              .select({ placeId: verdict.placeId, verdict: verdict.verdict })
              .from(verdict)
              .where(
                and(
                  eq(verdict.profileId, ctx.profile.id),
                  inArray(verdict.placeId, placeIds),
                ),
              )
          : [];
      const verdictOf = new Map(verdicts.map((v) => [v.placeId, v.verdict]));
      return visits.map((v) => ({
        id: v.id,
        createdAt: v.createdAt,
        routeId: v.routeId,
        place: {
          id: v.place.id,
          title: v.place.title,
          translations: v.place.translations,
          coverPhotoId: v.place.photoIds[0] ?? null,
          archived: v.place.status !== "published",
          color:
            v.collection.categories.find((c) => c.key === v.place.category)
              ?.color ?? null,
        },
        map: {
          id: v.collection.id,
          slug: v.collection.slug,
          citySlug: citySlug(v.collection.city),
          title: v.collection.title,
        },
        verdict: verdictOf.get(v.placeId) ?? null,
        photos: v.photos.map((p) => ({
          id: p.id,
          kind: p.kind,
          offered: p.photoId !== null,
        })),
      }));
    }),
});
