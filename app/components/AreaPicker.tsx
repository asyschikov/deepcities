import { ChevronRight, MapPinned, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { type AreaItem, useMapPage } from "~/lib/map-page";

/**
 * Drill down the city's official areas (stadsdeel → gebied → wijk): the
 * chosen area filters places and is outlined on the map.
 */
export const AreaPicker = () => {
  const { t } = useTranslation();
  const { areas, area, setAreaId, subAreas } = useMapPage();
  if (areas.length === 0) return null;

  const byId = new Map(areas.map((a) => [a.id, a]));
  const trail: AreaItem[] = [];
  for (let a = area; a; a = a.parentId ? (byId.get(a.parentId) ?? null) : null)
    trail.unshift(a);
  // The city itself is implied; the trail starts below it.
  const path = trail.filter((a) => a.parentId !== null);

  return (
    <div className="space-y-1.5">
      <div className="flex flex-wrap items-center gap-1 text-sm">
        <MapPinned className="size-4 text-muted-foreground" />
        <button
          type="button"
          onClick={() => setAreaId(null)}
          className={
            area
              ? "text-primary hover:underline"
              : "font-medium text-foreground"
          }
        >
          {trail[0]?.parentId === null
            ? trail[0].name
            : (areas.find((a) => a.parentId === null)?.name ?? t("area_all"))}
        </button>
        {path.map((a, i) => (
          <span key={a.id} className="flex items-center gap-1">
            <ChevronRight className="size-3.5 text-muted-foreground" />
            <button
              type="button"
              onClick={() => setAreaId(a.id)}
              className={
                i === path.length - 1
                  ? "font-medium text-foreground"
                  : "text-primary hover:underline"
              }
            >
              {a.name}
            </button>
          </span>
        ))}
        {area && (
          <button
            type="button"
            onClick={() => setAreaId(null)}
            className="ml-auto rounded p-0.5 text-muted-foreground hover:bg-muted"
            aria-label={t("area_clear")}
            title={t("area_clear")}
          >
            <X className="size-4" />
          </button>
        )}
      </div>
      {subAreas.length > 0 && (
        <Select value="" onValueChange={(id) => setAreaId(id)}>
          <SelectTrigger
            size="sm"
            className="w-full"
            aria-label={t(`area_pick_${subAreas[0]?.level ?? "borough"}`)}
          >
            <SelectValue
              placeholder={t(`area_pick_${subAreas[0]?.level ?? "borough"}`)}
            />
          </SelectTrigger>
          <SelectContent>
            {subAreas.map((a) => (
              <SelectItem key={a.id} value={a.id} disabled={a.count === 0}>
                <span className="flex w-full justify-between gap-3">
                  <span>{a.name}</span>
                  <span className="text-muted-foreground tabular-nums">
                    {a.count}
                  </span>
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};
