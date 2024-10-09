import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, BookOpen, Users, User, FileText } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const navItems = [
    { to: "/academy", icon: BookOpen, text: t('header.academy') },
    { to: "/courses", icon: BookOpen, text: t('header.courses') },
    { to: "/community", icon: Users, text: t('header.community') },
    { to: "/dashboard", icon: User, text: t('header.dashboard') },
    { to: "/blog", icon: FileText, text: t('header.blog') },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            NOOD
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.to} 
                className="text-text hover:text-primary transition duration-300 flex items-center border-b-2 border-transparent hover:border-primary"
              >
                <item.icon className="mr-1" size={18} />
                {item.text}
              </Link>
            ))}
            <Link to="/consultation" className="btn-primary">
              {t('header.bookConsultation')}
            </Link>
          </nav>
          <button 
            className="md:hidden text-text" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className="text-text hover:text-primary transition duration-300 flex items-center py-2 border-b border-accent" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="mr-2" size={18} />
                    {item.text}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/consultation" className="btn-primary block text-center mt-4" onClick={() => setIsMenuOpen(false)}>
                  {t('header.bookConsultation')}
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header