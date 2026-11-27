/**
 * The area lists (`/amsterdam/places/<borough>/<neighbourhood>`): every
 * published place of a city's pool, sorted into its official areas, as plain
 * links to the places' own pages. Crawlable and light, unlike the map.
 *
 * Levels: the city; its boroughs (a place outside the city proper goes under
 * its municipality); neighbourhoods; sub-neighbourhoods. Each page links the
 * areas below it and, when short enough, lists its places too.
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
import { compareTitles } from "~/lib/title-sort";

/** An area with this many places or fewer lists them all on its page. */
const LIST_ALL = 150;

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
      photoIds: place.photoIds,
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
  type Row = (typeof rows)[number];
  // The area levels, coarse to fine.
  const keys: ((r: Row) => string | null)[] = [
    (r) => r.borough ?? (r.municipality !== cityName ? r.municipality : null),
    (r) => r.neighbourhood,
    (r) => r.sub,
  ];
  // Narrow down level by level; each step must match something.
  const trail: { name: string; slug: string; rows: Row[] }[] = [];
  let inArea = rows;
  for (const [i, slug] of input.areas.entries()) {
    const key = keys[i];
    if (!key) break;
    inArea = inArea.filter((r) => areaSlug(key(r) ?? "") === slug);
    const first = inArea[0];
    const name = first ? key(first) : null;
    if (!name)
      throw new TRPCError({ code: "NOT_FOUND", message: "Area not found" });
    trail.push({ name, slug, rows: inArea });
  }
  const depth = trail.length;

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
  const item = (r: Row) => ({
    id: r.id,
    title: r.localTitle?.trim() || r.title,
    summary: snippet(r.localSummary?.trim() || r.summary, 110),
    path: `${prefix}/${citySeg}/p/${placeParam(r)}`,
    category: categories.get(`${r.collectionId}:${r.category}`) ?? null,
    photoId: r.photoIds[0] ?? null,
  });
  const byTitle = (x: { title: string }, y: { title: string }) =>
    compareTitles(x.title, y.title, lang);
  /** Places grouped by `key`, groups by name (unnamed last). */
  const groups = (list: Row[], key: (r: Row) => string | null) => {
    const by = new Map<string, Row[]>();
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
  const here = `/${citySeg}/places${trail.map((t) => `/${t.slug}`).join("")}`;
  const key = keys[depth];
  const subKey = keys[depth + 1];
  // The areas one level down, with their counts and the names below them.
  const byChild = new Map<string, Row[]>();
  if (key)
    inArea.forEach((r) => {
      const k = key(r);
      if (k) byChild.set(k, [...(byChild.get(k) ?? []), r]);
    });
  const areas = [...byChild.entries()]
    .sort(([x], [y]) => x.localeCompare(y))
    .map(([name, list]) => ({
      name,
      path: `${prefix}${here}/${areaSlug(name)}`,
      count: list.length,
      parts: subKey
        ? [...new Set(list.flatMap((r) => subKey(r) ?? []))].sort()
        : [],
    }));
  // A short enough list shows all its places, by the next level down; a
  // long one only those that fit no child area.
  const placeGroups =
    depth === 0
      ? []
      : !key
        ? groups(inArea, () => null)
        : inArea.length <= LIST_ALL
          ? groups(inArea, key)
          : groups(
              inArea.filter((r) => !key(r)),
              () => null,
            ).filter((g) => g.places.length > 0);

  return {
    level: depth === 0 ? ("city" as const) : ("area" as const),
    lang,
    baseLang: main.language,
    languages,
    city: { name: cityName, slug: citySeg },
    map: localizeCollection(main, translateTo).title,
    /** The areas this list is in, coarse to fine (empty: the whole city). */
    trail: trail.map(({ name, slug }) => ({ name, slug })),
    count: inArea.length,
    areas,
    groups: placeGroups,
  };
};
