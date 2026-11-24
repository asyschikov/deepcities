import { EXTRA_DESCRIPTION_KEY } from "./constants";
import type { Attributes, FieldDef } from "./validation";

export type AttributeValue = Attributes[string];

const MAX_TEXT = 200;
const MAX_LONGTEXT = 4000;

const isHttpUrl = (v: string) => {
  try {
    return ["http:", "https:"].includes(new URL(v).protocol);
  } catch {
    return false;
  }
};

/** Why `value` is not valid for `def`, or null when it is. */
const valueProblem = (def: FieldDef, value: AttributeValue): string | null => {
  switch (def.type) {
    case "text":
    case "longtext": {
      const max = def.type === "text" ? MAX_TEXT : MAX_LONGTEXT;
      if (typeof value !== "string") return "must be a string";
      return value.length > max ? `must be at most ${max} characters` : null;
    }
    case "url":
      return typeof value === "string" && isHttpUrl(value)
        ? null
        : "must be an http(s) URL";
    case "number":
      return typeof value === "number" && Number.isFinite(value)
        ? null
        : "must be a number";
    case "boolean":
      return typeof value === "boolean" ? null : "must be true or false";
    case "select":
      return typeof value === "string" && (def.options ?? []).includes(value)
        ? null
        : `must be one of: ${(def.options ?? []).join(", ")}`;
  }
};

export interface AttributeIssue {
  key: string;
  message: string;
}

/**
 * Check a place's custom-field values against the map's definitions:
 * no unknown keys, right types, required fields present.
 */
export const attributeIssues = (
  defs: FieldDef[],
  attributes: Attributes,
): AttributeIssue[] => {
  const byKey = new Map(defs.map((d) => [d.key, d]));
  const unknown = Object.keys(attributes)
    .filter((k) => !byKey.has(k))
    .map((key) => ({ key, message: "is not a field of this map" }));
  const invalid = defs.flatMap((def) => {
    const value = attributes[def.key];
    if (value === undefined || value === "") {
      return def.required && !def.hidden
        ? [{ key: def.key, message: "is required" }]
        : [];
    }
    const problem = valueProblem(def, value);
    return problem ? [{ key: def.key, message: problem }] : [];
  });
  return [...unknown, ...invalid];
};

/** Fields shown to people (in the form and on the place page). */
export const visibleFields = <D extends FieldDef>(defs: D[]): D[] =>
  defs.filter((d) => !d.hidden);

const isExtraDescription = (d: FieldDef) =>
  d.key === EXTRA_DESCRIPTION_KEY && d.type === "longtext";

/** Fields shown as rows of a place's field list: the extra description is part of the text. */
export const listedFields = <D extends FieldDef>(defs: D[]): D[] =>
  visibleFields(defs).filter((d) => !isExtraDescription(d));

/** The map's extra description of a place (see `EXTRA_DESCRIPTION_KEY`), if it has one. */
export const extraDescription = (
  defs: FieldDef[],
  attributes: Attributes | undefined,
): string | undefined => {
  const def = visibleFields(defs).find(isExtraDescription);
  const value = def ? attributes?.[def.key] : undefined;
  return typeof value === "string" && value.trim() !== "" ? value : undefined;
};

/** Keys of `before` missing from `after`: fields can be hidden, never deleted. */
export const removedFieldKeys = (
  before: FieldDef[],
  after: FieldDef[],
): string[] => {
  const kept = new Set(after.map((f) => f.key));
  return before.map((f) => f.key).filter((k) => !kept.has(k));
};

/** Drop empty strings so "cleared" fields are simply absent. */
export const compactAttributes = (attributes: Attributes): Attributes =>
  Object.fromEntries(Object.entries(attributes).filter(([, v]) => v !== ""));

/** Plain-text rendering of a value (diffs, lists). */
export const showAttribute = (
  value: AttributeValue | undefined,
  yes = "yes",
  no = "no",
): string =>
  value === undefined
    ? ""
    : typeof value === "boolean"
      ? value
        ? yes
        : no
      : String(value);
