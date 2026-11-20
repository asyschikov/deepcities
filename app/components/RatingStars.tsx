import { Star } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "~/lib/utils";

/** Read-only average, e.g. ★ 4.3 (12). */
export const RatingBadge = ({
  avg,
  count,
}: {
  avg: number | null;
  count: number;
}) => {
  const { t } = useTranslation();
  if (!count || avg === null) return null;
  return (
    <span
      className="inline-flex items-center gap-1 text-xs text-muted-foreground"
      title={t("rating_summary", { avg: avg.toFixed(1), count })}
    >
      <Star className="size-3.5 fill-warning text-warning" />
      <span className="font-medium text-foreground">{avg.toFixed(1)}</span>
      <span>({count})</span>
    </span>
  );
};

/** Clickable 1–5 stars. Clicking your current score clears it. */
export const RatingInput = ({
  value,
  onChange,
  disabled,
}: {
  value: number | null;
  onChange: (score: number | null) => void;
  disabled?: boolean;
}) => {
  const { t } = useTranslation();
  const [hover, setHover] = useState<number | null>(null);
  const shown = hover ?? value ?? 0;
  return (
    <fieldset
      className="flex items-center gap-0.5"
      onMouseLeave={() => setHover(null)}
    >
      <legend className="sr-only">{t("rating_your")}</legend>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          disabled={disabled}
          aria-label={t("rating_n_stars", { count: n })}
          aria-pressed={value === n}
          onMouseEnter={() => setHover(n)}
          onClick={() => onChange(value === n ? null : n)}
          className="rounded p-0.5 disabled:opacity-50"
        >
          <Star
            className={cn(
              "size-6 transition-colors",
              n <= shown
                ? "fill-warning text-warning"
                : "text-muted-foreground/40",
            )}
          />
        </button>
      ))}
    </fieldset>
  );
};
