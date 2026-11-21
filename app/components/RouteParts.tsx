import {
  Bike,
  Bus,
  Footprints,
  Ship,
  TrainFront,
  TrainFrontTunnel,
  TramFront,
} from "lucide-react";
import type { MapLine, MapPin } from "~/components/MapView";
import { MODE_COLORS, type TransportMode } from "~/lib/constants";
import { cn } from "~/lib/utils";
import type { LngLatTuple, RouteLeg, RouteStop } from "~/lib/validation";

const MODE_ICONS: Record<TransportMode, typeof Footprints> = {
  walk: Footprints,
  bike: Bike,
  tram: TramFront,
  bus: Bus,
  metro: TrainFrontTunnel,
  ferry: Ship,
  train: TrainFront,
};

export const ModeIcon = ({
  mode,
  className,
}: {
  mode: TransportMode;
  className?: string;
}) => {
  const Icon = MODE_ICONS[mode];
  return (
    <Icon
      className={cn("size-4 shrink-0", className)}
      style={{ color: MODE_COLORS[mode] }}
      aria-hidden
    />
  );
};

/** Stop pins share one colour; ad-hoc stops are drawn dashed. */
export const STOP_COLOR = "#1c1917";

/** One map line per leg, coloured by transport mode. */
export const legLines = (
  routeId: string,
  legs: Pick<RouteLeg, "mode" | "path">[],
  opts: {
    opacity?: number;
    width?: number;
    activeLeg?: number | null;
    /** Clicking any leg (e.g. open the route). */
    onClick?: () => void;
  } = {},
): MapLine[] =>
  legs.map((l, i) => ({
    id: `${routeId}:${i}`,
    group: routeId,
    onClick: opts.onClick,
    coords: l.path,
    color: MODE_COLORS[l.mode],
    width: opts.activeLeg === i ? 7 : (opts.width ?? 5),
    opacity: opts.activeLeg === i ? 1 : (opts.opacity ?? 0.9),
    dashed: l.mode === "ferry",
  }));

type StopPoint = Pick<RouteStop, "placeId" | "name" | "lat" | "lng">;

/** A loop ends where it starts: the last stop is the first place again. */
export const isLoop = (stops: StopPoint[]): boolean => {
  const first = stops[0];
  const last = stops[stops.length - 1];
  if (stops.length < 3 || !first || !last) return false;
  if (first.placeId || last.placeId) return first.placeId === last.placeId;
  // Ad-hoc points: the same spot (within ~20 m).
  return (
    Math.abs(first.lat - last.lat) < 0.0002 &&
    Math.abs(first.lng - last.lng) < 0.0003
  );
};

export const stopPins = (
  stops: StopPoint[],
  opts: {
    activeStop?: number | null;
    draggableAdhoc?: boolean;
    onClick?: (i: number) => void;
    onDragEnd?: (i: number, p: { lat: number; lng: number }) => void;
  } = {},
): MapPin[] => {
  // A loop's finish is drawn as its start (one pin, not two stacked);
  // the editor keeps both so an ad-hoc finish stays draggable.
  const last = stops.length - 1;
  const merged = !opts.draggableAdhoc && isLoop(stops);
  const pinOf = (i: number) => (merged && i === last ? 0 : i);
  const shown = merged ? stops.slice(0, last) : stops;
  return shown.map((s, i) => ({
    // Index-based ids: a reorder just relabels the pins.
    id: `stop:${i}`,
    lat: s.lat,
    lng: s.lng,
    kind: "stop",
    color: STOP_COLOR,
    label: String(i + 1),
    title: s.name,
    adhoc: s.placeId === null,
    active: opts.activeStop != null && pinOf(opts.activeStop) === i,
    draggable: Boolean(opts.draggableAdhoc && s.placeId === null),
    onClick: opts.onClick ? () => opts.onClick?.(i) : undefined,
    onDragEnd: opts.onDragEnd ? (p) => opts.onDragEnd?.(i, p) : undefined,
  }));
};

/** Every coordinate of a route, for fitting the map to it. */
export const routeBounds = (
  stops: Pick<RouteStop, "lat" | "lng">[],
  legs: { path: LngLatTuple[] }[],
): LngLatTuple[] => [
  ...stops.map((s): LngLatTuple => [s.lng, s.lat]),
  ...legs.flatMap((l) => l.path),
];
