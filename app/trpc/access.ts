import { TRPCError } from "@trpc/server";
import { and, eq } from "drizzle-orm";
import type { Database } from "~/lib/db";
import { collection, collectionMember } from "~/lib/db/schema";
import {
  type Capabilities,
  capabilitiesOf,
  type EffectiveRole,
  resolveRole,
} from "~/lib/permissions";
import type { Profile } from "./init";

export type Collection = typeof collection.$inferSelect;

export interface CollectionAccess {
  collection: Collection;
  role: EffectiveRole;
  can: Capabilities;
}

/** Load a collection plus the viewer's effective role in it. */
export const getAccess = async (
  db: Database,
  collectionId: string,
  viewer: Profile | null,
): Promise<CollectionAccess> => {
  const [found, member] = await Promise.all([
    db.query.collection.findFirst({ where: eq(collection.id, collectionId) }),
    viewer
      ? db.query.collectionMember.findFirst({
          where: and(
            eq(collectionMember.collectionId, collectionId),
            eq(collectionMember.profileId, viewer.id),
          ),
        })
      : null,
  ]);
  if (!found)
    throw new TRPCError({ code: "NOT_FOUND", message: "Map not found" });
  const role = resolveRole({
    globalRole: viewer?.role ?? null,
    memberRole: member?.role ?? null,
    policy: found.contributionPolicy,
  });
  return { collection: found, role, can: capabilitiesOf(role) };
};

/** Throws FORBIDDEN unless the viewer has capability `cap` in the collection. */
export const requireCap = async (
  db: Database,
  collectionId: string,
  viewer: Profile | null,
  cap: keyof Capabilities,
): Promise<CollectionAccess> => {
  const access = await getAccess(db, collectionId, viewer);
  if (!access.can[cap]) {
    throw new TRPCError({
      code: viewer ? "FORBIDDEN" : "UNAUTHORIZED",
      message: "You don't have permission to do that on this map",
    });
  }
  return access;
};
