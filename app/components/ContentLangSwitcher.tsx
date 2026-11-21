import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "~/components/ui/select";
import type { ContentLang } from "~/lib/constants";
import { languageName } from "~/lib/content-lang";
import { cn } from "~/lib/utils";

/** Picks the language a map's content is shown in (not the UI language). */
export const ContentLangSwitcher = ({
  value,
  languages,
  onChange,
  className,
}: {
  value: ContentLang;
  languages: ContentLang[];
  onChange: (lang: ContentLang) => void;
  className?: string;
}) => {
  const { t } = useTranslation();
  return (
    <Select
      value={value}
      onValueChange={(v) => {
        const next = languages.find((l) => l === v);
        if (next) onChange(next);
      }}
    >
      <SelectTrigger
        size="sm"
        aria-label={t("content_lang_label")}
        title={t("content_lang_label")}
        className={cn("bg-card/95 shadow-md backdrop-blur", className)}
      >
        <Languages className="size-4" />
        <span lang={value} className="max-sm:hidden">
          {languageName(value)}
        </span>
        <span className="font-medium uppercase sm:hidden">{value}</span>
      </SelectTrigger>
      <SelectContent>
        {languages.map((l) => (
          <SelectItem key={l} value={l} lang={l}>
            {languageName(l)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
