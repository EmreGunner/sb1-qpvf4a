import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Search, Filter, Star, Calendar, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import courses from '../data/courses.json'

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortBy, setSortBy] = useState('popularity')
  const { t } = useTranslation()

  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || course.domain === selectedCategory)
  ).sort((a, b) => {
    if (sortBy === 'price-low-high') return a.price - b.price
    if (sortBy === 'price-high-low') return b.price - a.price
    if (sortBy === 'duration') return a.duration - b.duration
    return 0 // Default to no sorting (popularity)
  })

  const categories = Array.from(new Set(courses.map(course => course.domain)))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <h1 className="text-4xl font-bold mb-8 nood-gradient-text">{t('courses.title')}</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder={t('courses.searchPlaceholder')}
            className="w-full p-3 pl-10 border rounded-full focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
        <div className="flex gap-2">
          <select
            className="p-3 border rounded-full focus:ring-2 focus:ring-primary"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">{t('courses.allCategories')}</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select
            className="p-3 border rounded-full focus:ring-2 focus:ring-primary"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popularity">{t('courses.sortByPopularity')}</option>
            <option value="price-low-high">{t('courses.sortByPriceLowHigh')}</option>
            <option value="price-high-low">{t('courses.sortByPriceHighLow')}</option>
            <option value="duration">{t('courses.sortByDuration')}</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map(course => (
          <motion.div
            key={course.name}
            className="nood-card overflow-hidden hover:shadow-lg transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <img src={course.coursePhoto} alt={course.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
              <p className="text-gray-600 mb-2">{course.domain}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-lg">${course.price.toFixed(2)}</span>
                <span className="flex items-center text-yellow-500">
                  <Star className="fill-current" size={16} />
                  <span className="ml-1">4.5</span>
                </span>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {new Date(course.startDate).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  {course.duration} {t('courses.weeks')}
                </span>
              </div>
              <Link
                to={`/courses/${course.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="btn-primary w-full text-center"
              >
                {t('courses.viewDetails')}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Courses