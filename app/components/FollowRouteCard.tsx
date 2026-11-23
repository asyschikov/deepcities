import { Link } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight, Navigation, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import { MODE_SPEED_KMH, type RouteMode } from "~/lib/constants";
import { distanceMeters } from "~/lib/diff";
import type { GeoFix, GeoStatus } from "~/lib/geolocation";
import { formatDistance, formatDuration } from "~/lib/routes";

export interface FollowStop {
  name: string;
  lat: number;
  lng: number;
  placeId: string | null;
}

/**
 * Following a route: the stop you're heading for, how far it is, and
 * buttons to skip ahead, go back or stop. Floats over the map.
 */
export const FollowRouteCard = ({
  city,
  slug,
  stops,
  target,
  reached,
  mode,
  fix,
  geoStatus,
  arrived,
  onTarget,
  onEnd,
  extra,
}: {
  city: string;
  slug: string;
  stops: FollowStop[];
  target: number;
  reached: ReadonlySet<number>;
  mode: RouteMode;
  fix: GeoFix | null;
  geoStatus: GeoStatus;
  arrived: boolean;
  onTarget: (i: number) => void;
  onEnd: () => void;
  /** Actions for the stop (e.g. check in). */
  extra?: React.ReactNode;
}) => {
  const { t } = useTranslation();
  const stop = stops[target];
  if (!stop) return null;
  const meters = fix ? distanceMeters(fix, stop) : null;
  const last = stops.length - 1;
  return (
    <div className="space-y-2 rounded-xl border bg-card/95 p-3 shadow-lg backdrop-blur">
      <div className="flex items-start gap-2">
        <div className="min-w-0 flex-1">
          <div className="text-xs text-muted-foreground">
            {t("follow_stop_of", { n: target + 1, of: stops.length })}
            {reached.size > 0 && (
              <> · {t("follow_reached", { count: reached.size })}</>
            )}
          </div>
          <div className="truncate font-semibold">
            {stop.placeId ? (
              <Link
                to="/$city/$slug/p/$placeId"
                params={{ city, slug, placeId: stop.placeId }}
                className="hover:underline"
              >
                {stop.name}
              </Link>
            ) : (
              stop.name
            )}
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            {arrived ? (
              <span className="flex items-center gap-1 font-medium text-[#15803d]">
                <Check className="size-4" /> {t("follow_here")}
              </span>
            ) : meters !== null ? (
              <span className="flex items-center gap-1 text-[#2563eb]">
                <Navigation className="size-3.5" />
                {formatDistance(meters)} ·{" "}
                {formatDuration((meters / 1000 / MODE_SPEED_KMH[mode]) * 60)}
              </span>
            ) : (
              <span className="text-muted-foreground">
                {geoStatus === "denied"
                  ? t("geo_denied_help")
                  : geoStatus === "unavailable"
                    ? t("geo_unavailable")
                    : t("near_me_locating")}
              </span>
            )}
          </div>
        </div>
        <Button
          size="icon"
          variant="ghost"
          className="size-8 shrink-0"
          onClick={onEnd}
          aria-label={t("follow_end")}
          title={t("follow_end")}
        >
          <X />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          disabled={target === 0}
          onClick={() => onTarget(target - 1)}
          aria-label={t("follow_prev")}
        >
          <ChevronLeft />
        </Button>
        <div className="flex min-w-0 flex-1 gap-2">{extra}</div>
        {target < last ? (
          <Button
            size="sm"
            variant={arrived ? "default" : "outline"}
            onClick={() => onTarget(target + 1)}
          >
            {t("follow_next")} <ChevronRight />
          </Button>
        ) : (
          <Button
            size="sm"
            variant={arrived ? "default" : "outline"}
            onClick={onEnd}
          >
            {t("follow_finish")}
          </Button>
        )}
      </div>
    </div>
  );
};
