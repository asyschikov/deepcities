import { createFileRoute, notFound } from "@tanstack/react-router";
import { z } from "zod/v4";
import { CityHome, loadMaps } from "~/components/CityHome";

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
    const name = loaderData?.find((m) => m.citySlug === params.city)?.city;
    return { meta: name ? [{ title: `${name} · Deep Cities` }] : [] };
  },
  component: CityPage,
});
