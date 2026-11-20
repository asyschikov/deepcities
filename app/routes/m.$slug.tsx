import { useQuery } from "@tanstack/react-query";
import {
  createFileRoute,
  notFound,
  Outlet,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { TRPCError } from "@trpc/server";
import { useCallback, useMemo, useState } from "react";
import { type LngLat, MapView } from "~/components/MapView";
import { MapPageContext, type MapPageState } from "~/lib/map-page";
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

  const { data: view } = useQuery({
    ...trpc.collection.bySlug.queryOptions({ slug }),
    initialData: initial.view,
  });
  const { data: places } = useQuery({
    ...trpc.place.list.queryOptions({ collectionId: view.collection.id }),
    initialData: initial.places,
  });

  const [category, setCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [draft, setDraft] = useState<LngLat | null>(null);
  const [picking, setPicking] = useState(false);
  const [focus, setFocus] = useState<LngLat | null>(null);

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
    return places.filter(
      (p) =>
        (!category || p.category === category) &&
        (!q ||
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q)),
    );
  }, [places, category, search]);

  const visibleIds = useMemo(
    () => new Set(visiblePlaces.map((p) => p.id)),
    [visiblePlaces],
  );
  const markers = useMemo(
    () =>
      places.map((p) => ({
        id: p.id,
        lat: p.lat,
        lng: p.lng,
        title: p.title,
        color: categoryOf(p.category).color,
        dimmed: !visibleIds.has(p.id) || picking,
      })),
    [places, visibleIds, categoryOf, picking],
  );

  const state: MapPageState = {
    view,
    places,
    visiblePlaces,
    category,
    setCategory,
    search,
    setSearch,
    draft,
    setDraft,
    picking,
    setPicking,
    focusOn: setFocus,
    categoryOf,
  };

  return (
    <MapPageContext.Provider value={state}>
      <div className="flex flex-col-reverse md:h-[calc(100dvh-3.5rem)] md:flex-row md:overflow-hidden">
        <aside className="w-full shrink-0 border-t bg-card md:w-[420px] md:overflow-y-auto md:border-t-0 md:border-r">
          <Outlet />
        </aside>
        <div className="relative h-[45dvh] md:h-auto md:flex-1">
          <MapView
            center={{
              lat: view.collection.centerLat,
              lng: view.collection.centerLng,
            }}
            zoom={view.collection.zoom}
            markers={markers}
            activeId={placeId ?? null}
            focus={focus}
            onMarkerClick={(id) => {
              if (picking) return;
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
