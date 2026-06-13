import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import heroImage from '../assets/hero/hero.jpeg';
import heroMobileImage from '../assets/hero/hero1mobile.jpeg';
import trainingImage from '../assets/home/training.jpeg';
import fleetImage from '../assets/home/fleet.jpg';
import visionImage from '../assets/vision.png';

const FADE = { duration: 0.55, ease: [0.4, 0, 0.2, 1] };
const SLIDE_DURATIONS = [10000, 8000, 8000]; // summit stays longer

const Hero = () => {
  const { navigateTo } = useNavigation();
  const summitDate = new Date('2026-09-30T09:00:00');
  const summitTheme = "Building Safe, Sustainable, Inclusive and Integrated Transport Systems for the people.";
  const summitVenue = "KICC, Nairobi, Kenya";

  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const difference = summitDate - now;

      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const carouselItems = [
    {
      type: 'summit',
      title: 'Kenya Transport',
      highlight: 'Summit & Expo 2026',
      theme: summitTheme,
      venue: summitVenue,
      date: '30 Sep – 2 Oct 2026',
      image: heroImage,
      mobileImage: heroMobileImage,
    },
    {
      type: 'default',
      title: 'Transforming',
      highlight: 'Urban Mobility',
      description: 'Driving safe, sustainable, and inclusive public transport through continuous innovation and research.',
      image: visionImage,
    },
    {
      type: 'default',
      title: 'Fleet Renewal',
      highlight: '& Modernization',
      description: 'Empowering transport operators with professional training, restructuring, and affordable financing.',
      image: fleetImage,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const duration = SLIDE_DURATIONS[currentSlide] ?? 8000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [currentSlide, carouselItems.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  const goToSlide = (index) => setCurrentSlide(index);

  const currentItem = carouselItems[currentSlide];
  const isSummitSlide = currentItem.type === 'summit';

  const renderSummitSlide = (item) => (
    <div className="text-center max-w-3xl mx-auto w-full">
      <div className="flex justify-center mb-2 sm:mb-3">
        <div className="inline-flex items-center gap-2 bg-napta-green/20 border border-napta-green/40 px-3 py-1 rounded-full">
          <span className="w-2 h-2 bg-napta-green rounded-full animate-pulse" />
          <span className="text-napta-lightGreen text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase">
            The Annual Event
          </span>
        </div>
      </div>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-extrabold leading-[1.12] tracking-tight mb-2 sm:mb-3">
        <span className="text-white">{item.title}</span>
        <br />
        <span className="text-napta-lightGreen">{item.highlight}</span>
      </h1>

      <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-3 sm:mb-4 max-w-2xl mx-auto">
        &ldquo;{item.theme}&rdquo;
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
          <MapPin size={14} className="text-napta-green shrink-0" />
          <span className="text-white text-xs sm:text-sm font-medium">{item.venue}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/20">
          <Calendar size={14} className="text-napta-brightBlue shrink-0" />
          <span className="text-white text-xs sm:text-sm font-medium">{item.date}</span>
        </div>
      </div>

      <div className="mb-3 sm:mb-4">
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <Clock size={15} className="text-napta-lightGreen shrink-0" />
          <span className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-[0.12em] uppercase">
            Starts In
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { value: countdown.days, label: 'Days' },
            { value: countdown.hours, label: 'Hours' },
            { value: countdown.minutes, label: 'Min' },
            { value: countdown.seconds, label: 'Sec' },
          ].map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center">
                <span className="text-base sm:text-lg font-bold text-white">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-white/70 mt-1 uppercase tracking-wide">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href="https://www.kenyatransportsummit.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm shadow-lg shadow-napta-green/30 transition-all"
      >
        Visit Summit Website
        <ArrowRight size={16} />
      </a>
    </div>
  );

  const renderDefaultSlide = (item) => (
    <div className="max-w-2xl lg:max-w-3xl text-left">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] font-extrabold leading-[1.12] tracking-tight mb-2 sm:mb-3">
        <span className="text-white">{item.title}</span>
        <br />
        <span className="text-napta-lightGreen">{item.highlight}</span>
      </h1>

      <p className="text-sm sm:text-base text-white/90 mb-5 sm:mb-6 leading-relaxed max-w-xl">
        {item.description}
      </p>

      <div className="flex flex-row flex-wrap gap-3 sm:gap-4">
        <button 
          onClick={() => navigateTo('contact')}
          className="bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-semibold text-xs sm:text-sm shadow-lg shadow-napta-green/30 transition-all flex items-center justify-center gap-2 w-fit"
        >
          Get Started
          <ArrowRight size={16} />
        </button>
        <button 
          onClick={() => navigateTo('programs')}
          className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-xs sm:text-sm transition-all flex items-center justify-center w-fit border border-white/25 hover:border-napta-lightGreen/40"
        >
          Learn More
        </button>
      </div>
    </div>
  );

  return (
    <section className="relative bg-napta-navy rounded-b-[2rem] sm:rounded-b-[3rem] shadow-2xl overflow-hidden mx-1 sm:mx-1 h-[500px] sm:h-[520px] lg:h-[540px]">
      {/* Background images — stacked layers, always mounted */}
      <div className="absolute inset-0 z-0">
        {carouselItems.map((item, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={FADE}
            aria-hidden={currentSlide !== index}
          >
            <img
              src={item.image}
              alt=""
              className="hidden sm:block absolute inset-0 w-full h-full object-cover object-center"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <img
              src={item.mobileImage ?? item.image}
              alt=""
              className="sm:hidden absolute inset-0 w-full h-full object-cover object-center"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay layers — same treatment as program cards */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-napta-navy/95 via-napta-navy/65 to-napta-navy/30" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-br from-napta-green/25 via-transparent to-napta-blue/15" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-black/25 backdrop-blur-[1px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex flex-col">
        <div className="flex-1 min-h-0" />

        {/* Fixed-height content slot — prevents layout jump between slides */}
        <div className="relative flex-shrink-0 h-[320px] sm:h-[345px] lg:h-[360px] mb-3 sm:mb-4">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={FADE}
              className={`absolute inset-x-0 bottom-0 ${isSummitSlide ? 'flex justify-center' : ''}`}
            >
              {isSummitSlide ? renderSummitSlide(currentItem) : renderDefaultSlide(currentItem)}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls — padded above floating stats dock */}
        <div className="flex-shrink-0 flex items-center justify-between pb-10 sm:pb-12">
          <button
            onClick={prevSlide}
            className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors backdrop-blur border border-white/30"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentSlide
                    ? 'bg-napta-green w-8 h-2'
                    : 'bg-white/40 w-2 h-2 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors backdrop-blur border border-white/30"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
