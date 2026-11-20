import { TRPCError } from "@trpc/server";
import { and, desc, eq } from "drizzle-orm";
import { z } from "zod/v4";
import {
  createApiToken,
  createLoginLink,
  RateLimitedError,
} from "~/lib/auth.server";
import { apiToken, profile } from "~/lib/db/schema";
import { sendLoginEmail } from "~/lib/email.server";
import { emailSchema } from "~/lib/validation";
import { authedProcedure, publicProcedure, router } from "../init";

export const authRouter = router({
  me: publicProcedure.query(({ ctx }) =>
    ctx.profile
      ? {
          id: ctx.profile.id,
          name: ctx.profile.name,
          email: ctx.profile.email,
          role: ctx.profile.role,
        }
      : null,
  ),

  /**
   * Email a magic link. In local dev (APP_ENV=dev) the link is also returned
   * so you can sign in as any seeded user without an email provider.
   */
  requestLink: publicProcedure
    .input(z.object({ email: emailSchema, next: z.string().max(500) }))
    .mutation(async ({ ctx, input }) => {
      try {
        const link = await createLoginLink(ctx.db, {
          email: input.email,
          next: input.next,
          origin: ctx.env.SITE_ORIGIN,
        });
        await sendLoginEmail(ctx.env, { to: input.email, link });
        return { devLink: ctx.env.APP_ENV === "dev" ? link : null };
      } catch (err) {
        if (err instanceof RateLimitedError) {
          throw new TRPCError({
            code: "TOO_MANY_REQUESTS",
            message: "Too many sign-in links requested. Try again in an hour.",
          });
        }
        throw err;
      }
    }),

  updateProfile: authedProcedure
    .input(
      z.object({
        name: z.string().trim().min(2).max(60),
        bio: z.string().trim().max(500).nullable(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .update(profile)
        .set(input)
        .where(eq(profile.id, ctx.profile.id));
      return { ok: true };
    }),

  /** Personal API tokens (for the `dc` CLI and scripts). */
  tokens: authedProcedure.query(({ ctx }) =>
    ctx.db
      .select({
        publicId: apiToken.publicId,
        name: apiToken.name,
        lastUsedAt: apiToken.lastUsedAt,
        createdAt: apiToken.createdAt,
      })
      .from(apiToken)
      .where(eq(apiToken.profileId, ctx.profile.id))
      .orderBy(desc(apiToken.createdAt)),
  ),

  createToken: authedProcedure
    .input(z.object({ name: z.string().trim().min(1).max(60) }))
    .mutation(({ ctx, input }) =>
      createApiToken(ctx.db, { profileId: ctx.profile.id, name: input.name }),
    ),

  revokeToken: authedProcedure
    .input(z.object({ publicId: z.string().min(1).max(40) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db
        .delete(apiToken)
        .where(
          and(
            eq(apiToken.publicId, input.publicId),
            eq(apiToken.profileId, ctx.profile.id),
          ),
        );
      return { ok: true };
    }),
});
