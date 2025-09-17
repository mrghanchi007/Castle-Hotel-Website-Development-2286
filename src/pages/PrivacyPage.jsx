import React from 'react';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/common/Breadcrumb';

const PrivacyPage = () => {
  const breadcrumbItems = [
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal identification information (Name, email address, phone number)',
        'Booking and reservation details',
        'Payment information (processed securely through third-party providers)',
        'Website usage data and cookies',
        'Communication preferences and history'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To process reservations and provide hotel services',
        'To communicate with you about your booking and stay',
        'To improve our services and customer experience',
        'To send promotional materials (with your consent)',
        'To comply with legal obligations'
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'Information may be shared with service providers who assist in our operations',
        'Legal authorities when required by law or to protect our rights',
        'Business partners for specific services (with your consent)'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'We implement appropriate security measures to protect your information',
        'SSL encryption for all data transmission',
        'Regular security audits and updates',
        'Limited access to personal information on a need-to-know basis',
        'Secure storage and disposal of personal data'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Right to access your personal information',
        'Right to correct inaccurate information',
        'Right to delete your personal information',
        'Right to restrict processing of your information',
        'Right to data portability',
        'Right to withdraw consent at any time'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use cookies to enhance your browsing experience',
        'Analytics cookies help us understand website usage',
        'Marketing cookies for personalized advertising (with consent)',
        'You can control cookie settings in your browser',
        'Essential cookies are necessary for website functionality'
      ]
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
        <Breadcrumb items={breadcrumbItems} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-lg elevation-2 p-8 md:p-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Castle Hotel, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, and 
                safeguard your information when you visit our website or use our services.
              </p>

              <div className="mb-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="text-gray-700">
                  <strong>Last Updated:</strong> December 2024<br />
                  <strong>Effective Date:</strong> December 2024
                </p>
              </div>

              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-10"
                >
                  <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 leading-relaxed flex items-start">
                        <span className="text-primary mr-2 mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-12 p-6 bg-gray-50 rounded-lg"
              >
                <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">
                  Contact Us About Privacy
                </h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@castlehotel-tamworth.co.uk</p>
                  <p><strong>Phone:</strong> 01827954382</p>
                  <p><strong>Address:</strong> Castle Hotel, Lady Bank, Tamworth B79 7NB, United Kingdom</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mt-8 p-6 bg-primary/5 rounded-lg"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Changes to This Policy</h3>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the "Last Updated" 
                  date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrivacyPage;