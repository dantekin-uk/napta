import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Compass, Zap, Heart, Globe } from 'lucide-react';

const StoryAndValuesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-napta-navy via-napta-blue to-napta-brightBlue rounded-b-[2rem] sm:rounded-b-[3rem] shadow-xl overflow-hidden py-10 sm:py-12 mx-1 sm:mx-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-napta-green rounded-full" />
              <p className="text-white/80 text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] uppercase">
                About Us
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
              Our Story & <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-lightGreen">Values</span>
            </h1>
            <p className="text-white/70 text-[11px] sm:text-xs max-w-2xl leading-relaxed">
              Driven by a shared vision for sustainable, equitable public transport across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-10 sm:py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {/* Vision Card with Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-3xl shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-napta-navy to-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d8587?auto=format&fit=crop&w=900&q=80"
                  alt="Public transport"
                  className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/60 to-transparent"></div>
              </div>

              <div className="relative p-8 sm:p-10 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-napta-blue/90 to-napta-brightBlue/90 rounded-xl flex items-center justify-center shadow-lg">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-white mb-1">
                    Our Vision
                  </h3>
                </div>
                <p className="text-white/90 text-sm sm:text-lg leading-relaxed">
                  To help build a transportation system that fosters economic vitality, advances social equity, conserves the environment, and improves the quality of life for all.
                </p>
              </div>
            </motion.div>

            {/* Mission (No Card - Direct on Background */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-napta-green rounded-full" />
                <p className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                  Mission
                </p>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">
                To shape public debate on critical transportation issues and build an innovative network of transportation professionals to progress this sector socially, economically, and technically.
              </p>

              <ul className="space-y-2">
                {[
                  "Promoting improved mobility on a national scale",
                  "Being the national network of collective transport professionals",
                  "Being the point of reference for knowledge on collective transport",
                  "Being the national forum for transport policy",
                  "Advocating for collective transport"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-napta-green rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Content + Image like Home Page */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-[2px] bg-napta-green rounded-full" />
                <p className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                  Our Journey
                </p>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-4">
                Our Story
              </h2>

              <div className="space-y-4 mb-6">
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Since its establishment, NAPTA has been dedicated to transforming public transport by promoting sustainability, efficiency, and inclusivity. With a strong focus on collaboration and innovation, we strive to enhance the quality of urban mobility for all.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Through strategic partnerships and policy advocacy, we work to address challenges in the public transport sector, fostering a future where mobility is safe, affordable, and environmentally responsible.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {[
                  "Advocating for sustainable & accessible transport solutions",
                  "Collaborating with key stakeholders to drive impactful change",
                  "Enhancing systems through research and innovation"
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="w-8 h-8 bg-gradient-to-br from-napta-green/10 to-napta-blue/10 rounded-lg flex items-center justify-center mb-2">
                      <CheckIcon />
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-napta-green/10 rounded-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-napta-blue/10 rounded-2xl" />
                <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1494438639946-1ebd1d68bf98?auto=format&fit=crop&w=900&q=80"
                    alt="NAPTA Story"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-napta-green rounded-full" />
              <p className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                Guiding Principles
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              { icon: Compass, title: 'Independence' },
              { icon: Globe, title: 'Collaboration' },
              { icon: Target, title: 'Relevance' },
              { icon: Zap, title: 'Excellence' },
              { icon: Heart, title: 'Integrity' },
              { icon: Eye, title: 'Entrepreneurialism' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100/50 shadow-sm hover:shadow-xl hover:border-napta-green/20 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-napta-green to-napta-blue rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-lg shadow-napta-green/20">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">{value.title}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-10 sm:mt-12"
          >
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              These core values are reflected in everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Memberships Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-napta-green rounded-full" />
              <p className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                Our Partnerships
              </p>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3">
              Memberships
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Strategic relationships to strengthen our causes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Nairobi Air Quality Working Group",
                description: "Convened by World Resources Institute (WRI), National Environment Management Authority (NEMA), and Nairobi City County. The working group offers a platform and network of professional engagements aimed towards reduction of air pollution in Kenya."
              },
              {
                title: "Socially Just Public Transport Working Group",
                description: "Convened by Friedrich Ebert Stiftung (FES Kenya). The working group champions for inclusive mobility in Kenya."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-6 sm:p-8 border border-slate-100/60 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-napta-green/10 to-napta-blue/10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-napta-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 lg:p-12"
          >
            {/* Corner Glow Patches */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-napta-blue/20 rounded-full blur-3xl opacity-70" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-napta-green/20 rounded-full blur-3xl opacity-70" />

            {/* Decorative floating elements */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Content */}
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
                    <div className="w-6 h-[2px] bg-gradient-to-r from-napta-green to-napta-blue rounded-full" />
                    <span className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                      Join Our Mission
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight tracking-tight">
                    Be part of the movement transforming public transport in Africa
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
                    <div className="absolute inset-0 bg-gradient-to-r from-napta-green/20 to-napta-blue/20 rounded-2xl sm:rounded-3xl blur-xl opacity-50" />
                    <div className="relative">
                      <a
                        href="#contact"
                        className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold py-4 sm:py-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm transition-all duration-300 shadow-md shadow-napta-green/20 hover:shadow-xl hover:shadow-napta-green/30"
                      >
                        <span className="relative flex items-center gap-2">
                          Get Involved
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </a>
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

// Checkmark icon component
const CheckIcon = () => (
  <svg className="w-4 h-4 text-napta-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default StoryAndValuesPage;
