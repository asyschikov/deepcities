import { beforeEach, describe, expect, it } from "vitest";
import type { Database } from "~/lib/db";
import { collection, place, profile } from "~/lib/db/schema";
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
  photoLicenseAt: null,
  role,
  createdAt: now,
});
const admin = person("admin", "super_admin");
const visitor = person("visitor", "user");

const categories = [{ key: "curiosity", label: "Curiosity", color: "#112233" }];

const mapRow = (id: string, view: typeof collection.$inferInsert.view) => ({
  id,
  slug: id,
  title: `Map ${id}`,
  city: "Amsterdam",
  centerLat: 52.37,
  centerLng: 4.89,
  categories,
  view,
  createdAt: now,
});

const draft = (over: Partial<PlaceDraft> = {}): PlaceDraft => ({
  title: "A place",
  summary: "Somewhere worth a look.",
  body: "",
  category: "curiosity",
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
    mapRow("west", null),
  ]);
  await db
    .insert(place)
    .values([
      placeRow("standout"),
      placeRow("cluster"),
      placeRow("leaf-1", { detail: "district", parentId: "cluster" }),
      placeRow("leaf-2", { detail: "district", parentId: "cluster" }),
      placeRow("loose-leaf", { detail: "district" }),
      placeRow("west-sight", { borough: "West" }),
      placeRow("archived-leaf", { detail: "district", status: "archived" }),
      placeRow("elsewhere", { collectionId: "west" }),
    ]);
});

describe("which places a map shows", () => {
  it("home map: its own city-level places", async () => {
    expect(await titles("sights")).toEqual([
      "cluster",
      "standout",
      "west-sight",
    ]);
  });

  it("full view: matching places except cluster parents", async () => {
    expect(await titles("centrum")).toEqual([
      "leaf-1",
      "leaf-2",
      "loose-leaf",
      "standout",
    ]);
  });

  it("pool: every published place of the home, at any detail", async () => {
    const all = [
      "cluster",
      "leaf-1",
      "leaf-2",
      "loose-leaf",
      "standout",
      "west-sight",
    ];
    expect(await titles("sights", true)).toEqual(all);
    expect(await titles("centrum", true)).toEqual(all);
  });

  it("a cluster whose parts are all gone shows in the full view again", async () => {
    await db
      .insert(place)
      .values(placeRow("empty-cluster", { title: "empty-cluster" }));
    await db.insert(place).values(
      placeRow("gone-part", {
        detail: "district",
        parentId: "empty-cluster",
        status: "archived",
      }),
    );
    expect(await titles("centrum")).toContain("empty-cluster");
  });

  it("counts on the map list follow the same rules", async () => {
    const list = await collectionRouter.createCaller(as(null)).list();
    const count = (id: string) => list.find((m) => m.id === id)?.placeCount;
    expect(count("sights")).toBe(3);
    expect(count("centrum")).toBe(4);
    expect(count("west")).toBe(1);
  });

  it("a view reads its places with the source's categories", async () => {
    const { collection: c } = await collectionRouter
      .createCaller(as(null))
      .bySlug({ slug: "centrum" });
    expect(c.categories).toEqual(categories);
    expect(c.view?.source).toBe("sights");
  });
});

describe("place page: parent and children", () => {
  it("links children into the full view and the parent into its home", async () => {
    const onHome = await places(null).byId({
      placeId: "cluster",
      map: "sights",
    });
    expect(onHome.children.map((c) => [c.title, c.link?.slug])).toEqual([
      ["leaf-1", "centrum"],
      ["leaf-2", "centrum"],
    ]);
    expect(onHome.parent).toBeNull();

    const leaf = await places(null).byId({ placeId: "leaf-1", map: "centrum" });
    expect(leaf.parent?.title).toBe("cluster");
    // The full view doesn't show cluster parents: link the home map.
    expect(leaf.parent?.link).toEqual({ city: "amsterdam", slug: "sights" });
    expect(leaf.home.slug).toBe("sights");
  });
});

