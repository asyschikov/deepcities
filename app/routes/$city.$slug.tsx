import { useQuery } from "@tanstack/react-query";
import {
  createFileRoute,
  notFound,
  Outlet,
  retainSearchParams,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { TRPCError } from "@trpc/server";
import { Maximize2, Minimize2 } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AreaLayerSwitcher } from "~/components/AreaLayerSwitcher";
import { ClusterSwitcher } from "~/components/ClusterSwitcher";
import { ContentLangSwitcher } from "~/components/ContentLangSwitcher";
import { type LngLat, type MapArea, MapView } from "~/components/MapView";
import { PinSizeSwitcher } from "~/components/PinSizeSwitcher";
import { Button } from "~/components/ui/button";
import { areaColor, labelPoint } from "~/lib/areas";
import {
  type AreaLevel,
  type ContentLang,
  DEFAULT_PIN_SIZE,
  type PinSize,
} from "~/lib/constants";
import { localize, localizeCollection, mapLanguages } from "~/lib/content-lang";
import {
  type MapOverlay,
  MapPageContext,
  type MapPageState,
  type SidebarTab,
} from "~/lib/map-page";
import {
  formatMapView,
  MAP_RETAINED_PARAMS,
  type MapSearch,
  mapSearchSchema,
  parseMapView,
} from "~/lib/map-search";
import { useIsPeerOf } from "~/lib/nav-history";
import { cn } from "~/lib/utils";
import { createCaller } from "~/trpc/caller";
import { useTRPC } from "~/trpc/client";

const loadMap = createServerFn({ method: "GET" })
  .validator((p: { city: string; slug: string }) => p)
  .handler(async ({ data: { city, slug } }) => {
    const caller = await createCaller();
    try {
      const view = await caller.collection.bySlug({ city, slug });
      const places = await caller.place.list({
        collectionId: view.collection.id,
      });
      return { view, places };
    } catch (err) {
      if (err instanceof TRPCError && err.code === "NOT_FOUND") return null;
      throw err;
    }
  });

const FALLBACK_CATEGORY = { label: "", color: "#57534e" };

