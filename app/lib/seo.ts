/**
 * Search and sharing tags for a page: canonical URL, Open Graph, Twitter
 * card. Every public page names its own canonical URL (no query string), so
 * map filters and a place opened on several maps don't count as duplicates.
 */
import { photoUrl } from "./utils";

/** The one public address (wrangler.jsonc `SITE_ORIGIN`). */
export const SITE_URL = "https://deepcities.org";
export const SITE_NAME = "Deep Cities";

export const absoluteUrl = (path: string): string => `${SITE_URL}${path}`;

/** Search snippets are cut near 160 characters: end on a word. */
export const snippet = (text: string, max = 160): string => {
  const flat = text.replace(/\s+/g, " ").trim();
  if (flat.length <= max) return flat;
  const cut = flat.slice(0, max - 1);
  const space = cut.lastIndexOf(" ");
  return `${space > max / 2 ? cut.slice(0, space) : cut}…`;
};

export interface PageSeo {
  title: string;
  description?: string | null;
  /** Site path, e.g. `/amsterdam/sights`; omit to name no canonical URL. */
  path?: string;
  /** Photo id of the page's picture. */
  photoId?: string | null;
  type?: "website" | "article";
}

export const seoMeta = ({
  title,
  description,
  path,
  photoId,
  type,
}: PageSeo) => {
  const desc = description ? snippet(description) : null;
  const image = photoId ? absoluteUrl(photoUrl(photoId)) : null;
  return [
    { title },
    ...(desc
      ? [
          { name: "description", content: desc },
          { property: "og:description", content: desc },
        ]
      : []),
    { property: "og:title", content: title },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:type", content: type ?? "website" },
    ...(path ? [{ property: "og:url", content: absoluteUrl(path) }] : []),
    ...(image
      ? [
          { property: "og:image", content: image },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ name: "twitter:card", content: "summary" }]),
  ];
};

/** The canonical link; only leaf routes add one (links are not deduped). */
export const canonicalLink = (path: string) => [
  { rel: "canonical", href: absoluteUrl(path) },
];

/** Route ids of pages that should stay out of search results. */
export const isPrivateRoute = (routeId: string): boolean =>
  /(^\/(admin|auth|me|me_\/visits)$)|\/(edit|new|manage|review)$/.test(routeId);

/** A title that names the city ("Deep Centrum, Amsterdam"), for search. */
export const withCity = (title: string, city: string): string =>
  title.toLowerCase().includes(city.toLowerCase())
    ? title
    : `${title}, ${city}`;

interface LdPlace {
  title: string;
  summary: string;
  lat: number;
  lng: number;
  address: string | null;
  municipality: string | null;
  neighbourhood: string | null;
}

/** schema.org data for a place page (rich results, maps in search). */
export const placeJsonLd = (
  p: LdPlace,
  path: string,
  photoId: string | undefined,
) => ({
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  name: p.title,
  description: p.summary,
  url: absoluteUrl(path),
  ...(photoId ? { image: absoluteUrl(photoUrl(photoId)) } : {}),
  geo: { "@type": "GeoCoordinates", latitude: p.lat, longitude: p.lng },
  ...(p.address || p.municipality
    ? {
        address: {
          "@type": "PostalAddress",
          ...(p.address ? { streetAddress: p.address } : {}),
          ...(p.municipality ? { addressLocality: p.municipality } : {}),
        },
      }
    : {}),
  ...(p.neighbourhood
    ? { containedInPlace: { "@type": "Place", name: p.neighbourhood } }
    : {}),
});

/** A head script tag holding JSON-LD (`<` escaped so text can't end it). */
export const jsonLdScript = (data: object) => ({
  type: "application/ld+json",
  children: JSON.stringify(data).replace(/</g, "\\u003c"),
});
