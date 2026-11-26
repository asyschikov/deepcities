import { createFileRoute } from "@tanstack/react-router";
import { PageLanguage } from "~/components/PageLanguage";
import { PlaceSheet } from "~/components/PlaceSheet";
import { placeCrumbs, placeHead } from "~/lib/place-page";
import { loadPlacePageFor, placePageSearch } from "~/lib/place-route";

const PlacePage = () => {
  const data = Route.useLoaderData();
  return (
    <PageLanguage lang={data.lang}>
      <PlaceSheet data={data} crumbs={placeCrumbs(data)} />
    </PageLanguage>
  );
};

/** A place's own page in the map's language: its canonical URL. */
export const Route = createFileRoute("/$city/p/$place")({
  validateSearch: placePageSearch,
  loader: ({ params }) => loadPlacePageFor(params, undefined),
  head: ({ loaderData }) => (loaderData ? placeHead(loaderData) : {}),
  component: PlacePage,
});
