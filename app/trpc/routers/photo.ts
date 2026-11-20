import { createId } from "@paralleldrive/cuid2";
import { TRPCError } from "@trpc/server";
import { z } from "zod/v4";
import { MAX_PHOTO_BYTES } from "~/lib/constants";
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
      await ctx.env.R2.put(objectKey, bytes, {
        httpMetadata: { contentType: input.contentType },
      });
      await ctx.db.insert(photo).values({
        id,
        collectionId: input.collectionId,
        objectKey,
        width: input.width,
        height: input.height,
        credit: input.credit ?? null,
        license: input.license ?? null,
        sourceUrl: input.sourceUrl ?? null,
        uploadedBy: ctx.profile.id,
        createdAt: new Date(),
      });
      return { id };
    }),
});
