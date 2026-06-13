import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, Calendar, MapPin, Users, Target, Lightbulb, Handshake, X, Download } from 'lucide-react';
import summitPoster from '../assets/summitf5c (4).png';
import summatauImage from '../assets/summatau.jpg';
import summitVideo from '../assets/vid.mp4';
import summit2024PDF from '../assets/resources/2024-transport-summit.pdf';
import summit2025PDF from '../assets/resources/KNPTS 2025 REPORT 2025.pdf';
import summitHeroImage from '../assets/gallery30.webp';

const SummitPage = () => {
  const [openVideo, setOpenVideo] = useState(null);
  
  const summits = [
    {
      year: '2024',
      title: 'Nairobi Metropolitan Area Matatu Summit & Expo',
      location: 'Nairobi',
      date: '2024',
      description: 'The inaugural summit focusing on matatu sector reforms, professionalism, and modernization.',
      image: summatauImage,
      download: summit2024PDF,
      downloadLabel: 'Download 2024 Summit Report',
      highlights: [
        'Matatu operator capacity building',
        'Regulatory framework discussions',
        'Safety and security initiatives'
      ]
    },
    {
      year: '2025',
      title: 'Kenya National Public Transport Summit',
      location: 'Nairobi',
      date: '2025',
      description: 'A transformative gathering focused on sustainable mobility and industry-wide collaboration.',
      image: summitVideo,
      hasVideo: true,
      video: summitVideo,
      download: summit2025PDF,
      downloadLabel: 'Download 2025 Summit Report',
      highlights: [
        'Sustainable Mobility Leadership Awards',
        'Policy and regulatory reforms',
        'Stakeholder collaboration workshops',
        'Innovative transport technologies showcase'
      ]
    },
    {
      year: '2026',
      title: 'Kenya Transport Summit & Expo 2026',
      location: 'Nairobi',
      date: '30 Sep – 2 Oct 2026',
      description: 'The premier gathering for policymakers, innovators, and operators to shape the future of public mobility.',
      image: summitPoster,
      isUpcoming: true,
      highlights: [
        'Transport infrastructure innovations',
        'Sustainable mobility solutions',
        'Industry-wide networking opportunities'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-napta-navy via-napta-blue to-napta-brightBlue rounded-b-[2rem] sm:rounded-b-[3rem] shadow-xl overflow-hidden py-12 sm:py-16 mx-1 sm:mx-1">
        <div className="absolute inset-0 opacity-20">
          <img
            src={summitHeroImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-napta-green rounded-full" />
              <p className="text-white/80 text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] uppercase">
                Our Flagship Event
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-3 leading-tight">
              Kenya Transport{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">
                Summit & Expo
              </span>
            </h1>
            <p className="text-white/70 text-[13px] sm:text-sm max-w-2xl leading-relaxed">
              An annual gathering of policymakers, innovators, and operators fostering dialogue, innovation, and collaboration to transform public transport across Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summits Timeline / Archive */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10"
          >
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-napta-green rounded-full" />
              <p className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                Our Journey
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-napta-navy mb-2 leading-tight">
              Summit{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">
                Editions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-8 sm:space-y-10">
            {summits.map((summit, idx) => (
              <motion.div
                key={summit.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                <div className="relative rounded-2xl bg-white ring-1 ring-slate-200/70 shadow-[0_4px_24px_-8px_rgba(15,37,87,0.08)] p-4 sm:p-6 lg:p-8 overflow-hidden">
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-l-2 border-napta-green/40 rounded-tl-sm pointer-events-none" />
                  <span className="absolute top-3 right-3 sm:top-4 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-r-2 border-napta-blue/30 rounded-tr-sm pointer-events-none" />
                  <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-l-2 border-napta-blue/30 rounded-bl-sm pointer-events-none" />
                  <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-r-2 border-napta-green/40 rounded-br-sm pointer-events-none" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 items-start relative">
                    {/* Year Badge */}
                    <div className="lg:col-span-2">
                      <div className="inline-flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-napta-navy to-napta-blue flex items-center justify-center border-4 border-white shadow-lg">
                          <span className="text-xl sm:text-2xl font-extrabold text-white">{summit.year}</span>
                        </div>
                      </div>
                      {summit.isUpcoming && (
                        <div className="mt-3 text-center">
                          <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-napta-green to-napta-blue text-white text-[10px] sm:text-xs font-semibold">
                            Upcoming
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-10">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        {/* Text Content */}
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-extrabold text-napta-navy mb-2">{summit.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 mb-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar size={14} className="text-napta-green" />
                              <span className="text-xs sm:text-sm text-slate-600">{summit.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin size={14} className="text-napta-blue" />
                              <span className="text-xs sm:text-sm text-slate-600">{summit.location}</span>
                            </div>
                          </div>
                          <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">{summit.description}</p>
                          
                          <div className="space-y-2 mb-4">
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.15em]">Key Highlights</p>
                            <div className="flex flex-wrap gap-2">
                              {summit.highlights.map((highlight, i) => (
                                <span key={i} className="px-3 py-1 rounded-full bg-slate-50 text-xs sm:text-sm text-slate-700 border border-slate-200">
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-3">
                            {summit.isUpcoming && (
                              <a
                                href="https://www.kenyatransportsummit.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold px-4 py-2.5 rounded-lg text-xs sm:text-sm shadow-md shadow-napta-green/20 transition-all duration-300 group"
                              >
                                Visit Official Summit Website
                                <ArrowUpRight
                                  size={15}
                                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                                />
                              </a>
                            )}
                            {summit.download && (
                              <a
                                href={summit.download}
                                download
                                className="inline-flex items-center justify-center gap-2 bg-white border border-napta-green/30 text-napta-green hover:bg-napta-green hover:text-white font-semibold px-4 py-2.5 rounded-lg text-xs sm:text-sm shadow-sm transition-all duration-300 group"
                              >
                                <Download size={15} className="shrink-0" />
                                {summit.downloadLabel}
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Media */}
                        <div className="lg:w-80 xl:w-96">
                          {summit.hasVideo && summit.video ? (
                            <div 
                              className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100 ring-1 ring-slate-200/80 shadow-sm group cursor-pointer"
                              onClick={() => setOpenVideo(summit)}
                            >
                              <video
                                src={summit.video}
                                muted
                                loop
                                playsInline
                                autoPlay
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                  <Play size={24} className="text-napta-navy ml-1" fill="currentColor" strokeWidth={0} />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="relative overflow-hidden rounded-xl ring-1 ring-slate-200/80 shadow-sm">
                              <img
                                src={summit.image}
                                alt={summit.title}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend - Using SystemBlocks style */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-canvas-alt p-6 sm:p-8 lg:p-12 border border-slate-200/70"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-napta-blue/10 rounded-full blur-3xl opacity-70" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-napta-green/10 rounded-full blur-3xl opacity-70" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              <div className="lg:col-span-4">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-[2px] bg-gradient-to-r from-napta-green to-napta-blue rounded-full" />
                  <p className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                    Why Attend
                  </p>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-napta-navy mb-3 leading-tight">
                  Be Part of the{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">
                    Movement
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: Users, title: 'Networking', desc: 'Connect with 500+ industry leaders and stakeholders' },
                  { icon: Target, title: 'Policy Dialogue', desc: 'Shape the future of transport regulations and policy' },
                  { icon: Lightbulb, title: 'Digital Innovation', desc: 'Discover digital fare payment systems and cutting-edge transport technologies' },
                  { icon: Handshake, title: 'Partnerships', desc: 'Build strategic collaborations across the ecosystem' }
                ].map((pillar, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-500"
                  >
                    <div className="p-5 sm:p-6 relative z-10 h-full flex flex-col">
                      <div className="w-12 h-12 bg-gradient-to-br from-napta-green to-napta-blue rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                        <pillar.icon size={24} />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-napta-navy mb-2 tracking-tight">{pillar.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - NewsletterCTA style */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 lg:p-12"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-napta-blue/20 rounded-full blur-3xl opacity-70" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-napta-green/20 rounded-full blur-3xl opacity-70" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <motion.div
                className="lg:col-span-7"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 mb-3">
                  <div className="w-6 h-[2px] bg-gradient-to-r from-napta-green to-napta-blue rounded-full" />
                  <span className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                    Stay Informed
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
                  Get Updates on the Next{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">
                    Summit
                  </span>
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal mb-0">
                  Be the first to know about registration opening, speakers, and agenda announcements.
                </p>
              </motion.div>

              <motion.div
                className="lg:col-span-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-napta-green/20 to-napta-blue/20 rounded-2xl blur-xl opacity-50" />
                  <div className="relative">
                    <a
                      href="https://www.kenyatransportsummit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-napta-green/20 hover:shadow-xl hover:shadow-napta-green/30"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-napta-blue to-napta-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
                      <span className="relative flex items-center gap-2">
                        Visit Official Summit Website
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {openVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setOpenVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-napta-green transition-colors flex items-center gap-2"
              >
                <X size={24} />
                <span className="text-sm font-medium">Close</span>
              </button>
              <div className="aspect-video bg-black rounded-2xl">
                <video
                  src={openVideo.video}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SummitPage;
