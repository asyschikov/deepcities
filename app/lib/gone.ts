import type { Attributes, FieldDef } from "./validation";

/** The value a map's status field uses for things that no longer exist. */
export const GONE_VALUE = "Gone";

/**
 * The map's field for marking a place gone: a select field offering "Gone"
 * (e.g. Deep Amsterdam's Status). Undefined when the map has none.
 */
export const goneField = (
  fields: Pick<FieldDef, "key" | "type" | "options">[],
): string | undefined =>
  fields.find((f) => f.type === "select" && f.options?.includes(GONE_VALUE))
    ?.key;

/** Whether a moderator has already marked the place gone. */
export const isMarkedGone = (
  attributes: Attributes,
  fields: Pick<FieldDef, "key" | "type" | "options">[],
): boolean => {
  const key = goneField(fields);
  return key !== undefined && attributes[key] === GONE_VALUE;
};
