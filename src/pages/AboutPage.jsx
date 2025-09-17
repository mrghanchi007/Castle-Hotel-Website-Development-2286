import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import Breadcrumb from '../components/common/Breadcrumb';
import LazyImage from '../components/common/LazyImage';

const { FiClock, FiAward, FiHeart, FiUsers, FiMapPin, FiTrendingUp } = FiIcons;

const AboutPage = () => {
  const [historyRef, historyInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const breadcrumbItems = [
    { name: 'About Us', path: '/about' }
  ];

  const timeline = [
    {
      year: '1870s',
      title: 'The Beginning',
      description: 'Castle Hotel was established, welcoming its first guests beside the historic Tamworth Castle.'
    },
    {
      year: '1920s',
      title: 'Golden Era',
      description: 'The hotel became a popular destination for travelers and local celebrations.'
    },
    {
      year: '1960s',
      title: 'Modernization',
      description: 'Major renovations brought modern amenities while preserving historic character.'
    },
    {
      year: '2000s',
      title: 'Wedding Venue',
      description: 'Established as the region\'s premier wedding venue with specialized services.'
    },
    {
      year: '2024',
      title: 'Grand Reopening',
      description: 'After 9 months of careful restoration, Castle Hotel reopens with renewed elegance.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Years of History', icon: FiClock },
    { number: '500+', label: 'Happy Couples', icon: FiHeart },
    { number: '10,000+', label: 'Satisfied Guests', icon: FiUsers },
    { number: '50+', label: 'Team Members', icon: FiAward }
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring exceptional experiences for all our guests.'
    },
    {
      icon: FiUsers,
      title: 'Heritage',
      description: 'We honor our 150-year legacy while embracing modern hospitality standards.'
    },
    {
      icon: FiAward,
      title: 'Service',
      description: 'Our dedicated team provides personalized, warm, and professional service to every guest.'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      description: 'Our unique position beside Tamworth Castle offers guests an unparalleled historic setting.'
    }
  ];

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
            src="https://i.ibb.co/848HMvM1/Outside-Image.jpg"
            alt="Castle Hotel About"
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
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              150 Years of Timeless Hospitality
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Breadcrumb items={breadcrumbItems} />

        {/* Company History */}
        <section ref={historyRef} className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
                A Legacy of <span className="gradient-text block">Exceptional Hospitality</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Castle Hotel has stood proudly for over 150 years, welcoming guests with warmth, comfort, and timeless charm. Since its opening in the late 19th century, the hotel has been an important part of Tamworth's heritage, located just steps away from the iconic Tamworth Castle.
                </p>
                <p>
                  Through the decades, Castle Hotel has hosted countless events, gatherings, and celebrations — becoming a beloved venue for weddings and special occasions. Its historic character, combined with continuous care and restoration, has allowed the hotel to maintain its original charm while adapting to the needs of modern times.
                </p>
                <p>
                  After a careful 9-month closure for restoration, Castle Hotel is once again ready to open its doors, continuing its proud tradition of hospitality and creating memories for generations to come.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={historyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <LazyImage
                src="https://i.ibb.co/QjPQwkcy/hotel-hall-1.jpg"
                alt="Castle Hotel Historic Hall"
                className="rounded-lg elevation-2"
              />
              <div className="space-y-4">
                <LazyImage
                  src="https://i.ibb.co/cS7S067K/hotel-hall-2.jpg"
                  alt="Castle Hotel Elegant Hall"
                  className="rounded-lg elevation-2"
                />
                <LazyImage
                  src="https://i.ibb.co/Wv3zXmn5/hotel-hall-3.jpg"
                  alt="Castle Hotel Classic Hall"
                  className="rounded-lg elevation-2"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-primary" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section ref={missionRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that drive our commitment to exceptional hospitality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg elevation-2"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Castle Hotel, our mission is to provide every guest with an unforgettable experience that blends historic charm, modern comfort, and warm hospitality. We are dedicated to making every celebration, especially weddings, truly memorable by offering an elegant venue, exceptional service, and a setting rich in history.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-primary text-white p-8 rounded-lg elevation-2"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <SafeIcon icon={FiAward} className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Our Vision
              </h3>
              <p className="text-white/90 leading-relaxed">
                Our vision is to be the region's most cherished destination for weddings, events, and stays — where tradition meets timeless elegance. We aim to preserve the historic legacy of Castle Hotel while continuously enhancing the guest experience, ensuring that every visit becomes part of a lasting memory.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The core principles that define who we are and how we serve our guests
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section ref={timelineRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Milestones in our 150-year history of hospitality excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col lg:space-x-8 space-y-4 lg:space-y-0`}
                >
                  <div className={`flex-1 ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  } text-center lg:text-left`}>
                    <div className="bg-white p-6 rounded-lg elevation-2">
                      <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white elevation-2 flex-shrink-0 hidden lg:block"></div>
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutPage;