import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../contexts/NavigationContext';

const partnerModules = import.meta.glob('../assets/partners/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

const partnerLogos = Object.entries(partnerModules)
  .filter(([path]) => !path.includes(' (1)'))
  .map(([, src]) => src)
  .sort();

const PartnerLogo = ({ src, index }) => (
  <div className="flex-shrink-0 mx-3 sm:mx-4">
    <div className="w-28 h-16 sm:w-36 sm:h-20 bg-white rounded-xl ring-1 ring-slate-200/70 shadow-sm flex items-center justify-center p-3 sm:p-4 transition-all duration-300 hover:shadow-md hover:ring-napta-green/25 group">
      <img
        src={src}
        alt={`Partner ${index + 1}`}
        className="max-h-full max-w-full object-contain transition-all duration-300"
        loading="lazy"
      />
    </div>
  </div>
);

const PartnersSection = () => {
  const { navigateTo } = useNavigation();
  const track = [...partnerLogos, ...partnerLogos];

  return (
    <section id="partners" className="py-10 sm:py-14 bg-canvas-alt overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-napta-green rounded-full" />
              <p className="text-slate-600 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                Our Network
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-napta-navy mb-2 leading-tight">
              Global &amp;{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">
                Institutional Partners
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl leading-relaxed">
              Collaborating with leading organizations to advance sustainable public transport across Africa.
            </p>
          </div>
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('partners');
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-napta-green hover:bg-napta-lightGreen text-white font-semibold px-4 py-2.5 rounded-lg text-xs sm:text-sm shadow-md shadow-napta-green/20 transition-all duration-300 w-fit"
          >
            View All Partners
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
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-[#fafbfc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-[#fafbfc] to-transparent z-10 pointer-events-none" />

        <div className="partners-marquee flex w-max hover:[animation-play-state:paused]">
          {track.map((src, index) => (
            <PartnerLogo key={`${src}-${index}`} src={src} index={index % partnerLogos.length} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
