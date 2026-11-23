import type {
  ExpressionSpecification,
  LineLayerSpecification,
  Marker,
  Map as MlMap,
} from "maplibre-gl";
// Emit the worker as an asset and point MapLibre at it explicitly; its own
// import.meta.url lookup breaks once Vite bundles the library.
import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?url";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Supercluster from "supercluster";
import { DEFAULT_PIN_SIZE, PIN_PX, type PinSize } from "~/lib/constants";
import type { AreaGeometry } from "~/lib/db/schema";
import type { GeoFix } from "~/lib/geolocation";
import { cn } from "~/lib/utils";

const STYLE_URL = "https://tiles.openfreemap.org/styles/positron";

export interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  color: string;
  title: string;
  dimmed?: boolean;
  /** The reader has checked in here: drawn with a tick. */
  visited?: boolean;
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
  /**
   * Lines sharing a group (e.g. one route's legs) highlight together on
   * hover and share the click.
   */
  group?: string;
  /** Makes the line clickable (with a wide, invisible hit area). */
  onClick?: () => void;
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
  /**
   * Group nearby place pins into counted clusters, regrouped as the zoom
   * changes. Faded (filtered-out) pins are left out; the open or hovered
   * place always shows on its own.
   */
  cluster?: boolean;
  /** Place pin size. */
  pinSize?: PinSize;
  activeId?: string | null;
  /** A place hovered in the list: drawn prominently with its name. */
  hoverId?: string | null;
  onMarkerClick?: (id: string) => void;
  /** When set, clicking the map moves a draggable draft pin. */
  draft?: { position: LngLat | null; onChange: (p: LngLat) => void } | null;
  /** Fly to this point when it changes (e.g. the selected place). */
  focus?: LngLat | null;
  /** Official area boundaries with their names (under everything else). */
  areas?: MapArea[];
  /** Route overlays, drawn above places. */
  lines?: MapLine[];
  pins?: MapPin[];
  /** Fit the view to these points when the list changes identity. */
  fitTo?: [number, number][] | null;
  /** Map clicks (when no place pin is being placed). */
  onMapClick?: (p: LngLat) => void;
  interactive?: boolean;
  className?: string;
  /**
   * `center`/`zoom` came from the URL: keep them over the automatic `focus`
   * and `fitTo` moves a page asks for while loading.
   */
  holdInitialView?: boolean;
  /** After the map stops moving (pan, zoom, fly). */
  onViewChange?: (v: { lat: number; lng: number; zoom: number }) => void;
  /** The reader's own position: a dot with its accuracy circle. */
  me?: GeoFix | null;
  /** Keep the reader's position centred as it moves. */
  follow?: boolean;
  /** Following stopped because the reader dragged the map away. */
  onFollowStop?: () => void;
}

/** How long after loading a restored view wins over automatic moves. */
const HOLD_MS = 1500;

/** An official area drawn as a boundary layer, named at `label`. */
export interface MapArea {
  id: string;
  name: string;
  color: string;
  geometry: AreaGeometry;
  label: [number, number];
}

const AREAS_SOURCE = "dc-areas";
const AREA_LABELS_SOURCE = "dc-area-labels";
const areasGeoJson = (areas: MapArea[]) => ({
  type: "FeatureCollection" as const,
  features: areas.map((a) => ({
    type: "Feature" as const,
    id: a.id,
    properties: { name: a.name, color: a.color },
    geometry: a.geometry,
  })),
});
const areaLabelsGeoJson = (areas: MapArea[]) => ({
  type: "FeatureCollection" as const,
  features: areas.map((a) => ({
    type: "Feature" as const,
    id: a.id,
    properties: { name: a.name, color: a.color },
    geometry: { type: "Point" as const, coordinates: a.label },
  })),
});

