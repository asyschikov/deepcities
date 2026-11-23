import { Loader2, Locate, LocateFixed, LocateOff } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { GeoStatus } from "~/lib/geolocation";
import { cn } from "~/lib/utils";

/**
 * Show where I am. One button, three steps: off → on and following you;
 * on (map dragged away) → back to following; following → off.
 */
export const LocateButton = ({
  status,
  following,
  onClick,
  className,
}: {
  status: GeoStatus;
  following: boolean;
  onClick: () => void;
  className?: string;
}) => {
  const { t } = useTranslation();
  const label =
    status === "on"
      ? following
        ? t("geo_stop")
        : t("geo_follow")
      : status === "denied"
        ? t("geo_denied")
        : t("geo_locate");
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      aria-pressed={status === "on" && following}
      className={cn(
        "flex size-10 items-center justify-center rounded-full border bg-card/95 shadow-md backdrop-blur transition hover:bg-card",
        status === "on" && "text-[#2563eb]",
        className,
      )}
    >
      {status === "locating" ? (
        <Loader2 className="size-5 animate-spin" />
      ) : status === "denied" || status === "unavailable" ? (
        <LocateOff className="size-5 text-muted-foreground" />
      ) : status === "on" && following ? (
        <LocateFixed className="size-5" />
      ) : (
        <Locate className="size-5" />
      )}
    </button>
  );
};
