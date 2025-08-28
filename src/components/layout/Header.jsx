import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiChevronDown, FiPhone, FiMail } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Wedding Venue', path: '/services#weddings' },
        { name: 'Accommodation', path: '/services#accommodation' },
        { name: 'Events', path: '/services#events' },
        { name: 'Dining', path: '/services#dining' }
      ]
    },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.3 // Increased delay to let page transition complete first
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="w-4 h-4" />
                <span>+441827317700</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="w-4 h-4" />
                <span>info@castlehotel-tamworth.co.uk</span>
              </div>
            </div>
            <div className="text-sm">
              Lady Bank, Tamworth B79 7NB, United Kingdom
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://i.ibb.co/F4Q7nR21/Logo.png" 
              alt="Castle Hotel Logo" 
              className="h-12 w-auto" 
              loading="eager"
            />
            <div className="hidden sm:block">
              <h1 className={`font-display text-xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Castle Hotel
              </h1>
              <p className={`text-sm ${
                isScrolled ? 'text-gray-600' : 'text-white/90'
              }`}>
                Tamworth
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button className={`flex items-center space-x-1 font-medium transition-colors ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-primary' 
                        : 'text-white hover:text-white/80'
                    }`}>
                      <span>{item.name}</span>
                      <SafeIcon icon={FiChevronDown} className="w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 elevation-3"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors ${
                      location.pathname === item.path
                        ? isScrolled 
                          ? 'text-primary' 
                          : 'text-white border-b-2 border-white'
                        : isScrolled 
                          ? 'text-gray-700 hover:text-primary' 
                          : 'text-white hover:text-white/80'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Book Now Button */}
            <Link
              to="/contact"
              className="btn-primary bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-all elevation-2"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white rounded-lg shadow-xl elevation-3 overflow-hidden"
            >
              <div className="py-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="pl-4 bg-gray-50">
                        {item.dropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 py-3 border-t">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-primary text-white px-6 py-2 rounded-full font-medium"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;