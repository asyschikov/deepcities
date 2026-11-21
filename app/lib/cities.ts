/**
 * A city's URL segment: deepcities.org/<city>/<map>. Derived from the map's
 * `city` name ("Amsterdam" → "amsterdam", "Den Haag" → "den-haag").
 */
export const citySlug = (city: string): string =>
  city
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** A map's path: `/amsterdam/sights`. */
export const mapPath = (m: { city: string; slug: string }): string =>
  `/${citySlug(m.city)}/${m.slug}`;

/**
 * Slugs maps had before they moved under their city, still accepted (old
 * links redirect, the CLI resolves them). Map each straight to the current
 * slug: the lookup is not followed in a chain.
 */
export const LEGACY_MAP_SLUGS: Record<string, string> = {};

/** First path segments that are pages, never cities. */
export const RESERVED_CITY_SLUGS = ["m", "api", "auth", "admin", "me"];
