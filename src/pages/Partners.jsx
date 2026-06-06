import React from 'react';
import { motion } from 'framer-motion';

// Import partner logos (same as PartnersSection)
const partnerModules = import.meta.glob('../assets/partners/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

const partnerLogos = Object.entries(partnerModules)
  .filter(([path]) => !path.includes(' (1)'))
  .map(([, src]) => src)
  .sort();

// Categorize partners - for demo, we'll split into 3 categories
// In real app, you might want to organize these differently
const categories = [
  {
    name: 'Government & Regulatory',
    logos: partnerLogos.slice(0, Math.ceil(partnerLogos.length / 3)),
  },
  {
    name: 'International Development',
    logos: partnerLogos.slice(Math.ceil(partnerLogos.length / 3), Math.ceil(partnerLogos.length * 2 / 3)),
  },
  {
    name: 'Operator Alliances',
    logos: partnerLogos.slice(Math.ceil(partnerLogos.length * 2 / 3)),
  },
];

const LogoCard = ({ src, index }) => (
  <motion.div
    key={src}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    whileHover={{ scale: 1.02, borderColor: '#cbd5e1', boxShadow: '0 4px 12px -2px rgba(0, 0, 0, 0.05)' }}
    className="aspect-[4/3] bg-white rounded-2xl border border-slate-100/80 flex items-center justify-center p-3 sm:p-4 transition-all duration-300 hover:shadow-md group cursor-pointer"
  >
    <img
      src={src}
      alt={`Partner ${index + 1}`}
      className="max-h-[70%] max-w-[80%] object-contain transition-all duration-300"
      loading="lazy"
    />
  </motion.div>
);

const PartnersPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Slightly taller with gradient */}
      <section className="relative bg-gradient-to-r from-napta-navy via-napta-blue to-napta-brightBlue rounded-b-[2rem] sm:rounded-b-[3rem] shadow-xl overflow-hidden py-12 sm:py-16 mx-1 sm:mx-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-napta-green rounded-full" />
              <p className="text-white/80 text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] uppercase">
                Our Network
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-3 leading-tight">
              Our Network &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-lightGreen">Partners</span>
            </h1>
            <p className="text-white/70 text-[13px] sm:text-sm max-w-2xl leading-relaxed">
              Driving sustainable public transport requires collaboration. We work hand-in-hand with governments, development partners, and industry leaders to transform mobility across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Thin Separator Line */}
      <div className="h-px bg-slate-200 mx-1 sm:mx-1" />

      {/* Main Content - More modern with lighter background */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="mb-12 sm:mb-16 last:mb-0"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-10">
                {/* Category Label - More refined */}
                <div className="lg:w-48 flex-shrink-0">
                  <h3 className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4 lg:mb-0">
                    {category.name}
                  </h3>
                </div>

                {/* Logos Grid - Tighter gaps, more columns */}
                <div className="flex-1">
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
                    {category.logos.map((logo, logoIndex) => (
                      <LogoCard 
                        key={`${category.name}-${logoIndex}`} 
                        src={logo} 
                        index={logoIndex} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
