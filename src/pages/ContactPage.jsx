import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import contactHeroImage from '../assets/home/_APF6716 - Copy.JPG';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');

  const subjectOptions = [
    'General Inquiry',
    'Partnership',
    'Programs',
    'The Summit',
    'Media',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    setFormData({
      ...formData,
      subject: subject
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSelectedSubject('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      description: '4th Floor, The Promenade\nGeneral Mathenge Road, Westlands\nNairobi, Kenya',
      color: 'from-napta-green to-napta-blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+254 719 282 866\n+254 741 024 622',
      color: 'from-napta-blue to-napta-brightBlue'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'info@napta.or.ke',
      color: 'from-napta-green/80 to-napta-blue/80'
    }
  ];

  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-napta-navy via-napta-blue to-napta-brightBlue rounded-b-[2rem] sm:rounded-b-[3rem] shadow-xl overflow-hidden py-10 sm:py-12 mx-1 sm:mx-1">
        <div className="absolute inset-0 opacity-20">
          <img
            src={contactHeroImage}
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
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-napta-green rounded-full" />
              <p className="text-white/80 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                Get in Touch
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
              Contact <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">Us</span>
            </h1>
            <p className="text-white/70 text-[11px] sm:text-xs max-w-xl leading-relaxed">
              We'd love to hear from you! Whether you have a question about our programs, partnerships, or anything else, our team is ready to answer all your questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <h2 className="text-lg sm:text-xl font-extrabold text-napta-navy mb-6 tracking-tight">
                Get Connected
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="group relative overflow-hidden rounded-2xl bg-canvas-alt p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className={`absolute top-0 left-0 w-16 h-16 bg-gradient-to-br ${item.color} rounded-br-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                    <div className="relative z-10">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon size={24} />
                      </div>
                      <h3 className="text-sm font-bold text-napta-navy mb-1">{item.title}</h3>
                      <div className="text-slate-600 text-xs sm:text-sm whitespace-pre-line">
                        {item.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 p-5 border border-slate-200/70 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-napta-green animate-pulse" />
                  <h3 className="text-sm font-bold text-napta-navy">Our Office</h3>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Nairobi, Kenya
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-canvas-alt p-6 sm:p-8 lg:p-10 border border-slate-200/70 shadow-xl">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-napta-green/10 rounded-full blur-3xl opacity-70" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-napta-blue/10 rounded-full blur-3xl opacity-70" />
                
                <div className="relative z-10">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-napta-navy mb-6 tracking-tight">
                    Send us a <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">Message</span>
                  </h2>

                  {/* Success Message */}
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 flex items-center gap-3 p-4 rounded-xl bg-green-50 border border-green-200"
                    >
                      <CheckCircle2 className="text-green-600 w-6 h-6 flex-shrink-0" />
                      <p className="text-green-800 text-sm font-medium">
                        Thank you for your message! We'll get back to you soon.
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-slate-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-napta-green/40 focus:border-napta-green transition-all duration-200"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-napta-blue/40 focus:border-napta-blue transition-all duration-200"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-slate-700">
                        Subject
                      </label>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {subjectOptions.map((subject, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSubjectSelect(subject)}
                            className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                              selectedSubject === subject
                                ? 'bg-gradient-to-r from-napta-green to-napta-blue text-white shadow-md shadow-napta-green/20'
                                : 'bg-white border border-slate-200 text-slate-700 hover:border-napta-green/50 hover:text-napta-navy'
                            }`}
                          >
                            {subject}
                          </button>
                        ))}
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-napta-green/40 focus:border-napta-green transition-all duration-200"
                        placeholder="Or type your subject..."
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-slate-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-napta-blue/40 focus:border-napta-blue transition-all duration-200 resize-none"
                        placeholder="Tell us about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-napta-green/20 hover:shadow-xl hover:shadow-napta-green/30 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          Send Message
                          <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
