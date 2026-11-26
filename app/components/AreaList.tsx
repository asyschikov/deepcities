/**
 * A city's places by official area (`/amsterdam/places/…`): plain,
 * server-rendered links to the places' own pages, for readers who'd rather
 * scan a list and for search engines, which don't read the map.
 */
import { Map as MapIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "~/components/PlaceSheet";
import { Button } from "~/components/ui/button";
import { languageName } from "~/lib/content-lang";
import { areaCrumbs, areaLangPath, areaName } from "~/lib/place-page";
import type { RouterOutputs } from "~/trpc/router";

export type AreaPageData = RouterOutputs["place"]["areaPage"];

export const AreaList = ({ data }: { data: AreaPageData }) => {
  const { t } = useTranslation();
  const otherLangs = data.languages.filter((l) => l !== data.lang);
  const title =
    data.level === "city"
      ? t("areas_title_city", { city: data.city.name })
      : t("areas_title", { area: areaName(data) });
  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6 md:py-10">
      <div lang={data.lang} className="space-y-6">
        <Breadcrumbs items={areaCrumbs(data)} />
        <header className="space-y-2">
          <h1 className="text-3xl leading-tight font-semibold">{title}</h1>
          <p className="text-muted-foreground">
            {t("areas_intro", { count: data.count })}
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="outline" size="sm">
              <a href={`/${data.city.slug}`}>
                <MapIcon /> {t("areas_map")}
              </a>
            </Button>
            {otherLangs.map((l) => (
              <a
                key={l}
                href={areaLangPath(data, l)}
                hrefLang={l}
                className="text-xs text-primary hover:underline"
              >
                {languageName(l)}
              </a>
            ))}
          </div>
        </header>

        {data.areas.length > 0 && (
          <ul className="grid gap-3 sm:grid-cols-2">
            {data.areas.map((a) => (
              <li key={a.path} className="rounded-lg border p-3">
                <a
                  href={a.path}
                  className="flex items-baseline justify-between gap-2 font-medium text-primary hover:underline"
                >
                  {a.name}
                  <span className="text-xs font-normal text-muted-foreground">
                    {t("areas_count", { count: a.count })}
                  </span>
                </a>
                {a.parts.length > 0 && (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {a.parts.join(", ")}
                  </p>
                )}
              </li>
            ))}
          </ul>
        )}

        {data.groups.map((g) => (
          <section
            key={g.anchor}
            id={g.anchor}
            className="space-y-2 scroll-mt-4"
          >
            {(data.groups.length > 1 || g.name) && (
              <h2 className="border-b pb-1 font-sans text-base font-semibold">
                {g.name ?? t("areas_elsewhere")}
              </h2>
            )}
            <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {g.places.map((p) => (
                <li key={p.id}>
                  <a href={p.path} className="group block">
                    <div className="min-w-0">
                      <div className="text-sm font-medium group-hover:underline">
                        {p.title}
                      </div>
                      <p className="line-clamp-2 text-xs text-muted-foreground">
                        {p.summary}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
};
