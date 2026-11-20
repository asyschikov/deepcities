import { TRPCError } from "@trpc/server";
import { desc, eq } from "drizzle-orm";
import { z } from "zod/v4";
import { GLOBAL_ROLES } from "~/lib/constants";
import { profile } from "~/lib/db/schema";
import { idSchema } from "~/lib/validation";
import { router, superAdminProcedure } from "../init";

export const adminRouter = router({
  users: superAdminProcedure.query(({ ctx }) =>
    ctx.db.query.profile.findMany({
      columns: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
      orderBy: desc(profile.createdAt),
      limit: 500,
    }),
  ),

  setGlobalRole: superAdminProcedure
    .input(z.object({ profileId: idSchema, role: z.enum(GLOBAL_ROLES) }))
    .mutation(async ({ ctx, input }) => {
      if (input.profileId === ctx.profile.id) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "You can't change your own site role",
        });
      }
      await ctx.db
        .update(profile)
        .set({ role: input.role })
        .where(eq(profile.id, input.profileId));
      return { ok: true };
    }),
});
