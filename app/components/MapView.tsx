import type { LineLayerSpecification, Marker, Map as MlMap } from "maplibre-gl";
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

/** A polyline overlay (route legs). Coordinates are [lng, lat]. */
export interface MapLine {
  id: string;
  coords: [number, number][];
  color: string;
  width?: number;
  opacity?: number;
  dashed?: boolean;
}

/** A route overlay pin: a numbered stop or a path waypoint. */
export interface MapPin {
  id: string;
  lat: number;
  lng: number;
  kind: "stop" | "via";
  color: string;
  label?: string;
  title?: string;
  /** Stop that isn't a place on the map (drawn dashed). */
  adhoc?: boolean;
  active?: boolean;
  draggable?: boolean;
  onClick?: () => void;
  onDragEnd?: (p: LngLat) => void;
}

interface MapViewProps {
  center: LngLat;
  zoom: number;
  markers: MapMarker[];
  activeId?: string | null;
  /** A place hovered in the list: drawn prominently with its name. */
  hoverId?: string | null;
  onMarkerClick?: (id: string) => void;
  /** When set, clicking the map moves a draggable draft pin. */
  draft?: { position: LngLat | null; onChange: (p: LngLat) => void } | null;
  /** Fly to this point when it changes (e.g. the selected place). */
  focus?: LngLat | null;
  /** Route overlays, drawn above places. */
  lines?: MapLine[];
  pins?: MapPin[];
  /** Fit the view to these points when the list changes identity. */
  fitTo?: [number, number][] | null;
  /** Map clicks (when no place pin is being placed). */
  onMapClick?: (p: LngLat) => void;
  interactive?: boolean;
  className?: string;
}

const LINES_SOURCE = "dc-lines";
const linesGeoJson = (lines: MapLine[]) => ({
  type: "FeatureCollection" as const,
  features: lines.map((l) => ({
    type: "Feature" as const,
    id: l.id,
    properties: {
      color: l.color,
      width: l.width ?? 4,
      opacity: l.opacity ?? 0.9,
      dashed: Boolean(l.dashed),
    },
    geometry: { type: "LineString" as const, coordinates: l.coords },
  })),
});

/**
 * MapLibre map with HTML markers. maplibre-gl touches `window`, so it is
 * imported lazily inside an effect and the map only exists on the client.
 */
