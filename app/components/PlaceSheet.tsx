/**
 * A place's own page (`/amsterdam/p/<title>-<id>`, Dutch under `/nl/…`):
 * light, server-rendered and cacheable, the place's canonical URL. Plain
 * links lead out to the maps that show it, nearby places, routes and
 * documents. The interactive map panel stays at `/<city>/<map>/p/<id>`.
 */
import {
  BookOpen,
  ExternalLink,
  Map as MapIcon,
  MapPin,
  Navigation,
  Pencil,
  Route as RouteIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { MarkdownView } from "~/components/MarkdownView";
import { Gallery } from "~/components/PhotoGallery";
import { PlaceAttributes } from "~/components/PlaceAttributes";
import { LicenseLink } from "~/components/SiteFooter";
import { Button } from "~/components/ui/button";
import { VerdictSummary } from "~/components/Verdict";
import { languageName } from "~/lib/content-lang";
import { placeLangPath } from "~/lib/place-page";
import { photoUrl, THUMB_WIDTH } from "~/lib/utils";
import type { RouterOutputs } from "~/trpc/router";

export type PlacePageData = RouterOutputs["place"]["page"];

const SECTION = "space-y-2 border-t pt-4";
const HEADING = "font-sans text-sm font-semibold";

export const Breadcrumbs = ({
  items,
}: {
  items: { name: string; path?: string }[];
}) => {
  const { t } = useTranslation();
  return (
    <nav aria-label={t("breadcrumb")} className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-x-1.5">
        {items.map((c, i) => (
          <li key={c.path ?? c.name} className="flex items-center gap-x-1.5">
            {i > 0 && <span aria-hidden>›</span>}
            {c.path ? (
              <a
                href={c.path}
                className="hover:text-foreground hover:underline"
              >
                {c.name}
              </a>
            ) : (
              <span aria-current="page">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export const PlaceSheet = ({
  data,
  crumbs,
}: {
  data: PlacePageData;
  crumbs: { name: string; path?: string }[];
}) => {
  const { t } = useTranslation();
  const { place, verdicts } = data;
  const cat = place.category;
  const otherLangs = data.languages.filter((l) => l !== data.lang);
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 md:py-10">
      <article lang={data.lang} className="space-y-5">
        <Breadcrumbs items={crumbs} />

        <Gallery
          photoIds={place.photoIds}
          photos={data.photos}
          title={place.title}
        />

        <header className="space-y-1.5">
          {cat && (
            <div
              className="flex items-center gap-2 text-xs font-medium"
              style={{ color: cat.color }}
            >
              <span
                className="size-2 rounded-full"
                style={{ background: cat.color }}
              />
              {cat.label}
            </div>
          )}
          <h1 className="text-3xl leading-tight font-semibold">
            {place.title}
          </h1>
          {place.area.length > 0 && (
            <p className="text-sm text-muted-foreground">
              {place.area.join(", ")}
            </p>
          )}
          {data.parent && (
            <p className="text-sm text-muted-foreground">
              {t("place_part_of")}{" "}
              <a
                href={data.parent.path}
                className="text-primary hover:underline"
              >
                {data.parent.title}
              </a>
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3">
            <VerdictSummary counts={verdicts} />
            {otherLangs.map((l) => (
              <a
                key={l}
                href={placeLangPath(data, l)}
                hrefLang={l}
                className="text-xs text-primary hover:underline"
              >
                {languageName(l)}
              </a>
            ))}
          </div>
        </header>

        {data.mapPath && (
          <Button asChild variant="outline" size="sm">
            <a href={data.mapPath}>
              <MapIcon /> {t("place_show_on_map")}
            </a>
          </Button>
        )}

        <p className="text-base leading-relaxed">{place.summary}</p>
        <PlaceAttributes
          fields={data.fields}
          attributes={place.attributes}
          className="rounded-lg border p-3"
        />
        {place.body && (
          <section className="space-y-3 text-[15px] leading-relaxed text-foreground/85">
            <MarkdownView content={place.body} slug={data.home.slug} />
          </section>
        )}

        {data.children.length > 0 && (
          <section className={SECTION}>
            <h2 className={HEADING}>
              {t("place_parts", { count: data.children.length })}
            </h2>
            <ul className="space-y-2 text-sm">
              {data.children.map((c) => (
                <li key={c.id}>
                  <a
                    href={c.path}
                    className="font-medium text-primary hover:underline"
                  >
                    {c.title}
                  </a>
                  <p className="text-muted-foreground">{c.summary}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {data.documents.length > 0 && (
          <section className={SECTION}>
            <h2 className={`${HEADING} flex items-center gap-1.5`}>
              <BookOpen className="size-4" /> {t("place_further_reading")}
            </h2>
            <ul className="space-y-1.5">
              {data.documents.map((d) => (
                <li key={d.id}>
                  <a
                    href={d.path}
                    className="flex gap-3 rounded-md border p-2 transition hover:bg-muted/60"
                  >
                    {d.photoId && (
                      <img
                        src={photoUrl(d.photoId, THUMB_WIDTH)}
                        alt=""
                        loading="lazy"
                        className="size-12 shrink-0 rounded object-cover"
                      />
                    )}
                    <div className="min-w-0">
                      <div className="text-sm font-medium">{d.title}</div>
                      {d.summary && (
                        <p className="line-clamp-2 text-xs text-muted-foreground">
                          {d.summary}
                        </p>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="space-y-2 rounded-lg bg-muted/60 p-3 text-sm">
          <a
            className="flex items-center gap-2 text-primary hover:underline"
            href={`https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}&travelmode=walking`}
            target="_blank"
            rel="noreferrer"
          >
            <Navigation className="size-4" /> {t("place_directions")}
          </a>
          {place.address && (
            <a
              className="flex items-center gap-2 hover:underline"
              href={`https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lng}#map=18/${place.lat}/${place.lng}`}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin className="size-4 text-brick" /> {place.address}
            </a>
          )}
          {place.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer nofollow ugc"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ExternalLink className="size-4" /> {l.label}
            </a>
          ))}
          <p className="text-[11px] text-muted-foreground">
            {t("place_license")} <LicenseLink />
          </p>
        </div>

        {data.routes.length > 0 && (
          <section className={SECTION}>
            <h2 className={HEADING}>{t("place_on_routes")}</h2>
            <ul className="space-y-1 text-sm">
              {data.routes.map((r) => (
                <li key={r.id}>
                  <a
                    href={r.path}
                    className="flex items-center gap-2 text-primary hover:underline"
                  >
                    <RouteIcon className="size-4" /> {r.title}
                    <span className="text-xs text-muted-foreground">
                      {t("place_route_stop", { n: r.stop, of: r.of })}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {data.shownOn.length > 0 && (
          <section className={SECTION}>
            <h2 className={HEADING}>{t("place_on_maps")}</h2>
            <ul className="flex flex-wrap gap-2 text-sm">
              {data.shownOn.map((m) => (
                <li key={m.path}>
                  <a
                    href={m.placePath}
                    className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 hover:bg-muted/60"
                  >
                    <MapIcon className="size-3.5" /> {m.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {data.nearby.length > 0 && (
          <section className={SECTION}>
            <h2 className={HEADING}>{t("place_nearby")}</h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {data.nearby.map((n) => (
                <li key={n.id}>
                  <a
                    href={n.path}
                    className="flex h-full gap-3 rounded-md border p-2 transition hover:bg-muted/60"
                  >
                    {n.photoId && (
                      <img
                        src={photoUrl(n.photoId, THUMB_WIDTH)}
                        alt=""
                        loading="lazy"
                        className="size-14 shrink-0 rounded object-cover"
                      />
                    )}
                    <div className="min-w-0">
                      <div className="text-sm font-medium">{n.title}</div>
                      <p className="line-clamp-2 text-xs text-muted-foreground">
                        {n.summary}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {data.editPath && (
          <p className="border-t pt-4 text-xs text-muted-foreground">
            <a
              href={data.editPath}
              className="inline-flex items-center gap-1 hover:underline"
              rel="nofollow"
            >
              <Pencil className="size-3" /> {t("place_explore_wrong")}
            </a>
          </p>
        )}
      </article>
    </main>
  );
};