const ME_SOURCE = "dc-me";
/** A circle of `meters` around a point, as a polygon (for accuracy). */
const circleGeoJson = (fix: GeoFix | null) => {
  if (!fix) return { type: "FeatureCollection" as const, features: [] };
  const steps = 48;
  const dLat = fix.accuracy / 111_320;
  const dLng = dLat / Math.cos((fix.lat * Math.PI) / 180);
  const ring = Array.from({ length: steps + 1 }, (_, i) => {
    const a = (i / steps) * 2 * Math.PI;
    return [fix.lng + dLng * Math.cos(a), fix.lat + dLat * Math.sin(a)];
  });
  return {
    type: "FeatureCollection" as const,
    features: [
      {
        type: "Feature" as const,
        properties: {},
        geometry: { type: "Polygon" as const, coordinates: [ring] },
      },
    ],
  };
};

const LINES_SOURCE = "dc-lines";
const LINES_HIT_LAYER = "dc-lines-hit";
const linesGeoJson = (lines: MapLine[]) => ({
  type: "FeatureCollection" as const,
  features: lines.map((l) => ({
    type: "Feature" as const,
    properties: {
      lineId: l.id,
      group: l.group ?? l.id,
      clickable: Boolean(l.onClick),
      color: l.color,
      width: l.width ?? 4,
      opacity: l.opacity ?? 0.9,
      dashed: Boolean(l.dashed),
    },
    geometry: { type: "LineString" as const, coordinates: l.coords },
  })),
});

/** A cluster's ring: each category's colour by its share of the places. */
const clusterGradient = (colors: Record<string, number>, count: number) => {
  let at = 0;
  const stops = Object.entries(colors)
    .sort(([, a], [, b]) => b - a)
    .map(([c, n]) => {
      const from = at;
      at += (n / count) * 360;
      return `${c} ${from}deg ${at}deg`;
    });
  return `conic-gradient(${stops.join(", ")})`;
};

/**
 * MapLibre map with HTML markers. maplibre-gl touches `window`, so it is
 * imported lazily inside an effect and the map only exists on the client.
 */
