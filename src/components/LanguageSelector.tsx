import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const LanguageSelector: React.FC = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    if (lng === 'en') {
      i18n.changeLanguage(lng);
      document.documentElement.lang = lng;
      document.documentElement.dir = 'ltr';
    } else {
      i18n.changeLanguage(lng).then(() => {
        document.documentElement.lang = lng;
        document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
        window.location.reload(); // Force reload for non-English languages
      });
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex space-x-2">
      {['en', 'fr', 'ar'].map((lang) => (
        <button
          key={lang}
          onClick={() => changeLanguage(lang)}
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            i18n.language === lang ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
          } hover:bg-opacity-80 transition duration-300`}
          aria-label={t(`languageSelector.switchTo${lang.toUpperCase()}`)}
        >
          {t(`languageSelector.${lang}`)}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;