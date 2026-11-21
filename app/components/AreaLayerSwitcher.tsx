import { Layers } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "~/components/ui/select";
import type { AreaLevel } from "~/lib/constants";
import { cn } from "~/lib/utils";

const NONE = "none";

/** Shows the city's official boundaries of one level on the map, or none. */
export const AreaLayerSwitcher = ({
  value,
  levels,
  onChange,
  className,
}: {
  value: AreaLevel | null;
  levels: AreaLevel[];
  onChange: (level: AreaLevel | null) => void;
  className?: string;
}) => {
  const { t } = useTranslation();
  // The whole-city level has no boundary worth drawing.
  const offered = levels.filter((l) => l !== "municipality");
  return (
    <Select
      value={value ?? NONE}
      onValueChange={(v) => onChange(offered.find((l) => l === v) ?? null)}
    >
      <SelectTrigger
        size="sm"
        aria-label={t("area_layer_label")}
        title={t("area_layer_label")}
        className={cn("bg-card/95 shadow-md backdrop-blur", className)}
      >
        <Layers className="size-4" />
        <span className="max-sm:hidden">
          {value ? t(`area_level_${value}`) : t("area_layer_none")}
        </span>
        {/* Phones: just the icon, or a short name when boundaries are on. */}
        {value && (
          <span className="sm:hidden">{t(`area_level_short_${value}`)}</span>
        )}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={NONE}>{t("area_layer_none")}</SelectItem>
        {offered.map((l) => (
          <SelectItem key={l} value={l}>
            {t(`area_level_${l}`)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
