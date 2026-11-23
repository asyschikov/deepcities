import { Meh, Sparkles, ThumbsDown, ThumbsUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { VERDICTS, type Verdict } from "~/lib/constants";
import { cn } from "~/lib/utils";

export const VERDICT_STYLE: Record<
  Verdict,
  { Icon: typeof Sparkles; color: string }
> = {
  amazing: { Icon: Sparkles, color: "#b45309" },
  nice: { Icon: ThumbsUp, color: "#15803d" },
  okay: { Icon: Meh, color: "#57534e" },
  skip: { Icon: ThumbsDown, color: "#be123c" },
};

/** Amazing / Nice / Okay / Skip. Tapping your current verdict clears it. */
export const VerdictPicker = ({
  value,
  onChange,
  disabled,
  className,
}: {
  value: Verdict | null;
  onChange: (v: Verdict | null) => void;
  disabled?: boolean;
  className?: string;
}) => {
  const { t } = useTranslation();
  return (
    <fieldset
      aria-label={t("verdict_label")}
      className={cn("grid grid-cols-4 gap-1.5", className)}
    >
      {VERDICTS.map((v) => {
        const { Icon, color } = VERDICT_STYLE[v];
        const on = value === v;
        return (
          <button
            key={v}
            type="button"
            aria-pressed={on}
            disabled={disabled}
            title={t(`verdict_${v}_hint`)}
            onClick={() => onChange(on ? null : v)}
            className={cn(
              "flex flex-col items-center gap-1 rounded-lg border px-1 py-2 text-xs font-medium transition disabled:opacity-50",
              on ? "text-white" : "hover:bg-muted",
            )}
            style={on ? { background: color, borderColor: color } : { color }}
          >
            <Icon className="size-5" />
            {t(`verdict_${v}`)}
          </button>
        );
      })}
    </fieldset>
  );
};

/** What visitors made of it, e.g. "3 amazing · 1 skip". Nothing if no verdicts. */
export const VerdictSummary = ({
  counts,
  className,
}: {
  counts: Record<Verdict, number>;
  className?: string;
}) => {
  const { t } = useTranslation();
  const given = VERDICTS.filter((v) => counts[v] > 0);
  if (given.length === 0) return null;
  return (
    <span
      className={cn(
        "inline-flex flex-wrap items-center gap-x-2 text-xs",
        className,
      )}
    >
      {given.map((v) => {
        const { Icon, color } = VERDICT_STYLE[v];
        return (
          <span
            key={v}
            className="inline-flex items-center gap-0.5"
            style={{ color }}
            title={t(`verdict_count_${v}`, { count: counts[v] })}
          >
            <Icon className="size-3.5" />
            {counts[v]}
          </span>
        );
      })}
    </span>
  );
};

/** A small label for one verdict (your own, in lists). */
export const VerdictTag = ({ verdict }: { verdict: Verdict }) => {
  const { t } = useTranslation();
  const { Icon, color } = VERDICT_STYLE[verdict];
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-medium"
      style={{ color }}
    >
      <Icon className="size-3.5" /> {t(`verdict_${verdict}`)}
    </span>
  );
};
