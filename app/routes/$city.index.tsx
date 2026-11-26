import { createFileRoute, notFound } from "@tanstack/react-router";
import { z } from "zod/v4";
import { CityHome, loadMaps } from "~/components/CityHome";
import { canonicalLink, seoMeta } from "~/lib/seo";

const CityPage = () => {
  const { city } = Route.useParams();
  const { cards } = Route.useSearch();
  return <CityHome city={city} initial={Route.useLoaderData()} cards={cards} />;
};

export const Route = createFileRoute("/$city/")({
  // Card layout under trial: the picture on top (default) or at the side.
  validateSearch: z.object({ cards: z.enum(["top", "side"]).optional() }),
  loader: async ({ params }) => {
    const maps = await loadMaps();
    if (!maps.some((m) => m.citySlug === params.city)) throw notFound();
    return maps;
  },
  head: ({ loaderData, params }) => {
    const maps = (loaderData ?? []).filter((m) => m.citySlug === params.city);
    const first = maps[0];
    if (!first) return {};
    const path = `/${params.city}`;
    return {
      meta: seoMeta({
        title: `${first.city}: maps of the places guidebooks skip · Deep Cities`,
        description: `Collaborative maps of ${first.city}'s hidden history, odd corners and local favourites: ${maps.map((m) => m.title).join(", ")}.`,
        path,
        photoId: first.cover?.id,
      }),
      links: canonicalLink(path),
    };
  },
  component: CityPage,
});