describe("proposals with parent and detail", () => {
  it("a place created from a view lives on the source, at district detail", async () => {
    const res = await proposals(admin).create({
      kind: "create",
      collectionId: "centrum",
      draft: draft({ title: "New leaf", parentId: "cluster" }),
      note: null,
    });
    expect(res.status).toBe("approved");
    const created = await db.query.place.findFirst({
      where: (p, { eq }) => eq(p.id, res.placeId ?? ""),
    });
    expect(created).toMatchObject({
      collectionId: "sights",
      detail: "district",
      parentId: "cluster",
    });
    expect(await titles("centrum")).toContain("New leaf");
    expect(await titles("sights")).not.toContain("New leaf");
  });

  it("a place created on the home map defaults to city detail, no parent", async () => {
    const res = await proposals(admin).create({
      kind: "create",
      collectionId: "sights",
      draft: draft({ title: "Plain" }),
      note: null,
    });
    const created = await db.query.place.findFirst({
      where: (p, { eq }) => eq(p.id, res.placeId ?? ""),
    });
    expect(created).toMatchObject({ detail: "city", parentId: null });
  });

  it("a contributor's draft is stored complete and applied on approval", async () => {
    const res = await proposals(visitor).create({
      kind: "edit",
      placeId: "loose-leaf",
      draft: draft({ title: "loose-leaf", parentId: "cluster" }),
      note: null,
    });
    expect(res.status).toBe("pending");
    const stored = await db.query.proposal.findFirst({
      where: (p, { eq }) => eq(p.id, res.id),
    });
    expect(stored?.draft).toMatchObject({
      parentId: "cluster",
      detail: "district",
    });
    await proposals(admin).review({
      proposalId: res.id,
      decision: "approve",
      note: null,
    });
    const after = await db.query.place.findFirst({
      where: (p, { eq }) => eq(p.id, "loose-leaf"),
    });
    expect(after).toMatchObject({
      parentId: "cluster",
      detail: "district",
      revision: 2,
    });
  });

  it("an edit that leaves them out keeps parent and detail", async () => {
    await proposals(admin).create({
      kind: "edit",
      placeId: "leaf-1",
      draft: draft({ title: "Leaf one, renamed" }),
      note: null,
    });
    const after = await db.query.place.findFirst({
      where: (p, { eq }) => eq(p.id, "leaf-1"),
    });
    expect(after).toMatchObject({
      title: "Leaf one, renamed",
      parentId: "cluster",
      detail: "district",
    });
  });

  it("null clears the parent; detail can be raised to city", async () => {
    await proposals(admin).create({
      kind: "edit",
      placeId: "leaf-2",
      draft: draft({ title: "leaf-2", parentId: null, detail: "city" }),
      note: null,
    });
    expect(await titles("sights")).toContain("leaf-2");
    const after = await db.query.place.findFirst({
      where: (p, { eq }) => eq(p.id, "leaf-2"),
    });
    expect(after?.parentId).toBeNull();
  });

  it("refuses a parent on another map, itself, or one of its parts", async () => {
    const edit = (placeId: string, parentId: string) =>
      proposals(admin).create({
        kind: "edit",
        placeId,
        draft: draft({ title: placeId, parentId }),
        note: null,
      });
    await expect(edit("leaf-1", "elsewhere")).rejects.toThrow(/Unknown parent/);
    await expect(edit("leaf-1", "archived-leaf")).rejects.toThrow(
      /Unknown parent/,
    );
    await expect(edit("cluster", "cluster")).rejects.toThrow(/own parent/);
    await expect(edit("cluster", "leaf-1")).rejects.toThrow(/loop/);
  });

  it("route stops may be any place in the map's pool", async () => {
    const res = await proposals(admin).createRoute({
      kind: "create",
      collectionId: "centrum",
      draft: {
        title: "Two leaves",
        summary: "A short walk between two leaves.",
        body: "",
        stops: [
          {
            placeId: "leaf-1",
            name: "x",
            lat: 52.37,
            lng: 4.89,
            narration: "",
            translations: {},
          },
          {
            placeId: "cluster",
            name: "y",
            lat: 52.37,
            lng: 4.89,
            narration: "",
            translations: {},
          },
        ],
        legs: [
          {
            mode: "walk",
            snap: false,
            via: [],
            path: [
              [4.89, 52.37],
              [4.891, 52.371],
            ],
            directions: "",
            translations: {},
          },
        ],
        photoIds: [],
        translations: {},
      },
      note: null,
    });
    expect(res.status).toBe("approved");
  });
});

describe("setting a view", () => {
  it("refuses a map that has places of its own", async () => {
    await expect(
      collectionRouter.createCaller(as(admin)).setView({
        collectionId: "west",
        view: { source: "sights", detail: "full" },
      }),
    ).rejects.toThrow(/places of its own/);
  });

  it("refuses a view of a view", async () => {
    await db.insert(collection).values(mapRow("empty", null));
    await expect(
      collectionRouter.createCaller(as(admin)).setView({
        collectionId: "empty",
        view: { source: "centrum", detail: "full" },
      }),
    ).rejects.toThrow(/itself a view/);
  });

  it("needs map admin rights", async () => {
    await db.insert(collection).values(mapRow("empty", null));
    await expect(
      collectionRouter.createCaller(as(visitor)).setView({
        collectionId: "empty",
        view: { source: "sights", detail: "city" },
      }),
    ).rejects.toThrow(/permission/);
    await collectionRouter.createCaller(as(admin)).setView({
      collectionId: "empty",
      view: { source: "sights", detail: "city" },
    });
    expect(await titles("empty")).toEqual([
      "cluster",
      "standout",
      "west-sight",
    ]);
  });
});
