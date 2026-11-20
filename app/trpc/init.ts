import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import type { Database } from "~/lib/db";
import type { profile as profileTable } from "~/lib/db/schema";
import type { ServerEnv } from "~/lib/server-env";

export type Profile = typeof profileTable.$inferSelect;

export type TRPCContext = {
  db: Database;
  env: ServerEnv;
  profile: Profile | null;
};

const t = initTRPC.context<TRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    // Deliberate TRPCErrors carry client-safe messages; mask only crashes.
    const safe = error.code !== "INTERNAL_SERVER_ERROR";
    return {
      ...shape,
      message: safe ? shape.message : "Something went wrong",
      data: { ...shape.data, stack: undefined },
    };
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;

export const authedProcedure = t.procedure.use((opts) => {
  if (!opts.ctx.profile) throw new TRPCError({ code: "UNAUTHORIZED" });
  return opts.next({ ctx: { profile: opts.ctx.profile } });
});

export const superAdminProcedure = authedProcedure.use((opts) => {
  if (opts.ctx.profile.role !== "super_admin") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Super admin only" });
  }
  return opts.next();
});
