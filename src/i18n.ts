import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

i18n
  .use(
    resourcesToBackend(
      (language: string) => import(`./assets/locale/${language}/common.json`)
    )
  )
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,

    react: {
      useSuspense: false,
    },
  });

export default i18n;
