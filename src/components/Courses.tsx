import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Courses: React.FC = () => {
  const { t } = useTranslation();
  const [courseType, setCourseType] = useState('all');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{t('courses.title')}</h1>
      
      <div className="flex flex-wrap items-center mb-8">
        <input
          type="text"
          placeholder={t('courses.searchPlaceholder')}
          className="border rounded-l px-4 py-2 w-48" // Adjusted width
        />
        <button className="bg-primary text-white px-3 py-2 rounded-r">
          {t('courses.searchButton')} // Ensure this key exists in your locale files
        </button>
        
        <div className="ml-4">
          <select
            value={courseType}
            onChange={(e) => setCourseType(e.target.value)}
            className="border rounded px-4 py-2"
          >
            <option value="all">{t('courses.allCategories')}</option>
            <option value="virtual">{t('courses.virtual')}</option>
            <option value="physical">{t('courses.physical')}</option>
          </select>
        </div>
      </div>

      {/* Course list would go here */}
    </div>
  );
};

export default Courses;