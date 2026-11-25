import { beforeEach, describe, expect, it } from "vitest";
import type { Database } from "~/lib/db";
import { collection, collectionPlace, place, profile } from "~/lib/db/schema";
import type { PlaceDraft } from "~/lib/validation";
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
  isPublic: false,
  publicAskedAt: null,
  role,
  createdAt: now,
});
const admin = person("admin", "super_admin");
const visitor = person("visitor", "user");

const categories = [
  { key: "curiosity", label: "Curiosity", color: "#112233" },
  { key: "hofje", label: "Hofje", color: "#445566" },
];

const mapRow = (id: string, view: typeof collection.$inferInsert.view) => ({
  id,
  slug: id,
  title: `Map ${id}`,
  city: "Amsterdam",
  centerLat: 52.37,
  centerLng: 4.89,
  categories,
  fields: [{ key: "rank", label: "Rank", type: "text" as const }],
  view,
  createdAt: now,
});

const draft = (over: Partial<PlaceDraft> = {}): PlaceDraft => ({
  title: "A hofje",
  summary: "A quiet courtyard behind a door.",
  body: "",
  category: "hofje",
  lat: 52.372,
  lng: 4.9,
  address: null,
  municipality: "Amsterdam",
  borough: "Centrum",
  neighbourhood: null,
  subNeighbourhood: null,
  links: [],
  photoIds: [],
  attributes: {},
  translations: {},
  ...over,
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
  createdAt: now,
  updatedAt: now,
  ...over,
});

let db: Database;
const as = (who: Profile | null) => testContext(db, who);
const places = (who: Profile | null) => placeRouter.createCaller(as(who));
const proposals = (who: Profile) => proposalRouter.createCaller(as(who));
const titles = async (collectionId: string, pool?: boolean) =>
  (await places(null).list({ collectionId, pool })).map((p) => p.title).sort();

beforeEach(async () => {
  ({ db } = testDb());
  await db.insert(profile).values([admin, visitor]);
  await db.insert(collection).values([
    mapRow("sights", null),
    mapRow("centrum", {
      source: "sights",
      where: { borough: ["Centrum"] },
      detail: "full",
    }),
    mapRow("hofjes", { source: "sights", list: true }),
    mapRow("west", null),
  ]);
  await db
    .insert(place)
    .values([
      placeRow("standout"),
      placeRow("hofje-a", { detail: "district", category: "hofje" }),
      placeRow("hofje-b", { detail: "district", category: "hofje" }),
      placeRow("begijnhof", { detail: "theme", category: "hofje" }),
      placeRow("archived-hofje", { detail: "district", status: "archived" }),
      placeRow("elsewhere", { collectionId: "west" }),
    ]);
  await db
    .insert(collectionPlace)
    .values(
      ["standout", "hofje-a", "begijnhof", "archived-hofje", "elsewhere"].map(
        (placeId) => ({ collectionId: "hofjes", placeId, addedAt: now }),
      ),
    );
});

describe("which places a list view shows", () => {
  it("exactly its published picks from the source, at any detail", async () => {
    expect(await titles("hofjes")).toEqual([
      "begijnhof",
      "hofje-a",
      "standout",
    ]);
  });

  it("theme places stay off the home map and full views", async () => {
    expect(await titles("sights")).toEqual(["standout"]);
    expect(await titles("centrum")).toEqual(["hofje-a", "hofje-b", "standout"]);
    // The pool still has them (for picking and matching titles).
    expect(await titles("hofjes", true)).toContain("begijnhof");
  });

  it("counts on the map list follow the same rules", async () => {
    const list = await collectionRouter.createCaller(as(null)).list();
    const count = (id: string) => list.find((m) => m.id === id)?.placeCount;
    expect(count("hofjes")).toBe(3);
    expect(count("sights")).toBe(1);
  });

  it("overrides work on a list view", async () => {
    const res = await proposals(admin).createOverride({
      collectionId: "hofjes",
      placeId: "hofje-a",
      attributes: { rank: "Amazing" },
      note: null,
    });
    expect(res.status).toBe("approved");
    const shown = await places(null).list({ collectionId: "hofjes" });
    expect(shown.find((p) => p.id === "hofje-a")).toMatchObject({
      attributes: { rank: "Amazing" },
      overridden: ["rank"],
    });
  });
});

