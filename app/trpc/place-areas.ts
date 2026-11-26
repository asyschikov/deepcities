/**
 * The area lists (`/amsterdam/places/<borough>/<neighbourhood>`): every
 * published place of a city's pool, sorted into its official areas, as plain
 * links to the places' own pages. Crawlable and light, unlike the map.
 *
 * Levels: the city; its boroughs (a place outside the city proper goes under
 * its municipality); their neighbourhoods, whose page lists the places
 * grouped by sub-neighbourhood. A small borough lists its places directly.
 */
import { TRPCError } from "@trpc/server";
import { and, eq, inArray, isNull, sql } from "drizzle-orm";
import { citySlug, placeParam } from "~/lib/cities";
import type { ContentLang } from "~/lib/constants";
import { localizeCollection, mapLanguages } from "~/lib/content-lang";
import type { Database } from "~/lib/db";
import { collection, place } from "~/lib/db/schema";
import { areaSlug, langPrefix } from "~/lib/place-page";
import { snippet } from "~/lib/seo";

/** A borough this small lists its places on its own page. */
const SMALL_BOROUGH = 120;

const translated = (
  column: typeof place.translations,
  lang: string,
  key: string,
) => sql<string | null>`json_extract(${column}, ${`$.${lang}.${key}`})`;

export const areaPage = async (
  db: Database,
  input: { city: string; areas: string[]; lang?: ContentLang },
) => {
  const homes = (
    await db
      .select({
        id: collection.id,
        slug: collection.slug,
        city: collection.city,
        title: collection.title,
        tagline: collection.tagline,
        description: collection.description,
        language: collection.language,
        languages: collection.languages,
        categories: collection.categories,
        fields: collection.fields,
        translations: collection.translations,
        cityDefault: collection.cityDefault,
      })
      .from(collection)
      .where(isNull(collection.view))
  ).filter((c) => citySlug(c.city) === input.city);
  const main = homes.find((c) => c.cityDefault) ?? homes[0];
  if (!main)
    throw new TRPCError({ code: "NOT_FOUND", message: "City not found" });
  const languages = mapLanguages(main);
  const translateTo =
    input.lang && input.lang !== main.language && languages.includes(input.lang)
      ? input.lang
      : null;
  const lang = translateTo ?? main.language;
  const t = translateTo ?? "_";
  const rows = await db
    .select({
      id: place.id,
      title: place.title,
      summary: place.summary,
      localTitle: translated(place.translations, t, "title"),
      localSummary: translated(place.translations, t, "summary"),
      collectionId: place.collectionId,
      category: place.category,
      municipality: place.municipality,
      borough: place.borough,
      neighbourhood: place.neighbourhood,
      sub: place.subNeighbourhood,
    })
    .from(place)
    .where(
      and(
        inArray(
          place.collectionId,
          homes.map((h) => h.id),
        ),
        eq(place.status, "published"),
      ),
    );

  const cityName = main.city;
  const level1Of = (r: (typeof rows)[number]) =>
    r.borough ?? (r.municipality !== cityName ? r.municipality : null);
  const [b, n] = input.areas;
  const inBorough = b
    ? rows.filter((r) => areaSlug(level1Of(r) ?? "") === b)
    : rows;
  const inArea = n
    ? inBorough.filter((r) => areaSlug(r.neighbourhood ?? "") === n)
    : inBorough;
  if ((b && inBorough.length === 0) || (n && inArea.length === 0))
    throw new TRPCError({ code: "NOT_FOUND", message: "Area not found" });
  const boroughName = b ? inBorough[0] && level1Of(inBorough[0]) : null;
  const hoodName = n ? (inArea[0]?.neighbourhood ?? null) : null;

  const prefix = langPrefix(lang, main.language);
  const citySeg = citySlug(cityName);
  const categories = new Map(
    homes.flatMap((h) =>
      localizeCollection(h, translateTo).categories.map(
        (c) =>
          [`${h.id}:${c.key}`, { label: c.label, color: c.color }] as const,
      ),
    ),
  );
  const item = (r: (typeof rows)[number]) => ({
    id: r.id,
    title: r.localTitle?.trim() || r.title,
    summary: snippet(r.localSummary?.trim() || r.summary, 140),
    path: `${prefix}/${citySeg}/p/${placeParam(r)}`,
    category: categories.get(`${r.collectionId}:${r.category}`) ?? null,
  });
  const byTitle = (x: { title: string }, y: { title: string }) =>
    x.title.localeCompare(y.title, lang);
  /** Places grouped by `key`, groups by name (unnamed last). */
  const groups = (
    list: typeof rows,
    key: (r: (typeof rows)[number]) => string | null,
  ) => {
    const by = new Map<string, typeof rows>();
    list.forEach((r) => {
      const k = key(r) ?? "";
      by.set(k, [...(by.get(k) ?? []), r]);
    });
    return [...by.entries()]
      .sort(([x], [y]) => (x === "" ? 1 : y === "" ? -1 : x.localeCompare(y)))
      .map(([name, list]) => ({
        name: name || null,
        anchor: name ? areaSlug(name) : "other",
        places: list.map(item).sort(byTitle),
      }));
  };
  /** Child areas with their place counts. */
  const children = (
    list: typeof rows,
    key: (r: (typeof rows)[number]) => string | null,
    pathOf: (name: string) => string,
    subKey?: (r: (typeof rows)[number]) => string | null,
  ) => {
    const by = new Map<string, typeof rows>();
    list.forEach((r) => {
      const k = key(r);
      if (k) by.set(k, [...(by.get(k) ?? []), r]);
    });
    return [...by.entries()]
      .sort(([x], [y]) => x.localeCompare(y))
      .map(([name, list]) => ({
        name,
        path: `${prefix}${pathOf(name)}`,
        count: list.length,
        parts: subKey
          ? [...new Set(list.flatMap((r) => subKey(r) ?? []))].sort()
          : [],
      }));
  };
  const base = `/${citySeg}/places`;

  const level: "city" | "borough" | "neighbourhood" = n
    ? "neighbourhood"
    : b
      ? "borough"
      : "city";
  const areas =
    level === "city"
      ? children(
          rows,
          level1Of,
          (x) => `${base}/${areaSlug(x)}`,
          (r) => r.neighbourhood,
        )
      : level === "borough"
        ? children(
            inBorough,
            (r) => r.neighbourhood,
            (x) => `${base}/${b}/${areaSlug(x)}`,
            (r) => r.sub,
          )
        : [];
  const placeGroups =
    level === "neighbourhood"
      ? groups(inArea, (r) => r.sub)
      : level === "borough"
        ? inBorough.length <= SMALL_BOROUGH
          ? groups(inBorough, (r) => r.neighbourhood)
          : groups(
              inBorough.filter((r) => !r.neighbourhood),
              () => null,
            ).filter((g) => g.places.length > 0)
        : [];

  return {
    level,
    lang,
    baseLang: main.language,
    languages,
    city: { name: cityName, slug: citySeg },
    map: localizeCollection(main, translateTo).title,
    borough: boroughName ? { name: boroughName, slug: b ?? "" } : null,
    neighbourhood: hoodName ? { name: hoodName, slug: n ?? "" } : null,
    count: inArea.length,
    areas,
    groups: placeGroups,
  };
};
