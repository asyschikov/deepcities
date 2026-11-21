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
import { useCallback, useMemo, useState } from "react";
import { z } from "zod/v4";
import { ContentLangSwitcher } from "~/components/ContentLangSwitcher";
import { type LngLat, MapView } from "~/components/MapView";
import type { ContentLang } from "~/lib/constants";
import { localize, localizeCollection, mapLanguages } from "~/lib/content-lang";
import {
  type MapOverlay,
  MapPageContext,
  type MapPageState,
  type SidebarTab,
} from "~/lib/map-page";
import { contentLangSchema } from "~/lib/validation";
import { createCaller } from "~/trpc/caller";
import { useTRPC } from "~/trpc/client";

const loadMap = createServerFn({ method: "GET" })
  .validator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    const caller = await createCaller();
    try {
      const view = await caller.collection.bySlug({ slug });
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
  const trpc = useTRPC();
  const navigate = useNavigate();
  const { slug } = Route.useParams();
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

  const [category, setCategory] = useState<string | null>(null);
  const [fieldFilters, setFieldFilters] = useState<Record<string, string>>({});
  const setFieldFilter = useCallback(
    (key: string, value: string | null) =>
      setFieldFilters((prev) => {
        const { [key]: _, ...rest } = prev;
        return value === null ? rest : { ...rest, [key]: value };
      }),
    [],
  );
  const [search, setSearch] = useState("");
  const [draft, setDraft] = useState<LngLat | null>(null);
  const [picking, setPicking] = useState(false);
  const [focus, setFocus] = useState<LngLat | null>(null);
  const [overlay, setOverlay] = useState<MapOverlay | null>(null);
  const [tab, setTab] = useState<SidebarTab>("places");

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
  };

  return (
    <MapPageContext.Provider value={state}>
      <div className="flex flex-col-reverse md:h-[calc(100dvh-3.5rem)] md:flex-row md:overflow-hidden">
        <aside className="w-full shrink-0 border-t bg-card md:w-[420px] md:overflow-y-auto md:border-t-0 md:border-r">
          <Outlet />
        </aside>
        <div className="relative h-[45dvh] md:h-auto md:flex-1">
          {languages.length > 1 && (
            <ContentLangSwitcher
              className="absolute top-3 left-3 z-10"
              value={lang}
              languages={languages}
              onChange={setLang}
            />
          )}
          <MapView
            center={{
              lat: view.collection.centerLat,
              lng: view.collection.centerLng,
            }}
            zoom={view.collection.zoom}
            markers={markers}
            activeId={placeId ?? null}
            focus={focus}
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
              navigate({
                to: "/m/$slug/p/$placeId",
                params: { slug, placeId: id },
              });
            }}
            draft={picking ? { position: draft, onChange: setDraft } : null}
          />
        </div>
      </div>
    </MapPageContext.Provider>
  );
};

export const Route = createFileRoute("/m/$slug")({
  // `?lang=nl` picks the content language; links within the map keep it.
  validateSearch: z.object({ lang: contentLangSchema.optional() }),
  search: { middlewares: [retainSearchParams(["lang"])] },
  loader: async ({ params }) => {
    const data = await loadMap({ data: params.slug });
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
