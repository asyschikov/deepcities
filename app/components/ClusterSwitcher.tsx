import { Combine } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "~/components/ui/select";
import { cn } from "~/lib/utils";

/** Every place pin on its own, or nearby pins grouped by zoom level. */
export const ClusterSwitcher = ({
  value,
  onChange,
  className,
}: {
  value: boolean;
  onChange: (on: boolean) => void;
  className?: string;
}) => {
  const { t } = useTranslation();
  return (
    <Select
      value={value ? "on" : "off"}
      onValueChange={(v) => onChange(v === "on")}
    >
      <SelectTrigger
        size="sm"
        aria-label={t("cluster_label")}
        title={t("cluster_label")}
        className={cn("bg-card/95 shadow-md backdrop-blur", className)}
      >
        <Combine className="size-4" />
        <span className="max-sm:hidden">
          {value ? t("cluster_on") : t("cluster_off")}
        </span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="off">{t("cluster_off")}</SelectItem>
        <SelectItem value="on">{t("cluster_on")}</SelectItem>
      </SelectContent>
    </Select>
  );
};
