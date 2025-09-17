import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiHome, FiSearch, FiPhone, FiMail, FiMapPin } = FiIcons;

const NotFoundPage = () => {
  const helpfulLinks = [
    { name: 'Home Page', path: '/', icon: FiHome, description: 'Return to our main page' },
    { name: 'Services', path: '/services', icon: FiSearch, description: 'Explore our offerings' },
    { name: 'Contact Us', path: '/contact', icon: FiPhone, description: 'Get in touch with us' },
    { name: 'About Us', path: '/about', icon: FiMapPin, description: 'Learn about our history' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="relative">
              <h1 className="font-display text-8xl md:text-9xl font-bold text-primary/20 mb-4">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://i.ibb.co/F4Q7nR21/Logo.png" 
                  alt="Castle Hotel Logo" 
                  className="h-24 w-auto opacity-60"
                />
              </div>
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              It seems like the page you're looking for has wandered off into the castle grounds. 
              Don't worry, we'll help you find your way back to comfort and luxury.
            </p>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-8">
              Here are some helpful links to get you back on track:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpfulLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="block bg-white p-6 rounded-lg elevation-2 hover:elevation-3 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <SafeIcon icon={link.icon} className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {link.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {link.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Search Suggestion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white p-8 rounded-lg elevation-2 max-w-2xl mx-auto"
          >
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
              Still Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you find exactly what you need. Contact us directly 
              and we'll assist you personally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01827954382"
                className="flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Call 01827954382</span>
              </a>
              <a
                href="mailto:info@castlehotel-tamworth.co.uk"
                className="flex items-center justify-center space-x-2 border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                <SafeIcon icon={FiMail} className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </motion.div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 text-center"
          >
            <div className="bg-primary/5 p-6 rounded-lg max-w-md mx-auto">
              <p className="text-gray-600 text-sm italic">
                "Even in our 150+ years of history, some paths in the castle remain mysterious. 
                But worry not, all roads lead back to comfort and hospitality."
              </p>
              <p className="text-primary font-medium mt-2">- Castle Hotel Team</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;