import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationDE from "./locales/de/translation.json";
import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: translationDE,
    },
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
  },
  lng: "de", // Устанавливаем начальный язык
  fallbackLng: "de", // Язык по умолчанию, если не найдено соответствующего перевода
  interpolation: {
    escapeValue: false, // необходимо для избегания XSS (например, в React)
  },
});

export default i18n;
