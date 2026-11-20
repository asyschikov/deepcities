import { describe, expect, it } from "vitest";
import { diffDrafts, distanceMeters } from "./diff";
import type { PlaceDraft } from "./validation";

const base: PlaceDraft = {
  title: "Het Schip",
  summary: "Ship-shaped housing block.",
  body: "",
  category: "architecture",
  lat: 52.3906,
  lng: 4.8737,
  address: null,
  municipality: null,
  borough: null,
  neighbourhood: null,
  subNeighbourhood: null,
  links: [],
  photoIds: ["a"],
  attributes: { architect: "Michel de Klerk" },
  translations: {},
};

describe("diffDrafts", () => {
  it("returns nothing for identical drafts", () => {
    expect(diffDrafts(base, { ...base })).toEqual([]);
  });

  it("reports changed fields only", () => {
    const changes = diffDrafts(base, {
      ...base,
      title: "Het Schip museum",
      photoIds: ["a", "b"],
    });
    expect(changes.map((c) => c.field)).toEqual(["title", "photoIds"]);
  });

  it("reports custom field changes by key", () => {
    const changes = diffDrafts(base, {
      ...base,
      attributes: { built: "1919" },
    });
    expect(changes.map((c) => [c.field, c.key, c.before, c.after])).toEqual([
      ["attribute", "built", "", "1919"],
      ["attribute", "architect", "Michel de Klerk", ""],
    ]);
  });

  it("ignores sub-metre pin jitter but reports real moves", () => {
    expect(diffDrafts(base, { ...base, lat: base.lat + 0.000001 })).toEqual([]);
    expect(
      diffDrafts(base, { ...base, lat: base.lat + 0.001 }).map((c) => c.field),
    ).toEqual(["location"]);
  });
});

describe("distanceMeters", () => {
  it("is about 111 m per 0.001° latitude", () => {
    const d = distanceMeters(base, { lat: base.lat + 0.001, lng: base.lng });
    expect(d).toBeGreaterThan(110);
    expect(d).toBeLessThan(112);
  });
});

describe("diffDrafts translations", () => {
  it("reports translated texts per language", () => {
    const after: PlaceDraft = {
      ...base,
      translations: {
        nl: { title: "Het Schip", attributes: { architect: "M. de Klerk" } },
      },
    };
    expect(
      diffDrafts(base, after).map((c) => [c.field, c.lang, c.key, c.after]),
    ).toEqual([
      ["title", "nl", undefined, "Het Schip"],
      ["attribute", "nl", "architect", "M. de Klerk"],
    ]);
  });
});
