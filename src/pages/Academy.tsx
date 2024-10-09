import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const Academy: React.FC = () => {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-12"
    >
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 nood-gradient-text">{t('title')}</h1>
        <p className="text-xl text-text max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="nood-card p-6"
          whileHover={{ scale: 1.05 }}
        >
          <BookOpen className="text-primary mb-4" size={48} />
          <h2 className="text-2xl font-bold mb-4">{t('expertLedCourses')}</h2>
          <p className="text-text mb-4">
            {t('expertLedCoursesDescription')}
          </p>
          <Link to="/courses" className="btn-primary inline-flex items-center">
            {t('exploreCourses')} <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
        <motion.div
          className="nood-card p-6"
          whileHover={{ scale: 1.05 }}
        >
          <Users className="text-primary mb-4" size={48} />
          <h2 className="text-2xl font-bold mb-4">{t('communityLearning')}</h2>
          <p className="text-text mb-4">
            {t('communityLearningDescription')}
          </p>
          <Link to="/community" className="btn-secondary inline-flex items-center">
            {t('joinCommunity')} <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
        <motion.div
          className="nood-card p-6"
          whileHover={{ scale: 1.05 }}
        >
          <Award className="text-primary mb-4" size={48} />
          <h2 className="text-2xl font-bold mb-4">{t('certifications')}</h2>
          <p className="text-text mb-4">
            {t('certificationsDescription')}
          </p>
          <Link to="/courses" className="btn-secondary inline-flex items-center">
            {t('viewCertifications')} <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </section>

      <section className="text-center py-12 bg-accent rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">{t('readyToStart')}</h2>
        <p className="text-lg text-text mb-6">
          {t('readyToStartDescription')}
        </p>
        <Link to="/consultation" className="btn-primary inline-flex items-center">
          {t('bookFreeConsultation')} <ArrowRight className="ml-2" size={20} />
        </Link>
      </section>
    </motion.div>
  )
}

export default Academy