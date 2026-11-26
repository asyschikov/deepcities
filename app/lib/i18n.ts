import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../messages/en.json";
import nl from "../../messages/nl.json";

// The UI is English. messages/nl.json holds only the strings of the pages
// that exist per content language (a place's own page, the area lists), read
// inside `<PageLanguage>` (app/components/PageLanguage.tsx); anything missing falls
// back to English.
i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, nl: { translation: nl } },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
