import { and, desc, eq, sql, sum } from "drizzle-orm";
import { z } from "zod/v4";
import { place, profile, scoreEvent } from "~/lib/db/schema";
import { authedProcedure, publicProcedure, router } from "../init";

const LEADERBOARD_SIZE = 50;

/** Explorer points: your score, going public, and city leaderboards. */
export const scoreRouter = router({
  /** Your points: total, per city, the latest awards, and whether you're public. */
  mine: authedProcedure.query(async ({ ctx }) => {
    const [cities, recent, me] = await Promise.all([
      ctx.db
        .select({ city: scoreEvent.city, points: sum(scoreEvent.points) })
        .from(scoreEvent)
        .where(eq(scoreEvent.profileId, ctx.profile.id))
        .groupBy(scoreEvent.city),
      ctx.db
        .select({
          id: scoreEvent.id,
          kind: scoreEvent.kind,
          points: scoreEvent.points,
          createdAt: scoreEvent.createdAt,
          placeTitle: place.title,
        })
        .from(scoreEvent)
        .leftJoin(place, eq(place.id, scoreEvent.placeId))
        .where(eq(scoreEvent.profileId, ctx.profile.id))
        .orderBy(desc(scoreEvent.createdAt))
        .limit(30),
      ctx.db.query.profile.findFirst({
        where: eq(profile.id, ctx.profile.id),
        columns: { isPublic: true, publicAskedAt: true },
      }),
    ]);
    const byCity = cities.map((c) => ({
      city: c.city,
      points: Number(c.points ?? 0),
    }));
    return {
      total: byCity.reduce((n, c) => n + c.points, 0),
      byCity,
      recent,
      isPublic: me?.isPublic ?? false,
    };
  }),

  /** Show your name and points on leaderboards, or stop. */
  setPublic: authedProcedure
    .input(z.object({ isPublic: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(profile)
        .set({ isPublic: input.isPublic, publicAskedAt: new Date() })
        .where(eq(profile.id, ctx.profile.id));
      return { ok: true };
    }),

  /** The city's top explorers among public profiles. */
  leaderboard: publicProcedure
    .input(z.object({ city: z.string().min(1).max(100) }))
    .query(async ({ ctx, input }) => {
      const total = sql<number>`sum(${scoreEvent.points})`;
      const rows = await ctx.db
        .select({
          profileId: profile.id,
          name: profile.name,
          avatarId: profile.avatarId,
          points: total,
        })
        .from(scoreEvent)
        .innerJoin(profile, eq(profile.id, scoreEvent.profileId))
        .where(and(eq(scoreEvent.city, input.city), eq(profile.isPublic, true)))
        .groupBy(profile.id)
        .orderBy(desc(total))
        .limit(LEADERBOARD_SIZE);
      return rows.map((r, i) => ({
        rank: i + 1,
        profileId: r.profileId,
        name: r.name,
        avatarId: r.avatarId,
        points: Number(r.points),
        isYou: ctx.profile?.id === r.profileId,
      }));
    }),
});