export const MapView = ({
  center,
  zoom,
  markers,
  cluster = false,
  pinSize = DEFAULT_PIN_SIZE,
  activeId,
  hoverId = null,
  onMarkerClick,
  draft,
  focus,
  areas,
  lines,
  pins,
  fitTo,
  onMapClick,
  interactive = true,
  className,
  holdInitialView = false,
  onViewChange,
  me = null,
  follow = false,
  onFollowStop,
}: MapViewProps) => {
  const onFollowStopRef = useRef(onFollowStop);
  onFollowStopRef.current = onFollowStop;
  const onViewChangeRef = useRef(onViewChange);
  onViewChangeRef.current = onViewChange;
  const heldUntil = useRef(0);
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
  const linesRef = useRef(lines);
  linesRef.current = lines;
  /** The line group under the pointer, highlighted. */
  const hoveredGroup = useRef<string | null>(null);
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
      // Touch screens pinch to zoom, so the buttons only take room there.
      if (interactive && !window.matchMedia("(pointer: coarse)").matches) {
        map.addControl(
          new lib.NavigationControl({ showCompass: false }),
          "top-right",
        );
      }
      // Dragging the map away from your position stops following it.
      map.on("dragstart", () => onFollowStopRef.current?.());
      map.on("moveend", () => {
        if (!map) return;
        const c = map.getCenter();
        onViewChangeRef.current?.({
          lat: c.lat,
          lng: c.lng,
          zoom: map.getZoom(),
        });
      });
      map.on("click", (e) => {
        // A clickable route line takes the click (unless placing a pin).
        if (map && !draftRef.current && map.getLayer(LINES_HIT_LAYER)) {
          const hit = map.queryRenderedFeatures(e.point, {
            layers: [LINES_HIT_LAYER],
          })[0];
          const id = hit?.properties?.lineId;
          const line = linesRef.current?.find((l) => l.id === id);
          if (line?.onClick) {
            line.onClick();
            return;
          }
        }
        const p = { lat: e.lngLat.lat, lng: e.lngLat.lng };
        if (draftRef.current) draftRef.current.onChange(p);
        else onMapClickRef.current?.(p);
      });
      map.once("load", () => {
        if (!map) return;
        // Narrow screens: start the credits folded into their (i) button.
        if (window.matchMedia("(max-width: 767px)").matches)
          map
            .getContainer()
            .querySelector(".maplibregl-ctrl-attrib")
            ?.classList.remove("maplibregl-compact-show");
        // Area boundaries go under routes; names avoid each other.
        map.addSource(AREAS_SOURCE, {
          type: "geojson",
          data: areasGeoJson([]),
        });
        map.addSource(AREA_LABELS_SOURCE, {
          type: "geojson",
          data: areaLabelsGeoJson([]),
        });
        map.addLayer({
          id: "dc-areas-fill",
          type: "fill",
          source: AREAS_SOURCE,
          paint: { "fill-color": ["get", "color"], "fill-opacity": 0.07 },
        });
        map.addLayer({
          id: "dc-areas-line",
          type: "line",
          source: AREAS_SOURCE,
          layout: { "line-join": "round" },
          paint: {
            "line-color": ["get", "color"],
            "line-width": ["interpolate", ["linear"], ["zoom"], 10, 1, 15, 2.5],
            "line-opacity": 0.75,
          },
        });
        map.addLayer({
          id: "dc-areas-label",
          type: "symbol",
          source: AREA_LABELS_SOURCE,
          layout: {
            "text-field": ["get", "name"],
            "text-font": ["Noto Sans Bold"],
            "text-size": ["interpolate", ["linear"], ["zoom"], 10, 11, 15, 15],
            "text-max-width": 8,
            "text-padding": 6,
            "text-letter-spacing": 0.02,
          },
          paint: {
            "text-color": ["get", "color"],
            "text-halo-color": "rgba(255,255,255,0.95)",
            "text-halo-width": 2,
          },
        });
        map.addSource(ME_SOURCE, {
          type: "geojson",
          data: circleGeoJson(null),
        });
        map.addLayer({
          id: "dc-me-accuracy",
          type: "fill",
          source: ME_SOURCE,
          paint: { "fill-color": "#2563eb", "fill-opacity": 0.12 },
        });
        map.addLayer({
          id: "dc-me-accuracy-line",
          type: "line",
          source: ME_SOURCE,
          paint: {
            "line-color": "#2563eb",
            "line-opacity": 0.35,
            "line-width": 1,
          },
        });
        map.addSource(LINES_SOURCE, {
          type: "geojson",
          data: linesGeoJson([]),
          promoteId: "lineId",
        });
        const hovered: ExpressionSpecification = [
          "boolean",
          ["feature-state", "hover"],
          false,
        ];
        const paint: LineLayerSpecification["paint"] = {
          "line-color": ["get", "color"],
          "line-width": [
            "case",
            hovered,
            ["+", ["get", "width"], 3],
            ["get", "width"],
          ],
          "line-opacity": ["case", hovered, 1, ["get", "opacity"]],
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
        // Wide, nearly invisible copy of clickable lines: easy to hit,
        // also with a finger. (Fully transparent features aren't queryable.)
        map.addLayer({
          id: LINES_HIT_LAYER,
          type: "line",
          source: LINES_SOURCE,
          filter: ["==", ["get", "clickable"], true],
          layout,
          paint: { "line-width": 18, "line-opacity": 0.01 },
        });
        const m = map;
        const setGroupHover = (group: string | null) => {
          if (hoveredGroup.current === group) return;
          for (const g of [hoveredGroup.current, group]) {
            if (!g) continue;
            for (const l of linesRef.current ?? []) {
              if ((l.group ?? l.id) === g)
                m.setFeatureState(
                  { source: LINES_SOURCE, id: l.id },
                  { hover: g === group },
                );
            }
          }
          hoveredGroup.current = group;
        };
        m.on("mousemove", LINES_HIT_LAYER, (e) => {
          if (draftRef.current) return;
          const group = e.features?.[0]?.properties?.group;
          setGroupHover(typeof group === "string" ? group : null);
          m.getCanvas().style.cursor = "pointer";
        });
        m.on("mouseleave", LINES_HIT_LAYER, () => {
          setGroupHover(null);
          if (!draftRef.current) m.getCanvas().style.cursor = "";
        });
        setStyleReady(true);
      });
      mapRef.current = map;
      if (holdInitialView) heldUntil.current = performance.now() + HOLD_MS;
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
        const shape = document.createElement("span");
        shape.className = "dc-marker-shape";
        el.appendChild(shape);
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
      const shape = entry.el.firstElementChild as HTMLElement | null;
      if (shape) shape.style.background = m.color;
      entry.el.title = m.title;
      entry.el.setAttribute("aria-label", m.title);
      entry.el.dataset.active = String(m.id === activeId);
      entry.el.dataset.dimmed = String(Boolean(m.dimmed));
      entry.el.dataset.visited = String(Boolean(m.visited));
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
        marker: new lib.Marker({ element: el, anchor: "center" }),
      };
    }
    const halo = haloRef.current;
    const head = PIN_PX[pinSize] / 2;
    halo.marker.setOffset([head, -head]);
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
  }, [ready, highlightId, markers, pinSize]);

  // Clusters: nearby bright pins merge into a counted disc, coloured by the
  // share of each category in it; tapping one zooms in until it splits.
  const { t } = useTranslation();
  const clusterLabel = useRef(t);
  clusterLabel.current = t;
  useEffect(() => {
    const map = mapRef.current;
    const lib = libRef.current;
    if (!ready || !map || !lib || !cluster) return;
    const entries = markersRef.current;
    const index = new Supercluster<
      { id: string; color: string },
      { colors: Record<string, number> }
    >({
      radius: 56,
      maxZoom: 17,
      map: (p) => ({ colors: { [p.color]: 1 } }),
      reduce: (acc, p) => {
        for (const [c, n] of Object.entries(p.colors))
          acc.colors[c] = (acc.colors[c] ?? 0) + n;
      },
    });
    index.load(
      markers
        .filter((m) => !m.dimmed && m.id !== highlightId)
        .map((m) => ({
          type: "Feature" as const,
          properties: { id: m.id, color: m.color },
          geometry: { type: "Point" as const, coordinates: [m.lng, m.lat] },
        })),
    );
    const discs = new Map<number, Marker>();
    const update = () => {
      const b = map.getBounds();
      const padLng = (b.getEast() - b.getWest()) * 0.25;
      const padLat = (b.getNorth() - b.getSouth()) * 0.25;
      const features = index.getClusters(
        [
          Math.max(-180, b.getWest() - padLng),
          Math.max(-85, b.getSouth() - padLat),
          Math.min(180, b.getEast() + padLng),
          Math.min(85, b.getNorth() + padLat),
        ],
        Math.floor(map.getZoom()),
      );
      const single = new Set<string>();
      const seen = new Set<number>();
      for (const f of features) {
        if (!("cluster" in f.properties)) {
          single.add(f.properties.id);
          continue;
        }
        const { cluster_id: id, point_count: count, colors } = f.properties;
        seen.add(id);
        if (discs.has(id)) continue;
        const [lng = 0, lat = 0] = f.geometry.coordinates;
        const el = document.createElement("button");
        el.type = "button";
        el.className = "dc-cluster";
        el.style.setProperty(
          "--size",
          `${Math.round(30 + Math.sqrt(count) * 3)}px`,
        );
        el.innerHTML =
          '<span class="dc-cluster-disc"><span class="dc-cluster-count"></span></span>';
        const disc = el.firstElementChild as HTMLElement | null;
        if (disc) disc.style.background = clusterGradient(colors, count);
        const label = el.querySelector(".dc-cluster-count");
        if (label) label.textContent = String(count);
        const name = clusterLabel.current("cluster_count", { count });
        el.title = name;
        el.setAttribute("aria-label", name);
        el.addEventListener("click", (ev) => {
          ev.stopPropagation();
          map.easeTo({
            center: [lng, lat],
            zoom: Math.min(index.getClusterExpansionZoom(id), 18),
          });
        });
        discs.set(
          id,
          new lib.Marker({ element: el, anchor: "center" })
            .setLngLat([lng, lat])
            .addTo(map),
        );
      }
      for (const [id, disc] of discs) {
        if (seen.has(id)) continue;
        disc.remove();
        discs.delete(id);
      }
      for (const [id, { el }] of entries) {
        el.dataset.clustered = String(!single.has(id) && id !== highlightId);
      }
    };
    let frame = 0;
    const onMove = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    map.on("move", onMove);
    return () => {
      cancelAnimationFrame(frame);
      map.off("move", onMove);
      for (const disc of discs.values()) disc.remove();
      for (const { el } of entries.values()) el.dataset.clustered = "false";
    };
  }, [ready, cluster, markers, highlightId]);

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

  // Area boundaries and names.
  useEffect(() => {
    const map = mapRef.current;
    if (!styleReady || !map) return;
    const set = (id: string, data: unknown) => {
      const source = map.getSource(id);
      if (source && "setData" in source)
        (source as { setData: (d: unknown) => void }).setData(data);
    };
    set(AREAS_SOURCE, areasGeoJson(areas ?? []));
    set(AREA_LABELS_SOURCE, areaLabelsGeoJson(areas ?? []));
  }, [styleReady, areas]);

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
    // New data drops feature state; forget the stale hover.
    hoveredGroup.current = null;
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
        const shape = document.createElement("span");
        shape.className = "dc-marker-shape";
        el.appendChild(shape);
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
    if (
      !ready ||
      !map ||
      !lib ||
      !fitTo ||
      fitTo.length === 0 ||
      performance.now() < heldUntil.current
    )
      return;
    const bounds = fitTo.reduce(
      (b, p) => b.extend(p),
      new lib.LngLatBounds(fitTo[0], fitTo[0]),
    );
    map.fitBounds(bounds, { padding: 60, maxZoom: 16, duration: 600 });
  }, [ready, fitTo]);

  // The reader's position: a dot (above the places) and its accuracy circle.
  const meMarker = useRef<Marker | null>(null);
  useEffect(() => {
    const map = mapRef.current;
    const lib = libRef.current;
    if (!ready || !map || !lib) return;
    if (!me) {
      meMarker.current?.remove();
      meMarker.current = null;
      return;
    }
    if (!meMarker.current) {
      const el = document.createElement("div");
      el.className = "dc-me";
      el.innerHTML =
        '<span class="dc-me-heading"></span><span class="dc-me-dot"></span>';
      el.style.zIndex = "6";
      meMarker.current = new lib.Marker({ element: el, anchor: "center" })
        .setLngLat([me.lng, me.lat])
        .addTo(map);
    }
    meMarker.current.setLngLat([me.lng, me.lat]);
    const el = meMarker.current.getElement();
    el.dataset.heading = String(me.heading !== null);
    el.style.setProperty("--heading", `${me.heading ?? 0}deg`);
  }, [ready, me]);
  useEffect(() => {
    const source = styleReady ? mapRef.current?.getSource(ME_SOURCE) : null;
    if (source && "setData" in source)
      (source as { setData: (d: unknown) => void }).setData(circleGeoJson(me));
  }, [styleReady, me]);
  useEffect(
    () => () => {
      meMarker.current?.remove();
      meMarker.current = null;
    },
    [],
  );

  // Following: keep the reader's position in the middle as it moves.
  const meLat = me?.lat;
  const meLng = me?.lng;
  const wasFollowing = useRef(false);
  useEffect(() => {
    const map = mapRef.current;
    if (!follow) {
      wasFollowing.current = false;
      return;
    }
    if (!ready || !map || meLat === undefined || meLng === undefined) return;
    // Starting to follow zooms in to street level; after that, just pan.
    const zoom = wasFollowing.current
      ? map.getZoom()
      : Math.max(map.getZoom(), 16);
    wasFollowing.current = true;
    map.easeTo({ center: [meLng, meLat], zoom, duration: 600 });
  }, [ready, follow, meLat, meLng]);

  const focusLat = focus?.lat;
  const focusLng = focus?.lng;
  useEffect(() => {
    const map = mapRef.current;
    if (
      !ready ||
      !map ||
      focusLat === undefined ||
      focusLng === undefined ||
      performance.now() < heldUntil.current
    )
      return;
    map.easeTo({
      center: [focusLng, focusLat],
      zoom: Math.max(map.getZoom(), 15),
    });
  }, [ready, focusLat, focusLng]);

  return (
    <div
      ref={containerRef}
      // Pins, their borders and the highlight ring scale with this.
      style={{ "--pin": `${PIN_PX[pinSize]}px` } as React.CSSProperties}
      className={cn("h-full w-full bg-muted", className)}
    />
  );
};
