import React from 'react';
import { motion } from 'framer-motion';
import trainingImage from '../assets/home/training.jpeg';

const SystemBlocks = () => {
  const pillars = [
    {
      number: '01',
      title: 'Research',
      desc: 'Conducting independent analysis on critical transportation issues.',
    },
    {
      number: '02',
      title: 'Training',
      desc: 'Translating rigorous research into actionable, on-the-ground knowledge, custom toolkits, and scalable resources.',
    },
    {
      number: '03',
      title: 'Innovation',
      desc: 'Serving as a collaborative hub for cross-sector networks.',
    },
    {
      number: '04',
      title: 'Investments',
      desc: 'Mobilizing strategic resources for transportation upgrades.',
    },
    {
      number: '05',
      title: 'Advocacy',
      desc: 'Encouraging forward-thinking policy reforms.',
    },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Main Background Container */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-5 sm:p-8 lg:p-12">
          {/* Corner Glow Patches */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-napta-blue/20 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-napta-green/20 rounded-full blur-3xl opacity-70"></div>

          {/* Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
              {/* Header Section (Top Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 leading-tight tracking-tight">
                  Our Theory of <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-blue to-napta-green">Change</span>
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  Building the future of sustainable public transport through five interconnected pillars.
                </p>
              </motion.div>

              {/* Training Card (Bottom Left - Taller) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/20 hover:border-napta-green/40 transition-all duration-500 flex-1 lg:min-h-[210px]"
              >
                <img
                  src={trainingImage}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Slight overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/30 to-transparent"></div>

                <div className="p-4 sm:p-6 relative z-10 h-full flex flex-col justify-end">
                  <h4 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-2.5 tracking-tight [text-shadow:0_2px_12px_rgba(0,0,0,0.85)]">
                    {pillars[1].title}
                  </h4>
                  <p className="text-white text-xs sm:text-sm leading-relaxed font-medium [text-shadow:0_1px_10px_rgba(0,0,0,0.9)]">
                    Translating rigorous research into actionable, on-the-ground knowledge, custom toolkits, and scalable resources.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Cards Right Side (2x2 Grid) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
              {[0, 2, 3, 4].map((index, i) => {
                const cat = pillars[index];
                return (
                  <motion.div
                    key={cat.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i + 1) * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-napta-blue/30 hover:bg-white/8 transition-all duration-500 lg:min-h-[110px] h-full"
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-napta-blue/0 to-napta-green/0 group-hover:from-napta-blue/10 group-hover:to-napta-green/10 transition-all duration-500"></div>
                    
                    <div className="p-3.5 sm:p-6 relative z-10 h-full flex flex-col justify-end">
                      <h4 className="text-sm sm:text-[15px] font-bold text-white/90 group-hover:text-white transition-all duration-300 mb-1 sm:mb-1.5 tracking-tight">{cat.title}</h4>
                      <p className="text-slate-400/75 text-[10px] sm:text-[11px] leading-relaxed font-normal group-hover:text-slate-400 transition-all duration-300">{cat.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemBlocks;
