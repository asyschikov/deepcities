import { createId } from "@paralleldrive/cuid2";
import { TRPCError } from "@trpc/server";
import { and, desc, eq, inArray, sql } from "drizzle-orm";
import { z } from "zod/v4";
import { PROPOSAL_STATUSES } from "~/lib/constants";
import type { Database } from "~/lib/db";
import { photo, place, proposal, route } from "~/lib/db/schema";
import { attributeIssues, compactAttributes } from "~/lib/fields";
import {
  draftOfRoute,
  idSchema,
  type PlaceDraft,
  placeDraftSchema,
  type RouteDraft,
  routeDraftSchema,
} from "~/lib/validation";
import { type Collection, requireCap } from "../access";
import { authedProcedure, router } from "../init";

type Proposal = typeof proposal.$inferSelect;

/**
 * Translations may be in the languages the map offers, or in ones the object
 * already has (kept when a map stops offering a language, so re-offering it
 * brings them back).
 */
const assertLanguages = (
  coll: Collection,
  draftLangs: string[],
  currentLangs: string[],
) => {
  const allowed = new Set<string>([
    coll.language,
    ...coll.languages,
    ...currentLangs,
  ]);
  const bad = [...new Set(draftLangs.filter((l) => !allowed.has(l)))];
  if (bad.length > 0) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `This map isn't offered in: ${bad.join(", ")} (its languages: ${[coll.language, ...coll.languages].join(", ")})`,
    });
  }
};

const langsOfRoute = (r: {
  translations?: object;
  stops: { translations?: object }[];
  legs: { translations?: object }[];
}): string[] => [
  ...Object.keys(r.translations ?? {}),
  ...r.stops.flatMap((s) => Object.keys(s.translations ?? {})),
  ...r.legs.flatMap((l) => Object.keys(l.translations ?? {})),
];

/** Translations into the map's own language are meaningless: drop them. */
const withoutBase = <T extends Partial<Record<string, unknown>>>(
  translations: T | undefined,
  base: string,
): T =>
  Object.fromEntries(
    Object.entries(translations ?? {}).filter(([l]) => l !== base),
  ) as T;

/**
 * Check a draft against the map (category, custom fields, photos) and
 * return it normalised (empty custom-field values dropped).
 */
const fitDraft = async (
  db: Database,
  coll: Collection,
  input: PlaceDraft,
): Promise<PlaceDraft> => {
  if (!coll.categories.some((c) => c.key === input.category)) {
    throw new TRPCError({ code: "BAD_REQUEST", message: "Unknown category" });
  }
  const draft = {
    ...input,
    attributes: compactAttributes(input.attributes),
    translations: withoutBase(input.translations, coll.language),
  };
  const textKeys = new Set(
    coll.fields
      .filter((f) => f.type === "text" || f.type === "longtext")
      .map((f) => f.key),
  );
  const badTranslated = Object.values(draft.translations).flatMap((tr) =>
    Object.keys(tr?.attributes ?? {}).filter((k) => !textKeys.has(k)),
  );
  if (badTranslated.length > 0) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Only text fields can be translated: ${[...new Set(badTranslated)].join(", ")}`,
    });
  }
  const issues = attributeIssues(coll.fields, draft.attributes);
  if (issues.length > 0) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Invalid fields: ${issues.map((i) => `${i.key} ${i.message}`).join("; ")}`,
    });
  }
  await assertPhotos(db, coll, draft.photoIds);
  return draft;
};

const assertPhotos = async (
  db: Database,
  coll: Collection,
  photoIds: string[],
) => {
  if (photoIds.length === 0) return;
  const photos = await db
    .select({ id: photo.id })
    .from(photo)
    .where(and(inArray(photo.id, photoIds), eq(photo.collectionId, coll.id)));
  if (photos.length !== new Set(photoIds).size) {
    throw new TRPCError({ code: "BAD_REQUEST", message: "Unknown photo" });
  }
};

/**
 * Check a route draft against the map: place stops must be places on this
 * map, and their name/position snapshots are refreshed from the place.
 */
