import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import Breadcrumb from '../components/common/Breadcrumb';
import LazyImage from '../components/common/LazyImage';

const { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheck, FiExternalLink } = FiIcons;

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
    date: ''
  });

  const breadcrumbItems = [
    { name: 'Contact Us', path: '/contact' }
  ];

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      details: ['01827954382'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: FiMail,
      title: 'Email',
      details: ['info@castlehotel-tamworth.co.uk'],
      description: 'Send us your inquiries'
    },
    {
      icon: FiMapPin,
      title: 'Address',
      details: ['Lady Bank', 'Tamworth B79 7NB', 'United Kingdom'],
      description: 'Visit us at our historic location'
    },
    {
      icon: FiClock,
      title: 'Hours',
      details: ['Reception: 8am to 12am'],
      description: 'We\'re here when you need us'
    }
  ];

  const services = [
    'Wedding Venue',
    'Accommodation',
    'Corporate Events',
    'Private Dining',
    'Special Occasions',
    'General Inquiry'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', formData);
    // Navigate to thank you page
    navigate('/thank-you');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage
            src="https://i.ibb.co/TD5KbpXr/Castle-Hotel-Rooms-4.jpg"
            alt="Contact Castle Hotel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              We're Here to Help You Plan Your Perfect Stay
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Breadcrumb items={breadcrumbItems} />

        {/* Contact Information */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to create magical memories? Contact us today to discuss your requirements and let us help you plan the perfect event or stay.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-lg elevation-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={info.icon} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg elevation-2"
          >
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                  <label htmlFor="name" className="form-label absolute left-4 top-3 text-gray-500 pointer-events-none">
                    Full Name *
                  </label>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                  <label htmlFor="email" className="form-label absolute left-4 top-3 text-gray-500 pointer-events-none">
                    Email Address *
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                  <label htmlFor="phone" className="form-label absolute left-4 top-3 text-gray-500 pointer-events-none">
                    Phone Number
                  </label>
                </div>
                <div>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select Service *</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="form-group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder=" "
                    required
                    className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                  <label htmlFor="subject" className="form-label absolute left-4 top-3 text-gray-500 pointer-events-none">
                    Subject *
                  </label>
                </div>
                <div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                  <label htmlFor="date" className="block text-sm text-gray-600 mb-1">
                    Preferred Date (if applicable)
                  </label>
                </div>
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder=" "
                  rows="5"
                  required
                  className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-vertical"
                />
                <label htmlFor="message" className="form-label absolute left-4 top-3 text-gray-500 pointer-events-none">
                  Message *
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all elevation-2 flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiSend} className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Map & Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Google Maps Embed */}
            <div className="bg-white rounded-lg elevation-2 overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-2">
                  Our Location
                </h3>
                <p className="text-gray-600">
                  Find us beside the historic Tamworth Castle
                </p>
              </div>
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <SafeIcon icon={FiMapPin} className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Interactive Map</p>
                  <a
                    href="https://maps.app.goo.gl/XpzEBbCZm4kJcFjs5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <SafeIcon icon={FiExternalLink} className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-primary text-white p-8 rounded-lg">
              <h3 className="font-display text-xl font-semibold mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-white/90 mb-6">
                For urgent inquiries or same-day bookings, please call us directly.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:01827954382"
                  className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5" />
                  <span className="font-medium">01827954382</span>
                </a>
                <a
                  href="mailto:info@castlehotel-tamworth.co.uk"
                  className="flex items-center space-x-3 text-white hover:text-white/80 transition-colors"
                >
                  <SafeIcon icon={FiMail} className="w-5 h-5" />
                  <span>info@castlehotel-tamworth.co.uk</span>
                </a>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-8 rounded-lg elevation-2">
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                Why Choose Castle Hotel?
              </h3>
              <div className="space-y-3">
                {[
                  'Historic setting beside Tamworth Castle',
                  'Personalized service and attention to detail',
                  '150+ years of hospitality experience',
                  'Flexible packages for all occasions',
                  'Professional event planning team'
                ].map((reason, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default ContactPage;