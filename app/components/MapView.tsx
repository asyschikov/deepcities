import type { Marker, Map as MlMap } from "maplibre-gl";
// Emit the worker as an asset and point MapLibre at it explicitly; its own
// import.meta.url lookup breaks once Vite bundles the library.
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?url";
import { useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

const STYLE_URL = "https://tiles.openfreemap.org/styles/positron";

export interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  color: string;
  title: string;
  dimmed?: boolean;
}

export interface LngLat {
  lat: number;
  lng: number;
}

interface MapViewProps {
  center: LngLat;
  zoom: number;
  markers: MapMarker[];
  activeId?: string | null;
  onMarkerClick?: (id: string) => void;
  /** When set, clicking the map moves a draggable draft pin. */
  draft?: { position: LngLat | null; onChange: (p: LngLat) => void } | null;
  /** Fly to this point when it changes (e.g. the selected place). */
  focus?: LngLat | null;
  interactive?: boolean;
  className?: string;
}

/**
 * MapLibre map with HTML markers. maplibre-gl touches `window`, so it is
 * imported lazily inside an effect and the map only exists on the client.
 */
export const MapView = ({
  center,
  zoom,
  markers,
  activeId,
  onMarkerClick,
  draft,
  focus,
  interactive = true,
  className,
}: MapViewProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MlMap | null>(null);
  const libRef = useRef<typeof import("maplibre-gl") | null>(null);
  const markersRef = useRef(
    new Map<string, { marker: Marker; el: HTMLElement }>(),
  );
  const draftMarkerRef = useRef<Marker | null>(null);
  // Latest callbacks, so map event handlers never go stale.
  const onMarkerClickRef = useRef(onMarkerClick);
  onMarkerClickRef.current = onMarkerClick;
  const draftRef = useRef(draft);
  draftRef.current = draft;
  const [ready, setReady] = useState(false);

  // Create the map once.
  // biome-ignore lint/correctness/useExhaustiveDependencies: center/zoom are initial values; later moves go through `focus`
  useEffect(() => {
    let cancelled = false;
    let map: MlMap | null = null;
    import("maplibre-gl").then((lib) => {
      if (cancelled || !containerRef.current) return;
      libRef.current = lib;
      lib.setWorkerUrl(workerUrl);
      map = new lib.Map({
        container: containerRef.current,
        style: STYLE_URL,
        center: [center.lng, center.lat],
        zoom,
        interactive,
        attributionControl: { compact: true },
      });
      if (interactive) {
        map.addControl(
          new lib.NavigationControl({ showCompass: false }),
          "top-right",
        );
      }
      map.on("click", (e) => {
        draftRef.current?.onChange({ lat: e.lngLat.lat, lng: e.lngLat.lng });
      });
      mapRef.current = map;
      setReady(true);
    });
    return () => {
      cancelled = true;
      map?.remove();
      mapRef.current = null;
      markersRef.current.clear();
      draftMarkerRef.current = null;
    };
  }, []);

  // Sync place markers.
  useEffect(() => {
    const map = mapRef.current;
    const lib = libRef.current;
    if (!ready || !map || !lib) return;
    const existing = markersRef.current;
    const nextIds = new Set(markers.map((m) => m.id));
    for (const [id, { marker }] of existing) {
      if (!nextIds.has(id)) {
        marker.remove();
        existing.delete(id);
      }
    }
    for (const m of markers) {
      let entry = existing.get(m.id);
      if (!entry) {
        const el = document.createElement("button");
        el.type = "button";
        el.className = "dc-marker";
        el.addEventListener("click", (ev) => {
          ev.stopPropagation();
          onMarkerClickRef.current?.(m.id);
        });
        const marker = new lib.Marker({ element: el, anchor: "bottom-left" })
          .setLngLat([m.lng, m.lat])
          .addTo(map);
        entry = { marker, el };
        existing.set(m.id, entry);
      }
      entry.marker.setLngLat([m.lng, m.lat]);
      entry.el.style.background = m.color;
      entry.el.title = m.title;
      entry.el.setAttribute("aria-label", m.title);
      entry.el.dataset.active = String(m.id === activeId);
      entry.el.dataset.dimmed = String(Boolean(m.dimmed));
    }
  }, [ready, markers, activeId]);

  // Draft pin (proposing a new place / moving one).
  const draftPos = draft?.position ?? null;
  const draftOn = Boolean(draft);
  useEffect(() => {
    const map = mapRef.current;
    const lib = libRef.current;
    if (!ready || !map || !lib) return;
    map.getCanvas().style.cursor = draftOn ? "crosshair" : "";
    if (!draftOn || !draftPos) {
      draftMarkerRef.current?.remove();
      draftMarkerRef.current = null;
      return;
    }
    if (!draftMarkerRef.current) {
      const el = document.createElement("div");
      el.className = "dc-draft-marker";
      const marker = new lib.Marker({
        element: el,
        anchor: "bottom-left",
        draggable: true,
      })
        .setLngLat([draftPos.lng, draftPos.lat])
        .addTo(map);
      marker.on("dragend", () => {
        const p = marker.getLngLat();
        draftRef.current?.onChange({ lat: p.lat, lng: p.lng });
      });
      draftMarkerRef.current = marker;
    }
    draftMarkerRef.current.setLngLat([draftPos.lng, draftPos.lat]);
  }, [ready, draftOn, draftPos?.lat, draftPos?.lng, draftPos]);

  const focusLat = focus?.lat;
  const focusLng = focus?.lng;
  useEffect(() => {
    const map = mapRef.current;
    if (!ready || !map || focusLat === undefined || focusLng === undefined)
      return;
    map.easeTo({
      center: [focusLng, focusLat],
      zoom: Math.max(map.getZoom(), 15),
    });
  }, [ready, focusLat, focusLng]);

  return (
    <div
      ref={containerRef}
      className={cn("h-full w-full bg-muted", className)}
    />
  );
};
