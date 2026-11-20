import { getRequestProfile } from "~/lib/auth.server";
import { createDb } from "~/lib/db";
import { serverEnv } from "~/lib/server-env";
import type { TRPCContext } from "./init";

export const createTRPCContext = async (
  request: Request,
): Promise<TRPCContext> => {
  const env = serverEnv();
  const db = createDb(env.DB);
  return { db, env, profile: await getRequestProfile(db, request) };
};
