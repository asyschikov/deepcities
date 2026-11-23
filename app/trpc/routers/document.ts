import { createId } from "@paralleldrive/cuid2";
import { TRPCError } from "@trpc/server";
import { and, desc, eq, inArray } from "drizzle-orm";
import { z } from "zod/v4";
import { DOCUMENT_SUBJECTS, MAX_PHOTOS_PER_DOCUMENT } from "~/lib/constants";
import type { Database } from "~/lib/db";
import {
  document,
  documentAttachment,
  documentRevision,
  photo,
  place,
  route,
} from "~/lib/db/schema";
import { normalizeDocumentDraft } from "~/lib/documents";
import {
  type DocumentAttachment,
  type DocumentDraft,
  documentDraftSchema,
  idSchema,
} from "~/lib/validation";
import { getAccess, requireCap } from "../access";
import { publicProcedure, router } from "../init";

/**
 * D1 allows at most 100 bound parameters per statement, so long id lists and
 * multi-row inserts are split into chunks.
 */
const ID_CHUNK = 90;
const ROW_CHUNK = 20; // attachment rows have 4 columns
const chunked = <T>(xs: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(xs.length / size) }, (_, i) =>
    xs.slice(i * size, (i + 1) * size),
  );
/** Run `run` per chunk of `ids` and concatenate the rows. */
const selectIn = async <R>(
  ids: string[],
  run: (chunk: string[]) => Promise<R[]>,
): Promise<R[]> => (await Promise.all(chunked(ids, ID_CHUNK).map(run))).flat();

const subjectSchema = z.object({
  subjectType: z.enum(DOCUMENT_SUBJECTS),
  subjectId: idSchema,
});

const photoMeta = (db: Database, ids: string[]) =>
  ids.length > 0
    ? db
        .select({
          id: photo.id,
          collectionId: photo.collectionId,
          width: photo.width,
          height: photo.height,
          credit: photo.credit,
          license: photo.license,
          sourceUrl: photo.sourceUrl,
        })
        .from(photo)
        .where(inArray(photo.id, ids))
    : Promise.resolve([]);

/** Reject photos, places and routes that aren't on this map. */
const checkReferences = async (
  db: Database,
  collectionId: string,
  draft: DocumentDraft,
) => {
  const photos = await photoMeta(db, draft.photoIds);
  const okPhotos = new Set(
    photos.filter((p) => p.collectionId === collectionId).map((p) => p.id),
  );
  const badPhotos = draft.photoIds.filter((id) => !okPhotos.has(id));
  if (badPhotos.length > 0)
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Unknown photos for this map: ${badPhotos.join(", ")}`,
    });

  const idsOf = (type: "place" | "route") =>
    draft.attachments
      .filter((a) => a.subjectType === type)
      .map((a) => a.subjectId);
  const placeIds = idsOf("place");
  const routeIds = idsOf("route");
  const [foundPlaces, foundRoutes] = await Promise.all([
    selectIn(placeIds, (ids) =>
      db
        .select({ id: place.id })
        .from(place)
        .where(
          and(eq(place.collectionId, collectionId), inArray(place.id, ids)),
        ),
    ),
    selectIn(routeIds, (ids) =>
      db
        .select({ id: route.id })
        .from(route)
        .where(
          and(eq(route.collectionId, collectionId), inArray(route.id, ids)),
        ),
    ),
  ]);
  const missing = (ids: string[], found: { id: string }[]) => {
    const known = new Set(found.map((r) => r.id));
    return ids.filter((id) => !known.has(id));
  };
  const badPlaces = missing(placeIds, foundPlaces);
  if (badPlaces.length > 0)
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Unknown places for this map: ${badPlaces.join(", ")}`,
    });
  const badRoutes = missing(routeIds, foundRoutes);
  if (badRoutes.length > 0)
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: `Unknown routes for this map: ${badRoutes.join(", ")}`,
    });
  const badMap = draft.attachments.find(
    (a) => a.subjectType === "collection" && a.subjectId !== collectionId,
  );
  if (badMap)
    throw new TRPCError({
      code: "BAD_REQUEST",
      message: "A document can only be attached to its own map",
    });
};

