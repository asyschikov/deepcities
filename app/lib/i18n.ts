import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../messages/en.json";

// English only for now; add messages/<lang>.json + a resource entry to localise.
i18n.use(initReactI18next).init({
  resources: { en: { translation: en } },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
