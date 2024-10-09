import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

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
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
    ns: ['translation'],
    defaultNS: 'translation',
  });

i18n.on('initialized', (options) => {
  console.log('i18next initialized:', options);
});

i18n.on('loaded', (loaded) => {
  console.log('i18next loaded:', loaded);
});

i18n.on('failedLoading', (lng, ns, msg) => {
  console.error('i18next failed loading:', lng, ns, msg);
});

i18n.on('languageChanged', (lng) => {
  console.log(`Language changed to: ${lng}`);
  console.log('Current translations:', i18n.getResourceBundle(lng, 'translation'));
});

export default i18n;