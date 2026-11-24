import { createContext, type ReactNode, useContext, useEffect } from "react";
import type { LngLat, MapLine, MapPin } from "~/components/MapView";
import type { RouterOutputs } from "~/trpc/router";
import type { ContentLang } from "./constants";
import type { LocalFieldDef } from "./content-lang";
import type { FieldFilters } from "./field-filters";
import type { Geolocation } from "./geolocation";

type RawCollectionView = RouterOutputs["collection"]["bySlug"];
/** The map with its texts and labels in the reader's content language. */
export type CollectionView = Omit<RawCollectionView, "collection"> & {
  collection: Omit<RawCollectionView["collection"], "fields"> & {
    fields: LocalFieldDef[];
  };
};
export type PlaceListItem = RouterOutputs["place"]["list"][number];
export type RouteListItem = RouterOutputs["route"]["list"][number];

/**
 * What a side-panel page (route view/editor, routes list) draws on the map
 * on top of the places. Routes are only drawn while one of those is open.
 */
export interface MapOverlay {
  lines?: MapLine[];
  pins?: MapPin[];
  fitTo?: [number, number][] | null;
  onMapClick?: (p: LngLat) => void;
  /** Replaces "open the place" when a place marker is clicked. */
  onPlaceClick?: (placeId: string) => void;
  /** Fade places that aren't part of the overlay. */
  dimPlaces?: boolean;
  /** Places to keep bright while dimming. */
  highlightPlaceIds?: string[];
  /** Places not drawn at all (e.g. a route's stops, shown as numbered pins). */
  hidePlaceIds?: string[];
  /** A card floating over the map (e.g. the next stop while following a route). */
  card?: ReactNode;
}

export type SidebarTab = "places" | "routes" | "visited";

/**
 * Shared state between the map (right) and the routed side panel (left) on
 * /$city/$slug/*: data, filters, and the draft pin used while proposing.
 */
export interface MapPageState {
  view: CollectionView;
  places: PlaceListItem[];
  visiblePlaces: PlaceListItem[];
  category: string | null;
  setCategory: (key: string | null) => void;
  /**
   * Chosen options per filter field (select fields with `filter`), the
   * map's `filterDefault` unless the URL says otherwise; empty = all.
   */
  fieldFilters: FieldFilters;
  setFieldFilter: (key: string, values: string[]) => void;
  search: string;
  setSearch: (q: string) => void;
  /** Non-null while a form wants the user to place a pin. */
  draft: LngLat | null;
  setDraft: (p: LngLat | null) => void;
  picking: boolean;
  setPicking: (on: boolean) => void;
  focusOn: (p: LngLat) => void;
  overlay: MapOverlay | null;
  setOverlay: (o: MapOverlay | null) => void;
  /** Places | Routes switch on the map index (remembered while browsing). */
  tab: SidebarTab;
  setTab: (t: SidebarTab) => void;
  categoryOf: (key: string) => { label: string; color: string };
  /** The content language being shown (the map's own unless picked). */
  lang: ContentLang;
  /** The language the map's content is written in. */
  baseLang: ContentLang;
  /** `lang` when it differs from `baseLang` (what to `localize()` to), else null. */
  translateTo: ContentLang | null;
  /** Languages the map offers, its own first. */
  languages: ContentLang[];
  setLang: (lang: ContentLang) => void;
  /** A place hovered in a list, highlighted on the map. */
  hoverPlaceId: string | null;
  setHoverPlaceId: (id: string | null) => void;
  /** The reader's own position (off until they ask for it). */
  geo: Geolocation;
  /** The map keeps the reader's position centred. */
  following: boolean;
  setFollowing: (on: boolean) => void;
  /** Phones: hide the panel so the map shows (no-op on wide screens). */
  showMap: () => void;
  /** Places on this map the reader has checked in to. */
  visitedIds: ReadonlySet<string>;
}

export const MapPageContext = createContext<MapPageState | null>(null);

export const useMapPage = (): MapPageState => {
  const ctx = useContext(MapPageContext);
  if (!ctx) throw new Error("useMapPage outside /$city/$slug");
  return ctx;
};

/**
 * Show `overlay` on the map while the calling component is mounted.
 * Pass a memoised value (or null for none); it is re-applied whenever its
 * identity changes.
 */
export const useMapOverlay = (overlay: MapOverlay | null) => {
  const { setOverlay } = useMapPage();
  // A null overlay leaves the map alone, so a parent page that steps aside
  // (e.g. while its editor child is open) doesn't clear the child's overlay.
  // React runs every cleanup before any new effect in a commit, so handing
  // over between pages works in either order.
  useEffect(() => {
    if (!overlay) return;
    setOverlay(overlay);
    return () => setOverlay(null);
  }, [overlay, setOverlay]);
};
