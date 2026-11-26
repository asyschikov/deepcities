import { createFileRoute } from "@tanstack/react-router";
import { AreaList } from "~/components/AreaList";
import { PageLanguage } from "~/components/PageLanguage";
import i18n from "~/lib/i18n";
import { areaHead } from "~/lib/place-page";
import { loadAreaPageFor } from "~/lib/place-route";

const AreaPage = () => {
  const data = Route.useLoaderData();
  return (
    <PageLanguage lang={data.lang}>
      <AreaList data={data} />
    </PageLanguage>
  );
};

/** A city's places by area, in the map's language. */
export const Route = createFileRoute("/$city/places/$")({
  loader: ({ params }) => loadAreaPageFor(params, undefined),
  head: ({ loaderData }) =>
    loaderData ? areaHead(loaderData, i18n.getFixedT(loaderData.lang)) : {},
  component: AreaPage,
});
