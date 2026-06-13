import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import faqHeroImage from '../assets/home/training.jpeg';

const FAQPage = () => {
  const { navigateTo } = useNavigation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is NAPTA?",
      answer: "NAPTA is the National Public Transport Alliance, an organization dedicated to transforming public transport in Kenya by promoting sustainability, efficiency, and inclusivity. We work with stakeholders across the sector to drive positive change and build a world-class public transport system."
    },
    {
      question: "What programs does NAPTA offer?",
      answer: "NAPTA offers several comprehensive programs including: Legal & Policy Reforms, Financing Fleet Renewal for Public Transport Operators, Transformational Public Transport Leadership, The Kenya Transport Summit & Expo, Sustainable Mobility Leadership Awards, and the Breathe Cities initiative."
    },
    {
      question: "How can I partner with NAPTA?",
      answer: "You can partner with NAPTA by reaching out through our contact page, attending our events like the Kenya Transport Summit & Expo, or exploring our programs page to find collaboration opportunities. We welcome partnerships with government agencies, private sector companies, and civil society organizations."
    },
    {
      question: "When is the next Kenya Transport Summit & Expo?",
      answer: "The next Kenya Transport Summit & Expo will be announced on our website and through our official channels. Please visit our Summit page regularly for the latest updates on dates, venue, and registration."
    },
    {
      question: "How do I register for the summit?",
      answer: "Summit registration details will be available on the official summit website and linked from our NAPTA Summit page once registration opens. Follow us on social media to be the first to know when registration becomes available."
    },
    {
      question: "What is the Breathe Cities project?",
      answer: "Breathe Cities is a project aimed at improving air quality in Nairobi through comprehensive communication, advocacy, and campaign strategies focused on multi-faceted regulatory approaches. Led by Kusudi Cause Communication Trust (KCCT), the project involves collaboration with NAPTA, Muungano wa Wanavijiji, and Groots Kenya."
    },
    {
      question: "How can I join NAPTA as a member?",
      answer: "To learn about membership opportunities and requirements, please reach out to us through our contact page. We offer different membership categories for individuals, organizations, and public transport operators."
    },
    {
      question: "What is the Transformational Public Transport Leadership Program?",
      answer: "The Transformational Public Transport Leadership Program is dedicated to developing exceptional public and private sector leaders to serve the public transport sector. It provides mid-level to senior management professionals with opportunities to improve leadership skills and work with peers and mentors in the industry."
    },
    {
      question: "What is the Financing Fleet Renewal program?",
      answer: "The Financing of Fleet Renewal for Public Transport Operators is a transformative initiative designed to modernize and professionalize Kenya's public transport sector. It focuses on training, restructuring, and facilitating access to affordable financing for upgrading fleets and systems."
    },
    {
      question: "What are the Sustainable Mobility Leadership Awards?",
      answer: "The Sustainable Mobility Leadership Awards is a prestigious recognition program designed to celebrate outstanding contributions and leadership in Kenya's public transport sector. The awards are presented during the Kenya Transport Summit & Expo."
    },
    {
      question: "Where is NAPTA located?",
      answer: "NAPTA is located at 4th Floor, The Promenade, General Mathenge Road, Westlands, Nairobi, Kenya."
    },
    {
      question: "How can I contact NAPTA?",
      answer: "You can contact NAPTA through our contact page, by calling +254 719 282 866 or +254 741 024 622, or by emailing info@napta.or.ke."
    },
    {
      question: "What is the Legal & Policy Reforms Program?",
      answer: "This program seeks to identify existing gaps, challenges, and opportunities in the legal, regulatory, and policy framework that governs Kenya's public transport sector. We conduct audits and engage stakeholders to propose reforms aligned with the Constitution of Kenya 2010."
    },
    {
      question: "Who can attend the Kenya Transport Summit & Expo?",
      answer: "The summit is open to policymakers, transport operators, fintech innovators, vehicle manufacturers, investors, regulatory bodies, civil society organizations, and all stakeholders in Kenya's public transport sector."
    },
    {
      question: "What are the key focus areas of the summit?",
      answer: "Key focus areas of the Kenya Transport Summit & Expo include digital fare payment systems, transport infrastructure, vehicle technology, regulatory reforms, and sustainable mobility solutions."
    },
    {
      question: "How does NAPTA support public transport operators?",
      answer: "NAPTA supports public transport operators through training programs, access to financing for fleet renewal, policy advocacy, and creating networks for collaboration and knowledge sharing."
    },
    {
      question: "Does NAPTA offer training programs?",
      answer: "Yes, NAPTA offers training programs as part of our Transformational Public Transport Leadership Program and our Financing Fleet Renewal initiative."
    },
    {
      question: "How can I stay updated on NAPTA news and events?",
      answer: "You can stay updated by following our official website, subscribing to our newsletter (coming soon), and connecting with us on social media."
    },
    {
      question: "What is the vision of NAPTA?",
      answer: "NAPTA's vision is to help build a transport system that fosters economic vitality, advances social equity, conserves the environment, and improves the quality of life for all Kenyans."
    },
    {
      question: "What is the mission of NAPTA?",
      answer: "NAPTA's mission is to shape public debate on critical transportation issues and build an innovative network of transportation professionals to progress the sector socially, economically, and technically."
    },
    {
      question: "How is NAPTA governed?",
      answer: "NAPTA is governed by a Board of Directors and supported by a dedicated team of professionals working across our various programs and initiatives."
    },
    {
      question: "Can I volunteer with NAPTA?",
      answer: "We welcome volunteers who are passionate about transforming public transport in Kenya. Please contact us to learn about current volunteer opportunities."
    },
    {
      question: "Does NAPTA work with county governments?",
      answer: "Yes, NAPTA collaborates with county governments across Kenya to improve public transport at the local level through policy engagement and program implementation."
    },
    {
      question: "What is the role of public transport operators in NAPTA?",
      answer: "Public transport operators are key stakeholders in NAPTA. They participate in our programs, provide valuable insights on sector challenges, and help implement solutions on the ground."
    },
    {
      question: "How does NAPTA address safety in public transport?",
      answer: "NAPTA addresses safety through policy advocacy, training for operators and drivers, and promoting best practices in vehicle maintenance and operations."
    },
    {
      question: "What is the future of public transport in Kenya according to NAPTA?",
      answer: "NAPTA envisions a future with safe, efficient, clean, and sustainable public transport that is accessible to all Kenyans and supports economic development across the country."
    },
    {
      question: "How can I sponsor or exhibit at the summit?",
      answer: "If you're interested in sponsoring or exhibiting at the Kenya Transport Summit & Expo, please contact us for sponsorship packages and exhibition opportunities."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-napta-navy via-napta-blue to-napta-brightBlue rounded-b-[2rem] sm:rounded-b-[3rem] shadow-xl overflow-hidden py-10 sm:py-12 mx-1 sm:mx-1">
        <div className="absolute inset-0 opacity-20">
          <img
            src={faqHeroImage}
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
                Frequently Asked Questions
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
              Your Questions, <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">Answered</span>
            </h1>
            <p className="text-white/70 text-[11px] sm:text-xs max-w-xl leading-relaxed">
              Find answers to common questions about NAPTA, our programs, events, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-canvas-alt p-5 sm:p-6 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-sm sm:text-base font-bold text-napta-navy pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-napta-green" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-napta-navy" />
                    )}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-slate-600 text-xs sm:text-sm pt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
                    Still Have Questions?
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
                  We're Here to{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">
                    Help
                  </span>
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal mb-0">
                  Reach out to our team and we'll get back to you as soon as possible with answers to your questions.
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
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo('contact');
                      }}
                      className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-napta-green/20 hover:shadow-xl hover:shadow-napta-green/30"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-napta-blue to-napta-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
                      <span className="relative flex items-center gap-2">
                        Contact Us
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
    </div>
  );
};

export default FAQPage;
