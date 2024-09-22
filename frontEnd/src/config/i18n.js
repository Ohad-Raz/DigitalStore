import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json"; // Correct path for English translations
import he from "./locales/he.json"; // Correct path for Hebrew translations
import ru from "./locales/ru.json"; // Import Russian translations

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    he: { translation: he },
    ru: { translation: ru }, // Add Russian resources
  },
  lng: "he", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