const attachmentRows = (documentId: string, list: DocumentAttachment[]) =>
  list.map((a, position) => ({ documentId, ...a, position }));

/** Insert statements for a document's attachments, in D1-sized chunks. */
const insertAttachments = (
  db: Database,
  documentId: string,
  list: DocumentAttachment[],
) =>
  chunked(attachmentRows(documentId, list), ROW_CHUNK).map((rows) =>
    db.insert(documentAttachment).values(rows),
  );

export const documentRouter = router({
  /**
   * Published documents of a map, optionally only those attached to one
   * subject (the map itself, a place or a route).
   */
  list: publicProcedure
    .input(
      z.object({ collectionId: idSchema, subject: subjectSchema.optional() }),
    )
    .query(async ({ ctx, input }) => {
      const { subject } = input;
      const ids = subject
        ? (
            await ctx.db
              .select({ id: documentAttachment.documentId })
              .from(documentAttachment)
              .where(
                and(
                  eq(documentAttachment.subjectType, subject.subjectType),
                  eq(documentAttachment.subjectId, subject.subjectId),
                ),
              )
              .orderBy(documentAttachment.position)
          ).map((r) => r.id)
        : null;
      if (ids?.length === 0) return [];
      const rows = await ctx.db.query.document.findMany({
        where: and(
          eq(document.collectionId, input.collectionId),
          eq(document.status, "published"),
          ids ? inArray(document.id, ids) : undefined,
        ),
        columns: {
          id: true,
          title: true,
          summary: true,
          photoIds: true,
          translations: true,
          updatedAt: true,
        },
        orderBy: (d, { asc }) => asc(d.createdAt),
      });
      return rows.map(({ photoIds, ...d }) => ({
        ...d,
        coverPhotoId: photoIds[0] ?? null,
      }));
    }),

  byId: publicProcedure
    .input(z.object({ documentId: idSchema }))
    .query(async ({ ctx, input }) => {
      const found = await ctx.db.query.document.findFirst({
        where: eq(document.id, input.documentId),
        with: {
          attachments: { orderBy: (a, { asc }) => asc(a.position) },
        },
      });
      if (!found)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Document not found",
        });
      const access = await getAccess(ctx.db, found.collectionId, ctx.profile);
      if (found.status === "archived" && !access.can.review)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Document not found",
        });

      const placeIds = found.attachments
        .filter((a) => a.subjectType === "place")
        .map((a) => a.subjectId);
      const [photos, places, history] = await Promise.all([
        photoMeta(ctx.db, found.photoIds),
        selectIn(placeIds, (ids) =>
          ctx.db
            .select({
              id: place.id,
              title: place.title,
              summary: place.summary,
              category: place.category,
              lat: place.lat,
              lng: place.lng,
              photoIds: place.photoIds,
              translations: place.translations,
            })
            .from(place)
            .where(and(inArray(place.id, ids), eq(place.status, "published"))),
        ),
        ctx.db.query.documentRevision.findMany({
          where: eq(documentRevision.documentId, found.id),
          columns: {
            id: true,
            revision: true,
            action: true,
            note: true,
            createdAt: true,
          },
          with: {
            editor: { columns: { id: true, name: true, avatarId: true } },
          },
          orderBy: desc(documentRevision.revision),
          limit: 50,
        }),
      ]);
      const placeById = new Map(places.map((p) => [p.id, p]));
      const photoById = new Map(photos.map((p) => [p.id, p]));
      const { attachments, ...doc } = found;
      return {
        document: doc,
        attachments,
        onMap: attachments.some((a) => a.subjectType === "collection"),
        /** Attached places in document order (published ones only). */
        places: placeIds.flatMap((id) => {
          const p = placeById.get(id);
          return p
            ? [
                {
                  ...p,
                  photoIds: undefined,
                  coverPhotoId: p.photoIds[0] ?? null,
                },
              ]
            : [];
        }),
        /** Photo metadata (attribution) in `photoIds` order. */
        photos: found.photoIds.flatMap((id) => {
          const p = photoById.get(id);
          return p ? [{ ...p, collectionId: undefined }] : [];
        }),
        can: access.can,
        history,
      };
    }),

  /**
   * Create (no `documentId`) or replace a document. Moderators+ only; the
   * change publishes immediately and is recorded as a revision.
   */
  save: publicProcedure
    .input(
      z.object({
        collectionId: idSchema,
        documentId: idSchema.optional(),
        /** Revision the editor started from; a mismatch means someone else saved. */
        baseRevision: z.number().int().min(1).optional(),
        draft: documentDraftSchema,
        note: z.string().trim().max(500).nullish(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await requireCap(ctx.db, input.collectionId, ctx.profile, "review");
      const editor = ctx.profile?.id ?? null;
      const draft = normalizeDocumentDraft(input.draft);
      if (draft.photoIds.length > MAX_PHOTOS_PER_DOCUMENT)
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: `At most ${MAX_PHOTOS_PER_DOCUMENT} pictures per document`,
        });
      await checkReferences(ctx.db, input.collectionId, draft);
      const now = new Date();
      const { attachments, ...fields } = draft;

      if (!input.documentId) {
        const id = createId();
        await ctx.db.batch([
          ctx.db.insert(document).values({
            id,
            collectionId: input.collectionId,
            ...fields,
            createdBy: editor,
            updatedBy: editor,
            createdAt: now,
            updatedAt: now,
          }),
          ...insertAttachments(ctx.db, id, attachments),
          ctx.db.insert(documentRevision).values({
            id: createId(),
            documentId: id,
            revision: 1,
            action: "created",
            draft,
            note: input.note ?? null,
            editedBy: editor,
            createdAt: now,
          }),
        ]);
        return { id, revision: 1 };
      }

      const current = await ctx.db.query.document.findFirst({
        where: eq(document.id, input.documentId),
      });
      if (!current || current.collectionId !== input.collectionId)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Document not found",
        });
      if (input.baseRevision && input.baseRevision !== current.revision)
        throw new TRPCError({
          code: "CONFLICT",
          message: "Someone else changed this document since you opened it",
        });
      const revision = current.revision + 1;
      await ctx.db.batch([
        ctx.db
          .update(document)
          .set({
            ...fields,
            status: "published",
            revision,
            updatedBy: editor,
            updatedAt: now,
          })
          .where(eq(document.id, current.id)),
        ctx.db
          .delete(documentAttachment)
          .where(eq(documentAttachment.documentId, current.id)),
        ...insertAttachments(ctx.db, current.id, attachments),
        ctx.db.insert(documentRevision).values({
          id: createId(),
          documentId: current.id,
          revision,
          action: "edited",
          draft,
          note: input.note ?? null,
          editedBy: editor,
          createdAt: now,
        }),
      ]);
      return { id: current.id, revision };
    }),

  /** Hide a document everywhere; it stays in history and can be re-saved. */
  archive: publicProcedure
    .input(
      z.object({
        documentId: idSchema,
        note: z.string().trim().min(3).max(500),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const current = await ctx.db.query.document.findFirst({
        where: eq(document.id, input.documentId),
        with: { attachments: { orderBy: (a, { asc }) => asc(a.position) } },
      });
      if (!current)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Document not found",
        });
      await requireCap(ctx.db, current.collectionId, ctx.profile, "review");
      const now = new Date();
      const revision = current.revision + 1;
      await ctx.db.batch([
        ctx.db
          .update(document)
          .set({
            status: "archived",
            revision,
            updatedBy: ctx.profile?.id ?? null,
            updatedAt: now,
          })
          .where(eq(document.id, current.id)),
        ctx.db.insert(documentRevision).values({
          id: createId(),
          documentId: current.id,
          revision,
          action: "archived",
          draft: {
            title: current.title,
            summary: current.summary,
            body: current.body,
            photoIds: current.photoIds,
            translations: current.translations,
            attachments: current.attachments.map(
              ({ subjectType, subjectId }) => ({ subjectType, subjectId }),
            ),
          },
          note: input.note,
          editedBy: ctx.profile?.id ?? null,
          createdAt: now,
        }),
      ]);
      return { ok: true };
    }),
});
