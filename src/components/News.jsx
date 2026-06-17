import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../contexts/NavigationContext';
import new1Image from '../assets/home/new1.jpeg';
import new2Image from '../assets/home/new2.jpeg';

const News = () => {
  const { navigateTo } = useNavigation();
  
  const newsItems = [
    {
      date: 'June 1, 2025',
      headline: 'NAPTA Partners with Taita Taveta County Government',
      image: new1Image,
      type: 'tall',
      isVideo: false
    },
    {
      date: 'May 29, 2025',
      headline: 'NAPTA CEO Featured on Citizen TV Discussing Urban Air Quality',
      image: new2Image,
      type: 'short',
      isVideo: true
    }
  ];

  return (
    <section className="py-10 sm:py-14 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-napta-green rounded-full"></span>
              <span className="text-slate-600 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                Latest Updates
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-napta-navy mb-2 leading-tight">
              Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">News</span>
            </h2>
          </div>
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('news');
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold px-4 py-2.5 rounded-lg text-xs sm:text-sm shadow-md shadow-napta-green/20 transition-all duration-300 w-fit group"
          >
            View All News
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* 2-Column Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6">
          {/* Left Column - Tall Card (60% width) - Taita Taveta Partnership */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-full group cursor-pointer">
              {/* Tall Image Container */}
              <motion.div
                className="relative w-full aspect-[16/9] overflow-hidden rounded-xl sm:rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <img
                  src={newsItems[0].image}
                  alt={newsItems[0].headline}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Text Overlay - Absolute Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                  <p className="text-white/80 text-[10px] sm:text-[11px] font-medium mb-1.5 sm:mb-2">
                    {newsItems[0].date}
                  </p>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white leading-tight">
                    {newsItems[0].headline}
                  </h3>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Short Card (40% width) - CEO on Citizen TV */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full group cursor-pointer">
              {/* YouTube Video Embed */}
              <motion.div
                className="relative w-full aspect-video overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <iframe
                  src="https://www.youtube.com/embed/kYP-BJgP-zI?si=SdXGW7dh-0C0FLY5"
                  width="100%"
                  height="100%"
                  style={{ border: '0' }}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </motion.div>

              {/* Text Content - Underneath Video */}
              <div>
                <p className="text-slate-500 text-[10px] sm:text-[11px] font-medium mb-1.5 sm:mb-2">
                  {newsItems[1].date}
                </p>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-900 leading-tight group-hover:text-slate-700 transition-colors duration-300">
                  {newsItems[1].headline}
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default News;
