import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../contexts/NavigationContext';

const Footer = () => {
  const { navigateTo } = useNavigation();

  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Our Story & Values', page: 'story' },
    { label: 'Our Programs', page: 'programs' },
    { label: 'The Summit', page: 'summit' },
    { label: 'Contact Us', page: 'contact' }
  ];

  const programs = [
    { label: 'Legal & Policy Reforms', page: 'programs/legal-reforms' },
    { label: 'Fleet Renewal Initiative', page: 'programs/fleet-renewal' },
    { label: 'Transformational Leadership', page: 'programs/transformational-leadership' },
    { label: 'Breathe Cities Campaign', page: 'programs/breathe-cities' }
  ];

  const eventsAndHubs = [
    { label: 'News & Updates', page: 'news' },
    { label: 'Blog', page: 'blog' },
    { label: 'Resources', page: 'resources' },
    { label: 'FAQs', page: 'faq' }
  ];

  const socialLinks = [
    { icon: 'twitter', href: 'https://x.com/napta_alliance' },
    { icon: 'linkedin', href: 'https://www.linkedin.com/company/88047507/' },
    { icon: 'facebook', href: 'https://web.facebook.com/uchukuzitv/' },
    { icon: 'instagram', href: 'https://www.instagram.com/napta.alliance/' }
  ];

  const SocialIcon = ({ icon, className = '' }) => {
    const icons = {
      twitter: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      linkedin: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      facebook: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      instagram: (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    };
    return icons[icon] || null;
  };

  return (
    <footer className="bg-gradient-to-br from-[#0f2557] via-[#1e3a8a] to-[#0f2557] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-napta-green/10 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-napta-blue/10 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 xl:gap-10">
          {/* Left Column - Logo & Mission */}
          <motion.div 
            className="sm:col-span-2 lg:col-span-3 xl:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4 flex justify-start">
              <img
                src="/naptalogo.png"
                alt="NAPTA Logo"
                className="h-7 sm:h-8 lg:h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-blue-200 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
              Advancing sustainable public mobility through policy reform, innovation, and fleet modernization.
            </p>
            
            {/* Social media icons */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white/10 hover:bg-napta-green rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-napta-green/20"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <SocialIcon icon={social.icon} className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(link.page);
                    }}
                    className="text-blue-200 hover:text-napta-green text-xs sm:text-sm transition-colors duration-300 relative group cursor-pointer"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-napta-green transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Programs</h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {programs.map((program, idx) => (
                <motion.li key={program.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.25 + idx * 0.05 }}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(program.page);
                    }}
                    className="text-blue-200 hover:text-napta-green text-xs sm:text-sm transition-colors duration-300 relative group cursor-pointer"
                  >
                    {program.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-napta-green transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Events & Hubs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Events & Hubs</h3>
      
            <ul className="space-y-2.5 sm:space-y-3">
              {eventsAndHubs.map((item, idx) => (
                <motion.li key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(item.page);
                    }}
                    className="text-blue-200 hover:text-napta-green text-xs sm:text-sm transition-colors duration-300 relative group cursor-pointer"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-napta-green transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Contact */}
          <motion.div
            className="sm:col-span-2 lg:col-span-3 xl:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-white">Contact Us</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2.5 sm:gap-3">
                <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-napta-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-blue-200 text-xs sm:text-sm">
                    4th Floor, The Promenade<br />
                    General Mathenge Road, Westlands<br />
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-napta-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-blue-200 text-xs sm:text-sm">
                  <a href="tel:+254719282866" className="hover:text-napta-green transition-colors">+254 719 282 866</a>
                  <span className="mx-1">/</span>
                  <a href="tel:+254741024622" className="hover:text-napta-green transition-colors">+254 741 024 622</a>
                </div>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <svg className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 lg:w-5 lg:h-5 text-napta-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10m0 0l7.89-5.26a2 2 0 00-2.22 0L3 8" />
                </svg>
                <a href="mailto:info@napta.or.ke" className="text-blue-200 text-xs sm:text-sm hover:text-napta-green transition-colors">
                  info@napta.or.ke
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6 sm:my-8 lg:my-10" />

        {/* Bottom Bar */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-blue-200 text-xs sm:text-sm">
            © 2026 NAPTA. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#privacy" className="text-blue-200 hover:text-napta-green text-xs sm:text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="text-blue-200 hover:text-napta-green text-xs sm:text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
