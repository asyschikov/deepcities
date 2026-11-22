import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "~/components/ui/select";
import { PIN_SIZES, type PinSize } from "~/lib/constants";
import { cn } from "~/lib/utils";

/** How big place pins are drawn: large (default), medium or small. */
export const PinSizeSwitcher = ({
  value,
  onChange,
  className,
}: {
  value: PinSize;
  onChange: (size: PinSize) => void;
  className?: string;
}) => {
  const { t } = useTranslation();
  return (
    <Select
      value={value}
      onValueChange={(v) => onChange(PIN_SIZES.find((s) => s === v) ?? "large")}
    >
      <SelectTrigger
        size="sm"
        aria-label={t("pin_size_label")}
        title={t("pin_size_label")}
        className={cn("bg-card/95 shadow-md backdrop-blur", className)}
      >
        <MapPin className="size-4" />
        <span className="max-sm:hidden">{t(`pin_size_${value}`)}</span>
      </SelectTrigger>
      <SelectContent>
        {PIN_SIZES.map((s) => (
          <SelectItem key={s} value={s}>
            {t(`pin_size_${s}`)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
