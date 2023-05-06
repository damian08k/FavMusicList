import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationPolish from "./translation/polish.json";
import tranlationEnglish from "./translation/english.json";

const resources = {
  en: {
    translation: tranlationEnglish,
  },
  pl: {
    translation: translationPolish,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
