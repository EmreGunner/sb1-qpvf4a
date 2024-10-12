import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import englishTranslations from './locales/en'; // Import static English translations

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: englishTranslations // Use static English translations
      }
    },
    backend: {
      loadPath: '/locales/{{lng}}.json', // Path for other language JSON files
    }
  });

export default i18n;