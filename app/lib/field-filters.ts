/**
 * Field filters on the map: chips for select fields with `filter: true`.
 * Within a field the chosen options are OR-ed; fields are AND-ed.
 *
 * The URL (`?f=`) holds only what differs from the map's defaults
 * (`filterDefault`): a field missing from it shows its default selection,
 * and `[]` means "everything", so deselecting a default sticks in a shared
 * or reloaded link. Old links with a single string value still work.
 */
import type { Attributes, FieldDef } from "./validation";

/** `?f=` as parsed: a value or a list of values per field key. */
export type FieldFilterParam = Record<string, string | string[]>;

/** The chosen options per field key; empty = no filter on that field. */
export type FieldFilters = Record<string, string[]>;

const asList = (v: string | string[]): string[] =>
  typeof v === "string" ? [v] : v;

/** Fields shown as filter chips on the map. */
export const filterFields = <D extends FieldDef>(fields: D[]): D[] =>
  fields.filter((f) => f.filter && f.type === "select" && !f.hidden);

/** Defaults of the fields shown as chips (hidden fields never filter). */
const defaultsOf = (fields: FieldDef[]): FieldFilters =>
  Object.fromEntries(
    filterFields(fields)
      .filter((f) => (f.filterDefault?.length ?? 0) > 0)
      .map((f) => [f.key, f.filterDefault ?? []]),
  );

/** What is selected now: the URL's choices over the map's defaults. */
export const currentFieldFilters = (
  fields: FieldDef[],
  param: FieldFilterParam | undefined,
): FieldFilters => ({
  ...defaultsOf(fields),
  ...Object.fromEntries(
    Object.entries(param ?? {}).map(([k, v]) => [k, asList(v)]),
  ),
});

const sameSet = (a: string[], b: string[]) =>
  a.length === b.length && a.every((v) => b.includes(v));

/**
 * The `?f=` value after choosing `values` for field `key`: left out when it
 * equals the default, `[]` kept when it clears a default.
 */
export const nextFieldFilterParam = (
  fields: FieldDef[],
  param: FieldFilterParam | undefined,
  key: string,
  values: string[],
): FieldFilterParam | undefined => {
  const { [key]: _, ...rest } = param ?? {};
  const fallback = defaultsOf(fields)[key] ?? [];
  const next = sameSet(values, fallback) ? rest : { ...rest, [key]: values };
  return Object.keys(next).length > 0 ? next : undefined;
};

/** True if the place's (effective) values pass every field filter. */
export const matchesFieldFilters = (
  attributes: Attributes | null | undefined,
  filters: FieldFilters,
): boolean =>
  Object.entries(filters).every(
    ([key, values]) =>
      values.length === 0 || values.includes(String(attributes?.[key] ?? "")),
  );

/** True if a field's selection is its map default (and not empty). */
export const isDefaultSelection = (
  field: FieldDef,
  selected: string[],
): boolean =>
  (field.filterDefault?.length ?? 0) > 0 &&
  sameSet(selected, field.filterDefault ?? []);
