import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Database } from "~/lib/db";
import { collection, place, profile } from "~/lib/db/schema";
import type { Profile } from "./init";
import { checkinRouter } from "./routers/checkin";
import { goneRouter } from "./routers/gone";
import { scoreRouter } from "./routers/score";
import { testContext, testDb } from "./test-db";

const now = new Date("2026-11-25T12:00:00Z");

const person = (id: string): Profile => ({
  id,
  email: `${id}@test.local`,
  name: id,
  bio: null,
  avatarId: null,
  isPublic: false,
  publicAskedAt: null,
  role: "user",
  createdAt: now,
});
const ann = person("ann");
const bob = person("bob");

/** The place, and points ~30 m and ~1 km from it. */
const AT = { lat: 52.37, lng: 4.89 };
const NEAR = { lat: 52.37027, lng: 4.89, accuracy: 10 };
const FAR = { lat: 52.379, lng: 4.89, accuracy: 10 };

let db: Database;
const checkins = (who: Profile) =>
  checkinRouter.createCaller(testContext(db, who));
const scores = (who: Profile | null) =>
  scoreRouter.createCaller(testContext(db, who));
const reports = (who: Profile) => goneRouter.createCaller(testContext(db, who));

beforeEach(async () => {
  vi.useFakeTimers({ now, toFake: ["Date"] });
  ({ db } = testDb());
  await db.insert(profile).values([ann, bob]);
  await db.insert(collection).values({
    id: "sights",
    slug: "sights",
    title: "Sights",
    city: "Amsterdam",
    centerLat: AT.lat,
    centerLng: AT.lng,
    categories: [{ key: "curiosity", label: "Curiosity", color: "#112233" }],
    fields: [],
    createdAt: now,
  });
  await db.insert(place).values({
    id: "spot",
    collectionId: "sights",
    title: "A spot",
    summary: "Worth a look.",
    category: "curiosity",
    ...AT,
    links: [],
    photoIds: [],
    createdAt: now,
    updatedAt: now,
  });
});

describe("explorer points", () => {
  it("refuses a check-in from afar", async () => {
    await expect(
      checkins(ann).create({ placeId: "spot", position: FAR }),
    ).rejects.toThrow(/at the place/);
  });

  it("pays one check-in per place, the first visit and a verdict", async () => {
    const first = await checkins(ann).create({
      placeId: "spot",
      position: NEAR,
      verdict: "nice",
    });
    expect(first.points).toBe(2 + 3 + 5);
    expect(first.askPublic).toBe(true);

    // One check-in per place: a second is refused; the verdict can change.
    await expect(
      checkins(ann).create({ placeId: "spot", position: NEAR }),
    ).rejects.toThrow(/already checked in/);
    const changed = await checkins(ann).setVerdict({
      placeId: "spot",
      verdict: "amazing",
    });
    expect(changed.points).toBe(0);
    expect((await checkins(ann).forPlace({ placeId: "spot" })).checkedIn).toBe(
      true,
    );
    const bobs = await checkins(bob).create({
      placeId: "spot",
      position: NEAR,
    });
    expect(bobs.points).toBe(2);

    expect(bobs.askPublic).toBe(true);
    await scores(bob).setPublic({ isPublic: false });
    expect((await scores(ann).mine()).total).toBe(10);
  });

  it("takes points back when the visit is deleted", async () => {
    const { id } = await checkins(ann).create({
      placeId: "spot",
      position: NEAR,
    });
    expect((await scores(ann).mine()).total).toBe(5);
    await checkins(ann).delete({ checkinId: id });
    expect((await scores(ann).mine()).total).toBe(0);
    // With the visit gone, you can check in again.
    const again = await checkins(ann).create({
      placeId: "spot",
      position: NEAR,
    });
    expect(again.points).toBe(5);
  });

  it("takes corrections on the spot only, paid once per place", async () => {
    const here = await reports(ann).report({
      placeId: "spot",
      kind: "closed",
      position: NEAR,
    });
    expect(here.points).toBe(3);
    const again = await reports(ann).report({
      placeId: "spot",
      kind: "changed",
      position: NEAR,
    });
    expect(again.points).toBe(0);
    expect((await reports(ann).forPlace({ placeId: "spot" })).mineKind).toBe(
      "changed",
    );
    await expect(
      reports(bob).report({ placeId: "spot", kind: "wrong_location" }),
    ).rejects.toThrow(/at the place/);
    await expect(
      reports(bob).report({
        placeId: "spot",
        kind: "wrong_location",
        position: FAR,
      }),
    ).rejects.toThrow(/at the place/);
    // Only gone / not found warn other visitors.
    expect((await reports(bob).forPlace({ placeId: "spot" })).count).toBe(0);
  });

  it("ranks only public profiles on the city leaderboard", async () => {
    await checkins(ann).create({ placeId: "spot", position: NEAR });
    await checkins(bob).create({ placeId: "spot", position: NEAR });
    await scores(bob).setPublic({ isPublic: true });
    const board = await scores(null).leaderboard({ city: "Amsterdam" });
    expect(board.map((r) => [r.name, r.points])).toEqual([["bob", 2]]);
    expect(await scores(null).leaderboard({ city: "Rotterdam" })).toEqual([]);
  });
});
