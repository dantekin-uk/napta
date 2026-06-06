import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const carouselItems = [
    {
      title: 'Transforming',
      highlight: 'Urban Mobility',
      description: 'Driving safe, sustainable, and inclusive public transport through continuous innovation and research.',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1920',
    },
    {
      title: 'Fleet Renewal',
      highlight: '& Modernization',
      description: 'Empowering transport operators with professional training, restructuring, and affordable financing.',
      image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=1920',
    },
    {
      title: 'Transport',
      highlight: 'Summit & Expo',
      description: 'Connecting policymakers, tech innovators, and operators to shape the future of transit.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=1920',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    carouselItems.forEach((item) => {
      const img = new Image();
      img.src = item.image;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === carouselItems.length) {
          setImagesLoaded(true);
        }
      };
      // Also handle error so we don't wait forever
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === carouselItems.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000); // Auto rotate every 5 seconds
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentItem = carouselItems[currentSlide];

  return (
    <section className="relative bg-gradient-to-r from-napta-navy via-napta-blue to-napta-brightBlue rounded-b-[2rem] sm:rounded-b-[3rem] shadow-2xl overflow-hidden py-12 lg:py-16 mx-1 sm:mx-1">
      {/* Background Image with Transition */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${currentItem.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-napta-navy/90 via-napta-navy/60 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/70 via-transparent to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full">
        <div className="flex flex-col h-full min-h-[350px]">
          {/* Spacer to push content down */}
          <div className="flex-grow"></div>

          {/* Content positioned at bottom-left */}
          <motion.div 
            className="max-w-2xl mb-8 sm:mb-12 mt-30 sm:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            exit={{ opacity: 0, x: 50 }}
          >
            <motion.h1 
              className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight mb-2 sm:mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-white">{currentItem.title}</span> <br />
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green via-napta-lightGreen to-napta-blue"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {currentItem.highlight}
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xs sm:text-sm text-white/75 mb-6 sm:mb-8 leading-relaxed font-normal max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {currentItem.description}
            </motion.p>

            <motion.div 
              className="flex flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button 
                className="bg-napta-green hover:bg-napta-lightGreen text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm shadow-lg shadow-napta-green/25 transition-all flex items-center justify-center gap-2 group w-fit"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(34, 197, 94, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <motion.div
                  animate={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={16} className="sm:size-18" />
                </motion.div>
              </motion.button>
              <motion.button 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all flex items-center justify-center w-fit border border-white/25 hover:border-napta-lightGreen/40"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Carousel Controls - Spread to ends */}
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {/* Left Arrow */}
            <motion.button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all backdrop-blur border border-white/30"
              aria-label="Previous slide"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dot Indicators - Center */}
            <div className="flex gap-2">
              {carouselItems.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all rounded-full ${
                    index === currentSlide
                      ? 'bg-napta-green w-8 h-2'
                      : 'bg-white/40 w-2 h-2 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    width: index === currentSlide ? 32 : 8,
                    backgroundColor: index === currentSlide ? '#22c55e' : 'rgba(255, 255, 255, 0.4)'
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <motion.button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all backdrop-blur border border-white/30"
              aria-label="Next slide"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
