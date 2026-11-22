import { createId } from "@paralleldrive/cuid2";
import { TRPCError } from "@trpc/server";
import { and, count, eq } from "drizzle-orm";
import { z } from "zod/v4";
import { citySlug } from "~/lib/cities";
import { CONTRIBUTION_POLICIES, MEMBER_ROLES } from "~/lib/constants";
import {
  collection,
  collectionMember,
  place,
  profile,
  proposal,
} from "~/lib/db/schema";
import { removedFieldKeys } from "~/lib/fields";
import { canAssignRole } from "~/lib/permissions";
import {
  categoryDefSchema,
  collectionTranslationsSchema,
  contentLangSchema,
  emailSchema,
  fieldDefsSchema,
  idSchema,
  slugSchema,
} from "~/lib/validation";
import { getAccess, requireCap } from "../access";
import { publicProcedure, router, superAdminProcedure } from "../init";

const settingsSchema = z.object({
  title: z.string().trim().min(3).max(80),
  tagline: z.string().trim().max(140).nullable(),
  description: z.string().trim().max(4000).nullable(),
  city: z.string().trim().min(2).max(80),
  centerLat: z.number().min(-90).max(90),
  centerLng: z.number().min(-180).max(180),
  zoom: z.number().min(2).max(19),
  categories: z
    .array(categoryDefSchema)
    .min(1)
    .max(20)
    .refine((cs) => new Set(cs.map((c) => c.key)).size === cs.length, {
      message: "Category keys must be unique",
    }),
  contributionPolicy: z.enum(CONTRIBUTION_POLICIES),
  /** Custom place fields; omit to leave them unchanged. */
  fields: fieldDefsSchema.optional(),
  /** Content languages; omit to leave them unchanged. */
  language: contentLangSchema.optional(),
  languages: z.array(contentLangSchema).max(12).optional(),
  translations: collectionTranslationsSchema.optional(),
});

