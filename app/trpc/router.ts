import type { inferRouterOutputs } from "@trpc/server";
import { router } from "./init";
import { adminRouter } from "./routers/admin";
import { authRouter } from "./routers/auth";
import { collectionRouter } from "./routers/collection";
import { photoRouter } from "./routers/photo";
import { placeRouter } from "./routers/place";
import { proposalRouter } from "./routers/proposal";
import { ratingRouter } from "./routers/rating";

export const appRouter = router({
  auth: authRouter,
  collection: collectionRouter,
  place: placeRouter,
  proposal: proposalRouter,
  photo: photoRouter,
  rating: ratingRouter,
  admin: adminRouter,
});

export type AppRouter = typeof appRouter;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