const fitRouteDraft = async (
  db: Database,
  coll: Collection,
  input: RouteDraft,
): Promise<RouteDraft> => {
  const ids = [
    ...new Set(input.stops.flatMap((s) => (s.placeId ? [s.placeId] : []))),
  ];
  const places =
    ids.length > 0
      ? await db.query.place.findMany({
          where: and(inArray(place.id, ids), eq(place.collectionId, coll.id)),
          columns: {
            id: true,
            title: true,
            lat: true,
            lng: true,
            status: true,
          },
        })
      : [];
  const byId = new Map(places.map((p) => [p.id, p]));
  const missing = ids.filter((id) => !byId.has(id));
  if (missing.length > 0) {
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Stops refer to places not on this map: ${missing.join(", ")}`,
    });
  }
  await assertPhotos(db, coll, input.photoIds);
  return {
    ...input,
    translations: withoutBase(input.translations, coll.language),
    legs: input.legs.map((l) => ({
      ...l,
      translations: withoutBase(l.translations, coll.language),
    })),
    stops: input.stops.map((input) => {
      const s = {
        ...input,
        translations: withoutBase(input.translations, coll.language),
      };
      const p = s.placeId ? byId.get(s.placeId) : undefined;
      // Archived places keep the snapshot the route already had.
      return p && p.status === "published"
        ? { ...s, name: p.title, lat: p.lat, lng: p.lng }
        : s;
    }),
  };
};

/**
 * Publish an approved proposal: write the draft onto `place` and mark the
 * proposal approved, in one D1 batch so they can't diverge.
 */
const applyProposal = async (
  db: Database,
  p: Proposal,
  reviewerId: string,
  reviewNote: string | null,
): Promise<string> => {
  const now = new Date();
  const placeId = p.placeId ?? createId();
  const markApproved = db
    .update(proposal)
    .set({
      status: "approved",
      placeId,
      reviewedBy: reviewerId,
      reviewNote,
      reviewedAt: now,
    })
    .where(eq(proposal.id, p.id));

  if (p.kind === "create") {
    if (!p.draft)
      throw new TRPCError({ code: "BAD_REQUEST", message: "Empty proposal" });
    await db.batch([
      db.insert(place).values({
        ...p.draft,
        id: placeId,
        collectionId: p.collectionId,
        createdBy: p.proposedBy,
        createdAt: now,
        updatedAt: now,
      }),
      markApproved,
    ]);
    return placeId;
  }

  const current = await db.query.place.findFirst({
    where: eq(place.id, placeId),
  });
  if (current?.status !== "published") {
    throw new TRPCError({
      code: "CONFLICT",
      message: "This place has been removed from the map",
    });
  }
  const changes =
    p.kind === "archive"
      ? { status: "archived" as const }
      : p.draft
        ? { ...p.draft }
        : null;
  if (!changes)
    throw new TRPCError({ code: "BAD_REQUEST", message: "Empty proposal" });
  await db.batch([
    db
      .update(place)
      .set({ ...changes, revision: sql`${place.revision} + 1`, updatedAt: now })
      .where(eq(place.id, placeId)),
    markApproved,
  ]);
  return placeId;
};

/** Publish an approved route proposal (create, edit or archive). */
const applyRouteProposal = async (
  db: Database,
  p: Proposal,
  reviewerId: string,
  reviewNote: string | null,
): Promise<string> => {
  const now = new Date();
  const routeId = p.routeId ?? createId();
  const markApproved = db
    .update(proposal)
    .set({
      status: "approved",
      routeId,
      reviewedBy: reviewerId,
      reviewNote,
      reviewedAt: now,
    })
    .where(eq(proposal.id, p.id));

  if (p.kind === "create") {
    if (!p.routeDraft)
      throw new TRPCError({ code: "BAD_REQUEST", message: "Empty proposal" });
    await db.batch([
      db.insert(route).values({
        ...draftOfRoute(p.routeDraft),
        id: routeId,
        collectionId: p.collectionId,
        createdBy: p.proposedBy,
        createdAt: now,
        updatedAt: now,
      }),
      markApproved,
    ]);
    return routeId;
  }

  const current = await db.query.route.findFirst({
    where: eq(route.id, routeId),
    columns: { status: true },
  });
  if (current?.status !== "published") {
    throw new TRPCError({
      code: "CONFLICT",
      message: "This route has been removed from the map",
    });
  }
  const changes =
    p.kind === "archive"
      ? { status: "archived" as const }
      : p.routeDraft
        ? draftOfRoute(p.routeDraft)
        : null;
  if (!changes)
    throw new TRPCError({ code: "BAD_REQUEST", message: "Empty proposal" });
  await db.batch([
    db
      .update(route)
      .set({ ...changes, revision: sql`${route.revision} + 1`, updatedAt: now })
      .where(eq(route.id, routeId)),
    markApproved,
  ]);
  return routeId;
};

/** Apply any approved proposal; returns the place or route id it touched. */
const applyAny = async (
  db: Database,
  p: Proposal,
  reviewerId: string,
  reviewNote: string | null,
): Promise<{ placeId: string | null; routeId: string | null }> =>
  p.subject === "route"
    ? {
        placeId: null,
        routeId: await applyRouteProposal(db, p, reviewerId, reviewNote),
      }
    : {
        placeId: await applyProposal(db, p, reviewerId, reviewNote),
        routeId: null,
      };

const loadProposal = async (db: Database, id: string) => {
  const found = await db.query.proposal.findFirst({
    where: eq(proposal.id, id),
  });
  if (!found)
    throw new TRPCError({ code: "NOT_FOUND", message: "Proposal not found" });
  return found;
};

export const proposalRouter = router({
  /**
   * Suggest a new place, an edit, or a removal. Moderators and above skip
   * the queue: their proposals are approved immediately (still recorded in
   * history).
   */
  create: authedProcedure
    .input(
      z.discriminatedUnion("kind", [
        z.object({
          kind: z.literal("create"),
          collectionId: idSchema,
          draft: placeDraftSchema,
          note: z.string().trim().max(1000).nullable(),
        }),
        z.object({
          kind: z.literal("edit"),
          placeId: idSchema,
          draft: placeDraftSchema,
          note: z.string().trim().max(1000).nullable(),
        }),
        z.object({
          kind: z.literal("archive"),
          placeId: idSchema,
          note: z.string().trim().min(5).max(1000),
        }),
      ]),
    )
    .mutation(async ({ ctx, input }) => {
      const target =
        input.kind === "create"
          ? null
          : await ctx.db.query.place.findFirst({
              where: eq(place.id, input.placeId),
            });
      if (input.kind !== "create" && target?.status !== "published") {
        throw new TRPCError({ code: "NOT_FOUND", message: "Place not found" });
      }
      const collectionId =
        input.kind === "create"
          ? input.collectionId
          : (target?.collectionId ?? "");
      const access = await requireCap(
        ctx.db,
        collectionId,
        ctx.profile,
        "propose",
      );
      const draft =
        input.kind === "archive"
          ? null
          : await fitDraft(ctx.db, access.collection, input.draft);
      if (draft)
        assertLanguages(
          access.collection,
          Object.keys(draft.translations),
          Object.keys(target?.translations ?? {}),
        );

      const row: Proposal = {
        id: createId(),
        collectionId,
        subject: "place",
        placeId: target?.id ?? null,
        routeId: null,
        routeDraft: null,
        kind: input.kind,
        status: "pending",
        draft,
        note: input.note,
        baseRevision: target?.revision ?? null,
        proposedBy: ctx.profile.id,
        reviewedBy: null,
        reviewNote: null,
        createdAt: new Date(),
        reviewedAt: null,
      };
      await ctx.db.insert(proposal).values(row);

      if (access.can.review) {
        const placeId = await applyProposal(ctx.db, row, ctx.profile.id, null);
        return { id: row.id, status: "approved" as const, placeId };
      }
      return { id: row.id, status: "pending" as const, placeId: row.placeId };
    }),

  /**
   * Suggest a new route, an edit, or a removal. Same rules as places:
   * moderators and above publish immediately.
   */
  createRoute: authedProcedure
    .input(
      z.discriminatedUnion("kind", [
        z.object({
          kind: z.literal("create"),
          collectionId: idSchema,
          draft: routeDraftSchema,
          note: z.string().trim().max(1000).nullable(),
        }),
        z.object({
          kind: z.literal("edit"),
          routeId: idSchema,
          draft: routeDraftSchema,
          note: z.string().trim().max(1000).nullable(),
        }),
        z.object({
          kind: z.literal("archive"),
          routeId: idSchema,
          note: z.string().trim().min(5).max(1000),
        }),
      ]),
    )
    .mutation(async ({ ctx, input }) => {
      const target =
        input.kind === "create"
          ? null
          : await ctx.db.query.route.findFirst({
              where: eq(route.id, input.routeId),
              columns: {
                id: true,
                collectionId: true,
                status: true,
                revision: true,
                translations: true,
                stops: true,
                legs: true,
              },
            });
      const currentRoute = target;
      if (input.kind !== "create" && target?.status !== "published") {
        throw new TRPCError({ code: "NOT_FOUND", message: "Route not found" });
      }
      const collectionId =
        input.kind === "create"
          ? input.collectionId
          : (target?.collectionId ?? "");
      const access = await requireCap(
        ctx.db,
        collectionId,
        ctx.profile,
        "propose",
      );
      const routeDraft =
        input.kind === "archive"
          ? null
          : await fitRouteDraft(ctx.db, access.collection, input.draft);
      if (routeDraft)
        assertLanguages(
          access.collection,
          langsOfRoute(routeDraft),
          currentRoute ? langsOfRoute(currentRoute) : [],
        );
      const row: Proposal = {
        id: createId(),
        collectionId,
        subject: "route",
        placeId: null,
        routeId: target?.id ?? null,
        kind: input.kind,
        status: "pending",
        draft: null,
        routeDraft,
        note: input.note,
        baseRevision: target?.revision ?? null,
        proposedBy: ctx.profile.id,
        reviewedBy: null,
        reviewNote: null,
        createdAt: new Date(),
        reviewedAt: null,
      };
      await ctx.db.insert(proposal).values(row);
      if (access.can.review) {
        const routeId = await applyRouteProposal(
          ctx.db,
          row,
          ctx.profile.id,
          null,
        );
        return { id: row.id, status: "approved" as const, routeId };
      }
      return { id: row.id, status: "pending" as const, routeId: row.routeId };
    }),

  /** Moderation queue (or history) for a collection. */
  queue: authedProcedure
    .input(
      z.object({
        collectionId: idSchema,
        statuses: z.array(z.enum(PROPOSAL_STATUSES)).min(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      await requireCap(ctx.db, input.collectionId, ctx.profile, "review");
      const pendingOnly =
        input.statuses.length === 1 && input.statuses[0] === "pending";
      return ctx.db.query.proposal.findMany({
        where: and(
          eq(proposal.collectionId, input.collectionId),
          inArray(proposal.status, input.statuses),
        ),
        with: {
          author: { columns: { id: true, name: true } },
          reviewer: { columns: { id: true, name: true } },
          place: true,
          route: true,
        },
        orderBy: pendingOnly
          ? (p, { asc }) => asc(p.createdAt)
          : desc(proposal.reviewedAt),
        limit: 100,
      });
    }),

  /** The viewer's own proposals on a collection, newest first. */
  mine: authedProcedure
    .input(z.object({ collectionId: idSchema }))
    .query(({ ctx, input }) =>
      ctx.db.query.proposal.findMany({
        where: and(
          eq(proposal.collectionId, input.collectionId),
          eq(proposal.proposedBy, ctx.profile.id),
        ),
        with: {
          place: { columns: { id: true, title: true } },
          route: { columns: { id: true, title: true } },
          reviewer: { columns: { id: true, name: true } },
        },
        orderBy: desc(proposal.createdAt),
        limit: 100,
      }),
    ),

  review: authedProcedure
    .input(
      z.object({
        proposalId: idSchema,
        decision: z.enum(["approve", "reject"]),
        note: z.string().trim().max(1000).nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const found = await loadProposal(ctx.db, input.proposalId);
      await requireCap(ctx.db, found.collectionId, ctx.profile, "review");
      if (found.status !== "pending") {
        throw new TRPCError({ code: "CONFLICT", message: "Already reviewed" });
      }
      if (input.decision === "approve") {
        const ids = await applyAny(ctx.db, found, ctx.profile.id, input.note);
        return { status: "approved" as const, ...ids };
      }
      await ctx.db
        .update(proposal)
        .set({
          status: "rejected",
          reviewedBy: ctx.profile.id,
          reviewNote: input.note,
          reviewedAt: new Date(),
        })
        .where(eq(proposal.id, found.id));
      return {
        status: "rejected" as const,
        placeId: found.placeId,
        routeId: found.routeId,
      };
    }),

  withdraw: authedProcedure
    .input(z.object({ proposalId: idSchema }))
    .mutation(async ({ ctx, input }) => {
      const found = await loadProposal(ctx.db, input.proposalId);
      if (found.proposedBy !== ctx.profile.id || found.status !== "pending") {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Can't withdraw this",
        });
      }
      await ctx.db
        .update(proposal)
        .set({ status: "withdrawn" })
        .where(eq(proposal.id, found.id));
      return { ok: true };
    }),
});
