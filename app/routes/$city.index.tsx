import { createFileRoute, notFound } from "@tanstack/react-router";
import { CityHome, loadMaps } from "~/components/CityHome";

const CityPage = () => {
  const { city } = Route.useParams();
  return <CityHome city={city} initial={Route.useLoaderData()} />;
};

export const Route = createFileRoute("/$city/")({
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