describe("place page of a theme place", () => {
  it("is not found under the home map or a full view", async () => {
    await expect(
      places(null).byId({ placeId: "begijnhof", map: "sights" }),
    ).rejects.toThrow(/not found/i);
    await expect(
      places(null).byId({ placeId: "begijnhof", map: "centrum" }),
    ).rejects.toThrow(/not found/i);
    const onList = await places(null).byId({
      placeId: "begijnhof",
      map: "hofjes",
    });
    expect(onList.viewId).toBe("hofjes");
  });

  it("is linked from its cluster into a list that shows it", async () => {
    await db
      .insert(place)
      .values(placeRow("hofjes-cluster", { title: "hofjes-cluster" }));
    await db.insert(place).values([
      placeRow("theme-part", {
        detail: "theme",
        parentId: "hofjes-cluster",
      }),
      placeRow("lost-part", { detail: "theme", parentId: "hofjes-cluster" }),
    ]);
    await db
      .insert(collectionPlace)
      .values({ collectionId: "hofjes", placeId: "theme-part", addedAt: now });
    const cluster = await places(null).byId({
      placeId: "hofjes-cluster",
      map: "sights",
    });
    expect(cluster.children.map((c) => [c.title, c.link?.slug])).toEqual([
      ["lost-part", undefined],
      ["theme-part", "hofjes"],
    ]);
  });
});

describe("adding places from a list view", () => {
  it("creates the place in the source at theme detail, on the list", async () => {
    const res = await proposals(admin).create({
      kind: "create",
      collectionId: "hofjes",
      draft: draft({ title: "Hofje new" }),
      note: null,
    });
    expect(res.status).toBe("approved");
    const created = await db.query.place.findFirst({
      where: (p, { eq }) => eq(p.id, res.placeId ?? ""),
    });
    expect(created).toMatchObject({ collectionId: "sights", detail: "theme" });
    expect(await titles("hofjes")).toContain("Hofje new");
    expect(await titles("sights")).not.toContain("Hofje new");
  });

  it("a contributor's new place joins the list when approved", async () => {
    const res = await proposals(visitor).create({
      kind: "create",
      collectionId: "hofjes",
      draft: draft({ title: "Hofje suggested", detail: "district" }),
      note: null,
    });
    expect(res.status).toBe("pending");
    // On the source's queue, where the place will live.
    const stored = await db.query.proposal.findFirst({
      where: (p, { eq }) => eq(p.id, res.id),
    });
    expect(stored).toMatchObject({ collectionId: "sights", listId: "hofjes" });
    expect(await titles("hofjes")).not.toContain("Hofje suggested");
    await proposals(admin).review({
      proposalId: res.id,
      decision: "approve",
      note: null,
    });
    expect(await titles("hofjes")).toContain("Hofje suggested");
    // Detail from the draft wins: a district place is in the full view too.
    expect(await titles("centrum")).toContain("Hofje suggested");
  });
});

