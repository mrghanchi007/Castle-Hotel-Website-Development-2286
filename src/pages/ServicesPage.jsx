import React from 'react';
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import Breadcrumb from '../components/common/Breadcrumb';
import LazyImage from '../components/common/LazyImage';

const {FiHeart,FiHome,FiUsers,FiCoffee,FiCheck,FiStar,FiGift,FiCamera}=FiIcons;

const ServicesPage=()=> {
  const [servicesRef,servicesInView]=useInView({triggerOnce: true,threshold: 0.1});

  const breadcrumbItems=[ 
    {name: 'Services',path: '/services'} 
  ];

  const services=[
    {
      id: 'weddings',
      icon: FiHeart,
      title: 'Wedding Venue',
      subtitle: 'Your Perfect Day Awaits',
      description: 'Create magical memories in our historic setting with personalized wedding packages tailored to your dreams.',
      image: 'https://i.ibb.co/FbH4YWMX/hotel-hall-4.jpg',
      features: [
        'Historic castle views for ceremony',
        'Elegant reception halls',
        'Professional wedding coordination',
        'Customizable catering menus',
        'Bridal suite accommodation',
        'Photography-friendly locations',
        'Seasonal garden ceremonies',
        'Flexible guest capacity (20-200)'
      ],
      packages: [
        {
          name: 'Intimate Celebration',
          guests: 'Up to 50 guests',
          price: 'Contact for pricing',
          features: ['Ceremony space','Reception dinner','Wedding coordinator','Reception time: 8am to 12am']
        },
        {
          name: 'Grand Celebration',
          guests: 'Up to 150 guests',
          price: 'Contact for pricing',
          features: ['Full venue hire','Premium catering','Bridal suite','Photography package','Reception time: 8am to 12am']
        }
      ]
    },
    {
      id: 'accommodation',
      icon: FiHome,
      title: 'Luxury Accommodation',
      subtitle: 'Comfort Meets Heritage',
      description: 'Elegant rooms and suites with modern amenities,offering comfort in our historic setting.',
      image: 'https://i.ibb.co/2YSSHt4x/Washroom-1.jpg',
      features: [
        'Historic castle views',
        'Modern ensuite bathrooms',
        'Complimentary Wi-Fi',
        'Flat-screen TVs',
        'Tea & coffee facilities',
        '24-hour room service',
        'Luxury bedding & linens',
        'Climate control'
      ],
      packages: [
        {
          name: 'Classic Room',
          guests: 'Double occupancy',
          price: 'Contact for pricing',
          features: ['Queen bed','Castle views','Modern amenities']
        },
        {
          name: 'Heritage Suite',
          guests: 'Up to 4 guests',
          price: 'Contact for pricing',
          features: ['Separate living area','Premium furnishings','Complimentary breakfast']
        }
      ]
    },
    {
      id: 'events',
      icon: FiUsers,
      title: 'Events & Functions',
      subtitle: 'Corporate & Private Events',
      description: 'Professional event spaces perfect for corporate meetings,private parties,and special celebrations.',
      image: 'https://i.ibb.co/YFx0jV8t/hotel-hall-5.jpg',
      features: [
        'Flexible meeting spaces',
        'Audio-visual equipment',
        'Professional event planning',
        'Catering services',
        'Business center access',
        'Parking facilities',
        'Outdoor event spaces',
        'Team building activities'
      ],
      packages: [
        {
          name: 'Business Meeting',
          guests: 'Up to 25 people',
          price: 'Contact for pricing',
          features: ['Meeting room','AV equipment','Refreshments']
        },
        {
          name: 'Corporate Event',
          guests: 'Up to 100 people',
          price: 'Contact for pricing',
          features: ['Full venue access','Catering','Event coordination']
        }
      ]
    },
    {
      id: 'dining',
      icon: FiCoffee,
      title: 'Fine Dining',
      subtitle: 'Culinary Excellence',
      description: 'Exceptional dining experiences featuring locally sourced ingredients and traditional British cuisine.',
      image: 'https://i.ibb.co/KxNKxLmz/Washroom-2.jpg',
      features: [
        'Award-winning chef',
        'Locally sourced ingredients',
        'Seasonal menus',
        'Wine selection',
        'Private dining options',
        'Dietary accommodations',
        'Traditional afternoon tea',
        'Special occasion menus'
      ],
      packages: [
        {
          name: 'Traditional Menu',
          guests: 'Per person',
          price: 'Contact for pricing',
          features: ['3-course meal','Seasonal ingredients','Local specialties']
        },
        {
          name: 'Tasting Experience',
          guests: 'Per person',
          price: 'Contact for pricing',
          features: ['7-course tasting','Wine pairing','Chef presentation']
        }
      ]
    }
  ];

  const additionalServices=[
    {
      icon: FiGift,
      title: 'Special Packages',
      description: 'Romantic getaways,anniversary celebrations,and holiday packages'
    },
    {
      icon: FiCamera,
      title: 'Photography Services',
      description: 'Professional photography for weddings and events'
    },
    {
      icon: FiStar,
      title: 'Concierge Services',
      description: 'Local attractions,transportation,and personalized recommendations'
    }
  ];

  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      exit={{opacity: 0}} 
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <LazyImage 
            src="https://i.ibb.co/dwgh17kH/hotel-service-counter.jpg" 
            alt="Castle Hotel Services" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div 
            initial={{opacity: 0,y: 30}} 
            animate={{opacity: 1,y: 0}} 
            transition={{duration: 0.8}}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90">
              Excellence in Every Detail
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <Breadcrumb items={breadcrumbItems} />

        {/* Services Overview */}
        <motion.div 
          initial={{opacity: 0,y: 30}} 
          animate={{opacity: 1,y: 0}} 
          transition={{duration: 0.8}} 
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Exceptional Services for{' '}
            <span className="gradient-text block mt-2">Every Occasion</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            From intimate weddings to corporate events, we provide comprehensive services that exceed expectations and create lasting memories.
          </p>
        </motion.div>

        {/* Main Services */}
        <section ref={servicesRef} className="space-y-16 md:space-y-20">
          {services.map((service,index)=> (
            <motion.div 
              key={service.id} 
              id={service.id}
              initial={{opacity: 0,y: 50}} 
              animate={servicesInView ? {opacity: 1,y: 0} : {}} 
              transition={{duration: 0.8,delay: index * 0.2}}
              className="bg-white rounded-lg p-6 md:p-8 elevation-2"
            >
              {/* Mobile Layout */}
              <div className="block lg:hidden space-y-6">
                {/* Service Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={service.icon} className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-primary font-medium text-sm md:text-base">{service.subtitle}</p>
                  </div>
                </div>

                {/* Service Image */}
                <div className="w-full h-48 md:h-64 rounded-lg overflow-hidden">
                  <LazyImage 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                {/* Service Content */}
                <div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-base md:text-lg">What's Included:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature,idx)=> (
                        <div key={idx} className="flex items-start space-x-3">
                          <SafeIcon icon={FiCheck} className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Packages */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 text-base md:text-lg">Packages:</h4>
                    {service.packages.map((pkg,idx)=> (
                      <div key={idx} className="bg-gray-50 p-4 md:p-6 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2 text-base md:text-lg">{pkg.name}</h5>
                        <p className="text-sm text-gray-600 mb-2">{pkg.guests}</p>
                        <p className="text-primary font-bold text-lg md:text-xl mb-3">{pkg.price}</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {pkg.features.map((feature,featureIdx)=> (
                            <li key={featureIdx} className="flex items-center space-x-2">
                              <SafeIcon icon={FiCheck} className="w-3 h-3 text-primary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className={`hidden lg:grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <SafeIcon icon={service.icon} className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-3xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-primary font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature,idx)=> (
                        <div key={idx} className="flex items-center space-x-3">
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Packages */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.packages.map((pkg,idx)=> (
                      <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">{pkg.name}</h5>
                        <p className="text-sm text-gray-600 mb-2">{pkg.guests}</p>
                        <p className="text-primary font-bold text-lg mb-3">{pkg.price}</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {pkg.features.map((feature,featureIdx)=> (
                            <li key={featureIdx} className="flex items-center space-x-2">
                              <SafeIcon icon={FiCheck} className="w-3 h-3 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <LazyImage 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg elevation-3 h-96" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Additional Services */}
        <section className="mt-16 md:mt-20 py-12 md:py-16 bg-gray-50 rounded-lg">
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services to enhance your experience at Castle Hotel
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            {additionalServices.map((service,index)=> (
              <motion.div 
                key={index}
                initial={{opacity: 0,y: 30}} 
                whileInView={{opacity: 1,y: 0}} 
                viewport={{once: true}} 
                transition={{duration: 0.8,delay: index * 0.1}}
                className="text-center bg-white p-6 md:p-8 rounded-lg elevation-2"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <SafeIcon icon={service.icon} className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 md:mt-20 text-center">
          <motion.div 
            initial={{opacity: 0,y: 30}} 
            whileInView={{opacity: 1,y: 0}} 
            viewport={{once: true}} 
            transition={{duration: 0.8}}
            className="bg-primary text-white p-8 md:p-12 rounded-lg"
          >
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Ready to Plan Your Perfect Event?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
              Let our experienced team help you create an unforgettable experience. Contact us today to discuss your requirements and receive a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:01827954382" 
                className="bg-white text-primary px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/90 transition-all elevation-2"
              >
                Call 01827954382
              </a>
              <a 
                href="mailto:info@castlehotel-tamworth.co.uk" 
                className="bg-white/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/30 transition-all border border-white/30"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
};

export default ServicesPage;