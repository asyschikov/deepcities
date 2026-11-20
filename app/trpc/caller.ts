import { getRequest } from "@tanstack/react-start/server";
import { createTRPCContext } from "./context";
import { appRouter } from "./router";

/** Server-side tRPC caller for route loaders (SSR). */
export const createCaller = async () =>
  appRouter.createCaller(await createTRPCContext(getRequest()));
