import React from 'react';
import { useTranslation } from 'react-i18next';

const Academy: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{t('academy.title')}</h1>
      <p className="text-xl mb-8">{t('academy.subtitle')}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{t('academy.expertLedCourses')}</h2>
          <p className="mb-4">{t('academy.expertLedCoursesDescription')}</p>
          <button className="bg-primary text-white px-4 py-2 rounded">
            {t('academy.exploreCourses')}
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{t('academy.communityLearning')}</h2>
          <p className="mb-4">{t('academy.communityLearningDescription')}</p>
          <button className="bg-primary text-white px-4 py-2 rounded">
            {t('academy.joinCommunity')}
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">{t('academy.certifications')}</h2>
          <p className="mb-4">{t('academy.certificationsDescription')}</p>
          <button className="bg-primary text-white px-4 py-2 rounded">
            {t('academy.viewCertifications')}
          </button>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">{t('academy.readyToStart')}</h2>
        <p className="text-xl mb-8">{t('academy.readyToStartDescription')}</p>
        <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg">
          {t('academy.bookFreeConsultation')}
        </button>
      </div>
    </div>
  );
};

export default Academy;