import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BackToTop from './components/common/BackToTop';
import PageTransition from './components/common/PageTransition';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import SitemapPage from './pages/SitemapPage';
import NotFoundPage from './pages/NotFoundPage';
import ThankYouPage from './pages/ThankYouPage';
import './App.css';

// Component to handle route changes and animations
const AnimatedRoutes = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Use instant for smoother page transitions
    });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/services" 
          element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/privacy" 
          element={
            <PageTransition>
              <PrivacyPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/terms" 
          element={
            <PageTransition>
              <TermsPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/sitemap" 
          element={
            <PageTransition>
              <SitemapPage />
            </PageTransition>
          } 
        />
        <Route 
          path="/thank-you" 
          element={
            <PageTransition>
              <ThankYouPage />
            </PageTransition>
          } 
        />
        <Route 
          path="*" 
          element={
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <AnimatedRoutes />
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;