import { eq } from "drizzle-orm";
import { beforeEach, describe, expect, it } from "vitest";
import type { Database } from "~/lib/db";
import { collection, place, placeOverride, profile } from "~/lib/db/schema";
import type { FieldDef, PlaceDraft } from "~/lib/validation";
import type { Profile } from "./init";
import { collectionRouter } from "./routers/collection";
import { placeRouter } from "./routers/place";
import { proposalRouter } from "./routers/proposal";
import { testContext, testDb } from "./test-db";

const now = new Date("2026-11-24T12:00:00Z");

const person = (id: string, role: "user" | "super_admin"): Profile => ({
  id,
  email: `${id}@test.local`,
  name: id,
  bio: null,
  avatarId: null,
  role,
  createdAt: now,
});
const admin = person("admin", "super_admin");
const visitor = person("visitor", "user");

const categories = [
  { key: "curiosity", label: "Curiosity", color: "#112233" },
  { key: "history", label: "History", color: "#445566" },
];
const rank: FieldDef = {
  key: "rank",
  label: "Rank",
  type: "select",
  options: ["Amazing", "Nice", "Okay", "Skip"],
};
const era: FieldDef = { key: "era", label: "Era", type: "text" };
const tip: FieldDef = { key: "local_tip", label: "Local tip", type: "text" };

const mapRow = (
  id: string,
  view: typeof collection.$inferInsert.view,
  fields: FieldDef[],
) => ({
  id,
  slug: id,
  title: `Map ${id}`,
  city: "Amsterdam",
  centerLat: 52.37,
  centerLng: 4.89,
  categories,
  fields,
  view,
  createdAt: now,
});

const placeRow = (
  id: string,
  over: Partial<typeof place.$inferInsert> = {},
): typeof place.$inferInsert => ({
  id,
  collectionId: "sights",
  title: id,
  summary: "Somewhere worth a look.",
  category: "curiosity",
  lat: 52.37,
  lng: 4.89,
  borough: "Centrum",
  links: [],
  photoIds: [],
  attributes: { rank: "Nice", era: "1600s" },
  createdAt: now,
  updatedAt: now,
  ...over,
});

let db: Database;
const as = (who: Profile | null) => testContext(db, who);
const places = (who: Profile | null) => placeRouter.createCaller(as(who));
const proposals = (who: Profile) => proposalRouter.createCaller(as(who));
type OverrideInput = Parameters<
  ReturnType<typeof proposals>["createOverride"]
>[0];
/** An admin's override of "standout" on the centrum view. */
const set = (input: Partial<OverrideInput>) =>
  proposals(admin).createOverride({
    collectionId: "centrum",
    placeId: "standout",
    note: null,
    ...input,
  });
const listed = async (collectionId: string, id = "standout") =>
  (await places(null).list({ collectionId })).find((p) => p.id === id);
const storedOverride = (placeId = "standout") =>
  db.query.placeOverride.findFirst({
    where: (o, { and, eq }) =>
      and(eq(o.collectionId, "centrum"), eq(o.placeId, placeId)),
  });

beforeEach(async () => {
  ({ db } = testDb());
  await db.insert(profile).values([admin, visitor]);
  await db
    .insert(collection)
    .values([
      mapRow("sights", null, [rank, era]),
      mapRow(
        "centrum",
        { source: "sights", where: { borough: ["Centrum"] }, detail: "full" },
        [tip],
      ),
    ]);
  await db
    .insert(place)
    .values([placeRow("standout"), placeRow("plain", { attributes: {} })]);
});

describe("effective values on a view", () => {
  beforeEach(async () => {
    await db.insert(placeOverride).values({
      collectionId: "centrum",
      placeId: "standout",
      attributes: { rank: "Amazing", era: null, local_tip: "Go at dusk" },
      category: "history",
      updatedAt: now,
    });
  });

  it("list and export merge the view's override; the home map is untouched", async () => {
    expect(await listed("centrum")).toMatchObject({
      attributes: { rank: "Amazing", local_tip: "Go at dusk" },
      category: "history",
      overridden: ["era", "local_tip", "rank", "category"],
    });
    expect((await listed("centrum"))?.attributes).not.toHaveProperty("era");
    expect(await listed("sights")).toMatchObject({
      attributes: { rank: "Nice", era: "1600s" },
      category: "curiosity",
      overridden: [],
    });
    const exported = await places(null).export({ collectionId: "centrum" });
    expect(exported.find((p) => p.id === "standout")).toMatchObject({
      attributes: { rank: "Amazing" },
      category: "history",
    });
  });

  it("byId on the view shows its values, its fields after the source's, and the home values", async () => {
    const onView = await places(null).byId({
      placeId: "standout",
      map: "centrum",
    });
    expect(onView.place).toMatchObject({
      attributes: { rank: "Amazing", local_tip: "Go at dusk" },
      category: "history",
    });
    expect(onView.base).toEqual({
      attributes: { rank: "Nice", era: "1600s" },
      category: "curiosity",
    });
    expect(onView.viewId).toBe("centrum");
    expect(onView.fields.map((f) => f.key)).toEqual([
      "rank",
      "era",
      "local_tip",
    ]);
    const onHome = await places(null).byId({
      placeId: "standout",
      map: "sights",
    });
    expect(onHome.place.attributes).toEqual({ rank: "Nice", era: "1600s" });
    expect(onHome.viewId).toBeNull();
    expect(onHome.fields.map((f) => f.key)).toEqual(["rank", "era"]);
  });

  it("the view's header lists source fields, then its own", async () => {
    const { collection: c } = await collectionRouter
      .createCaller(as(null))
      .bySlug({ slug: "centrum" });
    expect(c.fields.map((f) => f.key)).toEqual(["rank", "era", "local_tip"]);
    expect(c.ownFields.map((f) => f.key)).toEqual(["local_tip"]);
  });
});

