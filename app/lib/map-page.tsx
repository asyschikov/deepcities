import { createContext, useContext } from "react";
import type { LngLat } from "~/components/MapView";
import type { RouterOutputs } from "~/trpc/router";

export type CollectionView = RouterOutputs["collection"]["bySlug"];
export type PlaceListItem = RouterOutputs["place"]["list"][number];

/**
 * Shared state between the map (right) and the routed side panel (left) on
 * /m/$slug/*: data, filters, and the draft pin used while proposing.
 */
export interface MapPageState {
  view: CollectionView;
  places: PlaceListItem[];
  visiblePlaces: PlaceListItem[];
  category: string | null;
  setCategory: (key: string | null) => void;
  search: string;
  setSearch: (q: string) => void;
  /** Non-null while a form wants the user to place a pin. */
  draft: LngLat | null;
  setDraft: (p: LngLat | null) => void;
  picking: boolean;
  setPicking: (on: boolean) => void;
  focusOn: (p: LngLat) => void;
  categoryOf: (key: string) => { label: string; color: string };
}

export const MapPageContext = createContext<MapPageState | null>(null);

export const useMapPage = (): MapPageState => {
  const ctx = useContext(MapPageContext);
  if (!ctx) throw new Error("useMapPage outside /m/$slug");
  return ctx;
};
