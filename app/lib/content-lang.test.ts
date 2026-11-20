import { describe, expect, it } from "vitest";
import {
  localize,
  localizeCollection,
  localizePlace,
  mapLanguages,
  untranslated,
} from "./content-lang";
import { placeDraftSchema } from "./validation";

const place = {
  title: "De Bloem",
  summary: "An 18th-century corn mill.",
  body: "Long text.",
  attributes: { architect: "Unknown", built: 1768 },
  translations: {
    nl: {
      title: "De Bloem (molen)",
      summary: "",
      attributes: { architect: "Onbekend" },
    },
  },
};

describe("localize", () => {
  it("overrides only translated, non-empty texts", () => {
    const nl = localize(place, "nl");
    expect(nl.title).toBe("De Bloem (molen)");
    expect(nl.summary).toBe(place.summary);
    expect(nl.body).toBe(place.body);
  });

  it("leaves the original alone without a language or translation", () => {
    expect(localize(place, null)).toBe(place);
    expect(localize(place, "de").title).toBe("De Bloem");
  });

  it("merges translated text attributes for places", () => {
    expect(localizePlace(place, "nl").attributes).toEqual({
      architect: "Onbekend",
      built: 1768,
    });
  });

  it("lists what is still in the original language", () => {
    expect(untranslated(place, "nl", ["title", "summary", "body"])).toEqual([
      "summary",
      "body",
    ]);
  });
});

describe("collections", () => {
  const coll = {
    title: "C-list sights",
    tagline: null,
    description: "About",
    language: "en" as const,
    languages: ["nl" as const, "en" as const],
    categories: [{ key: "mills", label: "Mills", color: "#000000" }],
    fields: [
      {
        key: "status",
        label: "Status",
        type: "select" as const,
        options: ["Listed"],
      },
    ],
    translations: {
      nl: {
        title: "C-lijst",
        categories: { mills: "Molens" },
        fields: {
          status: { label: "Status (nl)", options: { Listed: "Beschermd" } },
        },
      },
    },
  };

  it("puts the map's own language first, once", () => {
    expect(mapLanguages(coll)).toEqual(["en", "nl"]);
  });

  it("translates map texts and labels but keeps option values", () => {
    const nl = localizeCollection(coll, "nl");
    expect(nl.title).toBe("C-lijst");
    expect(nl.description).toBe("About");
    expect(nl.categories[0]?.label).toBe("Molens");
    expect(nl.fields[0]?.options).toEqual(["Listed"]);
    expect(nl.fields[0]?.optionLabels).toEqual({ Listed: "Beschermd" });
  });
});

describe("translations schema", () => {
  it("drops blank fields and empty languages", () => {
    const parsed = placeDraftSchema.parse({
      title: "De Bloem",
      summary: "An 18th-century corn mill.",
      body: "",
      category: "mills",
      lat: 52.38,
      lng: 4.85,
      address: null,
      links: [],
      photoIds: [],
      translations: {
        nl: { title: " Molen ", summary: "  ", attributes: { a: "" } },
        de: { title: "" },
      },
    });
    expect(parsed.translations).toEqual({ nl: { title: "Molen" } });
  });

  it("rejects unknown languages", () => {
    expect(
      placeDraftSchema.safeParse({
        title: "De Bloem",
        summary: "An 18th-century corn mill.",
        body: "",
        category: "mills",
        lat: 52.38,
        lng: 4.85,
        address: null,
        links: [],
        photoIds: [],
        translations: { xx: { title: "?" } },
      }).success,
    ).toBe(false);
  });
});
