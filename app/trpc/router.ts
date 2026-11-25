import type { inferRouterOutputs } from "@trpc/server";
import { router } from "./init";
import { adminRouter } from "./routers/admin";
import { areaRouter } from "./routers/area";
import { authRouter } from "./routers/auth";
import { checkinRouter } from "./routers/checkin";
import { collectionRouter } from "./routers/collection";
import { documentRouter } from "./routers/document";
import { goneRouter } from "./routers/gone";
import { photoRouter } from "./routers/photo";
import { placeRouter } from "./routers/place";
import { proposalRouter } from "./routers/proposal";
import { routeRouter } from "./routers/route";
import { scoreRouter } from "./routers/score";

export const appRouter = router({
  auth: authRouter,
  score: scoreRouter,
  collection: collectionRouter,
  place: placeRouter,
  route: routeRouter,
  document: documentRouter,
  area: areaRouter,
  proposal: proposalRouter,
  photo: photoRouter,
  checkin: checkinRouter,
  gone: goneRouter,
  admin: adminRouter,
});

export type AppRouter = typeof appRouter;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
