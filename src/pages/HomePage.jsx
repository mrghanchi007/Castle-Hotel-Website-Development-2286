import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import LazyImage from '../components/common/LazyImage';
import HeroSlider from '../components/common/HeroSlider';

const { FiCalendar, FiUsers, FiAward, FiHeart, FiMapPin, FiStar, FiCheck } = FiIcons;

const HomePage = () => {
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const features = [
    {
      icon: FiHeart,
      title: 'Premier Wedding Venue',
      description: 'Create magical memories in our historic setting with personalized wedding packages.'
    },
    {
      icon: FiUsers,
      title: 'Luxury Accommodation',
      description: 'Elegant rooms and suites with modern amenities and timeless charm.'
    },
    {
      icon: FiAward,
      title: '150+ Years Heritage',
      description: 'Rich history and tradition of exceptional hospitality since the 1870s.'
    },
    {
      icon: FiMapPin,
      title: 'Historic Location',
      description: 'Perfectly positioned beside the iconic Tamworth Castle in the heart of the town.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah & James Mitchell',
      rating: 5,
      text: 'Our wedding at Castle Hotel was absolutely magical. The historic setting, exceptional service, and attention to detail made our special day unforgettable.',
      service: 'Wedding'
    },
    {
      name: 'Robert Thompson',
      rating: 5,
      text: 'Stayed here for a business trip and was impressed by the blend of historic charm and modern comfort. Excellent location and professional service.',
      service: 'Business Stay'
    },
    {
      name: 'Emma Williams',
      rating: 5,
      text: 'Perfect venue for our corporate event. The team handled everything seamlessly, and our guests were impressed by the elegant atmosphere.',
      service: 'Corporate Event'
    }
  ];

  const amenities = [
    'Free Wi-Fi Throughout',
    '24/7 Reception Service',
    'Historic Castle Views',
    'Fine Dining Restaurant',
    'Event & Wedding Planning',
    'Business Center',
    'Parking Available',
    'Pet-Friendly Options'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to <span className="gradient-text block">Castle Hotel</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Welcome to Castle Hotel, a place where history meets timeless elegance. Standing proudly for nearly 150 years, our hotel has been part of Tamworth's story, offering comfort, charm, and unforgettable experiences to guests from around the world.
                </p>
                <p>
                  After 9 months of restoration and care, we are delighted to reopen our doors and continue our legacy of hospitality. Nestled right beside the historic Tamworth Castle, our location is more than just scenic – it's a journey into history and romance.
                </p>
                <p>
                  Today, Castle Hotel is best known as one of the region's most cherished wedding venues, where couples celebrate love in a truly magical setting. With our blend of traditional character and modern comfort, we ensure every guest feels at home while experiencing the unique charm of our historic landmark.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Learn More About Our History
                  <SafeIcon icon={FiCheck} className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <LazyImage
                  src="https://i.ibb.co/LzXB86p4/Castle-Hotel-Rooms-1.jpg"
                  alt="Castle Hotel Luxury Room"
                  className="rounded-lg elevation-2 h-48"
                />
                <LazyImage
                  src="https://i.ibb.co/chnG4BWd/Castle-Hotel-Rooms-2.jpg"
                  alt="Castle Hotel Room Interior"
                  className="rounded-lg elevation-2 h-32"
                />
              </div>
              <div className="space-y-4 mt-8">
                <LazyImage
                  src="https://i.ibb.co/qF2KNrgb/Castle-Hotel-Rooms-3.jpg"
                  alt="Castle Hotel Suite"
                  className="rounded-lg elevation-2 h-32"
                />
                <LazyImage
                  src="https://i.ibb.co/TD5KbpXr/Castle-Hotel-Rooms-4.jpg"
                  alt="Castle Hotel Elegant Room"
                  className="rounded-lg elevation-2 h-48"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Castle Hotel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our hotel the perfect choice for your special occasions and memorable stays
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg text-center elevation-2 hover:elevation-3 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <LazyImage
                src="https://i.ibb.co/zTKHNFfQ/Castle-Hotel-Rooms-5.jpg"
                alt="Castle Hotel Premium Amenities"
                className="rounded-lg elevation-3"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
                Premium Amenities & Services
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Experience exceptional comfort with our comprehensive range of amenities designed to make your stay memorable and convenient.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{amenity}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Guests Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read testimonials from our valued guests who have experienced the magic of Castle Hotel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg elevation-2"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon
                      key={i}
                      icon={FiStar}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Book Your Stay Today and Experience Timeless Comfort
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Create unforgettable memories at Castle Hotel, where history, luxury, and exceptional service come together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all elevation-2"
              >
                Book Now
              </Link>
              <Link
                to="/services"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all border border-white/30"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;