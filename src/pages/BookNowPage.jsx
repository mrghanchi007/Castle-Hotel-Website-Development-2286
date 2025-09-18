import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';

const { FiArrowLeft, FiPhone, FiMail, FiMapPin } = FiIcons;

const BookNowPage = () => {
  const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);
  const [debugInfo, setDebugInfo] = useState('');
  const [redirectCountdown, setRedirectCountdown] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(5);

  useEffect(() => {
    let timeoutId;
    let checkCount = 0;
    let countdownTimer;
    const maxChecks = 20; // Check for 10 seconds (20 * 500ms)
    
    setDebugInfo('Initializing SiteMinder widget...');
    
    // Function to check if widget is loaded
    const checkWidgetLoaded = () => {
      checkCount++;
      const widgetElement = document.querySelector('#siteminder-widget');
      
      if (!widgetElement) {
        setDebugInfo(`Widget element not found (check ${checkCount})`);
        if (checkCount < maxChecks) {
          timeoutId = setTimeout(checkWidgetLoaded, 500);
        } else {
          setDebugInfo('Widget element not found after maximum checks');
          setIsWidgetLoaded(true);
        }
        return;
      }

      const hasContent = widgetElement && (
        widgetElement.children.length > 0 || 
        widgetElement.innerHTML.trim() !== '' ||
        widgetElement.querySelector('iframe') ||
        widgetElement.querySelector('form')
      );
      
      if (hasContent) {
        setDebugInfo('Widget loaded successfully!');
        setIsWidgetLoaded(true);
        setRedirectCountdown(null); // Cancel redirect if widget loads
        if (countdownTimer) clearInterval(countdownTimer); // Stop countdown timer
        setTimeRemaining(0); // Reset timer display
      } else if (checkCount < maxChecks) {
        setDebugInfo(`Checking widget content... (${checkCount}/${maxChecks})`);
        timeoutId = setTimeout(checkWidgetLoaded, 500);
      } else {
        setDebugInfo('Widget content not detected, showing fallback');
        setIsWidgetLoaded(true);
      }
    };

    // Start 5-second countdown timer
    countdownTimer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(countdownTimer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Initialize widget loading
    const initializeWidget = () => {
      setDebugInfo('Starting widget initialization...');
      
      // Force widget initialization if SiteMinder is available
      if (window.SiteMinder) {
        setDebugInfo('SiteMinder object found, initializing...');
        try {
          // Try to manually initialize the widget
          window.SiteMinder.init();
        } catch (error) {
          console.log('SiteMinder init error:', error);
        }
      }
      
      // Start checking for widget content
      setTimeout(checkWidgetLoaded, 1000);
    };

    // Check if SiteMinder script is already loaded
    const existingScript = document.querySelector('script[src="https://widget.siteminder.com/ibe.min.js"]');
    
    if (existingScript) {
      setDebugInfo('SiteMinder script found, initializing widget...');
      initializeWidget();
    } else {
      setDebugInfo('Loading SiteMinder script...');
      // Load SiteMinder script
      const script = document.createElement('script');
      script.src = 'https://widget.siteminder.com/ibe.min.js';
      script.async = true;
      
      script.onload = () => {
        setDebugInfo('SiteMinder script loaded successfully');
        initializeWidget();
      };
      
      script.onerror = () => {
        setDebugInfo('Failed to load SiteMinder script');
        console.error('Failed to load SiteMinder script');
        setTimeout(() => setIsWidgetLoaded(true), 3000);
      };
      
      document.body.appendChild(script);
    }

    // Fallback: Always show widget after 12 seconds
    const fallbackTimeout = setTimeout(() => {
      setDebugInfo('Fallback timeout reached, showing widget area');
      setIsWidgetLoaded(true);
    }, 12000);

    // Redirect timeout: Redirect to direct booking after 5 seconds if widget not loaded
    const redirectTimeout = setTimeout(() => {
      if (!isWidgetLoaded) {
        setDebugInfo('Widget failed to load, redirecting to direct booking...');
        setRedirectCountdown(3);
        
        // Start countdown
        let countdown = 3;
        const countdownInterval = setInterval(() => {
          countdown--;
          setRedirectCountdown(countdown);
          
          if (countdown <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'https://direct-book.com/properties/castlehotel2';
          }
        }, 1000);
      }
    }, 5000);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      clearTimeout(fallbackTimeout);
      clearTimeout(redirectTimeout);
      if (countdownTimer) clearInterval(countdownTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Header Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Book Your Stay
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Reserve your room at Castle Hotel and experience timeless elegance in the heart of Tamworth
            </p>
          </motion.div>
        </div>
      </div>

      {/* Booking Widget Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            {/* Widget Header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h2 className="font-display text-2xl font-bold text-gray-900">
                Check Availability & Book
              </h2>
              <p className="text-gray-600 mt-1">
                Select your dates and complete your reservation
              </p>
            </div>

            {/* SiteMinder Widget Container */}
            <div className="p-6">
              <div className="min-h-[600px] relative">
                {/* Loading state while widget loads */}
                {!isWidgetLoaded && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white z-10"
                  >
                    <div className="text-center py-12">
                      {/* Enhanced Loading Animation */}
                      <div className="relative mb-8">
                        {/* Outer rotating ring */}
                        <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-200 mx-auto"></div>
                        {/* Inner rotating ring */}
                        <div className="animate-spin rounded-full h-20 w-20 border-4 border-transparent border-t-primary border-r-primary absolute top-0 left-1/2 transform -translate-x-1/2" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
                        {/* Center dot */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-3 h-3 bg-primary rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                      
                      {/* Loading Text with Animation */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-gray-800 text-xl font-semibold mb-2">
                          Preparing Your Booking Experience
                        </h3>
                        <motion.p 
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-gray-600"
                        >
                          Loading SiteMinder booking system...
                        </motion.p>
                        
                        {/* Countdown Timer */}
                        {timeRemaining > 0 && (
                          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-blue-700 text-sm">
                              Auto-redirect to direct booking in: 
                              <span className="font-bold ml-2 text-lg">{timeRemaining}s</span>
                            </p>
                          </div>
                        )}
                        
                        {debugInfo && (
                          <p className="text-gray-500 text-sm mt-2">
                            Debug: {debugInfo}
                          </p>
                        )}
                        
                        {/* Redirect Countdown */}
                        {redirectCountdown !== null && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
                          >
                            <h4 className="text-yellow-800 font-semibold mb-2">
                              Redirecting to Direct Booking
                            </h4>
                            <p className="text-yellow-700 text-sm mb-2">
                              Widget failed to load. Redirecting you to our secure booking platform...
                            </p>
                            <div className="flex items-center justify-center">
                              <motion.div
                                key={redirectCountdown}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                className="text-2xl font-bold text-yellow-800"
                              >
                                {redirectCountdown}
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </motion.div>
                      
                      {/* Progress Dots */}
                      <div className="flex justify-center space-x-2 mt-6">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ 
                              scale: [1, 1.5, 1],
                              opacity: [0.3, 1, 0.3]
                            }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity,
                              delay: i * 0.2 
                            }}
                            className="w-2 h-2 bg-primary rounded-full"
                          ></motion.div>
                        ))}
                      </div>
                      
                      {/* Hotel Branding */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 text-center"
                      >
                        <p className="text-gray-500 text-sm">
                          🏰 Castle Hotel Tamworth
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          Secure booking powered by SiteMinder
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
                
                {/* SiteMinder Widget */}
                <div 
                  className="ibe w-full min-h-[500px]" 
                  data-region="emea" 
                  data-channelcode="castlehotel2" 
                  data-widget="embed"
                  id="siteminder-widget"
                >
                  {/* Fallback content if widget fails to load */}
                  {isWidgetLoaded && (
                    <div className="text-center py-12">
                      <div className="max-w-md mx-auto">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                          Having trouble with the booking widget?
                        </h3>
                        <p className="text-gray-600 mb-6">
                          No worries! You can still complete your reservation using our secure direct booking platform.
                        </p>
                        
                        {/* Direct Booking Button */}
                        <div className="mb-8">
                          <a
                            href="https://direct-book.com/properties/castlehotel2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full text-lg font-semibold hover:bg-primary/90 transition-all elevation-2 shadow-lg"
                          >
                            🏰 Book Directly Online
                          </a>
                          <p className="text-sm text-gray-500 mt-2">
                            Secure booking • Opens in new window
                          </p>
                        </div>
                        
                        {/* Alternative Options */}
                        <div className="bg-gray-50 rounded-lg p-6">
                          <h4 className="font-semibold text-gray-800 mb-3">
                            Other Options:
                          </h4>
                          <div className="space-y-3 text-sm text-gray-600">
                            <div className="flex items-center justify-center space-x-2">
                              <span>🔄</span>
                              <span>Refresh this page to try the widget again</span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                              <span>📞</span>
                              <span>Call us directly: <strong>01827 954 382</strong></span>
                            </div>
                            <div className="flex items-center justify-center space-x-2">
                              <span>✉️</span>
                              <span>Email: info@castlehotel-tamworth.co.uk</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="font-display text-2xl font-bold text-gray-900 mb-6 text-center">
              Need Assistance with Your Booking?
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Our friendly team is here to help you with any questions or special requirements
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phone */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiPhone} className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                <a
                  href="tel:01827954382"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  01827 954 382
                </a>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiMail} className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                <a
                  href="mailto:info@castlehotel-tamworth.co.uk"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  info@castlehotel-tamworth.co.uk
                </a>
              </div>

              {/* Address */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiMapPin} className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
                <p className="text-gray-600">
                  Castle Street<br />
                  Tamworth, B79 7EA
                </p>
              </div>
            </div>

            {/* Additional Info */}

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookNowPage;
