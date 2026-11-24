import { describe, expect, it } from "vitest";
import {
  clashingFieldKeys,
  displayedFields,
  effectiveAttributes,
  isEmptyOverride,
  NO_OVERRIDE,
  normalizeOverride,
  overrideFor,
  patchOverride,
  withOverride,
} from "./overrides";
import type { FieldDef } from "./validation";

const home = {
  id: "p1",
  attributes: { rank: "Nice", era: "1600s" },
  category: "curiosity",
};

describe("effective values", () => {
  it("override keys replace per key, null unsets, category replaces", () => {
    const p = withOverride(home, {
      attributes: { rank: "Amazing", era: null, local: "yes" },
      category: "history",
    });
    expect(p.attributes).toEqual({ rank: "Amazing", local: "yes" });
    expect(p.category).toBe("history");
    expect(p.overridden).toEqual(["era", "local", "rank", "category"]);
    expect(p.id).toBe("p1");
  });

  it("no override: the home values", () => {
    expect(withOverride(home, undefined)).toEqual({ ...home, overridden: [] });
    expect(effectiveAttributes(home.attributes, NO_OVERRIDE)).toEqual(
      home.attributes,
    );
  });
});

describe("storing overrides", () => {
  it("keeps only keys that differ from the home values", () => {
    expect(
      overrideFor(home, {
        attributes: { rank: "Amazing", era: "1600s" },
        category: "curiosity",
      }),
    ).toEqual({ attributes: { rank: "Amazing" }, category: null });
  });

  it("a key the map wants empty is stored as null", () => {
    expect(
      overrideFor(home, { attributes: { rank: "Nice" }, category: "x" }),
    ).toEqual({ attributes: { era: null }, category: "x" });
  });

  it("normalising drops keys the home place has caught up with", () => {
    const o = normalizeOverride(
      { attributes: { rank: "Amazing" }, category: "history" },
      { attributes: { rank: "Amazing", era: null }, category: "history" },
    );
    expect(o).toEqual(NO_OVERRIDE);
    expect(isEmptyOverride(o)).toBe(true);
  });
});

describe("patching an override", () => {
  const current = { attributes: { rank: "Amazing" }, category: null };

  it("merges onto the current override", () => {
    expect(
      patchOverride(home, current, { attributes: { era: "1700s" } }),
    ).toEqual({
      attributes: { era: "1700s", rank: "Amazing" },
      category: null,
    });
  });

  it("setting the home value or reverting removes the key", () => {
    expect(
      patchOverride(home, current, { attributes: { rank: "Nice" } }),
    ).toEqual(NO_OVERRIDE);
    expect(patchOverride(home, current, { revert: ["rank"] })).toEqual(
      NO_OVERRIDE,
    );
  });

  it("null unsets on the map; category null goes back to home", () => {
    expect(
      patchOverride(
        home,
        { attributes: {}, category: "history" },
        { attributes: { era: null }, category: null },
      ),
    ).toEqual({ attributes: { era: null }, category: null });
  });

  it("reset starts from the home values", () => {
    expect(
      patchOverride(home, current, {
        reset: true,
        attributes: { era: "1600s", rank: "Nice", local: "yes" },
      }),
    ).toEqual({ attributes: { local: "yes" }, category: null });
  });
});

describe("a view's own fields", () => {
  const f = (key: string): FieldDef => ({ key, label: key, type: "text" });

  it("are displayed after the source's, never replacing them", () => {
    expect(
      displayedFields([f("rank"), f("era")], [f("local"), f("rank")]).map(
        (d) => d.key,
      ),
    ).toEqual(["rank", "era", "local"]);
    expect(clashingFieldKeys([f("rank")], [f("local"), f("rank")])).toEqual([
      "rank",
    ]);
  });
});
