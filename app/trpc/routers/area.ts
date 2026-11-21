import { createId } from "@paralleldrive/cuid2";
import { TRPCError } from "@trpc/server";
import { and, eq, inArray, isNotNull, sql } from "drizzle-orm";
import { z } from "zod/v4";
import { areaImportSchema, bboxOf, simplifyGeometry } from "~/lib/areas";
import { AREA_LEVELS } from "~/lib/constants";
import { area } from "~/lib/db/schema";
import { publicProcedure, router, superAdminProcedure } from "../init";

const sameCity = (city: string) =>
  sql`lower(${area.city}) = lower(${city.trim()})`;

export const areaRouter = router({
  /**
   * A city's area hierarchy without geometry (small): for breadcrumbs and
   * pickers. Shapes are fetched per area with `shapes`.
   */
  tree: publicProcedure
    .input(z.object({ city: z.string().trim().min(1).max(80) }))
    .query(({ ctx, input }) =>
      ctx.db
        .select({
          id: area.id,
          level: area.level,
          code: area.code,
          name: area.name,
          parentId: area.parentId,
          bbox: area.bbox,
        })
        .from(area)
        .where(sameCity(input.city))
        .orderBy(area.name),
    ),

  /** Which levels a city has areas for (to offer them as map layers). */
  levels: publicProcedure
    .input(z.object({ city: z.string().trim().min(1).max(80) }))
    .query(async ({ ctx, input }) => {
      const rows = await ctx.db
        .selectDistinct({ level: area.level })
        .from(area)
        .where(and(sameCity(input.city), isNotNull(area.geometry)));
      return AREA_LEVELS.filter((l) => rows.some((r) => r.level === l));
    }),

  /** Every area of one level with its boundary, for drawing on the map. */
  layer: publicProcedure
    .input(
      z.object({
        city: z.string().trim().min(1).max(80),
        level: z.enum(AREA_LEVELS),
      }),
    )
    .query(({ ctx, input }) =>
      ctx.db
        .select({
          id: area.id,
          level: area.level,
          code: area.code,
          name: area.name,
          geometry: area.geometry,
        })
        .from(area)
        .where(
          and(
            sameCity(input.city),
            eq(area.level, input.level),
            isNotNull(area.geometry),
          ),
        ),
    ),

  /**
   * Replace a city's areas (super admins; reference data, not proposals).
   * Areas are matched by level + code, so ids stay stable across imports;
   * areas missing from the import are removed.
   */
  import: superAdminProcedure
    .input(
      z.object({
        city: z.string().trim().min(1).max(80),
        source: z.string().trim().max(500).nullable(),
        areas: z.array(areaImportSchema).min(1).max(2000),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const key = (level: string, code: string) => `${level}:${code}`;
      const existing = await ctx.db
        .select({ id: area.id, level: area.level, code: area.code })
        .from(area)
        .where(sameCity(input.city));
      const ids = new Map([
        ...existing.map((a) => [key(a.level, a.code), a.id] as const),
        ...input.areas
          .filter(
            (a) =>
              !existing.some((e) => e.level === a.level && e.code === a.code),
          )
          .map((a) => [key(a.level, a.code), createId()] as const),
      ]);
      const missingParents = input.areas.filter(
        (a) => a.parent && !ids.has(key(a.parent.level, a.parent.code)),
      );
      if (missingParents.length > 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Unknown parents for: ${missingParents.map((a) => key(a.level, a.code)).join(", ")}`,
        });
      }
      const now = new Date();
      const rows = input.areas.map((a) => {
        const geometry = a.geometry ? simplifyGeometry(a.geometry) : null;
        return {
          id: ids.get(key(a.level, a.code)) ?? createId(),
          city: input.city,
          level: a.level,
          code: a.code,
          name: a.name,
          parentId: a.parent
            ? (ids.get(key(a.parent.level, a.parent.code)) ?? null)
            : null,
          geometry,
          bbox: geometry ? bboxOf(geometry) : null,
          source: input.source,
          updatedAt: now,
        };
      });
      const keep = rows.map((r) => r.id);
      const upserts = rows.map((r) =>
        ctx.db
          .insert(area)
          .values(r)
          .onConflictDoUpdate({
            target: area.id,
            set: {
              name: r.name,
              parentId: r.parentId,
              geometry: r.geometry,
              bbox: r.bbox,
              source: r.source,
              updatedAt: r.updatedAt,
            },
          }),
      );
      const chunks = Array.from(
        { length: Math.ceil(upserts.length / 50) },
        (_, i) => upserts.slice(i * 50, i * 50 + 50),
      );
      for (const chunk of chunks) {
        const [first, ...rest] = chunk;
        if (first) await ctx.db.batch([first, ...rest]);
      }
      const removed = existing.filter((e) => !keep.includes(e.id));
      if (removed.length > 0)
        await ctx.db.delete(area).where(
          and(
            sameCity(input.city),
            inArray(
              area.id,
              removed.map((r) => r.id),
            ),
          ),
        );
      return {
        city: input.city,
        created:
          rows.length - existing.filter((e) => keep.includes(e.id)).length,
        updated: existing.filter((e) => keep.includes(e.id)).length,
        removed: removed.length,
      };
    }),
});
