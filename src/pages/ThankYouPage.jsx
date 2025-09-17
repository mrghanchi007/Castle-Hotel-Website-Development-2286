import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiCheckCircle, FiHome, FiPhone, FiMail, FiCalendar, FiHeart } = FiIcons;

const ThankYouPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const nextSteps = [
    {
      icon: FiPhone,
      title: 'We\'ll Contact You',
      description: 'Our team will reach out within 24 hours to discuss your requirements.',
      timing: 'Within 24 hours'
    },
    {
      icon: FiCalendar,
      title: 'Schedule a Visit',
      description: 'Arrange a tour of our facilities to see the magic of Castle Hotel firsthand.',
      timing: 'At your convenience'
    },
    {
      icon: FiHeart,
      title: 'Plan Your Event',
      description: 'Work with our experienced team to create your perfect celebration.',
      timing: 'Ongoing support'
    }
  ];

  const quickActions = [
    {
      title: 'Call Us Directly',
      description: 'For immediate assistance',
      action: 'tel:01827954382',
      label: '01827954382',
      icon: FiPhone,
      primary: true
    },
    {
      title: 'Send Additional Details',
      description: 'Email us more information',
      action: 'mailto:info@castlehotel-tamworth.co.uk',
      label: 'Send Email',
      icon: FiMail,
      primary: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <SafeIcon icon={FiCheckCircle} className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Your message has been successfully sent to Castle Hotel. We're excited to help you 
              create magical memories at our historic venue.
            </p>
          </motion.div>

          {/* Confirmation Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg elevation-2 p-8 mb-12"
          >
            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-6 text-center">
              What Happens Next?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {nextSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={step.icon} className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <span className="text-primary text-sm font-medium">
                    {step.timing}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-12"
          >
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-6 text-center">
              Need Immediate Assistance?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <a
                    href={action.action}
                    className={`block p-6 rounded-lg text-center transition-all duration-300 ${
                      action.primary
                        ? 'bg-primary text-white hover:bg-primary/90 elevation-2'
                        : 'bg-white border-2 border-primary text-primary hover:bg-primary/5 elevation-2'
                    }`}
                  >
                    <SafeIcon icon={action.icon} className="w-8 h-8 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">{action.title}</h4>
                    <p className={`text-sm mb-3 ${action.primary ? 'text-white/90' : 'text-gray-600'}`}>
                      {action.description}
                    </p>
                    <span className="font-medium">{action.label}</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hotel Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-primary text-white rounded-lg p-8 mb-12"
          >
            <div className="text-center mb-8">
              <img 
                src="https://i.ibb.co/F4Q7nR21/Logo.png" 
                alt="Castle Hotel Logo" 
                className="h-16 w-auto mx-auto mb-4"
              />
              <h3 className="font-display text-2xl font-semibold mb-2">
                Castle Hotel Tamworth
              </h3>
              <p className="text-white/90">
                150+ Years of Timeless Hospitality
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold mb-2">Location</h4>
                <p className="text-white/90 text-sm">
                  Lady Bank, Tamworth B79 7NB<br />
                  United Kingdom
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="text-white/90 text-sm">
                  01827954382<br />
                  info@castlehotel-tamworth.co.uk
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Specialties</h4>
                <p className="text-white/90 text-sm">
                  Weddings • Events<br />
                  Luxury Accommodation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center"
          >
            <h3 className="font-display text-xl font-semibold text-gray-900 mb-6">
              Continue Exploring
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="flex items-center justify-center space-x-2 bg-white text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors elevation-2"
              >
                <SafeIcon icon={FiHome} className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
              <Link
                to="/services"
                className="flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors elevation-2"
              >
                <SafeIcon icon={FiHeart} className="w-5 h-5" />
                <span>View Our Services</span>
              </Link>
            </div>
          </motion.div>

          {/* Thank You Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 text-center"
          >
            <div className="bg-white p-6 rounded-lg elevation-1 max-w-md mx-auto">
              <p className="text-gray-600 text-sm italic">
                "We look forward to welcoming you to Castle Hotel, where every moment 
                becomes a cherished memory."
              </p>
              <p className="text-primary font-medium mt-2">- The Castle Hotel Team</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThankYouPage;