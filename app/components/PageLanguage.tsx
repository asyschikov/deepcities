import { type ReactNode, useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "~/lib/i18n";

/**
 * The UI strings of a page that exists per content language (a place's own
 * page, the area lists) in that language, where messages/<lang>.json has
 * them; English otherwise.
 */
export const PageLanguage = ({
  lang,
  children,
}: {
  lang: string;
  children: ReactNode;
}) => {
  const local = useMemo(
    () => (lang === "en" ? i18n : i18n.cloneInstance({ lng: lang })),
    [lang],
  );
  return <I18nextProvider i18n={local}>{children}</I18nextProvider>;
};
