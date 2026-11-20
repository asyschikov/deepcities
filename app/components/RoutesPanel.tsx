import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { legLines, ModeIcon } from "~/components/RouteParts";
import { Button } from "~/components/ui/button";
import { localize } from "~/lib/content-lang";
import { type MapOverlay, useMapOverlay, useMapPage } from "~/lib/map-page";
import { formatDistance, formatDuration } from "~/lib/routes";
import { useViewer } from "~/lib/use-viewer";
import { photoUrl } from "~/lib/utils";
import { useTRPC } from "~/trpc/client";

/** The Routes tab of the map index: list + all routes drawn faintly. */
export const RoutesPanel = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const navigate = useNavigate();
  const viewer = useViewer();
  const { view, translateTo } = useMapPage();
  const slug = view.collection.slug;
  const { data: rawRoutes, isPending } = useQuery(
    trpc.route.list.queryOptions({ collectionId: view.collection.id }),
  );
  const routes = useMemo(
    () => (rawRoutes ?? []).map((r) => localize(r, translateTo)),
    [rawRoutes, translateTo],
  );

  const overlay = useMemo<MapOverlay>(
    () => ({
      lines: routes.flatMap((r) => legLines(r.id, r.legs, { opacity: 0.7 })),
      pins: routes.map((r) => {
        const first = r.stops[0];
        return {
          id: `start:${r.id}`,
          lat: first?.lat ?? 0,
          lng: first?.lng ?? 0,
          kind: "stop" as const,
          color: "#1c1917",
          label: "▶",
          title: r.title,
          onClick: () =>
            navigate({
              to: "/m/$slug/r/$routeId",
              params: { slug, routeId: r.id },
            }),
        };
      }),
      dimPlaces: routes.length > 0,
    }),
    [routes, navigate, slug],
  );
  useMapOverlay(overlay);

  return (
    <div>
      <div className="flex items-center justify-between gap-2 border-b p-4">
        <p className="text-sm text-muted-foreground">{t("routes_intro")}</p>
        {view.can.propose && (
          <Button asChild size="sm" variant="outline" className="shrink-0">
            <Link to="/m/$slug/r/new" params={{ slug }}>
              <Plus /> {t("routes_new")}
            </Link>
          </Button>
        )}
        {!viewer && (
          <Button asChild size="sm" variant="outline" className="shrink-0">
            <Link to="/auth" search={{ next: `/m/${slug}/r/new` }}>
              <Plus /> {t("routes_new")}
            </Link>
          </Button>
        )}
      </div>
      <ul className="divide-y">
        {routes.map((r) => (
          <li key={r.id}>
            <Link
              to="/m/$slug/r/$routeId"
              params={{ slug, routeId: r.id }}
              className="flex gap-3 p-4 transition hover:bg-muted/60"
            >
              <div className="size-16 shrink-0 overflow-hidden rounded-md bg-muted">
                {r.coverPhotoId && (
                  <img
                    src={photoUrl(r.coverPhotoId)}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover"
                  />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-sans text-base font-semibold">
                  {r.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
                  <span className="flex gap-0.5">
                    {r.stats.modes.map((m) => (
                      <ModeIcon key={m} mode={m} className="size-3.5" />
                    ))}
                  </span>
                  {t("routes_stats", {
                    stops: r.stats.stops,
                    distance: formatDistance(r.stats.meters),
                    duration: formatDuration(r.stats.minutes),
                  })}
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {r.summary}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {!isPending && routes.length === 0 && (
        <p className="p-8 text-center text-sm text-muted-foreground">
          {t("routes_empty")}
        </p>
      )}
    </div>
  );
};
