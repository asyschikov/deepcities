import { TRPCError } from "@trpc/server";
import { and, eq } from "drizzle-orm";
import { z } from "zod/v4";
import { place, rating } from "~/lib/db/schema";
import { idSchema } from "~/lib/validation";
import { requireCap } from "../access";
import { authedProcedure, router } from "../init";

export const ratingRouter = router({
  /** Rate a place 1–5, or clear your rating with `score: null`. */
  set: authedProcedure
    .input(
      z.object({
        placeId: idSchema,
        score: z.number().int().min(1).max(5).nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const target = await ctx.db.query.place.findFirst({
        where: eq(place.id, input.placeId),
        columns: { collectionId: true, status: true },
      });
      if (target?.status !== "published") {
        throw new TRPCError({ code: "NOT_FOUND", message: "Place not found" });
      }
      await requireCap(ctx.db, target.collectionId, ctx.profile, "rate");
      const mine = and(
        eq(rating.placeId, input.placeId),
        eq(rating.profileId, ctx.profile.id),
      );
      if (input.score === null) {
        await ctx.db.delete(rating).where(mine);
      } else {
        await ctx.db
          .insert(rating)
          .values({
            placeId: input.placeId,
            profileId: ctx.profile.id,
            score: input.score,
            createdAt: new Date(),
          })
          .onConflictDoUpdate({
            target: [rating.placeId, rating.profileId],
            set: { score: input.score },
          });
      }
      return { ok: true };
    }),
});
