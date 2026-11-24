import { describe, expect, it } from "vitest";
import {
  currentFieldFilters,
  isDefaultSelection,
  matchesFieldFilters,
  nextFieldFilterParam,
} from "./field-filters";
import { mapSearchSchema } from "./map-search";
import { type FieldDef, fieldDefSchema, fieldDefsSchema } from "./validation";

const status: FieldDef = {
  key: "status",
  label: "Status",
  type: "select",
  options: ["Open", "Gone", "Closed"],
  filter: true,
  filterDefault: ["Open"],
};
const kind: FieldDef = {
  key: "kind",
  label: "Kind",
  type: "select",
  options: ["Mural", "Statue"],
  filter: true,
};
const fields = [status, kind];

describe("filterDefault validation", () => {
  it("accepts a subset of the options on a filter field", () => {
    expect(fieldDefSchema.safeParse(status).success).toBe(true);
    expect(
      fieldDefsSchema.safeParse([{ ...status, filterDefault: [] }, kind])
        .success,
    ).toBe(true);
  });

  it("rejects values that aren't options", () => {
    expect(
      fieldDefSchema.safeParse({ ...status, filterDefault: ["Nope"] }).success,
    ).toBe(false);
  });

  it("needs filter: true", () => {
    expect(
      fieldDefSchema.safeParse({ ...status, filter: undefined }).success,
    ).toBe(false);
    expect(
      fieldDefSchema.safeParse({
        key: "note",
        label: "Note",
        type: "text",
        filterDefault: ["x"],
      }).success,
    ).toBe(false);
  });
});

describe("initial field filters", () => {
  it("starts with the map defaults", () => {
    expect(currentFieldFilters(fields, undefined)).toEqual({
      status: ["Open"],
    });
  });

  it("lets the URL override a default, including with nothing", () => {
    expect(currentFieldFilters(fields, { status: ["Gone"] })).toEqual({
      status: ["Gone"],
    });
    expect(currentFieldFilters(fields, { status: [] })).toEqual({
      status: [],
    });
  });

  it("reads old single-value links", () => {
    expect(currentFieldFilters(fields, { kind: "Mural" })).toEqual({
      status: ["Open"],
      kind: ["Mural"],
    });
  });

  it("ignores defaults of hidden fields", () => {
    expect(
      currentFieldFilters([{ ...status, hidden: true }], undefined),
    ).toEqual({});
  });

  it("keeps an empty selection through the URL schema", () => {
    expect(mapSearchSchema.parse({ f: { status: [] } })).toEqual({
      f: { status: [] },
    });
  });
});

describe("nextFieldFilterParam", () => {
  it("stores deselecting a default as []", () => {
    expect(nextFieldFilterParam(fields, undefined, "status", [])).toEqual({
      status: [],
    });
  });

  it("drops a choice equal to the default", () => {
    expect(
      nextFieldFilterParam(fields, { status: [] }, "status", ["Open"]),
    ).toBeUndefined();
  });

  it("drops an empty choice on a field without a default", () => {
    expect(
      nextFieldFilterParam(fields, { kind: ["Mural"] }, "kind", []),
    ).toBeUndefined();
    expect(
      nextFieldFilterParam(fields, { kind: "Mural" }, "status", ["Gone"]),
    ).toEqual({ kind: "Mural", status: ["Gone"] });
  });
});

describe("matchesFieldFilters", () => {
  it("ORs options within a field and ANDs fields", () => {
    const f = { status: ["Open", "Gone"], kind: ["Mural"] };
    expect(matchesFieldFilters({ status: "Gone", kind: "Mural" }, f)).toBe(
      true,
    );
    expect(matchesFieldFilters({ status: "Closed", kind: "Mural" }, f)).toBe(
      false,
    );
    expect(matchesFieldFilters({ status: "Open" }, f)).toBe(false);
    expect(matchesFieldFilters({}, { status: [] })).toBe(true);
  });

  it("tells when the default is what's selected", () => {
    expect(isDefaultSelection(status, ["Open"])).toBe(true);
    expect(isDefaultSelection(status, [])).toBe(false);
    expect(isDefaultSelection(kind, [])).toBe(false);
  });
});
