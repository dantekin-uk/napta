import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Globe, Target, Zap, Heart, Eye, Eye as EyeIcon } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import visionImage from '../assets/vision.png';
import storyImage from '../assets/story.png';
import heroImage from '../assets/home/hero1.png';

const StoryAndValuesPage = () => {
  const { navigateTo } = useNavigation();
  const coreValues = [
    { 
      icon: Compass, 
      title: 'Independence',
      description: 'Maintaining objectivity and impartiality in our work.'
    },
    { 
      icon: Globe, 
      title: 'Collaboration',
      description: 'Partnering with stakeholders for collective impact.'
    },
    { 
      icon: Target, 
      title: 'Relevance',
      description: 'Addressing real needs in the transport sector.'
    },
    { 
      icon: Zap, 
      title: 'Excellence',
      description: 'Delivering high-quality work and innovative solutions.',
      featured: true
    },
    { 
      icon: Heart, 
      title: 'Integrity', 
      description: 'Upholding honesty and ethical standards.'
    },
    { 
      icon: EyeIcon, 
      title: 'Entrepreneurialism',
      description: 'Embracing innovation and forward-thinking approaches.'
    },
  ];

  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-napta-navy via-napta-blue to-napta-brightBlue rounded-b-[2rem] sm:rounded-b-[3rem] shadow-xl overflow-hidden py-12 sm:py-16 mx-1 sm:mx-1">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
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
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-napta-green rounded-full" />
              <p className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                About Us
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight tracking-tight">
            Our Story &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">Values</span>
          </h1>
            <p className="text-white/70 text-[11px] sm:text-xs max-w-2xl leading-relaxed font-normal">
              Driven by a shared vision for sustainable, equitable public transport across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl shadow-xl"
              style={{ maxHeight: '300px' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800">
                <img
                  src={visionImage}
                  alt="Modern public transport infrastructure"
                  className="w-full h-full object-cover object-center opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
              </div>
              <div className="relative p-5 sm:p-6 lg:p-7 h-full flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-napta-blue/90 to-napta-brightBlue/90 rounded-lg flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base sm:text-xl font-extrabold text-white mb-0 tracking-tight">Our Vision</h3>
                </div>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed font-normal">
                  To help build a transportation system that fosters economic vitality, advances social equity, conserves the environment, and improves the quality of life for all.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-100 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-napta-green/10 to-napta-blue/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-napta-green" />
                </div>
                <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 mb-1 tracking-tight">Our Mission</h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal mb-5">
                To shape public debate on critical transportation issues and build an innovative network of transportation professionals to progress this sector socially, economically, and technically.
              </p>
              <ul className="space-y-3">
                {[
                  "Promoting improved mobility on a national scale",
                  "Being the national network of collective transport professionals",
                  "Being the point of reference for knowledge on collective transport",
                  "Being the national forum in the area of transport policy",
                  "Advocating for collective transport"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-normal">
                    <div className="w-1.5 h-1.5 bg-napta-green rounded-full mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-10 sm:py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-6 items-center">
            {/* Left - Content */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-napta-green rounded-full" />
                <p className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">Our Journey</p>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-napta-navy mb-2 leading-tight">
                Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">Story</span>
              </h2>

              <div className="space-y-3 mb-5">
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Since its establishment, NAPTA has been dedicated to transforming public transport by promoting sustainability, efficiency, and inclusivity. With a strong focus on collaboration and innovation, we strive to enhance the quality of urban mobility for all.
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Through strategic partnerships and policy advocacy, we work to address challenges in the public transport sector, fostering a future where mobility is safe, affordable, and environmentally responsible.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-5">
                {[
                  "Advocating for sustainable & accessible transport solutions",
                  "Collaborating with key stakeholders to drive impactful change",
                  "Enhancing systems through research and innovation"
                ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-xl p-3 sm:p-4 border border-slate-100">
                      <div className="w-8 h-8 bg-gradient-to-br from-napta-green/10 to-napta-blue/10 rounded-lg flex items-center justify-center mb-2">
                        <svg className="w-4 h-4 text-napta-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-slate-700 text-[11px] sm:text-xs leading-relaxed">{item}</p>
                    </div>
                  ))}
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We believe that by working together, we can create a future where public transport is not just a necessity but a seamless and reliable experience for all.
              </p>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-napta-green/10 rounded-2xl translate-x-2 -translate-y-2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-napta-blue/10 rounded-2xl -translate-x-2 translate-y-2 pointer-events-none" />
                <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]">
                  <img
                    src={storyImage}
                    alt="NAPTA team at a transport summit exhibition"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 sm:py-16 bg-canvas-alt">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] bg-white p-8 sm:p-10 lg:p-14 shadow-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-10"
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-napta-green rounded-full" />
                <p className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">Guiding Principles</p>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-napta-navy mb-3 tracking-tight">Our Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">Values</span></h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                These core values are reflected in everything we do.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {coreValues.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -3 }}
                  className={`group rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200/70 hover:border-slate-300 hover:shadow-[0_8px_24px_-8px_rgba(15,37,87,0.12)] transition-all duration-300 ${
                    item.featured
                      ? 'bg-gradient-to-br from-napta-blue to-napta-brightBlue shadow-lg shadow-napta-blue/30 hover:shadow-xl hover:shadow-napta-blue/40'
                      : 'bg-white'
                  }`}
                >
                  <div
                    className={`h-1 ${
                      item.featured
                        ? 'bg-white/30'
                        : 'bg-gradient-to-r from-napta-green to-napta-blue'
                    }`}
                  />
                  <div className="px-4 py-5 sm:px-5 sm:py-6 flex flex-col items-start text-left gap-2.5">
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                        item.featured
                          ? 'bg-white/20 backdrop-blur-sm shadow-sm'
                          : 'bg-gradient-to-br from-napta-green/10 to-napta-blue/10'
                      }`}
                    >
                      <item.icon
                        className={`w-5 h-5 ${item.featured ? 'text-white' : 'text-napta-green'}`}
                        strokeWidth={2}
                      />
                    </div>
                    <h3 className={`text-[11px] sm:text-sm font-bold leading-snug ${
                      item.featured ? 'text-white' : 'text-napta-navy'
                    }`}>{item.title}</h3>
                    <p className={`text-[9px] sm:text-[10px] leading-relaxed ${
                      item.featured ? 'text-white/80' : 'text-slate-500'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Memberships Section (SystemBlocks style) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] bg-canvas-alt p-8 sm:p-12 lg:p-16 shadow-xl border border-slate-200/70"
          >
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-napta-blue/10 rounded-full blur-3xl opacity-70" />
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-napta-green/10 rounded-full blur-3xl opacity-70" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
              <div className="lg:col-span-4">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-6 h-[2px] bg-gradient-to-r from-napta-green to-napta-blue rounded-full" />
                  <p className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">Strategic Relationships</p>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-napta-navy mb-4 tracking-tight">Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">Memberships</span></h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">Strategic relationships to strengthen our causes</p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 gap-4 sm:gap-6">
                {[
                  {
                    title: "Nairobi Air Quality Working Group",
                    description: "Convened by World Resources Institute (WRI), National Environment Management Authority (NEMA), and Nairobi City County.",
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )
                  },
                  {
                    title: "Socially Just Public Transport Working Group",
                    description: "Convened by Friedrich Ebert Stiftung (FES Kenya). Champions for inclusive mobility in Kenya.",
                    icon: (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className="bg-white border border-slate-200/70 rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-napta-green to-napta-blue rounded-2xl flex items-center justify-center shadow-lg shadow-napta-green/30">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-napta-navy mb-2 sm:mb-2 leading-tight tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Now matches NewsletterCTA/SystemBlocks completely! */}
      <section className="py-10 sm:py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 lg:p-12"
          >
            <div className="absolute top-0 left-0 w-96 h-96 bg-napta-blue/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-napta-green/20 rounded-full blur-3xl opacity-70"></div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  className="lg:col-span-7"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                    <div className="w-6 h-[2px] bg-gradient-to-r from-napta-green to-napta-blue rounded-full"></div>
                    <span className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                      Get Involved
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight tracking-tight">
            Be part of the <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">movement</span> transforming public transport in Africa
          </h2>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal mb-0">
                    Whether you're a government partner, operator, donor, or community member, there's a role for you in our journey.
                  </p>
                </motion.div>

                {/* Right - CTA Button */}
                <motion.div
                  className="lg:col-span-5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-napta-green/20 to-napta-blue/20 rounded-2xl sm:rounded-3xl blur-xl opacity-50"></div>
                    <div className="relative">
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo('contact');
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-napta-green/20 hover:shadow-xl hover:shadow-napta-green/30 relative overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-napta-blue to-napta-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative flex items-center gap-2">
                          Join Our Network
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StoryAndValuesPage;
