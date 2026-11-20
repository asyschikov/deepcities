import { TRPCError } from "@trpc/server";
import { and, desc, eq, inArray, like } from "drizzle-orm";
import { z } from "zod/v4";
import { TRANSPORT_MODES } from "~/lib/constants";
import { photo, proposal, route } from "~/lib/db/schema";
import { routeStats } from "~/lib/routes";
import { SnapError, snapPath } from "~/lib/routing.server";
import { idSchema, lngLatSchema } from "~/lib/validation";
import { getAccess, requireCap } from "../access";
import { authedProcedure, publicProcedure, router } from "../init";

export const routeRouter = router({
  /**
   * Published routes of a map with their geometry, for the Routes list and
   * for drawing them. Routes are small (a few hundred points each).
   */
  list: publicProcedure
    .input(z.object({ collectionId: idSchema }))
    .query(async ({ ctx, input }) => {
      const rows = await ctx.db.query.route.findMany({
        where: and(
          eq(route.collectionId, input.collectionId),
          eq(route.status, "published"),
        ),
        columns: {
          id: true,
          title: true,
          summary: true,
          stops: true,
          legs: true,
          photoIds: true,
          updatedAt: true,
        },
        orderBy: (r, { asc }) => asc(r.title),
      });
      return rows.map(({ photoIds, legs, stops, ...r }) => ({
        ...r,
        coverPhotoId: photoIds[0] ?? null,
        stops: stops.map((s) => ({
          placeId: s.placeId,
          name: s.name,
          lat: s.lat,
          lng: s.lng,
        })),
        legs: legs.map((l) => ({ mode: l.mode, path: l.path })),
        stats: routeStats({ legs, stops }),
      }));
    }),

  byId: publicProcedure
    .input(z.object({ routeId: idSchema }))
    .query(async ({ ctx, input }) => {
      const found = await ctx.db.query.route.findFirst({
        where: eq(route.id, input.routeId),
        with: { author: { columns: { id: true, name: true } } },
      });
      if (!found)
        throw new TRPCError({ code: "NOT_FOUND", message: "Route not found" });
      const access = await getAccess(ctx.db, found.collectionId, ctx.profile);
      const viewerId = ctx.profile?.id;
      const [history, myPending, photoRows] = await Promise.all([
        ctx.db.query.proposal.findMany({
          where: and(
            eq(proposal.routeId, found.id),
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
                eq(proposal.routeId, found.id),
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
        route: found,
        stats: routeStats(found),
        photos: found.photoIds.flatMap((id) => photoById.get(id) ?? []),
        role: access.role,
        can: access.can,
        history,
        myPending,
      };
    }),

  /** Published routes that stop at a place ("Part of routes" on its page). */
  throughPlace: publicProcedure
    .input(z.object({ placeId: idSchema }))
    .query(async ({ ctx, input }) => {
      // Pre-filter in SQL on the JSON text, then confirm on parsed stops.
      const rows = await ctx.db.query.route.findMany({
        where: and(
          eq(route.status, "published"),
          like(route.stops, `%"placeId":"${input.placeId}"%`),
        ),
        columns: { id: true, title: true, stops: true },
      });
      return rows.flatMap((r) => {
        const index = r.stops.findIndex((s) => s.placeId === input.placeId);
        return index < 0
          ? []
          : [{ id: r.id, title: r.title, stop: index + 1, of: r.stops.length }];
      });
    }),

  /**
   * Follow streets between points (stop, waypoints…, stop) for a walk/bike
   * leg. Only for people who may propose on the map, to protect the free
   * router from anonymous use.
   */
  snap: authedProcedure
    .input(
      z.object({
        collectionId: idSchema,
        mode: z.enum(TRANSPORT_MODES),
        points: z.array(lngLatSchema).min(2).max(27),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await requireCap(ctx.db, input.collectionId, ctx.profile, "propose");
      try {
        const path = await snapPath(
          input.mode,
          input.points,
          `deep-cities/0.1 (${ctx.env.SITE_ORIGIN})`,
        );
        return { path };
      } catch (err) {
        if (err instanceof SnapError)
          throw new TRPCError({ code: "BAD_REQUEST", message: err.message });
        throw err;
      }
    }),
});
