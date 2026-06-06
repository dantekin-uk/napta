import React from 'react';
import { motion } from 'framer-motion';

const News = () => {
  const newsItems = [
    {
      date: 'May 28, 2026',
      headline: 'New Urban Fleet Modernization Framework Released.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200',
      type: 'short'
    },
    {
      date: 'June 5, 2026',
      headline: 'Strategic Partnership Signed with Taita Taveta County Government.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
      type: 'tall'
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
            href="#all-news"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-napta-green hover:bg-napta-lightGreen text-white font-semibold px-4 py-2.5 rounded-lg text-xs sm:text-sm shadow-md shadow-napta-green/20 transition-all duration-300 w-fit group"
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
          {/* Left Column - Tall Card (60% width) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-full group cursor-pointer">
              {/* Tall Image Container - Reduced Height (16:8 = 2:1 → 16:9 wider) */}
              <motion.div
                className="relative w-full aspect-[16/9] overflow-hidden rounded-xl sm:rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <img
                  src={newsItems[1].image}
                  alt={newsItems[1].headline}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Text Overlay - Absolute Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                  <p className="text-white/80 text-[10px] sm:text-[11px] font-medium mb-1.5 sm:mb-2">
                    {newsItems[1].date}
                  </p>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white leading-tight">
                    {newsItems[1].headline}
                  </h3>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Short Card (40% width) */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full group cursor-pointer">
              {/* Image Container - 16:9 Aspect Ratio */}
              <motion.div
                className="relative w-full aspect-video overflow-hidden rounded-xl sm:rounded-2xl mb-4 sm:mb-5"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <img
                  src={newsItems[0].image}
                  alt={newsItems[0].headline}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Text Content - Underneath Image */}
              <div>
                <p className="text-slate-500 text-[10px] sm:text-[11px] font-medium mb-1.5 sm:mb-2">
                  {newsItems[0].date}
                </p>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-slate-900 leading-tight group-hover:text-slate-700 transition-colors duration-300">
                  {newsItems[0].headline}
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
