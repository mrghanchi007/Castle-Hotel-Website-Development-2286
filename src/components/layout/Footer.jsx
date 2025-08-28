import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiHeart } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Sitemap', path: '/sitemap' },
  ];

  const services = [
    { name: 'Wedding Venue', path: '/services#weddings' },
    { name: 'Accommodation', path: '/services#accommodation' },
    { name: 'Events & Functions', path: '/services#events' },
    { name: 'Fine Dining', path: '/services#dining' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.ibb.co/F4Q7nR21/Logo.png" 
                alt="Castle Hotel Logo" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="font-display text-xl font-bold">Castle Hotel</h3>
                <p className="text-gray-400 text-sm">Tamworth</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Experience timeless elegance at Castle Hotel, where history meets luxury. 
              Perfect for weddings, events, and memorable stays in the heart of Tamworth.
            </p>
            <div className="flex items-center space-x-2 text-primary">
              <SafeIcon icon={FiHeart} className="w-4 h-4" />
              <span className="text-sm">150+ Years of Hospitality</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-display text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-display text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-display text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Lady Bank</p>
                  <p className="text-gray-400">Tamworth B79 7NB</p>
                  <p className="text-gray-400">United Kingdom</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary" />
                <a 
                  href="tel:+441827317700"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +441827317700
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-primary" />
                <a 
                  href="mailto:info@castlehotel-tamworth.co.uk"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@castlehotel-tamworth.co.uk
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-gray-400">Reception: 24/7</p>
                  <p className="text-gray-400">Restaurant: 7:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Castle Hotel Tamworth. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;