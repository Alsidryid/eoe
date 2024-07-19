import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    ru: {
      translation: translationRU,
    },
  },
  lng: "en", // Устанавливаем начальный язык
  fallbackLng: "en", // Язык по умолчанию, если не найдено соответствующего перевода
  interpolation: {
    escapeValue: false, // необходимо для избегания XSS (например, в React)
  },
});

export default i18n;
