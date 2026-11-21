import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { Plus, Repeat } from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { legLines, ModeIcon } from "~/components/RouteParts";
import { Button } from "~/components/ui/button";
import { ROUTE_MODES, type RouteMode } from "~/lib/constants";
import { localize } from "~/lib/content-lang";
import { type MapOverlay, useMapOverlay, useMapPage } from "~/lib/map-page";
import { formatDistance, formatDuration } from "~/lib/routes";
import { useViewer } from "~/lib/use-viewer";
import { cn, photoUrl } from "~/lib/utils";
import { useTRPC } from "~/trpc/client";

/** The Routes tab of the map index: list + all routes drawn faintly. */
export const RoutesPanel = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const navigate = useNavigate();
  const viewer = useViewer();
  const { view, translateTo } = useMapPage();
  const slug = view.collection.slug;
  const city = view.collection.citySlug;
  const { data: rawRoutes, isPending } = useQuery(
    trpc.route.list.queryOptions({ collectionId: view.collection.id }),
  );
  const allRoutes = useMemo(
    () => (rawRoutes ?? []).map((r) => localize(r, translateTo)),
    [rawRoutes, translateTo],
  );
  // Walks or rides (`?mode=bike`), by each route's main mode.
  const { mode } = useSearch({ from: "/$city/$slug" });
  const setMode = (m: RouteMode | null) =>
    navigate({
      to: ".",
      search: (prev: Record<string, unknown>) => ({
        ...prev,
        mode: m ?? undefined,
      }),
      replace: true,
      resetScroll: false,
    });
  const { loop } = useSearch({ from: "/$city/$slug" });
  const setLoop = (on: boolean) =>
    navigate({
      to: ".",
      search: (prev: Record<string, unknown>) => ({
        ...prev,
        loop: on || undefined,
      }),
      replace: true,
      resetScroll: false,
    });
  const modes = ROUTE_MODES.filter((m) => allRoutes.some((r) => r.mode === m));
  // Offered when the map has loops and other routes to tell them from.
  const hasLoops =
    allRoutes.some((r) => r.loop) && allRoutes.some((r) => !r.loop);
  const routes = useMemo(
    () =>
      allRoutes.filter((r) => (!mode || r.mode === mode) && (!loop || r.loop)),
    [allRoutes, mode, loop],
  );

  // A route hovered (or focused) in the list: drawn bold and on top, the
  // others faded.
  const [hoverId, setHoverId] = useState<string | null>(null);
  const hovered = routes.some((r) => r.id === hoverId) ? hoverId : null;

  const overlay = useMemo<MapOverlay>(
    () => ({
      // The hovered route last, so it draws over the rest.
      lines: [...routes]
        .sort((a, b) => Number(a.id === hovered) - Number(b.id === hovered))
        .flatMap((r) =>
          legLines(r.id, r.legs, {
            opacity: hovered === null ? 0.7 : r.id === hovered ? 1 : 0.15,
            width: r.id === hovered ? 7 : undefined,
            onClick: () =>
              navigate({
                to: "/$city/$slug/r/$routeId",
                params: { city, slug, routeId: r.id },
              }),
          }),
        ),
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
          active: r.id === hovered,
          onClick: () =>
            navigate({
              to: "/$city/$slug/r/$routeId",
              params: { city, slug, routeId: r.id },
            }),
        };
      }),
      dimPlaces: routes.length > 0,
    }),
    [routes, navigate, city, slug, hovered],
  );
  useMapOverlay(overlay);

  return (
    <div>
      <div className="flex items-center justify-between gap-2 border-b p-4">
        <p className="text-sm text-muted-foreground">{t("routes_intro")}</p>
        {view.can.propose && (
          <Button asChild size="sm" variant="outline" className="shrink-0">
            <Link to="/$city/$slug/r/new" params={{ city, slug }}>
              <Plus /> {t("routes_new")}
            </Link>
          </Button>
        )}
        {!viewer && (
          <Button asChild size="sm" variant="outline" className="shrink-0">
            <Link to="/auth" search={{ next: `/${city}/${slug}/r/new` }}>
              <Plus /> {t("routes_new")}
            </Link>
          </Button>
        )}
      </div>
      {(modes.length > 1 || hasLoops) && (
        <fieldset className="flex flex-wrap items-center gap-1.5 border-b p-4">
          <legend className="sr-only">{t("routes_filter_mode")}</legend>
          {(modes.length > 1 ? modes : []).map((m) => {
            const active = mode === m;
            return (
              <button
                key={m}
                type="button"
                aria-pressed={active}
                onClick={() => setMode(active ? null : m)}
                className={cn(
                  "flex min-h-8 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition",
                  active
                    ? "border-foreground bg-foreground text-background"
                    : "hover:bg-muted",
                )}
              >
                <ModeIcon mode={m} className="size-3.5" />
                {t(`mode_${m}`)}
              </button>
            );
          })}
          {hasLoops && (
            <button
              type="button"
              aria-pressed={!!loop}
              onClick={() => setLoop(!loop)}
              className={cn(
                "flex min-h-8 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition",
                loop
                  ? "border-foreground bg-foreground text-background"
                  : "hover:bg-muted",
              )}
            >
              <Repeat className="size-3.5" />
              {t("routes_filter_loop")}
            </button>
          )}
        </fieldset>
      )}
      <ul className="divide-y">
        {routes.map((r) => (
          <li
            key={r.id}
            onMouseEnter={() => setHoverId(r.id)}
            onMouseLeave={() => setHoverId(null)}
            onFocus={() => setHoverId(r.id)}
            onBlur={() => setHoverId(null)}
          >
            <Link
              to="/$city/$slug/r/$routeId"
              params={{ city, slug, routeId: r.id }}
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
                  <ModeIcon mode={r.mode} className="size-3.5" />
                  {r.loop && (
                    <span className="flex items-center gap-0.5">
                      <Repeat className="size-3.5" />
                      {t("route_loop")}
                    </span>
                  )}
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
          {allRoutes.length > 0 ? t("routes_no_matches") : t("routes_empty")}
        </p>
      )}
    </div>
  );
};