describe("membership proposals", () => {
  it("moderators add and remove places at once, recorded on the list", async () => {
    const added = await proposals(admin).setMembership({
      collectionId: "hofjes",
      action: "add",
      placeIds: ["hofje-b", "hofje-a"],
      note: "Both are hofjes",
    });
    expect(added.results).toEqual([
      expect.objectContaining({ placeId: "hofje-b", status: "approved" }),
      { placeId: "hofje-a", status: "unchanged" },
    ]);
    expect(await titles("hofjes")).toContain("hofje-b");

    const removed = await proposals(admin).setMembership({
      collectionId: "hofjes",
      action: "remove",
      placeIds: ["standout"],
      note: null,
    });
    expect(removed.results[0]?.status).toBe("approved");
    expect(await titles("hofjes")).not.toContain("standout");
    // The place itself stays.
    expect(await titles("sights")).toContain("standout");

    const history = await proposals(admin).queue({
      collectionId: "hofjes",
      statuses: ["approved"],
    });
    expect(history.map((p) => [p.subject, p.kind, p.placeId]).sort()).toEqual([
      ["membership", "archive", "standout"],
      ["membership", "create", "hofje-b"],
    ]);
    // The place page under the list shows it; under the home map it doesn't.
    const onList = await places(null).byId({
      placeId: "hofje-b",
      map: "hofjes",
    });
    expect(onList.history.map((h) => h.subject)).toEqual(["membership"]);
    const onHome = await places(null).byId({
      placeId: "hofje-b",
      map: "sights",
    });
    expect(onHome.history).toEqual([]);
  });

  it("a contributor's change waits for review on the list", async () => {
    const res = await proposals(visitor).setMembership({
      collectionId: "hofjes",
      action: "add",
      placeIds: ["hofje-b"],
      note: null,
    });
    const [only] = res.results;
    expect(only?.status).toBe("pending");
    expect(await titles("hofjes")).not.toContain("hofje-b");
    await proposals(admin).review({
      proposalId: only && "id" in only ? only.id : "",
      decision: "approve",
      note: null,
    });
    expect(await titles("hofjes")).toContain("hofje-b");
  });

  it("dry runs write nothing", async () => {
    const res = await proposals(admin).setMembership({
      collectionId: "hofjes",
      action: "add",
      placeIds: ["hofje-b"],
      note: null,
      dryRun: true,
    });
    expect(res.results).toEqual([{ placeId: "hofje-b", status: "would-add" }]);
    expect(await titles("hofjes")).not.toContain("hofje-b");
  });

  it("refuses places outside the source, and maps that aren't lists", async () => {
    await expect(
      proposals(admin).setMembership({
        collectionId: "hofjes",
        action: "add",
        placeIds: ["elsewhere"],
        note: null,
      }),
    ).rejects.toThrow(/Not places of this list's source/);
    await expect(
      proposals(admin).setMembership({
        collectionId: "centrum",
        action: "add",
        placeIds: ["standout"],
        note: null,
      }),
    ).rejects.toThrow(/Only list views/);
  });
});

describe("import into a list view (the calls dc import makes)", () => {
  it("matches source titles onto the list and creates the rest there", async () => {
    // A title already in the source: added to the list.
    const pool = await places(admin).list({
      collectionId: "hofjes",
      pool: true,
    });
    const match = pool.find((p) => p.title === "hofje-b");
    await proposals(admin).setMembership({
      collectionId: "hofjes",
      action: "add",
      placeIds: [match?.id ?? ""],
      note: null,
    });
    // A new one: created through the list, then its override for the view.
    const created = await proposals(admin).create({
      kind: "create",
      collectionId: "hofjes",
      draft: draft({ title: "Imported hofje", attributes: { rank: "Nice" } }),
      note: null,
    });
    await proposals(admin).createOverride({
      collectionId: "hofjes",
      placeId: created.placeId ?? "",
      attributes: { rank: "Amazing" },
      note: null,
    });
    const shown = await places(null).list({ collectionId: "hofjes" });
    expect(shown.map((p) => p.title).sort()).toEqual([
      "Imported hofje",
      "begijnhof",
      "hofje-a",
      "hofje-b",
      "standout",
    ]);
    expect(shown.find((p) => p.title === "Imported hofje")).toMatchObject({
      detail: "theme",
      attributes: { rank: "Amazing" },
    });
  });
});

describe("setting a list view", () => {
  it("takes no where or detail", async () => {
    await db.insert(collection).values(mapRow("empty", null));
    await expect(
      collectionRouter.createCaller(as(admin)).setView({
        collectionId: "empty",
        view: { source: "sights", list: true, detail: "full" },
      }),
    ).rejects.toThrow(/list view/);
    await collectionRouter.createCaller(as(admin)).setView({
      collectionId: "empty",
      view: { source: "sights", list: true },
    });
    expect(await titles("empty")).toEqual([]);
  });
});