describe("override proposals", () => {
  it("a moderator's override publishes immediately and stores only what differs", async () => {
    const res = await proposals(admin).createOverride({
      collectionId: "centrum",
      placeId: "standout",
      attributes: { rank: "Amazing", era: "1600s" },
      note: "A standout in Centrum",
    });
    expect(res.status).toBe("approved");
    expect(await storedOverride()).toMatchObject({
      attributes: { rank: "Amazing" },
      category: null,
      updatedBy: "admin",
    });
    expect((await listed("centrum"))?.attributes.rank).toBe("Amazing");
    expect((await listed("sights"))?.attributes.rank).toBe("Nice");
    // History on the view shows it; on the home map it doesn't.
    const onView = await places(null).byId({
      placeId: "standout",
      map: "centrum",
    });
    expect(onView.history.map((h) => h.subject)).toEqual(["override"]);
    const onHome = await places(null).byId({
      placeId: "standout",
      map: "sights",
    });
    expect(onHome.history).toEqual([]);
  });

  it("a contributor's override waits in the view's queue", async () => {
    const res = await proposals(visitor).createOverride({
      collectionId: "centrum",
      placeId: "standout",
      category: "history",
      note: null,
    });
    expect(res.status).toBe("pending");
    expect(await storedOverride()).toBeUndefined();
    const queue = await proposals(admin).queue({
      collectionId: "centrum",
      statuses: ["pending"],
    });
    expect(queue).toHaveLength(1);
    expect(queue[0]).toMatchObject({
      subject: "override",
      overrideDraft: { attributes: {}, category: "history" },
      currentOverride: { attributes: {}, category: null },
    });
    expect(
      await proposals(admin).queue({
        collectionId: "sights",
        statuses: ["pending"],
      }),
    ).toEqual([]);
    await proposals(admin).review({
      proposalId: res.id ?? "",
      decision: "approve",
      note: null,
    });
    expect((await listed("centrum"))?.category).toBe("history");
    expect((await listed("sights"))?.category).toBe("curiosity");
  });

  it("merges patches, reverts keys and removes an override that matches home", async () => {
    await set({ attributes: { rank: "Amazing" } });
    await set({ attributes: { local_tip: "Look up" } });
    expect((await storedOverride())?.attributes).toEqual({
      rank: "Amazing",
      local_tip: "Look up",
    });
    expect((await set({ attributes: { rank: "Amazing" } })).status).toBe(
      "unchanged",
    );
    const dry = await set({ revert: ["rank"], dryRun: true });
    expect(dry).toMatchObject({
      status: "would-update",
      override: { attributes: { local_tip: "Look up" } },
    });
    expect((await storedOverride())?.attributes.rank).toBe("Amazing");
    await set({ revert: ["rank"], attributes: { local_tip: null } });
    expect(await storedOverride()).toBeUndefined();
  });

  it("checks fields, categories, the map and permissions", async () => {
    await expect(set({ attributes: { nope: "x" } })).rejects.toThrow(
      /Not fields/,
    );
    await expect(set({ attributes: { rank: "Superb" } })).rejects.toThrow(
      /must be one of/,
    );
    await expect(set({ category: "food" })).rejects.toThrow(/Unknown category/);
    await expect(
      set({ collectionId: "sights", attributes: { rank: "Okay" } }),
    ).rejects.toThrow(/Only view maps/);
    // Members-only on the view: a visitor can't propose there.
    await db
      .update(collection)
      .set({ contributionPolicy: "members" })
      .where(eq(collection.id, "centrum"));
    await expect(
      proposals(visitor).createOverride({
        collectionId: "centrum",
        placeId: "standout",
        attributes: { rank: "Okay" },
        note: null,
      }),
    ).rejects.toThrow(/permission/);
  });

  it("an edit of the home place drops override keys that now match it", async () => {
    await proposals(admin).createOverride({
      collectionId: "centrum",
      placeId: "standout",
      attributes: { rank: "Amazing", local_tip: "Look up" },
      note: null,
    });
    const home = await places(null).byId({ placeId: "standout" });
    const draft: PlaceDraft = {
      title: home.place.title,
      summary: home.place.summary,
      body: home.place.body,
      category: home.place.category,
      lat: home.place.lat,
      lng: home.place.lng,
      address: null,
      municipality: null,
      borough: home.place.borough,
      neighbourhood: null,
      subNeighbourhood: null,
      links: [],
      photoIds: [],
      attributes: { rank: "Amazing", era: "1600s" },
      translations: {},
    };
    await proposals(admin).create({
      kind: "edit",
      placeId: "standout",
      draft,
      note: null,
    });
    expect((await storedOverride())?.attributes).toEqual({
      local_tip: "Look up",
    });
  });
});

describe("a view's own fields", () => {
  it("may not reuse a source key, may drop copies of source fields", async () => {
    const coll = collectionRouter.createCaller(as(admin));
    await expect(
      coll.setFields({ collectionId: "centrum", fields: [tip, rank] }),
    ).rejects.toThrow(/already has these fields: rank/);
    await expect(
      coll.setFields({ collectionId: "centrum", fields: [] }),
    ).rejects.toThrow(/can't be deleted/);
    await db
      .update(collection)
      .set({ fields: [rank, era, tip] })
      .where(eq(collection.id, "centrum"));
    await coll.setFields({ collectionId: "centrum", fields: [tip] });
    const { collection: c } = await coll.bySlug({ slug: "centrum" });
    expect(c.ownFields.map((f) => f.key)).toEqual(["local_tip"]);
  });
});
