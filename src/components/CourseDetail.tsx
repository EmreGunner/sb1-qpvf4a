import React from 'react';
import { useTranslation } from 'react-i18next';

interface CourseDetailProps {
  course: {
    name: string;
    description: string;
    type: string;
    domain: string;
    startDate: string;
    duration: string;
    price: string;
    objectives: string[];
  };
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{course.name}</h1>
      
      <h2>{t('courseDetail.courseDescription')}</h2>
      <p>{course.description}</p>

      <h3>{t('courseDetail.courseDetails')}</h3>
      <ul>
        <li>{t('courseDetail.courseType')}: {course.type}</li>
        <li>{t('courseDetail.domain')}: {course.domain}</li>
        <li>{t('courseDetail.startDate')}: {course.startDate}</li>
        <li>{t('courseDetail.duration')}: {course.duration}</li>
        <li>{t('courseDetail.price')}: {course.price}</li>
      </ul>

      <h3>{t('courseDetail.courseObjectives')}</h3>
      <p>{t('courseDetail.courseObjectivesDescription')}</p>
      <ul>
        {course.objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>

      <button>{t('courseDetail.applyNow')}</button>
    </div>
  );
};

export default CourseDetail;