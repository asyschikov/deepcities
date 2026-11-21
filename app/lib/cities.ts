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
