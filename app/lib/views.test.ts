import { describe, expect, it } from "vitest";
import {
  detailForNew,
  homeIdOf,
  linkOrder,
  mapShows,
  mapToLink,
  matchesWhere,
  type ViewedPlace,
  type ViewMap,
  wouldCycle,
} from "./views";

const home: ViewMap = { id: "sights", view: null };
const centrum: ViewMap = {
  id: "centrum",
  view: { source: "sights", where: { borough: ["Centrum"] }, detail: "full" },
};
const coarse: ViewMap = {
  id: "coarse",
  view: { source: "sights", where: { borough: ["Centrum"] }, detail: "city" },
};
const other: ViewMap = { id: "other", view: null };

const at = (over: Partial<ViewedPlace>): ViewedPlace => ({
  collectionId: "sights",
  detail: "city",
  borough: "Centrum",
  neighbourhood: "Burgwallen-Oude Zijde",
  subNeighbourhood: null,
  category: "curiosity",
  ...over,
});

describe("homeIdOf", () => {
  it("is the view's source, or the map itself", () => {
    expect(homeIdOf(centrum)).toBe("sights");
    expect(homeIdOf(home)).toBe("sights");
  });
});

describe("matchesWhere", () => {
  it("needs every listed field to match one of its values", () => {
    expect(matchesWhere(at({}), { borough: ["Centrum", "West"] })).toBe(true);
    expect(
      matchesWhere(at({ borough: "West" }), { borough: ["Centrum"] }),
    ).toBe(false);
    expect(
      matchesWhere(at({}), { borough: ["Centrum"], category: ["museum"] }),
    ).toBe(false);
    expect(matchesWhere(at({ borough: null }), { borough: ["Centrum"] })).toBe(
      false,
    );
  });
  it("matches everything without a filter", () => {
    expect(matchesWhere(at({ borough: null }), undefined)).toBe(true);
  });
});

describe("mapShows", () => {
  const standout = at({});
  const cluster = at({});
  const leaf = at({ detail: "district" });
  const westLeaf = at({ detail: "district", borough: "West" });

  it("home map: its own city-level places", () => {
    expect(mapShows(home, standout, false)).toBe(true);
    expect(mapShows(home, cluster, true)).toBe(true);
    expect(mapShows(home, leaf, false)).toBe(false);
    expect(mapShows(other, standout, false)).toBe(false);
  });

  it("full view: matching leaves, not cluster parents", () => {
    expect(mapShows(centrum, standout, false)).toBe(true);
    expect(mapShows(centrum, leaf, false)).toBe(true);
    expect(mapShows(centrum, cluster, true)).toBe(false);
    expect(mapShows(centrum, westLeaf, false)).toBe(false);
    expect(
      mapShows(
        centrum,
        at({ collectionId: "other", detail: "district" }),
        false,
      ),
    ).toBe(false);
  });

  it("city view: matching city-level places, clusters included", () => {
    expect(mapShows(coarse, standout, false)).toBe(true);
    expect(mapShows(coarse, cluster, true)).toBe(true);
    expect(mapShows(coarse, leaf, false)).toBe(false);
  });
});

describe("detailForNew", () => {
  it("is district only from a full-detail view", () => {
    expect(detailForNew(centrum)).toBe("district");
    expect(detailForNew(coarse)).toBe("city");
    expect(detailForNew(home)).toBe("city");
  });
});

describe("linking", () => {
  const maps = [home, centrum, coarse];

  it("links a child in a full view that shows it, else its home", () => {
    const leaf = at({ detail: "district" });
    expect(
      mapToLink(leaf, false, linkOrder("child", home, maps, "sights"), maps),
    ).toBe(centrum);
    const westLeaf = at({ detail: "district", borough: "West" });
    // No map shows it: fall back to the home map.
    expect(
      mapToLink(
        westLeaf,
        false,
        linkOrder("child", home, maps, "sights"),
        maps,
      ),
    ).toBe(home);
  });

  it("prefers the current map when it shows the place", () => {
    const standout = at({});
    expect(
      mapToLink(
        standout,
        false,
        linkOrder("child", home, maps, "sights"),
        maps,
      ),
    ).toBe(home);
    expect(
      mapToLink(
        standout,
        false,
        linkOrder("child", centrum, maps, "sights"),
        maps,
      ),
    ).toBe(centrum);
  });

  it("links a parent in the current map if shown there, else its home", () => {
    const cluster = at({});
    expect(
      mapToLink(
        cluster,
        true,
        linkOrder("parent", centrum, maps, "sights"),
        maps,
      ),
    ).toBe(home);
    expect(
      mapToLink(
        cluster,
        true,
        linkOrder("parent", coarse, maps, "sights"),
        maps,
      ),
    ).toBe(coarse);
  });
});

describe("wouldCycle", () => {
  const parents = new Map<string, string | null>([
    ["a", null],
    ["b", "a"],
    ["c", "b"],
  ]);
  const parentOf = (id: string) => parents.get(id);

  it("allows a parent that isn't below the place", () => {
    expect(wouldCycle("x", "c", parentOf)).toBe(false);
    expect(wouldCycle(null, "a", parentOf)).toBe(false);
  });

  it("refuses making a place part of its own part", () => {
    expect(wouldCycle("a", "c", parentOf)).toBe(true);
    expect(wouldCycle("a", "a", parentOf)).toBe(true);
  });

  it("stops on loops already in the data", () => {
    const loop = new Map([
      ["p", "q"],
      ["q", "p"],
    ]);
    expect(wouldCycle("x", "p", (id) => loop.get(id))).toBe(true);
  });
});
