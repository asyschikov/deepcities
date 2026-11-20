import { Languages } from "lucide-react";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import type { ContentLang } from "~/lib/constants";
import { languageName } from "~/lib/content-lang";
import { useMapPage } from "~/lib/map-page";
import { cn } from "~/lib/utils";

/**
 * Which language an editor is writing in: the map's own (the original, where
 * every field is edited) or a translation (only texts). Hidden when the map
 * has a single language.
 */
export const ContentLangTabs = ({
  value,
  onChange,
}: {
  value: ContentLang;
  onChange: (lang: ContentLang) => void;
}) => {
  const { t } = useTranslation();
  const { languages, baseLang } = useMapPage();
  if (languages.length < 2) return null;
  return (
    <div className="space-y-2 rounded-lg border bg-muted/40 p-3">
      <div className="flex items-center gap-1.5 text-sm font-medium">
        <Languages className="size-4" /> {t("content_lang_editing")}
      </div>
      <div className="flex flex-wrap gap-1.5" role="tablist">
        {languages.map((l) => (
          <button
            key={l}
            type="button"
            role="tab"
            aria-selected={value === l}
            onClick={() => onChange(l)}
            className={cn(
              "rounded-full border px-3 py-1 text-sm transition",
              value === l
                ? "border-primary bg-primary text-primary-foreground"
                : "bg-card hover:bg-accent",
            )}
          >
            <span lang={l}>{languageName(l)}</span>
            {l === baseLang && (
              <span className="ml-1 text-xs opacity-75">
                {t("content_lang_original")}
              </span>
            )}
          </button>
        ))}
      </div>
      {value !== baseLang && (
        <p className="text-xs text-muted-foreground">
          {t("content_lang_translating_hint", {
            base: languageName(baseLang),
          })}
        </p>
      )}
    </div>
  );
};

/** The original text, shown above an input while translating it. */
export const OriginalText = ({
  text,
  lang,
}: {
  text: string;
  lang: ContentLang;
}): ReactNode =>
  text.trim() ? (
    <p
      lang={lang}
      className="line-clamp-4 rounded border-l-2 bg-muted/50 px-2 py-1 text-xs whitespace-pre-line text-muted-foreground"
    >
      {text}
    </p>
  ) : null;
