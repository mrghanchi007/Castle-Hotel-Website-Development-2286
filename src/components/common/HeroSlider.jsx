import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from './SafeIcon';
import LazyImage from './LazyImage';

const { FiChevronLeft, FiChevronRight } = FiIcons;

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: 'https://i.ibb.co/x025nF6/Castle-Hotel-Hero-Section-1.jpg',
      title: 'Welcome to Castle Hotel',
      subtitle: 'Timeless Elegance Since 1870s',
      description: 'Experience 150+ years of hospitality in our historic setting beside Tamworth Castle',
      cta: 'Book Your Stay',
      ctaLink: '/contact'
    },
    {
      id: 2,
      image: 'https://i.ibb.co/TDDBkLw9/Castle-Hotel-Hero-Section-2.jpg',
      title: 'Premier Wedding Venue',
      subtitle: 'Your Perfect Day Awaits',
      description: 'Create magical memories in our elegant halls with stunning castle views',
      cta: 'Plan Your Wedding',
      ctaLink: '/services#weddings'
    },
    {
      id: 3,
      image: 'https://i.ibb.co/tp7SLHVQ/Castle-Hotel-Hero-Section-3.jpg',
      title: 'Luxury Accommodation',
      subtitle: 'Rooms from £89/night',
      description: 'Elegant rooms and suites with modern amenities and historic charm',
      cta: 'View Rooms',
      ctaLink: '/services#accommodation'
    },
    {
      id: 4,
      image: 'https://i.ibb.co/Lh6NTwrn/Castle-Hotel-Hero-Section-4.jpg',
      title: 'Fine Dining Experience',
      subtitle: 'Culinary Excellence',
      description: 'Exceptional dining featuring locally sourced ingredients and traditional cuisine',
      cta: 'Explore Dining',
      ctaLink: '/services#dining'
    },
    {
      id: 5,
      image: 'https://i.ibb.co/0pHXWjMS/Castle-Hotel-Hero-Section-5.jpg',
      title: 'Events & Functions',
      subtitle: 'Corporate & Private Events',
      description: 'Professional event spaces perfect for meetings, celebrations, and gatherings',
      cta: 'Plan Your Event',
      ctaLink: '/services#events'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <LazyImage
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl mb-4 text-yellow-300 font-medium"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {/* First slide links to BookNow page, others use regular links */}
                {currentSlide === 0 ? (
                  <Link
                    to="/book-now"
                    className="btn-primary bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all elevation-2"
                  >
                    {slides[currentSlide].cta}
                  </Link>
                ) : (
                  <Link
                    to={slides[currentSlide].ctaLink}
                    className="btn-primary bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all elevation-2"
                  >
                    {slides[currentSlide].cta}
                  </Link>
                )}
                <Link
                  to="/about"
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all border border-white/30"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
        aria-label="Previous slide"
      >
        <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
        aria-label="Next slide"
      >
        <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white z-20"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSlider;