import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import Breadcrumb from '../components/common/Breadcrumb';

const { FiHome, FiInfo, FiSettings, FiPhone, FiShield, FiFileText, FiMap, FiAlertCircle, FiCheckCircle } = FiIcons;

const SitemapPage = () => {
  const breadcrumbItems = [
    { name: 'Sitemap', path: '/sitemap' }
  ];

  const siteStructure = [
    {
      category: 'Main Pages',
      icon: FiHome,
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to Castle Hotel - Historic luxury accommodation' },
        { name: 'About Us', path: '/about', description: 'Our 150-year history and heritage' },
        { name: 'Services', path: '/services', description: 'Wedding venue, accommodation, events & dining' },
        { name: 'Contact Us', path: '/contact', description: 'Get in touch for bookings and inquiries' }
      ]
    },
    {
      category: 'Services',
      icon: FiSettings,
      pages: [
        { name: 'Wedding Venue', path: '/services#weddings', description: 'Premier wedding venue beside Tamworth Castle' },
        { name: 'Accommodation', path: '/services#accommodation', description: 'Luxury rooms and suites with historic charm' },
        { name: 'Events & Functions', path: '/services#events', description: 'Corporate and private event spaces' },
        { name: 'Fine Dining', path: '/services#dining', description: 'Exceptional culinary experiences' }
      ]
    },
    {
      category: 'Legal & Information',
      icon: FiShield,
      pages: [
        { name: 'Privacy Policy', path: '/privacy', description: 'How we protect and use your personal information' },
        { name: 'Terms & Conditions', path: '/terms', description: 'Booking terms, policies, and guest guidelines' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete overview of our website structure' }
      ]
    },
    {
      category: 'Special Pages',
      icon: FiInfo,
      pages: [
        { name: '404 Error Page', path: '/404', description: 'Page not found - helpful navigation back to main site' },
        { name: 'Thank You Page', path: '/thank-you', description: 'Confirmation page after form submissions' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Book Your Stay', path: '/contact', icon: FiPhone },
    { name: 'Wedding Inquiries', path: '/services#weddings', icon: FiCheckCircle },
    { name: 'Event Planning', path: '/services#events', icon: FiSettings },
    { name: 'Our Location', path: '/contact', icon: FiMap }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="container mx-auto px-4 py-16">
        <Breadcrumb items={breadcrumbItems} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through all pages and sections of the Castle Hotel website. 
              Find everything you need for your perfect stay or event.
            </p>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-8 text-center">
              Quick Access
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="bg-white p-6 rounded-lg elevation-2 hover:elevation-3 transition-all duration-300 text-center group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <SafeIcon icon={link.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Site Structure */}
          <div className="space-y-12">
            {siteStructure.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + sectionIndex * 0.1 }}
                className="bg-white rounded-lg elevation-2 p-8"
              >
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <SafeIcon icon={section.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold text-gray-900">
                    {section.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {section.pages.map((page, pageIndex) => (
                    <motion.div
                      key={pageIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + pageIndex * 0.05 }}
                      className="border border-gray-200 rounded-lg p-6 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    >
                      <Link
                        to={page.path}
                        className="block group"
                      >
                        <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                          {page.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                          {page.description}
                        </p>
                        <div className="flex items-center text-primary text-sm font-medium">
                          <span>Visit Page</span>
                          <SafeIcon icon={FiFileText} className="ml-2 w-4 h-4" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Website Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 bg-primary text-white rounded-lg p-8"
          >
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-semibold mb-4">
                Website Overview
              </h2>
              <p className="text-white/90">
                Complete information about Castle Hotel's digital presence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">9</div>
                <div className="text-white/90">Total Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-white/90">Main Services</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-white/90">Years Heritage</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-white/90">Online Access</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 bg-white rounded-lg elevation-2 p-8 text-center"
          >
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
              Need Help Finding Something?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Our team is here to help you navigate 
              our services and find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:01827954382"
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Call 01827954382
              </a>
              <a
                href="mailto:info@castlehotel-tamworth.co.uk"
                className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SitemapPage;