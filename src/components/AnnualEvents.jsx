import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import summitPoster from '../assets/summitf5c (4).png';

const AnnualEvents = () => {
  const summitUrl = 'https://www.kenyatransportsummit.com';

  return (
    <section id="summit" className="py-10 sm:py-14 bg-canvas overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-napta-green rounded-full" />
            <p className="text-slate-600 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
              The Annual Event
            </p>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-napta-navy mb-2 leading-tight">
            Kenya Transport{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">
              Summit &amp; Expo
            </span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl leading-relaxed">
            The premier gathering for policymakers, innovators, and operators to shape the future of public mobility.
          </p>
        </motion.div>

        <div className="relative rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-[0_4px_24px_-8px_rgba(15,37,87,0.08)] p-4 sm:p-6 lg:p-8 overflow-hidden">
          <span className="absolute top-3 left-3 sm:top-4 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-l-2 border-napta-green/40 rounded-tl-sm pointer-events-none" />
          <span className="absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-r-2 border-napta-blue/30 rounded-tr-sm pointer-events-none" />
          <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-l-2 border-napta-blue/30 rounded-bl-sm pointer-events-none" />
          <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-r-2 border-napta-green/40 rounded-br-sm pointer-events-none" />
          <div className="absolute top-1/2 left-0 w-8 h-px bg-gradient-to-r from-napta-green/50 to-transparent -translate-y-1/2 hidden lg:block pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 items-start lg:items-center relative">
            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 flex flex-col justify-center order-1"
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="w-px h-10 sm:h-12 bg-napta-green/60 shrink-0 mt-1" />
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;Building Safe, Sustainable, Inclusive and Integrated Transport Systems for the people.&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-2 mb-5 pl-4">
                <span className="w-4 h-px bg-slate-300" />
                <span className="text-[10px] sm:text-xs text-slate-400 font-medium tracking-[0.1em] uppercase">
                  Nairobi · 30 Sep – 2 Oct 2026
                </span>
              </div>

              <a
                href={summitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-napta-green hover:bg-napta-lightGreen text-white font-semibold px-4 py-2.5 rounded-lg text-xs sm:text-sm shadow-md shadow-napta-green/20 transition-colors w-full sm:w-fit group sm:ml-4"
              >
                Visit Official Summit Website
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                />
              </a>
            </motion.div>

            {/* Poster + Video — side by side on sm+, stacked on xs */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-5 sm:gap-4 order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="sm:col-span-1 lg:col-span-4 flex justify-center relative"
              >
                <div className="hidden lg:block absolute -left-3 top-1/4 bottom-1/4 w-px bg-slate-200" />
                <div className="relative w-full max-w-[280px] sm:max-w-none mx-auto">
                  <div className="absolute -inset-2 bg-slate-900/5 blur-xl rounded-lg pointer-events-none" />
                  <div className="relative rounded-lg overflow-hidden shadow-[0_12px_32px_-10px_rgba(15,37,87,0.18)] ring-1 ring-slate-200/80 bg-white">
                    <img
                      src={summitPoster}
                      alt="Kenya Transport Summit & Expo 2026 official poster"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-2 mt-2.5 justify-center">
                    <span className="w-3 h-px bg-napta-green/50" />
                    <p className="text-[10px] text-slate-400 tracking-[0.1em] uppercase">
                      Official poster
                    </p>
                    <span className="w-3 h-px bg-napta-green/50" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sm:col-span-1 lg:col-span-3 relative flex flex-col justify-center"
              >
                <div className="hidden lg:block absolute -left-3 top-1/4 bottom-1/4 w-px bg-slate-200" />
                <div className="relative aspect-video sm:aspect-[4/3] lg:aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 ring-1 ring-slate-200/80 shadow-sm group cursor-pointer w-full">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(148,163,184,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/75 backdrop-blur-md border border-white/90 shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                      <Play size={18} className="text-napta-navy ml-0.5" fill="currentColor" strokeWidth={0} />
                    </div>
                    <p className="text-slate-500 text-[10px] font-medium tracking-wide uppercase">
                      Highlight reel
                    </p>
                  </div>
                  <span className="absolute top-2.5 right-2.5 bg-white/85 backdrop-blur-sm text-slate-500 text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded border border-slate-200/80">
                    Soon
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-2.5 justify-center sm:justify-start">
                  <span className="w-3 h-px bg-slate-300" />
                  <p className="text-[10px] text-slate-400 tracking-[0.1em] uppercase">
                    Event media
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnualEvents;
