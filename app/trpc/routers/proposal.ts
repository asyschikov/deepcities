import { createId } from "@paralleldrive/cuid2";
import { TRPCError } from "@trpc/server";
import { and, desc, eq, inArray, sql } from "drizzle-orm";
import { z } from "zod/v4";
import { type PlaceDetail, PROPOSAL_STATUSES } from "~/lib/constants";
import type { Database } from "~/lib/db";
import {
  collectionPlace,
  photo,
  place,
  placeOverride,
  proposal,
  route,
} from "~/lib/db/schema";
import { attributeIssues, compactAttributes } from "~/lib/fields";
import {
  isEmptyOverride,
  NO_OVERRIDE,
  normalizeOverride,
  patchOverride,
  stableJson,
  withOverride,
} from "~/lib/overrides";
import {
  draftOfRoute,
  idSchema,
  type OverrideDraft,
  overrideAttributesSchema,
  type PlaceDraft,
  placeDraftSchema,
  type RouteDraft,
  routeDraftSchema,
} from "~/lib/validation";
import { detailForNew, homeIdOf, wouldCycle } from "~/lib/views";
import { type Collection, requireCap } from "../access";
import { authedProcedure, router } from "../init";
import {
  loadViewMap,
  overridesOf,
  photoMapIds,
  poolWhere,
  shapeOf,
} from "../map-places";

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
 * Check a draft's parent: a published place on the same home map, not the
 * place itself or one of its own parts. Returns the parent id (or null).
 */
