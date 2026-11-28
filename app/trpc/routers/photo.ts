import { createId } from "@paralleldrive/cuid2";
import { TRPCError } from "@trpc/server";
import { inArray } from "drizzle-orm";
import { z } from "zod/v4";
import { MAX_PHOTO_BYTES, PHOTO_LICENSE } from "~/lib/constants";
import { chunked, rowChunk } from "~/lib/db/chunk";
import { photo } from "~/lib/db/schema";
import { idSchema } from "~/lib/validation";
import { requireCap } from "../access";
import { authedProcedure, router } from "../init";

const EXT = {
  "image/webp": "webp",
  "image/jpeg": "jpg",
  "image/png": "png",
} as const;

export const photoRouter = router({
  /**
   * Store a (client-resized, WebP) photo in R2. The photo is only shown once
   * a proposal referencing it is approved.
   */
  upload: authedProcedure
    .input(
      z.object({
        collectionId: idSchema,
        base64: z.string().max(Math.ceil((MAX_PHOTO_BYTES * 4) / 3) + 4),
        contentType: z.enum(["image/webp", "image/jpeg", "image/png"]),
        width: z.number().int().min(1).max(8000),
        height: z.number().int().min(1).max(8000),
        /** Attribution, required when the uploader isn't the author. */
        credit: z.string().trim().min(1).max(200).nullish(),
        license: z.string().trim().min(1).max(80).nullish(),
        sourceUrl: z
          .url({ protocol: /^https?$/ })
          .max(500)
          .nullish(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await requireCap(ctx.db, input.collectionId, ctx.profile, "propose");
      const bytes = Uint8Array.from(atob(input.base64), (c) => c.charCodeAt(0));
      if (bytes.length > MAX_PHOTO_BYTES) {
        throw new TRPCError({
          code: "PAYLOAD_TOO_LARGE",
          message: "Photo too large",
        });
      }
      const id = createId();
      const ext = EXT[input.contentType];
      const objectKey = `collections/${input.collectionId}/photos/${id}.${ext}`;
      const own = !input.credit && !input.sourceUrl;
      await ctx.env.R2.put(objectKey, bytes, {
        httpMetadata: { contentType: input.contentType },
      });
      await ctx.db.insert(photo).values({
        id,
        collectionId: input.collectionId,
        objectKey,
        width: input.width,
        height: input.height,
        // Your own photo (no credit or source given): yours, under the
        // site's licence, which the form tells you about.
        credit: input.credit ?? (own ? ctx.profile.name : null),
        license: input.license ?? (own ? PHOTO_LICENSE : null),
        sourceUrl: input.sourceUrl ?? null,
        uploadedBy: ctx.profile.id,
        createdAt: new Date(),
      });
      return { id };
    }),

  /**
   * Give another map its own records of existing photos (copying a place).
   * The image files are shared: published photos are never deleted from R2.
   * Returns the new ids in the order given.
   */
  copy: authedProcedure
    .input(
      z.object({
        collectionId: idSchema,
        photoIds: z.array(idSchema).min(1).max(20),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await requireCap(ctx.db, input.collectionId, ctx.profile, "propose");
      const found = await ctx.db.query.photo.findMany({
        where: inArray(photo.id, input.photoIds),
      });
      const byId = new Map(found.map((p) => [p.id, p]));
      const missing = input.photoIds.filter((id) => !byId.has(id));
      if (missing.length > 0) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `Photos not found: ${missing.join(", ")}`,
        });
      }
      const rows = input.photoIds.flatMap((id) => {
        const src = byId.get(id);
        return src
          ? [
              {
                ...src,
                id: createId(),
                collectionId: input.collectionId,
                uploadedBy: ctx.profile.id,
                createdAt: new Date(),
              },
            ]
          : [];
      });
      // Ten columns a row: chunked to stay under D1's parameter limit.
      const [first, ...rest] = chunked(rows, rowChunk(10)).map((chunk) =>
        ctx.db.insert(photo).values(chunk),
      );
      if (first) await ctx.db.batch([first, ...rest]);
      return { ids: rows.map((r) => r.id) };
    }),
});
