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

/** A place's readable URL segment: `catharinahofje-k5ebaf2h…` (title + id). */
export const placeParam = (p: { id: string; title: string }): string => {
  const full = citySlug(p.title);
  const name =
    full.length > 60 ? full.slice(0, 60).replace(/-[^-]*$/, "") : full;
  return name ? `${name}-${p.id}` : p.id;
};

/** The place id in a `placeParam` (ids have no hyphens). */
export const placeIdOf = (param: string): string =>
  param.slice(param.lastIndexOf("-") + 1);

/** A place's own page, its canonical URL: `/amsterdam/p/catharinahofje-…`. */
export const placePath = (
  city: string,
  p: { id: string; title: string },
): string => `/${citySlug(city)}/p/${placeParam(p)}`;