const MapLayout = () => {
  const { t } = useTranslation();
  const trpc = useTRPC();
  const navigate = useNavigate();
  const { city, slug } = Route.useParams();
  const initial = Route.useLoaderData();
  const { placeId } = useParams({ strict: false });
  const urlSearch = Route.useSearch();

  const { data: rawView } = useQuery({
    ...trpc.collection.bySlug.queryOptions({ slug }),
    initialData: initial.view,
  });
  const { data: rawPlaces } = useQuery({
    ...trpc.place.list.queryOptions({ collectionId: rawView.collection.id }),
    initialData: initial.places,
  });

  // Content language: the map's own unless the reader picked another it offers.
  const baseLang = rawView.collection.language;
  const languages = mapLanguages(rawView.collection);
  const lang: ContentLang =
    urlSearch.lang && languages.includes(urlSearch.lang)
      ? urlSearch.lang
      : baseLang;
  const translateTo = lang === baseLang ? null : lang;
  const setLang = useCallback(
    (l: ContentLang) =>
      navigate({
        to: ".",
        search: (prev: Record<string, unknown>) => ({
          ...prev,
          lang: l === baseLang ? undefined : l,
        }),
        replace: true,
      }),
    [navigate, baseLang],
  );
  const view = useMemo(
    () => ({
      ...rawView,
      collection: localizeCollection(rawView.collection, translateTo),
    }),
    [rawView, translateTo],
  );
  const places = useMemo(
    () => rawPlaces.map((p) => localize(p, translateTo)),
    [rawPlaces, translateTo],
  );

  // View state lives in the URL (replaced, not pushed), so a refresh or a
  // shared link lands in the same place. See `mapSearchSchema`.
  const patchSearch = useCallback(
    (patch: Partial<MapSearch>) =>
      navigate({
        to: ".",
        search: (prev: Record<string, unknown>) => ({ ...prev, ...patch }),
        replace: true,
        resetScroll: false,
      }),
    [navigate],
  );
  const category = urlSearch.cat ?? null;
  const setCategory = useCallback(
    (c: string | null) => patchSearch({ cat: c ?? undefined }),
    [patchSearch],
  );
  const fieldFilters = useMemo(() => urlSearch.f ?? {}, [urlSearch.f]);
  const setFieldFilter = useCallback(
    (key: string, value: string | null) => {
      const { [key]: _, ...rest } = fieldFilters;
      const next = value === null ? rest : { ...rest, [key]: value };
      patchSearch({ f: Object.keys(next).length > 0 ? next : undefined });
    },
    [fieldFilters, patchSearch],
  );
  // The search box updates at typing speed; the URL follows shortly after.
  const urlQ = urlSearch.q ?? "";
  const [search, setSearch] = useState(urlQ);
  const lastQ = useRef(urlQ);
  useEffect(() => {
    // Back/forward or a link changed the URL: show it.
    if (urlQ !== lastQ.current) {
      lastQ.current = urlQ;
      setSearch(urlQ);
    }
  }, [urlQ]);
  useEffect(() => {
    if (search === lastQ.current) return;
    const id = setTimeout(() => {
      lastQ.current = search;
      patchSearch({ q: search.trim() ? search : undefined });
    }, 300);
    return () => clearTimeout(id);
  }, [search, patchSearch]);
  const [draft, setDraft] = useState<LngLat | null>(null);
  const [picking, setPicking] = useState(false);
  const [focus, setFocus] = useState<LngLat | null>(null);
  const [overlay, setOverlay] = useState<MapOverlay | null>(null);
  const tab: SidebarTab = urlSearch.tab ?? "places";
  const setTab = useCallback(
    (next: SidebarTab) => {
      if (next !== tab)
        patchSearch({ tab: next === "places" ? undefined : next });
    },
    [tab, patchSearch],
  );
  // The map's position, as `?map=zoom/lat/lng`.
  const [initialView] = useState(() => parseMapView(urlSearch.map));
  const lastView = useRef(urlSearch.map);
  const onViewChange = useCallback(
    (v: { lat: number; lng: number; zoom: number }) => {
      const next = formatMapView(v);
      if (next === lastView.current) return;
      lastView.current = next;
      patchSearch({ map: next });
    },
    [patchSearch],
  );
  const [hoverPlaceId, setHoverPlaceId] = useState<string | null>(null);
  const isPeerOf = useIsPeerOf();
  // Phones: a taller map for exploring (layout only, so not in the URL).
  const [bigMap, setBigMap] = useState(false);

  // Place pin size (`?pins=large|small`; medium when absent).
  const pinSize: PinSize = urlSearch.pins ?? DEFAULT_PIN_SIZE;
  const setPinSize = useCallback(
    (size: PinSize) =>
      navigate({
        to: ".",
        search: (prev: Record<string, unknown>) => ({
          ...prev,
          pins: size === "medium" ? undefined : size,
        }),
        replace: true,
      }),
    [navigate],
  );

  // Nearby pins grouped into clusters (`?cluster=true`).
  const clusterPins = urlSearch.cluster === true;
  const setClusterPins = useCallback(
    (on: boolean) =>
      navigate({
        to: ".",
        search: (prev: Record<string, unknown>) => ({
          ...prev,
          cluster: on || undefined,
        }),
        replace: true,
      }),
    [navigate],
  );

  // Official area boundaries (`?areas=borough`): a display layer only.
  const { data: areaLevels = [] } = useQuery(
    trpc.area.levels.queryOptions({ city: rawView.collection.city }),
  );
  const areaLevel =
    urlSearch.areas && areaLevels.includes(urlSearch.areas)
      ? urlSearch.areas
      : null;
  const setAreaLevel = useCallback(
    (level: AreaLevel | null) =>
      navigate({
        to: ".",
        search: (prev: Record<string, unknown>) => ({
          ...prev,
          areas: level ?? undefined,
        }),
        replace: true,
      }),
    [navigate],
  );
  const { data: areaLayer } = useQuery({
    ...trpc.area.layer.queryOptions({
      city: rawView.collection.city,
      level: areaLevel ?? "borough",
    }),
    enabled: areaLevel !== null,
    staleTime: Number.POSITIVE_INFINITY,
  });
  const mapAreas = useMemo<MapArea[]>(
    () =>
      areaLevel && areaLayer
        ? areaLayer.flatMap((a) =>
            a.geometry
              ? [
                  {
                    id: a.id,
                    name: a.name,
                    color: areaColor(a.level, a.code),
                    geometry: a.geometry,
                    label: labelPoint(a.geometry),
                  },
                ]
              : [],
          )
        : [],
    [areaLevel, areaLayer],
  );

  const categoryOf = useCallback(
    (key: string) => {
      const found = view.collection.categories.find((c) => c.key === key);
      return found
        ? { label: found.label, color: found.color }
        : FALLBACK_CATEGORY;
    },
    [view.collection.categories],
  );

  const visiblePlaces = useMemo(() => {
    const q = search.trim().toLowerCase();
    const matches = (p: { title: string; summary: string }) =>
      p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q);
    // Search both the shown language and the original.
    return places.filter(
      (p, i) =>
        (!category || p.category === category) &&
        Object.entries(fieldFilters).every(
          ([key, value]) => p.attributes?.[key] === value,
        ) &&
        (!q || matches(p) || matches(rawPlaces[i] ?? p)),
    );
  }, [places, rawPlaces, category, fieldFilters, search]);

  const visibleIds = useMemo(
    () => new Set(visiblePlaces.map((p) => p.id)),
    [visiblePlaces],
  );
  const highlighted = useMemo(
    () => new Set(overlay?.highlightPlaceIds ?? []),
    [overlay?.highlightPlaceIds],
  );
  const hidden = useMemo(
    () => new Set(overlay?.hidePlaceIds ?? []),
    [overlay?.hidePlaceIds],
  );
  const markers = useMemo(
    () =>
      places
        .filter((p) => !hidden.has(p.id))
        .map((p) => ({
          id: p.id,
          lat: p.lat,
          lng: p.lng,
          title: p.title,
          color: categoryOf(p.category).color,
          dimmed:
            !visibleIds.has(p.id) ||
            picking ||
            (Boolean(overlay?.dimPlaces) && !highlighted.has(p.id)),
        })),
    [
      places,
      visibleIds,
      categoryOf,
      picking,
      overlay?.dimPlaces,
      highlighted,
      hidden,
    ],
  );

  const state: MapPageState = {
    view,
    places,
    visiblePlaces,
    category,
    setCategory,
    fieldFilters,
    setFieldFilter,
    search,
    setSearch,
    draft,
    setDraft,
    picking,
    setPicking,
    focusOn: setFocus,
    categoryOf,
    overlay,
    setOverlay,
    tab,
    setTab,
    lang,
    baseLang,
    translateTo,
    languages,
    setLang,
    hoverPlaceId,
    setHoverPlaceId,
  };

  return (
    <MapPageContext.Provider value={state}>
      <div className="flex flex-col-reverse md:h-[calc(100dvh-3.5rem)] md:flex-row md:overflow-hidden">
        {/* Its own scroller on desktop: restored on Back, reset on new pages. */}
        <aside
          id="map-panel"
          data-scroll-restoration-id="map-panel"
          className="w-full shrink-0 border-t bg-card md:w-[420px] md:overflow-y-auto md:border-t-0 md:border-r"
        >
          <Outlet />
        </aside>
        {/* Phones: the map stays under the header while the panel scrolls. */}
        <div
          className={cn(
            "sticky top-14 z-20 shadow-sm transition-[height] duration-200 md:relative md:top-0 md:h-auto md:flex-1 md:shadow-none",
            bigMap ? "h-[70dvh]" : "h-[38dvh]",
          )}
        >
          <Button
            type="button"
            size="icon"
            variant="secondary"
            onClick={() => setBigMap((b) => !b)}
            aria-label={bigMap ? t("map_smaller") : t("map_bigger")}
            title={bigMap ? t("map_smaller") : t("map_bigger")}
            className="absolute bottom-8 left-3 z-10 size-9 rounded-full bg-card/95 shadow-md md:hidden"
          >
            {bigMap ? <Minimize2 /> : <Maximize2 />}
          </Button>
          <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
            {languages.length > 1 && (
              <ContentLangSwitcher
                value={lang}
                languages={languages}
                onChange={setLang}
              />
            )}
            {areaLevels.length > 0 && (
              <AreaLayerSwitcher
                value={areaLevel}
                levels={areaLevels}
                onChange={setAreaLevel}
              />
            )}
            <ClusterSwitcher value={clusterPins} onChange={setClusterPins} />
            <PinSizeSwitcher value={pinSize} onChange={setPinSize} />
          </div>
          <MapView
            center={
              initialView ?? {
                lat: view.collection.centerLat,
                lng: view.collection.centerLng,
              }
            }
            zoom={initialView?.zoom ?? view.collection.zoom}
            holdInitialView={initialView !== null}
            onViewChange={onViewChange}
            markers={markers}
            cluster={clusterPins}
            pinSize={pinSize}
            activeId={placeId ?? null}
            hoverId={hoverPlaceId}
            focus={focus}
            areas={mapAreas}
            lines={overlay?.lines}
            pins={overlay?.pins}
            fitTo={overlay?.fitTo}
            onMapClick={overlay?.onMapClick}
            onMarkerClick={(id) => {
              if (picking) return;
              if (overlay?.onPlaceClick) {
                overlay.onPlaceClick(id);
                return;
              }
              // From one place to another: replace, so Back returns to
              // where the reader came from rather than the previous place.
              navigate({
                to: "/$city/$slug/p/$placeId",
                params: { city, slug, placeId: id },
                replace: isPeerOf("place"),
              });
            }}
            draft={picking ? { position: draft, onChange: setDraft } : null}
          />
        </div>
      </div>
    </MapPageContext.Provider>
  );
};

export const Route = createFileRoute("/$city/$slug")({
  validateSearch: mapSearchSchema,
  search: {
    middlewares: [retainSearchParams([...MAP_RETAINED_PARAMS])],
  },
  loader: async ({ params }) => {
    const data = await loadMap({ data: params });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.view.collection.title} · Deep Cities` },
          {
            name: "description",
            content:
              loaderData.view.collection.tagline ??
              loaderData.view.collection.title,
          },
        ]
      : [],
  }),
  component: MapLayout,
});
