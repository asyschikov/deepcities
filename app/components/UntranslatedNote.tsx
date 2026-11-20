import { Link } from "@tanstack/react-router";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { languageName } from "~/lib/content-lang";
import { useMapPage } from "~/lib/map-page";

/**
 * Shown when the reader picked a content language this page is (partly)
 * not translated into, so they know why they see the original.
 */
export const UntranslatedNote = ({
  partly,
  edit,
}: {
  /** Some texts are translated, some aren't. */
  partly: boolean;
  /** Where contributors can add the translation. */
  edit?: { to: string; params: Record<string, string> };
}) => {
  const { t } = useTranslation();
  const { lang, baseLang, view } = useMapPage();
  const names = { lang: languageName(lang), base: languageName(baseLang) };
  return (
    <div className="flex items-start gap-2 rounded-md bg-muted/70 p-2.5 text-xs text-muted-foreground">
      <Languages className="mt-px size-3.5 shrink-0" />
      <p>
        {partly
          ? t("content_partly_untranslated", names)
          : t("content_untranslated", names)}
        {edit && view.can.propose && (
          <>
            {" "}
            <Link
              to={edit.to}
              params={edit.params}
              className="font-medium text-primary underline"
            >
              {t("content_translate", names)}
            </Link>
          </>
        )}
      </p>
    </div>
  );
};
