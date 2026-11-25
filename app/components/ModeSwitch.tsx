import { Compass, PenLine } from "lucide-react";
import { useTranslation } from "react-i18next";
import { type AppMode, setAppMode, useAppMode, usePhone } from "~/lib/app-mode";
import { cn } from "~/lib/utils";

const MODES: { key: AppMode; Icon: typeof Compass }[] = [
  { key: "explore", Icon: Compass },
  { key: "edit", Icon: PenLine },
];

/** Explore (out on foot) or Edit (at a desk). Phones only: desktops always edit. */
export const ModeSwitch = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  const mode = useAppMode();
  const phone = usePhone();
  if (!phone) return null;
  return (
    <fieldset
      aria-label={t("mode_label")}
      className={cn("flex rounded-full border bg-muted/60 p-0.5", className)}
    >
      {MODES.map(({ key, Icon }) => (
        <button
          key={key}
          type="button"
          aria-pressed={mode === key}
          title={t(`mode_${key}_hint`)}
          onClick={() => setAppMode(key)}
          className={cn(
            "flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium transition",
            mode === key
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Icon className="size-3.5" />
          <span className="max-sm:sr-only">{t(`mode_${key}`)}</span>
        </button>
      ))}
    </fieldset>
  );
};
