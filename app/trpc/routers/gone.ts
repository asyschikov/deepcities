import { TRPCError } from "@trpc/server";
import { and, count, desc, eq, inArray, max } from "drizzle-orm";
import { z } from "zod/v4";
import { REPORT_KINDS } from "~/lib/constants";
import type { Database } from "~/lib/db";
import { goneReport, place, profile } from "~/lib/db/schema";
import { GONE_VALUE, goneField } from "~/lib/gone";
import { award, cityOf, logAction, onTheSpot } from "~/lib/score";
import { draftOfPlace, idSchema } from "~/lib/validation";
import type { ViewMap } from "~/lib/views";
import { requireCap } from "../access";
import { authedProcedure, publicProcedure, router } from "../init";
import { shownWhere } from "../map-places";
import { proposalRouter } from "./proposal";

const publishedPlace = async (db: Database, placeId: string) => {
  const found = await db.query.place.findFirst({
    where: eq(place.id, placeId),
  });
  if (found?.status !== "published")
    throw new TRPCError({ code: "NOT_FOUND", message: "Place not found" });
  return found;
};

/** Reports that say the place may not be there (shown as a warning). */
const MISSING = ["gone", "not_found"] as const;

/** How many visitors reported each place gone or not found, and when last. */
export const goneCounts = async (
  db: Database,
  where: { map: ViewMap } | { placeId: string },
) => {
  const rows = await db
    .select({
      placeId: goneReport.placeId,
      n: count(),
      latest: max(goneReport.createdAt),
    })
    .from(goneReport)
    .innerJoin(place, eq(place.id, goneReport.placeId))
    .where(
      and(
        inArray(goneReport.kind, [...MISSING]),
        "placeId" in where
          ? eq(goneReport.placeId, where.placeId)
          : shownWhere(where.map),
      ),
    )
    .groupBy(goneReport.placeId);
  return new Map(
    rows.map((r) => [r.placeId, { count: r.n, latest: r.latest ?? null }]),
  );
};