export const MapView = ({
  center,
  zoom,
  markers,
  activeId,
  hoverId = null,
  onMarkerClick,
  draft,
  focus,
  lines,
  pins,
  fitTo,
  onMapClick,
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
  const onMapClickRef = useRef(onMapClick);
  onMapClickRef.current = onMapClick;
  const pinsRef = useRef(
    new Map<string, { marker: Marker; el: HTMLElement }>(),
  );
  const pinPropsRef = useRef(new Map<string, MapPin>());
  const [ready, setReady] = useState(false);
  const [styleReady, setStyleReady] = useState(false);

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
        const p = { lat: e.lngLat.lat, lng: e.lngLat.lng };
        if (draftRef.current) draftRef.current.onChange(p);
        else onMapClickRef.current?.(p);
      });
      map.once("load", () => {
        if (!map) return;
        map.addSource(LINES_SOURCE, {
          type: "geojson",
          data: linesGeoJson([]),
        });
        const paint: LineLayerSpecification["paint"] = {
          "line-color": ["get", "color"],
          "line-width": ["get", "width"],
          "line-opacity": ["get", "opacity"],
        };
        const layout = { "line-cap": "round", "line-join": "round" } as const;
        map.addLayer({
          id: "dc-lines-solid",
          type: "line",
          source: LINES_SOURCE,
          filter: ["==", ["get", "dashed"], false],
          layout,
          paint,
        });
        map.addLayer({
          id: "dc-lines-dashed",
          type: "line",
          source: LINES_SOURCE,
          filter: ["==", ["get", "dashed"], true],
          layout: { "line-join": "round" },
          paint: { ...paint, "line-dasharray": [1.5, 1.5] },
        });
        setStyleReady(true);
      });
      mapRef.current = map;
      setReady(true);
    });
    return () => {
      cancelled = true;
      map?.remove();
      mapRef.current = null;
      markersRef.current.clear();
      pinsRef.current.clear();
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
      // MapLibre manages the element's inline opacity, so dim through it.
      entry.marker.setOpacity(m.dimmed ? "0.3" : "1");
    }
  }, [ready, markers, activeId]);

  // The open place, or one hovered in the list (which wins): a halo and its
  // name on the map, with the pin brought to the front and undimmed.
  const haloRef = useRef<{ marker: Marker; el: HTMLDivElement } | null>(null);
  const highlightId = hoverId ?? activeId ?? null;
  useEffect(() => {
    const map = mapRef.current;
    const lib = libRef.current;
    if (!ready || !map || !lib) return;
    const m = highlightId
      ? markers.find((x) => x.id === highlightId)
      : undefined;
    const entry = highlightId ? markersRef.current.get(highlightId) : undefined;
    if (!m || !entry) {
      haloRef.current?.marker.remove();
      return;
    }
    if (!haloRef.current) {
      const el = document.createElement("div");
      el.className = "dc-hover-halo";
      el.innerHTML =
        '<span class="dc-hover-ring"></span><span class="dc-hover-label"></span>';
      haloRef.current = {
        el,
        // Centred on the pin's head, which sits up-right of its point.
        marker: new lib.Marker({
          element: el,
          anchor: "center",
          offset: [13, -13],
        }),
      };
    }
    const halo = haloRef.current;
    halo.el.style.setProperty("--halo", m.color);
    const label = halo.el.querySelector(".dc-hover-label");
    if (label) label.textContent = m.title;
    halo.marker.setLngLat([m.lng, m.lat]).addTo(map);
    entry.el.dataset.hover = "true";
    entry.el.style.zIndex = "5";
    entry.marker.setOpacity("1");
    return () => {
      entry.el.dataset.hover = "false";
      entry.el.style.zIndex = "";
      entry.marker.setOpacity(m.dimmed ? "0.3" : "1");
      halo.marker.remove();
    };
  }, [ready, highlightId, markers]);

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

  // Route lines.
  useEffect(() => {
    const map = mapRef.current;
    if (!styleReady || !map) return;
    const source = map.getSource(LINES_SOURCE);
    if (source && "setData" in source) {
      (source as { setData: (d: unknown) => void }).setData(
        linesGeoJson(lines ?? []),
      );
    }
  }, [styleReady, lines]);

  // Route pins (stops and waypoints).
  useEffect(() => {
    const map = mapRef.current;
    const lib = libRef.current;
    if (!ready || !map || !lib) return;
    const existing = pinsRef.current;
    const next = pins ?? [];
    const nextIds = new Set(next.map((p) => p.id));
    for (const [id, { marker }] of existing) {
      if (!nextIds.has(id)) {
        marker.remove();
        existing.delete(id);
        pinPropsRef.current.delete(id);
      }
    }
    for (const p of next) {
      pinPropsRef.current.set(p.id, p);
      let entry = existing.get(p.id);
      if (entry && entry.marker.isDraggable() !== Boolean(p.draggable)) {
        entry.marker.setDraggable(Boolean(p.draggable));
      }
      if (!entry) {
        const el = document.createElement("div");
        el.className = "dc-pin";
        el.appendChild(document.createElement("span"));
        el.addEventListener("click", (ev) => {
          ev.stopPropagation();
          pinPropsRef.current.get(p.id)?.onClick?.();
        });
        const marker = new lib.Marker({
          element: el,
          draggable: Boolean(p.draggable),
        })
          .setLngLat([p.lng, p.lat])
          .addTo(map);
        marker.on("dragend", () => {
          const at = marker.getLngLat();
          pinPropsRef.current
            .get(p.id)
            ?.onDragEnd?.({ lat: at.lat, lng: at.lng });
        });
        entry = { marker, el };
        existing.set(p.id, entry);
      }
      entry.marker.setLngLat([p.lng, p.lat]);
      const inner = entry.el.firstElementChild as HTMLElement | null;
      if (inner) {
        // Waypoints and ad-hoc stops are hollow; place stops are filled.
        const hollow = p.kind === "via" || Boolean(p.adhoc);
        inner.style.background = hollow ? "white" : p.color;
        inner.style.color = hollow ? p.color : "white";
        inner.style.borderColor = p.adhoc ? p.color : "";
        inner.textContent = p.label ?? "";
      }
      entry.el.dataset.kind = p.kind;
      entry.el.dataset.adhoc = String(Boolean(p.adhoc));
      entry.el.dataset.active = String(Boolean(p.active));
      entry.el.dataset.draggable = String(Boolean(p.draggable));
      entry.el.style.zIndex = p.kind === "stop" ? "3" : "4";
      entry.el.title = p.title ?? "";
    }
  }, [ready, pins]);

  // Fit to a set of points (e.g. when a route opens).
  useEffect(() => {
    const map = mapRef.current;
    const lib = libRef.current;
    if (!ready || !map || !lib || !fitTo || fitTo.length === 0) return;
    const bounds = fitTo.reduce(
      (b, p) => b.extend(p),
      new lib.LngLatBounds(fitTo[0], fitTo[0]),
    );
    map.fitBounds(bounds, { padding: 60, maxZoom: 16, duration: 600 });
  }, [ready, fitTo]);

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
