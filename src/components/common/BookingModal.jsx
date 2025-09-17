import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './SafeIcon';

const { FiX } = FiIcons;

const BookingModal = ({ isOpen, onClose }) => {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsWidgetLoaded(false);
      
      // Load SiteMinder script when modal opens
      const script = document.createElement('script');
      script.src = 'https://widget.siteminder.com/ibe.min.js';
      script.async = true;
      
      script.onload = () => {
        // Wait a bit for the widget to initialize
        setTimeout(() => {
          setIsWidgetLoaded(true);
        }, 2000);
      };
      
      document.body.appendChild(script);

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = 'unset';
        setIsWidgetLoaded(false);
        // Clean up script if needed
        const existingScript = document.querySelector('script[src="https://widget.siteminder.com/ibe.min.js"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900">
                  Book Your Stay
                </h2>
                <p className="text-gray-600 mt-1">
                  Check availability and make your reservation
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close booking modal"
              >
                <SafeIcon icon={FiX} className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(85vh-120px)]">
              {/* SiteMinder Widget Container */}
              <div className="min-h-[450px] relative">
                {/* Loading state while widget loads */}
                {!isWidgetLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                    <div className="text-center py-12">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading booking system...</p>
                    </div>
                  </div>
                )}
                
                <div 
                  className="ibe w-full h-full" 
                  data-region="emea" 
                  data-channelcode="castlehotel2" 
                  data-widget="property_check_availability"
                >
                </div>
              </div>

              {/* Fallback contact info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Need Help with Your Booking?
                </h3>
                <p className="text-gray-600 mb-3">
                  If you experience any issues with the booking system, please contact us directly:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:01827954382"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    Call 01827954382
                  </a>
                  <a
                    href="mailto:info@castlehotel-tamworth.co.uk"
                    className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;