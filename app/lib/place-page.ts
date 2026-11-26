/**
 * URLs and head tags of the light, crawlable pages: a place's own page and
 * the area lists (`/amsterdam/places/…`). A content language other than the
 * map's own lives under a path prefix (`/nl/amsterdam/p/…`), with hreflang
 * links between the versions; the map's own language has no prefix.
 */
import { citySlug } from "./cities";
import type { ContentLang } from "./constants";
import {
  absoluteUrl,
  canonicalLink,
  jsonLdScript,
  placeJsonLd,
  seoMeta,
} from "./seo";

/** Content languages that have their own path prefix (a route each). */
export const PREFIXED_LANGS = ["nl"] as const satisfies readonly ContentLang[];
export type PrefixedLang = (typeof PREFIXED_LANGS)[number];

export const langPrefix = (lang: ContentLang, base: ContentLang): string =>
  lang === base ? "" : `/${lang}`;

export const areaSlug = citySlug;

/** `/amsterdam/places`, `/amsterdam/places/centrum/centrum-west`. */
export const areasPath = (
  city: string,
  ...areas: (string | null | undefined)[]
): string =>
  [
    `/${citySlug(city)}/places`,
    ...areas.flatMap((a) => (a ? [areaSlug(a)] : [])),
  ].join("/");

export interface Crumb {
  name: string;
  path?: string;
}

/** schema.org BreadcrumbList for `crumbs` (the last one is the page). */
export const breadcrumbJsonLd = (crumbs: Crumb[], pagePath: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: absoluteUrl(c.path ?? pagePath),
  })),
});

/** Canonical plus hreflang links for a page that exists in `langs`. */
export const languageLinks = (
  pathIn: (lang: ContentLang) => string,
  lang: ContentLang,
  langs: ContentLang[],
  base: ContentLang,
) => {
  // A version in a language the page has no text in is a stand-in: the
  // original is canonical.
  const self = langs.includes(lang) ? lang : base;
  return [
    ...canonicalLink(pathIn(self)),
    ...(langs.length > 1
      ? [
          ...langs.map((l) => ({
            rel: "alternate",
            hrefLang: l,
            href: absoluteUrl(pathIn(l)),
          })),
          {
            rel: "alternate",
            hrefLang: "x-default",
            href: absoluteUrl(pathIn(base)),
          },
        ]
      : []),
  ];
};

interface PlacePageShape {
  lang: ContentLang;
  baseLang: ContentLang;
  languages: ContentLang[];
  city: { name: string; slug: string };
  place: {
    id: string;
    title: string;
    summary: string;
    lat: number;
    lng: number;
    address: string | null;
    municipality: string | null;
    neighbourhood: string | null;
    sub: string | null;
    photoIds: string[];
    slugParam: string;
    level1: string | null;
  };
  home: { title: string };
}

/** The place's page in `lang`. */
export const placeLangPath = (d: PlacePageShape, lang: ContentLang): string =>
  `${langPrefix(lang, d.baseLang)}/${d.city.slug}/p/${d.place.slugParam}`;

export const placeCrumbs = (d: PlacePageShape): Crumb[] => {
  const base = `${langPrefix(d.lang, d.baseLang)}${areasPath(d.city.name)}`;
  // Its areas coarse to fine, up to the first one it lacks.
  const levels = [d.place.level1, d.place.neighbourhood, d.place.sub];
  const firstGap = levels.indexOf(null);
  const names = (firstGap < 0 ? levels : levels.slice(0, firstGap)).filter(
    (x): x is string => x !== null,
  );
  return [
    { name: d.city.name, path: base },
    ...names.map((name, i) => ({
      name,
      path: [base, ...names.slice(0, i + 1).map(areaSlug)].join("/"),
    })),
    { name: d.place.title },
  ];
};

export const placeHead = (d: PlacePageShape) => {
  const path = placeLangPath(d, d.lang);
  const photoId = d.place.photoIds[0];
  const where = d.place.neighbourhood ?? d.place.level1 ?? d.city.name;
  return {
    meta: [
      ...seoMeta({
        title: `${d.place.title}, ${where} · ${d.home.title}`,
        description: d.place.summary,
        path,
        photoId,
        type: "article",
      }),
      { property: "og:locale", content: d.lang },
      { property: "place:location:latitude", content: String(d.place.lat) },
      { property: "place:location:longitude", content: String(d.place.lng) },
    ],
    links: languageLinks(
      (l) => placeLangPath(d, l),
      d.lang,
      d.languages,
      d.baseLang,
    ),
    scripts: [
      jsonLdScript(placeJsonLd(d.place, path, photoId)),
      jsonLdScript(breadcrumbJsonLd(placeCrumbs(d), path)),
    ],
  };
};

interface AreaPageShape {
  level: "city" | "area";
  lang: ContentLang;
  baseLang: ContentLang;
  languages: ContentLang[];
  city: { name: string; slug: string };
  map: string;
  trail: { name: string; slug: string }[];
  count: number;
  groups: { places: { title: string }[] }[];
}

/** An area list in `lang`. */
export const areaLangPath = (d: AreaPageShape, lang: ContentLang): string =>
  [
    `${langPrefix(lang, d.baseLang)}/${d.city.slug}/places`,
    ...d.trail.map((t) => t.slug),
  ].join("/");

export const areaCrumbs = (d: AreaPageShape): Crumb[] => {
  const cityPath = `${langPrefix(d.lang, d.baseLang)}/${d.city.slug}/places`;
  return [
    { name: d.city.name, path: d.trail.length > 0 ? cityPath : undefined },
    ...d.trail.map((t, i) => ({
      name: t.name,
      path:
        i < d.trail.length - 1
          ? [cityPath, ...d.trail.slice(0, i + 1).map((x) => x.slug)].join("/")
          : undefined,
    })),
  ];
};

/** Where the area is, most specific first: "Centrum-West, Centrum, Amsterdam". */
export const areaName = (d: AreaPageShape): string =>
  [...d.trail.map((t) => t.name).reverse(), d.city.name].join(", ");

/** Lists this short are too thin to be worth a search result. */
export const THIN_LIST = 5;

/** `t` in the page's language (`i18n.getFixedT(d.lang)`). */
export const areaHead = (
  d: AreaPageShape,
  t: (key: string, options: Record<string, unknown>) => string,
) => {
  const path = areaLangPath(d, d.lang);
  const where = areaName(d);
  const names = d.groups
    .flatMap((g) => g.places)
    .slice(0, 6)
    .map((p) => p.title);
  return {
    meta: [
      ...seoMeta({
        title: `${t("areas_title", { area: where })} · ${d.map}`,
        description:
          names.length > 0
            ? t("areas_description", {
                count: d.count,
                area: where,
                names: names.join(", "),
              })
            : t("areas_intro", { count: d.count }),
        path,
      }),
      ...(d.level === "area" && d.count < THIN_LIST
        ? [{ name: "robots", content: "noindex, follow" }]
        : []),
    ],
    links: languageLinks(
      (l) => areaLangPath(d, l),
      d.lang,
      d.languages,
      d.baseLang,
    ),
    scripts: [jsonLdScript(breadcrumbJsonLd(areaCrumbs(d), path))],
  };
};
