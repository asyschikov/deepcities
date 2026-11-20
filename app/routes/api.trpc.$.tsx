import { createFileRoute } from "@tanstack/react-router";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { createLog } from "~/lib/logger";
import { createTRPCContext } from "~/trpc/context";
import { appRouter } from "~/trpc/router";

const log = createLog("trpc");

const handler = (request: Request): Promise<Response> =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req: request,
    router: appRouter,
    createContext: () => createTRPCContext(request),
    onError: ({ path, error }) => {
      if (error.code === "INTERNAL_SERVER_ERROR") {
        log.error({
          msg: "tRPC error",
          path,
          message: error.message,
          stack: error.stack,
        });
      }
    },
  });

export const Route = createFileRoute("/api/trpc/$")({
  server: {
    handlers: {
      GET: ({ request }) => handler(request),
      POST: ({ request }) => handler(request),
    },
  },
});
