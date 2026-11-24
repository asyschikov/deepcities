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
 * (`displayedFields`; `view.sourceFields` may limit which of the source's);
 * their values only ever live in overrides.
 *
 * An override may also translate text field values (`translations`, the
 * shape places use: `{nl: {attributes: {key: "…"}}}`). On the map they
 * replace the home translations per language and key; a key the override
 * gives a value of its own drops the home translations of that key.
 */
import type { ContentLang } from "./constants";
import type { AttributeValue } from "./fields";
import type {
  Attributes,
  FieldDef,
  MapView,
  OverrideAttributes,
  OverrideDraft,
  OverrideTranslations,
  OverrideTranslationsPatch,
  PlaceTranslations,
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
  /** The home place's translations (text field values among them). */
  translations?: PlaceTranslations;
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

const langsOf = (...ts: (object | undefined)[]): ContentLang[] =>
  [...new Set(ts.flatMap((t) => Object.keys(t ?? {})))] as ContentLang[];

const nonEmpty = (o: object): boolean => Object.keys(o).length > 0;

/**
 * The home translations as map M shows them: a key the override gives a
 * value of its own drops the home translations of that key (they translate
 * the home value), then the override's translations replace per language
 * and key.
 */
export const effectiveTranslations = (
  home: PlaceTranslations,
  o: OverrideDraft | undefined,
): PlaceTranslations => {
  if (!o) return home;
  return Object.fromEntries(
    langsOf(home, o.translations).flatMap((lang) => {
      const { attributes: homeAttrs, ...texts } = home[lang] ?? {};
      const attributes = {
        ...Object.fromEntries(
          Object.entries(homeAttrs ?? {}).filter(
            ([k]) => !Object.hasOwn(o.attributes, k),
          ),
        ),
        ...o.translations?.[lang]?.attributes,
      };
      const entry = {
        ...texts,
        ...(nonEmpty(attributes) ? { attributes } : {}),
      };
      return nonEmpty(entry) ? [[lang, entry]] : [];
    }),
  );
};

/**
 * The place as map M shows it: `p` with M's override `o` merged on top
 * (translations too, when `p` has them), plus `overridden` (which keys come
 * from the override).
 */
export const withOverride = <P extends Overridable>(
  p: P,
  o: OverrideDraft | undefined,
): P & { overridden: string[] } => ({
  ...p,
  attributes: effectiveAttributes(p.attributes, o),
  category: o?.category ?? p.category,
  ...(p.translations
    ? { translations: effectiveTranslations(p.translations, o) }
    : {}),
  overridden: overriddenKeys(o),
});

/**
 * The override translations worth storing, given the override's
 * `attributes`: non-empty, of a key the map shows a value for, and either
 * of a key the override sets or different from the home translation.
 */
const keptTranslations = (
  home: Overridable,
  attributes: OverrideAttributes,
  t: OverrideTranslations | undefined,
): OverrideTranslations => {
  const shown = effectiveAttributes(home.attributes, {
    attributes,
    category: null,
  });
  return Object.fromEntries(
    langsOf(t).flatMap((lang) => {
      const kept = Object.entries(t?.[lang]?.attributes ?? {}).filter(
        ([k, v]) =>
          v.trim() !== "" &&
          !absent(shown[k]) &&
          (Object.hasOwn(attributes, k) ||
            home.translations?.[lang]?.attributes?.[k] !== v),
      );
      return kept.length > 0
        ? [[lang, { attributes: Object.fromEntries(kept) }]]
        : [];
    }),
  );
};

const withTranslations = (
  o: OverrideDraft,
  t: OverrideTranslations,
): OverrideDraft => {
  const { translations: _, ...rest } = o;
  return nonEmpty(t) ? { ...rest, translations: t } : rest;
};

/** An override as stored in `place_override` (no empty translations). */
export const storedOverride = (r: {
  attributes: OverrideAttributes;
  category: string | null;
  translations?: OverrideTranslations | null;
}): OverrideDraft =>
  withTranslations(
    { attributes: r.attributes, category: r.category },
    r.translations ?? {},
  );

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

/**
 * Drop the keys of `o` that now equal the home values (and translations of
 * keys the map shows no value for, or equal to the home translation).
 */
export const normalizeOverride = (
  home: Overridable,
  o: OverrideDraft,
): OverrideDraft => {
  const values = overrideFor(home, withOverride(home, o));
  return withTranslations(
    values,
    keptTranslations(home, values.attributes, o.translations),
  );
};

export const isEmptyOverride = (o: OverrideDraft): boolean =>
  o.category === null &&
  Object.keys(o.attributes).length === 0 &&
  !nonEmpty(o.translations ?? {});

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
  /**
   * The view's translations of text field values, merged per language and
   * key onto the current ones (null or "": drop the view's translation).
   * Reverting a key drops its translations too.
   */
  translations?: OverrideTranslationsPatch;
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
  const values = overrideFor(home, {
    attributes: effectiveAttributes({}, { attributes, category: null }),
    category,
  });
  const was = patch.reset ? undefined : current?.translations;
  const translations: OverrideTranslations = Object.fromEntries(
    langsOf(was, patch.translations).map((lang) => {
      const merged: Record<string, string | null> = {
        ...Object.fromEntries(
          Object.entries(was?.[lang]?.attributes ?? {}).filter(
            ([k]) => !reverted.has(k),
          ),
        ),
        ...patch.translations?.[lang]?.attributes,
      };
      return [
        lang,
        {
          attributes: Object.fromEntries(
            Object.entries(merged).flatMap(([k, v]) => (v ? [[k, v]] : [])),
          ),
        },
      ];
    }),
  );
  return withTranslations(
    values,
    keptTranslations(home, values.attributes, translations),
  );
};

/** The source fields a view shows: those `view.sourceFields` names, or all. */
export const shownSourceFields = <D extends FieldDef>(
  source: D[],
  view: Pick<MapView, "sourceFields"> | null | undefined,
): D[] => {
  const keys = view?.sourceFields;
  return keys ? source.filter((f) => keys.includes(f.key)) : source;
};

/**
 * The fields a view displays: its source's (those `view.sourceFields`
 * names, or all), then its own (keys the source already has are the
 * source's, shown or not).
 */
export const displayedFields = <D extends FieldDef>(
  source: D[],
  own: D[],
  view?: Pick<MapView, "sourceFields"> | null,
): D[] => {
  const keys = new Set(source.map((f) => f.key));
  return [
    ...shownSourceFields(source, view),
    ...own.filter((f) => !keys.has(f.key)),
  ];
};

/** Keys of a view's own fields that its source already defines. */
export const clashingFieldKeys = (
  source: FieldDef[],
  own: FieldDef[],
): string[] => {
  const keys = new Set(source.map((f) => f.key));
  return own.map((f) => f.key).filter((k) => keys.has(k));
};
