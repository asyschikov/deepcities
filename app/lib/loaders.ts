import { createServerFn } from "@tanstack/react-start";
import { TRPCError } from "@trpc/server";
import { createCaller } from "~/trpc/caller";

/** SSR-load a collection + viewer access by slug; null when it doesn't exist. */
export const loadCollection = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const caller = await createCaller();
    try {
      return await caller.collection.bySlug({ slug });
    } catch (err) {
      if (err instanceof TRPCError && err.code === "NOT_FOUND") return null;
      throw err;
    }
  });