export const collectionRouter = router({
  list: publicProcedure.query(async ({ ctx }) => {
    const [rows, counts] = await Promise.all([
      ctx.db.query.collection.findMany({
        // A city's own map first.
        orderBy: (c, { asc, desc }) => [desc(c.cityDefault), asc(c.createdAt)],
      }),
      ctx.db
        .select({ collectionId: place.collectionId, n: count() })
        .from(place)
        .where(eq(place.status, "published"))
        .groupBy(place.collectionId),
    ]);
    const byId = new Map(counts.map((c) => [c.collectionId, c.n]));
    return rows.map((c) => ({
      id: c.id,
      slug: c.slug,
      citySlug: citySlug(c.city),
      cityDefault: c.cityDefault,
      title: c.title,
      tagline: c.tagline,
      city: c.city,
      placeCount: byId.get(c.id) ?? 0,
    }));
  }),

  /** The map page header: collection, viewer's role/capabilities, queue size. */
  bySlug: publicProcedure
    .input(
      z.object({
        slug: z.string().max(60),
        /** The URL's city segment; a map in another city is not found. */
        city: z.string().max(60).optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const found = await ctx.db.query.collection.findFirst({
        where: eq(collection.slug, input.slug),
        columns: { id: true, city: true },
      });
      if (!found || (input.city && citySlug(found.city) !== input.city))
        throw new TRPCError({ code: "NOT_FOUND", message: "Map not found" });
      const access = await getAccess(ctx.db, found.id, ctx.profile);
      const pendingCount = access.can.review
        ? ((
            await ctx.db
              .select({ n: count() })
              .from(proposal)
              .where(
                and(
                  eq(proposal.collectionId, found.id),
                  eq(proposal.status, "pending"),
                ),
              )
          )[0]?.n ?? 0)
        : 0;
      return { ...access, pendingCount };
    }),

  create: superAdminProcedure
    .input(settingsSchema.extend({ slug: slugSchema }))
    .mutation(async ({ ctx, input }) => {
      const taken = await ctx.db.query.collection.findFirst({
        where: eq(collection.slug, input.slug),
        columns: { id: true },
      });
      if (taken)
        throw new TRPCError({ code: "CONFLICT", message: "Slug is taken" });
      const id = createId();
      await ctx.db.insert(collection).values({
        ...input,
        fields: input.fields ?? [],
        id,
        createdBy: ctx.profile.id,
        createdAt: new Date(),
      });
      return { id, slug: input.slug, citySlug: citySlug(input.city) };
    }),

  updateSettings: publicProcedure
    .input(settingsSchema.extend({ collectionId: idSchema }))
    .mutation(async ({ ctx, input }) => {
      const { collectionId, ...settings } = input;
      const access = await requireCap(
        ctx.db,
        collectionId,
        ctx.profile,
        "manage",
      );
      const removed = settings.fields
        ? removedFieldKeys(access.collection.fields, settings.fields)
        : [];
      if (removed.length > 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Fields can't be deleted, only hidden ("hidden": true): ${removed.join(", ")}`,
        });
      }
      const keys = new Set(settings.categories.map((c) => c.key));
      const inUse = await ctx.db
        .selectDistinct({ category: place.category })
        .from(place)
        .where(eq(place.collectionId, collectionId));
      const orphaned = inUse.filter((p) => !keys.has(p.category));
      if (orphaned.length > 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Categories still used by places: ${orphaned.map((o) => o.category).join(", ")}`,
        });
      }
      const language = settings.language ?? access.collection.language;
      const languages = settings.languages
        ? [...new Set(settings.languages)].filter((l) => l !== language)
        : undefined;
      // The map's own language has no translations: its texts are the base.
      const translations = settings.translations
        ? Object.fromEntries(
            Object.entries(settings.translations).filter(
              ([l]) => l !== language,
            ),
          )
        : undefined;
      await ctx.db
        .update(collection)
        .set({ ...settings, languages, translations })
        .where(eq(collection.id, access.collection.id));
      return { ok: true };
    }),

  members: publicProcedure
    .input(z.object({ collectionId: idSchema }))
    .query(async ({ ctx, input }) => {
      await requireCap(ctx.db, input.collectionId, ctx.profile, "manage");
      const rows = await ctx.db.query.collectionMember.findMany({
        where: eq(collectionMember.collectionId, input.collectionId),
        with: { profile: { columns: { id: true, name: true, email: true } } },
        orderBy: (m, { asc }) => asc(m.createdAt),
      });
      return rows.map((m) => ({
        profileId: m.profileId,
        role: m.role,
        name: m.profile.name,
        email: m.profile.email,
        createdAt: m.createdAt,
      }));
    }),

  /** Assign, change or remove (role: null) a member's role, by email. */
  setMember: publicProcedure
    .input(
      z.object({
        collectionId: idSchema,
        email: emailSchema,
        role: z.enum(MEMBER_ROLES).nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const access = await requireCap(
        ctx.db,
        input.collectionId,
        ctx.profile,
        "manage",
      );
      const target = await ctx.db.query.profile.findFirst({
        where: eq(profile.email, input.email),
      });
      if (!target) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No user with that email. They need to sign in once first.",
        });
      }
      if (target.id === ctx.profile?.id && access.role !== "super_admin") {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You can't change your own role",
        });
      }
      const current = await ctx.db.query.collectionMember.findFirst({
        where: and(
          eq(collectionMember.collectionId, input.collectionId),
          eq(collectionMember.profileId, target.id),
        ),
      });
      if (
        !canAssignRole({
          actor: access.role,
          targetCurrent: current?.role ?? null,
          nextRole: input.role,
        })
      ) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Only a super admin can appoint or change map admins",
        });
      }
      const where = and(
        eq(collectionMember.collectionId, input.collectionId),
        eq(collectionMember.profileId, target.id),
      );
      if (input.role === null) {
        await ctx.db.delete(collectionMember).where(where);
      } else if (current) {
        await ctx.db
          .update(collectionMember)
          .set({ role: input.role, assignedBy: ctx.profile?.id })
          .where(where);
      } else {
        await ctx.db.insert(collectionMember).values({
          collectionId: input.collectionId,
          profileId: target.id,
          role: input.role,
          assignedBy: ctx.profile?.id,
          createdAt: new Date(),
        });
      }
      return { ok: true };
    }),
});
