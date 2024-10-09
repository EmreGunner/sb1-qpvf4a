import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Community from './pages/Community';
import Dashboard from './pages/Dashboard';
import Consultation from './pages/Consultation';
import Blog from './pages/Blog';
import CourseDetail from './pages/CourseDetail';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/community" element={<Community />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-text relative">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <AnimatedRoutes />
        </main>
        <Footer />
        <LanguageSelector />
      </div>
    </Router>
  );
}

export default App;