export const goneRouter = router({
  /**
   * A quick correction ("it's gone", "the pin is off", ...), sent on the
   * spot only (from afar it is editorial work): goes to the map's
   * moderators. Reporting again replaces your report. Earns points once
   * per place.
   */
  report: authedProcedure
    .input(
      z.object({
        placeId: idSchema,
        kind: z.enum(REPORT_KINDS).default("gone"),
        note: z.string().trim().max(500).nullish(),
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
      const target = await publishedPlace(ctx.db, input.placeId);
      await requireCap(ctx.db, target.collectionId, ctx.profile, "visit");
      if (!input.position || !onTheSpot(input.position, target)) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You need to be at the place to report on it",
        });
      }
      const row = {
        kind: input.kind,
        note: input.note || null,
        lat: input.position?.lat ?? null,
        lng: input.position?.lng ?? null,
        accuracy: input.position?.accuracy ?? null,
        createdAt: new Date(),
      };
      await ctx.db
        .insert(goneReport)
        .values({
          placeId: target.id,
          profileId: ctx.profile.id,
          collectionId: target.collectionId,
          ...row,
        })
        .onConflictDoUpdate({
          target: [goneReport.placeId, goneReport.profileId],
          set: row,
        });
      const base = {
        profileId: ctx.profile.id,
        collectionId: target.collectionId,
        city: await cityOf(ctx.db, target.collectionId),
        placeId: target.id,
      };
      await logAction(ctx.db, {
        ...base,
        action: "report",
        detail: { kind: input.kind, note: row.note, ...input.position },
      });
      const points = await award(ctx.db, {
        ...base,
        kind: "report_here",
        key: `report:${target.id}`,
      });
      return { ok: true, points };
    }),

  /** Take your report back ("it's there after all"). */
  withdraw: authedProcedure
    .input(z.object({ placeId: idSchema }))
    .mutation(async ({ ctx, input }) => {
      const mine = await ctx.db.query.goneReport.findFirst({
        where: and(
          eq(goneReport.placeId, input.placeId),
          eq(goneReport.profileId, ctx.profile.id),
        ),
      });
      if (mine) {
        await logAction(ctx.db, {
          profileId: ctx.profile.id,
          collectionId: mine.collectionId,
          city: await cityOf(ctx.db, mine.collectionId),
          placeId: input.placeId,
          action: "report_withdrawn",
          detail: { kind: mine.kind },
        });
      }
      await ctx.db
        .delete(goneReport)
        .where(
          and(
            eq(goneReport.placeId, input.placeId),
            eq(goneReport.profileId, ctx.profile.id),
          ),
        );
      return { ok: true };
    }),

  /** The tally on one place, and whether you reported it. */
  forPlace: publicProcedure
    .input(z.object({ placeId: idSchema }))
    .query(async ({ ctx, input }) => {
      const [tally, mine] = await Promise.all([
        goneCounts(ctx.db, { placeId: input.placeId }),
        ctx.profile
          ? ctx.db.query.goneReport.findFirst({
              where: and(
                eq(goneReport.placeId, input.placeId),
                eq(goneReport.profileId, ctx.profile.id),
              ),
              columns: { createdAt: true, kind: true },
            })
          : null,
      ]);
      const t = tally.get(input.placeId);
      return {
        count: t?.count ?? 0,
        latest: t?.latest ?? null,
        mine: mine?.createdAt ?? null,
        mineKind: mine?.kind ?? null,
      };
    }),

  /** Moderators: places visitors reported gone, most reported first. */
  list: authedProcedure
    .input(z.object({ collectionId: idSchema }))
    .query(async ({ ctx, input }) => {
      await requireCap(ctx.db, input.collectionId, ctx.profile, "review");
      const rows = await ctx.db
        .select({
          placeId: goneReport.placeId,
          title: place.title,
          status: place.status,
          kind: goneReport.kind,
          note: goneReport.note,
          createdAt: goneReport.createdAt,
          name: profile.name,
        })
        .from(goneReport)
        .innerJoin(place, eq(place.id, goneReport.placeId))
        .innerJoin(profile, eq(profile.id, goneReport.profileId))
        .where(eq(goneReport.collectionId, input.collectionId))
        .orderBy(desc(goneReport.createdAt));
      const byPlace = new Map<
        string,
        {
          placeId: string;
          title: string;
          archived: boolean;
          reports: {
            name: string;
            kind: (typeof REPORT_KINDS)[number];
            note: string | null;
            createdAt: Date;
          }[];
        }
      >();
      for (const r of rows) {
        const entry = byPlace.get(r.placeId) ?? {
          placeId: r.placeId,
          title: r.title,
          archived: r.status !== "published",
          reports: [],
        };
        entry.reports.push({
          name: r.name,
          kind: r.kind,
          note: r.note,
          createdAt: r.createdAt,
        });
        byPlace.set(r.placeId, entry);
      }
      return [...byPlace.values()].sort(
        (a, b) => b.reports.length - a.reports.length,
      );
    }),

  /**
   * Moderators: act on a place's reports. `mark` sets the map's status
   * field to Gone (the pin stays, marking where it was); `archive` removes
   * the place; `dismiss` means it's still there. Each clears the reports.
   */
  resolve: authedProcedure
    .input(
      z.object({
        placeId: idSchema,
        action: z.enum(["mark", "archive", "dismiss"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const target = await ctx.db.query.place.findFirst({
        where: eq(place.id, input.placeId),
      });
      if (!target)
        throw new TRPCError({ code: "NOT_FOUND", message: "Place not found" });
      const access = await requireCap(
        ctx.db,
        target.collectionId,
        ctx.profile,
        "review",
      );
      const proposals = proposalRouter.createCaller(ctx);
      if (input.action !== "dismiss" && target.status !== "published") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "The place is already off the map",
        });
      }
      if (input.action === "mark") {
        const key = goneField(access.collection.fields);
        if (!key) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "This map has no field for marking places gone",
          });
        }
        const draft = draftOfPlace(target);
        await proposals.create({
          kind: "edit",
          placeId: target.id,
          draft: {
            ...draft,
            attributes: { ...draft.attributes, [key]: GONE_VALUE },
          },
          note: "Marked gone after visitors reported it",
        });
      } else if (input.action === "archive") {
        await proposals.create({
          kind: "archive",
          placeId: target.id,
          note: "Removed after visitors reported it gone",
        });
      }
      await ctx.db.delete(goneReport).where(eq(goneReport.placeId, target.id));
      return { ok: true };
    }),
});
