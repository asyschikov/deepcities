/**
 * Per-map overrides: a view map's own values for its source's places.
 *
 * A place lives once, on its home map. A view may give it different custom
 * field values (e.g. a higher rank in Deep Centrum than citywide) or another
 * category. The effective place on map M is the home place with M's
 * override merged on top: attribute keys replace per key (null unsets the
 * key on M), a category replaces the home one. Overrides never store no-ops:
 * a key equal to the home value is dropped.
 *
 * A view also displays fields of its own after its source's
 * (`displayedFields`); their values only ever live in overrides.
 */
import type { AttributeValue } from "./fields";
import type {
  Attributes,
  FieldDef,
  OverrideAttributes,
  OverrideDraft,
} from "./validation";

export const NO_OVERRIDE: OverrideDraft = { attributes: {}, category: null };

/** JSON with object keys sorted, for comparing values and overrides. */
export const stableJson = (v: unknown): string =>
  JSON.stringify(v, (_k, val: unknown) =>
    val && typeof val === "object" && !Array.isArray(val)
      ? Object.fromEntries(
          Object.entries(val as Record<string, unknown>).sort(([a], [b]) =>
            a.localeCompare(b),
          ),
        )
      : val,
  );

/** The values an override touches. */
export interface Overridable {
  attributes: Attributes;
  category: string;
}

const absent = (v: AttributeValue | null | undefined): boolean =>
  v === undefined || v === null || v === "";

const same = (
  a: AttributeValue | null | undefined,
  b: AttributeValue | null | undefined,
): boolean => (absent(a) && absent(b)) || a === b;

/** Home attributes with the override's keys applied (null unsets). */
export const effectiveAttributes = (
  home: Attributes,
  o: OverrideDraft | undefined,
): Attributes => {
  const merged: Record<string, AttributeValue | null> = {
    ...home,
    ...o?.attributes,
  };
  return Object.fromEntries(
    Object.entries(merged).flatMap(([k, v]) =>
      v === null || v === "" ? [] : [[k, v]],
    ),
  );
};

/** Which values an override changes: attribute keys, then "category". */
export const overriddenKeys = (o: OverrideDraft | undefined): string[] => [
  ...Object.keys(o?.attributes ?? {}).sort(),
  ...(o?.category ? ["category"] : []),
];

/**
 * The place as map M shows it: `p` with M's override `o` merged on top,
 * plus `overridden` (which keys come from the override).
 */
export const withOverride = <P extends Overridable>(
  p: P,
  o: OverrideDraft | undefined,
): P & { overridden: string[] } => ({
  ...p,
  attributes: effectiveAttributes(p.attributes, o),
  category: o?.category ?? p.category,
  overridden: overriddenKeys(o),
});

/**
 * The override that makes `home` look like `wanted` on a map: only the keys
 * that differ (null where the map wants no value), and the category only
 * when it differs.
 */
export const overrideFor = (
  home: Overridable,
  wanted: Overridable,
): OverrideDraft => {
  const keys = [
    ...new Set([
      ...Object.keys(home.attributes),
      ...Object.keys(wanted.attributes),
    ]),
  ].sort();
  const attributes: OverrideAttributes = Object.fromEntries(
    keys.flatMap((k) => {
      const h = home.attributes[k];
      const w = wanted.attributes[k];
      if (same(h, w)) return [];
      return [[k, absent(w) ? null : (w ?? null)]];
    }),
  );
  return {
    attributes,
    category: wanted.category === home.category ? null : wanted.category,
  };
};

/** Drop the keys of `o` that now equal the home values. */
export const normalizeOverride = (
  home: Overridable,
  o: OverrideDraft,
): OverrideDraft => overrideFor(home, withOverride(home, o));

export const isEmptyOverride = (o: OverrideDraft): boolean =>
  o.category === null && Object.keys(o.attributes).length === 0;

/** What a caller asks to change in a map's override for one place. */
export interface OverridePatch {
  /** Values wanted on the map (null: no value there). Keys left out are kept. */
  attributes?: OverrideAttributes;
  /** Category wanted on the map; null goes back to the home category. */
  category?: string | null;
  /** Keys (attribute keys or "category") to take from the home place again. */
  revert?: string[];
  /** Start from the home values, dropping the current override first. */
  reset?: boolean;
}

/**
 * The override after applying `patch` to `current` for a place whose home
 * values are `home` (normalised: no no-op keys).
 */
export const patchOverride = (
  home: Overridable,
  current: OverrideDraft | undefined,
  patch: OverridePatch,
): OverrideDraft => {
  const start = withOverride(home, patch.reset ? undefined : current);
  const reverted = new Set(patch.revert ?? []);
  const attributes: Record<string, AttributeValue | null> = {
    ...start.attributes,
    ...Object.fromEntries(
      [...reverted]
        .filter((k) => k !== "category")
        .map((k) => [k, home.attributes[k] ?? null]),
    ),
    ...patch.attributes,
  };
  const category = reverted.has("category")
    ? home.category
    : patch.category === undefined
      ? start.category
      : (patch.category ?? home.category);
  return overrideFor(home, {
    attributes: effectiveAttributes({}, { attributes, category: null }),
    category,
  });
};

/**
 * The fields a view displays: its source's, then its own (keys the source
 * already has are the source's).
 */
export const displayedFields = <D extends FieldDef>(
  source: D[],
  own: D[],
): D[] => {
  const keys = new Set(source.map((f) => f.key));
  return [...source, ...own.filter((f) => !keys.has(f.key))];
};

/** Keys of a view's own fields that its source already defines. */
export const clashingFieldKeys = (
  source: FieldDef[],
  own: FieldDef[],
): string[] => {
  const keys = new Set(source.map((f) => f.key));
  return own.map((f) => f.key).filter((k) => keys.has(k));
};