const fitParent = async (
  db: Database,
  coll: Collection,
  placeId: string | null,
  parentId: string | null,
): Promise<string | null> => {
  if (!parentId) return null;
  if (parentId === placeId)
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "A place can't be its own parent",
    });
  // Walk up from the parent (clusters are shallow; the cap guards bad data).
  const parentOf = new Map<string, string | null>();
  let at: string | null = parentId;
  for (let depth = 0; at && depth < 20 && !parentOf.has(at); depth++) {
    const row: { parentId: string | null } | undefined =
      await db.query.place.findFirst({
        where: eq(place.id, at),
        columns: { parentId: true },
      });
    if (!row) break;
    parentOf.set(at, row.parentId);
    at = row.parentId;
  }
  if (wouldCycle(placeId, parentId, (id) => parentOf.get(id)))
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "The parent is part of this place: that would make a loop",
    });
  const parent = await db.query.place.findFirst({
    where: eq(place.id, parentId),
    columns: { collectionId: true, status: true },
  });
  if (parent?.status !== "published" || parent.collectionId !== coll.id)
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Unknown parent: no place ${parentId} on this map`,
    });
  return parentId;
};

/**
 * Check a draft against the map (category, custom fields, photos, parent)
 * and return it normalised (empty custom-field values dropped) and complete:
 * `parentId` and `detail` left out keep the current place's, or for a new
 * place none and `newDetail`.
 */
const fitDraft = async (
  db: Database,
  coll: Collection,
  input: PlaceDraft,
  current: { id: string; parentId: string | null; detail: PlaceDetail } | null,
  newDetail: PlaceDetail = "city",
): Promise<PlaceDraft> => {
  if (!coll.categories.some((c) => c.key === input.category)) {
    throw new TRPCError({ code: "BAD_REQUEST", message: "Unknown category" });
  }
  const kept = current?.parentId ?? null;
  const wanted = input.parentId === undefined ? kept : input.parentId;
  // An unchanged parent isn't re-checked: edits to a part of a cluster that
  // was since removed still go through.
  const parentId =
    wanted === kept
      ? kept
      : await fitParent(db, coll, current?.id ?? null, wanted);
  const draft = {
    ...input,
    attributes: compactAttributes(input.attributes),
    translations: withoutBase(input.translations, coll.language),
    parentId,
    detail: input.detail ?? current?.detail ?? newDetail,
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
    .where(
      and(
        inArray(photo.id, photoIds),
        inArray(photo.collectionId, await photoMapIds(db, coll)),
      ),
    );
  if (photos.length !== new Set(photoIds).size) {
    throw new TRPCError({ code: "BAD_REQUEST", message: "Unknown photo" });
  }
};

/**
 * Check a route draft against the map: place stops must be places in this
 * map's pool (its own, or a view's source's, at any detail), and their
 * name/position snapshots are refreshed from the place.
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
          where: and(inArray(place.id, ids), poolWhere(coll)),
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
    const list = p.listId
      ? await loadViewMap(db, p.listId).catch(() => null)
      : null;
    const joins =
      list?.view?.list && list.view.source === p.collectionId
        ? [
            db.insert(collectionPlace).values({
              collectionId: list.id,
              placeId,
              addedAt: now,
              addedBy: p.proposedBy,
            }),
          ]
        : [];
    await db.batch([
      db.insert(place).values({
        ...p.draft,
        id: placeId,
        collectionId: p.collectionId,
        createdBy: p.proposedBy,
        createdAt: now,
        updatedAt: now,
      }),
      ...joins,
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
  if (p.kind === "edit") await pruneOverrides(db, placeId);
  return placeId;
};

/**
 * After the home place changed: drop override keys that now equal its
 * values (and overrides left empty), so no no-op overrides stay stored.
 */
const pruneOverrides = async (db: Database, placeId: string) => {
  const [home, rows] = await Promise.all([
    db.query.place.findFirst({
      where: eq(place.id, placeId),
      columns: { attributes: true, category: true },
    }),
    db.query.placeOverride.findMany({
      where: eq(placeOverride.placeId, placeId),
    }),
  ]);
  if (!home) return;
  const changed = rows.flatMap((r) => {
    const next = normalizeOverride(home, r);
    return stableJson(next) ===
      stableJson({ attributes: r.attributes, category: r.category })
      ? []
      : [{ row: r, next }];
  });
  const [first, ...rest] = changed.map(({ row, next }) => {
    const where = and(
      eq(placeOverride.collectionId, row.collectionId),
      eq(placeOverride.placeId, row.placeId),
    );
    return isEmptyOverride(next)
      ? db.delete(placeOverride).where(where)
      : db.update(placeOverride).set(next).where(where);
  });
  if (first) await db.batch([first, ...rest]);
};

/**
 * Publish an approved override proposal: store the view map's override for
 * the place (normalised against the place as it is now; an empty one is
 * removed) and mark the proposal approved, in one batch.
 */
const applyOverrideProposal = async (
  db: Database,
  p: Proposal,
  reviewerId: string,
  reviewNote: string | null,
): Promise<string> => {
  const placeId = p.placeId ?? "";
  const home = await db.query.place.findFirst({
    where: eq(place.id, placeId),
    columns: { attributes: true, category: true, status: true },
  });
  if (home?.status !== "published")
    throw new TRPCError({
      code: "CONFLICT",
      message: "This place has been removed from the map",
    });
  if (!p.overrideDraft)
    throw new TRPCError({ code: "BAD_REQUEST", message: "Empty proposal" });
  const next = normalizeOverride(home, p.overrideDraft);
  const now = new Date();
  const where = and(
    eq(placeOverride.collectionId, p.collectionId),
    eq(placeOverride.placeId, placeId),
  );
  await db.batch([
    isEmptyOverride(next)
      ? db.delete(placeOverride).where(where)
      : db
          .insert(placeOverride)
          .values({
            collectionId: p.collectionId,
            placeId,
            ...next,
            updatedAt: now,
            updatedBy: p.proposedBy,
          })
          .onConflictDoUpdate({
            target: [placeOverride.collectionId, placeOverride.placeId],
            set: { ...next, updatedAt: now, updatedBy: p.proposedBy },
          }),
    db
      .update(proposal)
      .set({
        status: "approved",
        reviewedBy: reviewerId,
        reviewNote,
        reviewedAt: now,
      })
      .where(eq(proposal.id, p.id)),
  ]);
  return placeId;
};

/**
 * The statements that publish a membership proposal: add the place to the
 * list view (`create`) or take it off (`archive`), and mark it approved.
 */
const membershipWrites = (
  db: Database,
  p: Proposal,
  reviewerId: string,
  reviewNote: string | null,
  now: Date,
) => {
  const placeId = p.placeId ?? "";
  return [
    p.kind === "archive"
      ? db
          .delete(collectionPlace)
          .where(
            and(
              eq(collectionPlace.collectionId, p.collectionId),
              eq(collectionPlace.placeId, placeId),
            ),
          )
      : db
          .insert(collectionPlace)
          .values({
            collectionId: p.collectionId,
            placeId,
            addedAt: now,
            addedBy: p.proposedBy,
          })
          .onConflictDoNothing(),
    db
      .update(proposal)
      .set({
        status: "approved",
        reviewedBy: reviewerId,
        reviewNote,
        reviewedAt: now,
      })
      .where(eq(proposal.id, p.id)),
  ] as const;
};

/** Publish an approved membership proposal (after re-checking the place). */
const applyMembershipProposal = async (
  db: Database,
  p: Proposal,
  reviewerId: string,
  reviewNote: string | null,
): Promise<string> => {
  const placeId = p.placeId ?? "";
  if (p.kind !== "archive") {
    const [list, target] = await Promise.all([
      loadViewMap(db, p.collectionId),
      db.query.place.findFirst({
        where: eq(place.id, placeId),
        columns: { collectionId: true, status: true },
      }),
    ]);
    if (
      !list.view?.list ||
      target?.status !== "published" ||
      target.collectionId !== list.view.source
    )
      throw new TRPCError({
        code: "CONFLICT",
        message: "This place is no longer in this list's source",
      });
  }
  await db.batch(membershipWrites(db, p, reviewerId, reviewNote, new Date()));
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
        placeId:
          p.subject === "override"
            ? await applyOverrideProposal(db, p, reviewerId, reviewNote)
            : p.subject === "membership"
              ? await applyMembershipProposal(db, p, reviewerId, reviewNote)
              : await applyProposal(db, p, reviewerId, reviewNote),
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
      // A place added from a view map lives on the view's source.
      const from =
        input.kind === "create"
          ? await loadViewMap(ctx.db, input.collectionId)
          : null;
      const collectionId = from ? homeIdOf(from) : (target?.collectionId ?? "");
      const access = await requireCap(
        ctx.db,
        collectionId,
        ctx.profile,
        "propose",
      );
      // Added from a list view: the place also joins the list (on approval).
      const listId = from?.view?.list ? from.id : null;
      if (listId) await requireCap(ctx.db, listId, ctx.profile, "propose");
      const draft =
        input.kind === "archive"
          ? null
          : await fitDraft(
              ctx.db,
              access.collection,
              input.draft,
              target ?? null,
              from ? detailForNew(from) : "city",
            );
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
        overrideDraft: null,
        listId,
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
        overrideDraft: null,
        listId: null,
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

  /**
   * Suggest a view map's own values for one of its places (custom fields,
   * category): `attributes` and `category` are what the map should show
   * (null: no value there; category null: the home one), merged onto the
   * current override unless `reset`. Keys equal to the home values are not
   * stored. Goes through the view map's queue, with its permissions;
   * moderators+ publish immediately.
   */
  createOverride: authedProcedure
    .input(
      z.object({
        collectionId: idSchema,
        placeId: idSchema,
        attributes: overrideAttributesSchema.optional(),
        category: z.string().min(1).max(32).nullable().optional(),
        revert: z.array(z.string().min(1).max(32)).max(50).optional(),
        reset: z.boolean().optional(),
        note: z.string().trim().max(1000).nullable(),
        /** Only work out the override (`status` "would-update"); write nothing. */
        dryRun: z.boolean().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const access = await requireCap(
        ctx.db,
        input.collectionId,
        ctx.profile,
        "propose",
      );
      const map = access.collection;
      if (!map.view)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            "Only view maps have their own values: edit the place itself on its home map",
        });
      const target = await ctx.db.query.place.findFirst({
        where: eq(place.id, input.placeId),
      });
      if (
        target?.status !== "published" ||
        target.collectionId !== map.view.source
      )
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Place not found on this map's source",
        });
      const shape = await shapeOf(ctx.db, map);
      if (
        input.category &&
        !shape.categories.some((c) => c.key === input.category)
      )
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Unknown category",
        });
      const known = new Set([...shape.fields.map((f) => f.key), "category"]);
      const unknown = [
        ...Object.keys(input.attributes ?? {}),
        ...(input.revert ?? []),
      ].filter((k) => !known.has(k));
      if (unknown.length > 0)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Not fields of this map: ${[...new Set(unknown)].join(", ")}`,
        });
      const current = (await overridesOf(ctx.db, map, [target.id])).get(
        target.id,
      );
      const next = patchOverride(target, current, input);
      // Values are checked as the map will show them; "required" is the
      // home map's business (a view's own fields start out empty).
      const issues = attributeIssues(
        shape.fields.map((f) => ({ ...f, required: false })),
        withOverride(target, next).attributes,
      );
      if (issues.length > 0)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `Invalid fields: ${issues.map((i) => `${i.key} ${i.message}`).join("; ")}`,
        });
      const unchanged = stableJson(next) === stableJson(current ?? NO_OVERRIDE);
      if (unchanged || input.dryRun)
        return {
          id: null,
          status: unchanged
            ? ("unchanged" as const)
            : ("would-update" as const),
          placeId: target.id,
          override: next,
        };

      const row: Proposal = {
        id: createId(),
        collectionId: map.id,
        subject: "override",
        placeId: target.id,
        routeId: null,
        draft: null,
        routeDraft: null,
        overrideDraft: next,
        listId: null,
        kind: "edit",
        status: "pending",
        note: input.note,
        baseRevision: target.revision,
        proposedBy: ctx.profile.id,
        reviewedBy: null,
        reviewNote: null,
        createdAt: new Date(),
        reviewedAt: null,
      };
      await ctx.db.insert(proposal).values(row);
      if (access.can.review) {
        await applyOverrideProposal(ctx.db, row, ctx.profile.id, null);
        return {
          id: row.id,
          status: "approved" as const,
          placeId: target.id,
          override: next,
        };
      }
      return {
        id: row.id,
        status: "pending" as const,
        placeId: target.id,
        override: next,
      };
    }),

  /**
   * Add places of a list view's source to the list, or take them off: one
   * `membership` proposal per place that changes, on the list view (its
   * queue, its permissions, its history); moderators+ publish immediately.
   * Places already in (or out of) the list come back "unchanged".
   */
  setMembership: authedProcedure
    .input(
      z.object({
        collectionId: idSchema,
        action: z.enum(["add", "remove"]),
        placeIds: z.array(idSchema).min(1).max(100),
        note: z.string().trim().max(1000).nullable(),
        /** Only report what would change; write nothing. */
        dryRun: z.boolean().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const access = await requireCap(
        ctx.db,
        input.collectionId,
        ctx.profile,
        "propose",
      );
      const view = access.collection.view;
      if (!view?.list)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            'Only list views ("list": true) have places picked one by one',
        });
      const ids = [...new Set(input.placeIds)];
      const [places, members] = await Promise.all([
        ctx.db.query.place.findMany({
          where: inArray(place.id, ids),
          columns: { id: true, collectionId: true, status: true },
        }),
        ctx.db
          .select({ placeId: collectionPlace.placeId })
          .from(collectionPlace)
          .where(
            and(
              eq(collectionPlace.collectionId, input.collectionId),
              inArray(collectionPlace.placeId, ids),
            ),
          ),
      ]);
      const inList = new Set(members.map((m) => m.placeId));
      const adding = input.action === "add";
      if (adding) {
        const byId = new Map(places.map((p) => [p.id, p]));
        const missing = ids.filter((id) => {
          const p = byId.get(id);
          return p?.status !== "published" || p.collectionId !== view.source;
        });
        if (missing.length > 0)
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Not places of this list's source: ${missing.join(", ")}`,
          });
      }
      const changing = ids.filter((id) => inList.has(id) !== adding);
      const unchanged = ids
        .filter((id) => !changing.includes(id))
        .map((placeId) => ({ placeId, status: "unchanged" as const }));
      if (input.dryRun || changing.length === 0)
        return {
          results: [
            ...changing.map((placeId) => ({
              placeId,
              status: adding
                ? ("would-add" as const)
                : ("would-remove" as const),
            })),
            ...unchanged,
          ],
        };
      const now = new Date();
      const rows: Proposal[] = changing.map((placeId) => ({
        id: createId(),
        collectionId: input.collectionId,
        subject: "membership",
        placeId,
        routeId: null,
        draft: null,
        routeDraft: null,
        overrideDraft: null,
        listId: null,
        kind: adding ? "create" : "archive",
        status: "pending",
        note: input.note,
        baseRevision: null,
        proposedBy: ctx.profile.id,
        reviewedBy: null,
        reviewNote: null,
        createdAt: now,
        reviewedAt: null,
      }));
      const publish = access.can.review;
      const [first, ...rest] = rows.flatMap((row) => [
        ctx.db.insert(proposal).values(row),
        ...(publish
          ? membershipWrites(ctx.db, row, ctx.profile.id, null, now)
          : []),
      ]);
      if (first) await ctx.db.batch([first, ...rest]);
      return {
        results: [
          ...rows.map((r) => ({
            placeId: r.placeId ?? "",
            id: r.id,
            status: publish ? ("approved" as const) : ("pending" as const),
          })),
          ...unchanged,
        ],
      };
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
      const rows = await ctx.db.query.proposal.findMany({
        where: and(
          eq(proposal.collectionId, input.collectionId),
          inArray(proposal.status, input.statuses),
        ),
        with: {
          author: { columns: { id: true, name: true, avatarId: true } },
          reviewer: { columns: { id: true, name: true, avatarId: true } },
          place: true,
          route: true,
        },
        orderBy: pendingOnly
          ? (p, { asc }) => asc(p.createdAt)
          : desc(proposal.reviewedAt),
        limit: 100,
      });
      // Override proposals are reviewed against the map's current values.
      const overrideIds = rows.flatMap((p) =>
        p.subject === "override" && p.placeId ? [p.placeId] : [],
      );
      const overrides =
        overrideIds.length > 0
          ? await overridesOf(
              ctx.db,
              await loadViewMap(ctx.db, input.collectionId),
            )
          : new Map<string, OverrideDraft>();
      return rows.map((p) => ({
        ...p,
        /** Override proposals: the map's override as it is now. */
        currentOverride:
          p.subject === "override" && p.placeId
            ? (overrides.get(p.placeId) ?? NO_OVERRIDE)
            : null,
      }));
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
          reviewer: { columns: { id: true, name: true, avatarId: true } },
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
