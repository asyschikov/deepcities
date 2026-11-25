import { createId } from "@paralleldrive/cuid2";
import { eq, inArray } from "drizzle-orm";
import { SCORE_POINTS, type ScoreKind } from "~/lib/constants";
import type { Database } from "~/lib/db";
import { collection, scoreEvent } from "~/lib/db/schema";

export { onTheSpot } from "~/lib/reach";

/** The city of a map, for points and leaderboards. */
export const cityOf = async (db: Database, collectionId: string) => {
  const found = await db.query.collection.findFirst({
    where: eq(collection.id, collectionId),
    columns: { city: true },
  });
  return found?.city ?? "";
};

/**
 * Award points once: a second award with the same key (per person) is
 * ignored. Returns the points actually awarded (0 when already paid).
 */
export const award = async (
  db: Database,
  a: {
    profileId: string;
    collectionId: string;
    city: string;
    placeId: string | null;
    kind: ScoreKind;
    key: string;
    sourceId?: string | null;
    at?: Date;
  },
): Promise<number> => {
  const points = SCORE_POINTS[a.kind];
  const rows = await db
    .insert(scoreEvent)
    .values({
      id: createId(),
      profileId: a.profileId,
      collectionId: a.collectionId,
      city: a.city,
      placeId: a.placeId,
      kind: a.kind,
      points,
      key: a.key,
      sourceId: a.sourceId ?? null,
      createdAt: a.at ?? new Date(),
    })
    .onConflictDoNothing()
    .returning({ points: scoreEvent.points });
  return rows.reduce((sum, r) => sum + r.points, 0);
};

/** Take back the points that came from these check-ins or photos. */
export const revokeFrom = async (db: Database, sourceIds: string[]) => {
  if (sourceIds.length === 0) return;
  await db.delete(scoreEvent).where(inArray(scoreEvent.sourceId, sourceIds));
};
