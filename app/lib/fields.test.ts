import { describe, expect, it } from "vitest";
import {
  attributeIssues,
  compactAttributes,
  extraDescription,
  listedFields,
  removedFieldKeys,
} from "./fields";
import type { FieldDef } from "./validation";

const defs: FieldDef[] = [
  { key: "status", label: "Status", type: "select", options: ["A", "B"] },
  { key: "year", label: "Year", type: "number", required: true },
  { key: "site", label: "Site", type: "url" },
  { key: "open", label: "Open", type: "boolean" },
];

describe("attributeIssues", () => {
  it("accepts valid values", () => {
    expect(
      attributeIssues(defs, {
        status: "A",
        year: 1955,
        site: "https://x.nl",
        open: false,
      }),
    ).toEqual([]);
  });

  it("flags unknown keys, wrong types and missing required fields", () => {
    const issues = attributeIssues(defs, {
      status: "C",
      site: "ftp://x",
      open: "yes",
      color: "red",
    });
    expect(issues.map((i) => i.key).sort()).toEqual(
      ["color", "open", "site", "status", "year"].sort(),
    );
  });
});

describe("compactAttributes", () => {
  it("drops empty strings but keeps false and 0", () => {
    expect(compactAttributes({ a: "", b: false, c: 0 })).toEqual({
      b: false,
      c: 0,
    });
  });
});

describe("removedFieldKeys", () => {
  it("lists keys dropped from the definitions", () => {
    expect(removedFieldKeys(defs, defs.slice(1))).toEqual(["status"]);
    expect(
      removedFieldKeys(defs, [...defs.map((d) => ({ ...d, hidden: true }))]),
    ).toEqual([]);
  });

  it("skips required checks on hidden fields", () => {
    const hidden = defs.map((d) => ({ ...d, hidden: true }));
    expect(attributeIssues(hidden, {})).toEqual([]);
  });
});

describe("extra description", () => {
  const withExtra: FieldDef[] = [
    ...defs,
    { key: "extra_description", label: "More", type: "longtext" },
  ];

  it("is left out of the field rows", () => {
    expect(listedFields(withExtra).map((d) => d.key)).not.toContain(
      "extra_description",
    );
    expect(listedFields(withExtra)).toHaveLength(defs.length);
  });

  it("returns the text only when the map has the longtext field", () => {
    expect(extraDescription(withExtra, { extra_description: "More." })).toBe(
      "More.",
    );
    expect(extraDescription(withExtra, { extra_description: "  " })).toBe(
      undefined,
    );
    expect(extraDescription(defs, { extra_description: "More." })).toBe(
      undefined,
    );
    const asText = withExtra.map((d) =>
      d.key === "extra_description" ? { ...d, type: "text" as const } : d,
    );
    expect(extraDescription(asText, { extra_description: "x" })).toBe(
      undefined,
    );
    expect(listedFields(asText).map((d) => d.key)).toContain(
      "extra_description",
    );
  });

  it("is ignored when the field is hidden", () => {
    const hidden = withExtra.map((d) =>
      d.key === "extra_description" ? { ...d, hidden: true } : d,
    );
    expect(extraDescription(hidden, { extra_description: "More." })).toBe(
      undefined,
    );
  });
});
