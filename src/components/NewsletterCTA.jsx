import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-8 sm:py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Main Background Container - Matching SystemBlocks design */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 lg:p-12">
          {/* Corner Glow Patches - Matching SystemBlocks */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-napta-blue/20 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-napta-green/20 rounded-full blur-3xl opacity-70"></div>

          {/* Decorative floating elements */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          ></motion.div>
          <motion.div
            className="absolute bottom-20 left-16 w-12 h-12 border border-napta-green/20 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          ></motion.div>

          {/* Content */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <motion.div
                className="lg:col-span-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="w-6 h-[2px] bg-gradient-to-r from-napta-green to-napta-blue rounded-full"></div>
                  <span className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                    Stay Informed
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight tracking-tight">
                  Join Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">Newsletter</span>
                </h2>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal mb-0">
                  Get the latest updates on transportation innovations, policy reforms, and our impact initiatives delivered straight to your inbox.
                </p>
              </motion.div>

              {/* Right - Newsletter Form */}
              <motion.div
                className="lg:col-span-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-napta-green/20 to-napta-blue/20 rounded-2xl sm:rounded-3xl blur-xl opacity-50"></div>
                  <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-7">
                    {!isSubscribed ? (
                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-white/80 text-xs sm:text-sm font-medium">
                            Email Address
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10m0 0l7.89-5.26a2 2 0 00-2.22 0L3 8" />
                              </svg>
                            </div>
                            <input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="you@example.com"
                              className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-3 sm:py-3.5 text-xs sm:text-sm text-white bg-white/5 border border-white/15 rounded-xl focus:outline-none focus:border-napta-green/50 focus:ring-1 focus:ring-napta-green/30 placeholder:text-slate-500 transition-all duration-300"
                              required
                            />
                          </div>
                        </div>

                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-napta-green/20 hover:shadow-xl hover:shadow-napta-green/30 relative overflow-hidden group"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-napta-blue to-napta-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          <span className="relative">Subscribe to Newsletter</span>
                        </motion.button>

                        <p className="text-slate-500 text-[10px] sm:text-xs text-center">
                          No spam, unsubscribe at any time.
                        </p>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-6 sm:py-8"
                      >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-full bg-napta-green/20 flex items-center justify-center">
                          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-napta-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-white text-base sm:text-lg font-bold mb-1 sm:mb-2">Successfully Subscribed!</h3>
                        <p className="text-slate-400 text-xs sm:text-sm">
                          Thank you for joining our newsletter community.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
