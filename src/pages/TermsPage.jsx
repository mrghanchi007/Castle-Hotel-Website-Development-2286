import React from 'react';
import { motion } from 'framer-motion';
import Breadcrumb from '../components/common/Breadcrumb';

const TermsPage = () => {
  const breadcrumbItems = [
    { name: 'Terms & Conditions', path: '/terms' }
  ];

  const sections = [
    {
      title: 'Booking and Reservations',
      content: [
        'All bookings are subject to availability and confirmation',
        'A valid credit card is required to secure your reservation',
        'Rates are subject to change without notice until booking is confirmed',
        'Special requests are subject to availability and cannot be guaranteed',
        'Group bookings may require additional terms and conditions'
      ]
    },
    {
      title: 'Payment Terms',
      content: [
        'Payment is due at the time of booking or upon arrival',
        'We accept major credit cards, debit cards, and cash',
        'Additional charges may apply for extra services',
        'All rates include applicable taxes unless otherwise stated',
        'Currency exchange rates may apply for international payments'
      ]
    },
    {
      title: 'Cancellation Policy',
      content: [
        'Standard reservations: Cancel 24 hours before arrival for no charge',
        'Peak season bookings: 72-hour cancellation policy applies',
        'Group bookings: Special cancellation terms apply',
        'Non-refundable rates: No cancellations or changes permitted',
        'Wedding and event bookings: Custom cancellation terms apply'
      ]
    },
    {
      title: 'Check-in and Check-out',
      content: [
        'Check-in time: 3:00 PM',
        'Check-out time: 11:00 AM',
        'Early check-in and late check-out subject to availability',
        'Additional charges may apply for late check-out',
        'Valid photo identification required at check-in'
      ]
    },
    {
      title: 'Guest Conduct',
      content: [
        'Guests must conduct themselves in a respectful manner',
        'Smoking is prohibited in all indoor areas',
        'Quiet hours are from 10:00 PM to 7:00 AM',
        'Maximum occupancy limits must be observed',
        'Damage to hotel property will result in additional charges'
      ]
    },
    {
      title: 'Liability and Responsibility',
      content: [
        'The hotel is not liable for personal belongings',
        'Guests are responsible for any damage caused during their stay',
        'The hotel reserves the right to refuse service',
        'Force majeure events may affect service availability',
        'Travel insurance is recommended for all guests'
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
              Terms & Conditions
            </h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Welcome to Castle Hotel. These Terms and Conditions govern your use of our services 
                and facilities. By making a reservation or using our services, you agree to be bound 
                by these terms.
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
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-4">
                  For questions about these Terms and Conditions or to discuss your booking, 
                  please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> info@castlehotel-tamworth.co.uk</p>
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
                <h3 className="font-semibold text-gray-900 mb-2">Changes to Terms</h3>
                <p className="text-gray-600">
                  Castle Hotel reserves the right to modify these Terms and Conditions at any time. 
                  Changes will be effective immediately upon posting on our website. Continued use 
                  of our services constitutes acceptance of any modifications.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Important Notice</h3>
                <p className="text-gray-600">
                  These terms are governed by the laws of England and Wales. Any disputes will be 
                  subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TermsPage;