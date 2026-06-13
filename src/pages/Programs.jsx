import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../contexts/NavigationContext';
import { BookOpen, Users, Leaf, Award, Zap, Wind } from 'lucide-react';
import fleetImage from '../assets/home/fleet.jpg';

const programsData = [
  {
    id: 'legal-reforms',
    title: 'Public Transport Legal, Regulatory and Policy Reforms',
    subtitle: 'Strengthening Legal Frameworks',
    description: 'Identify existing gaps, challenges and opportunities in the legal, regulatory and policy framework that governs the public transport sector.',
    icon: BookOpen,
    fullDescription: 'This program seeks to identify existing gaps, challenges and opportunities in the legal, regulatory and policy framework that governs the public transport sector. The sector is governed by various Acts of Parliament, Regulations, County legislation and the Constitution of Kenya 2010. For the sector to thrive and serve the public well, it needs a vibrant legal framework that is aligned to the ideals of a safe, efficient, clean and sustainable public transport.\n\nUnder this program, we undertake audits of the existing legal, regulatory and policy framework with a view of identifying areas of improvement. We engage all stakeholders including government agencies, county governments, public transport operators, civil society organizations, development partners and passengers to get their views on various proposals for reforms.'
  },
  {
    id: 'fleet-renewal',
    title: 'Financing Fleet Renewal for Public Transport Operators',
    subtitle: 'Modernizing Public Transport',
    description: 'A transformative initiative anchored on three core pillars—Training, Restructuring, and Financing.',
    icon: Zap,
    fullDescription: 'The Financing of Fleet Renewal for Public Transport Operators is a transformative initiative designed to modernize and professionalize Kenya\'s public transport sector. Anchored on three core pillars—Training, Restructuring, and Financing, the program seeks to address the systemic challenges facing the matatu sector, paving the way for safer, cleaner, and more efficient public transportation services.\n\nThe program targets Public Service Vehicle (PSV) Saccos/companies, aiming to equip their officials, drivers, and conductors with essential skills and knowledge, restructure their operations to align with best practices, and facilitate access to affordable financing for upgrading their fleets and systems. This integrated approach will unlock the sector\'s potential, improve passenger experiences, and foster sustainable urban mobility.'
  },
  {
    id: 'transformational-leadership',
    title: 'Transformational Public Transport Leadership Program',
    subtitle: 'Developing Tomorrow\'s Leaders',
    description: 'Developing exceptional public and private sector leaders to serve the public transport sector with enhanced competencies.',
    icon: Users,
    fullDescription: 'The Transformational Public Transport Leadership Program is devoted to developing exceptional public and private sector leaders to serve the public transport sector. The Program provides individuals in mid-level to senior management positions with opportunities to improve leadership skills, enhance their leadership competencies, and work with peers and mentors in the public transport sector.\n\nThe Program cultivates leadership excellence in a diverse group of professionals who are committed to building and maintaining a world-class public transportation system in an environment that is constantly changing. In future we hope to host the Transform Transport Leadership Conference for public transportation professionals to engage in workshops, experience technical tours, and network with colleagues. Keynote speakers and educational sessions explore cutting-edge topics, including transformative technology, community building, innovative funding and finance, safety and security, workforce development, mega projects, and more.'
  },
  {
    id: 'public-summit',
    title: 'The Kenya Transport Summit & Expo',
    subtitle: 'Driving Industry Dialogue',
    description: 'An annual gathering of key stakeholders fostering dialogue, innovation, and collaboration to drive transformation in the industry.',
    icon: Award,
    fullDescription: 'The Kenya Transport Summit & Expo is an annual gathering of key stakeholders in Kenya\'s public transport sector, aimed at fostering dialogue, innovation, and collaboration to drive transformation in the industry. The event serves as a premier platform for policymakers, transport operators, fintech innovators, vehicle manufacturers, investors, and regulatory bodies to discuss challenges, share insights, and showcase emerging technologies that can improve efficiency, safety, and sustainability in public transport.\n\nThe summit is designed to facilitate policy discussions, industry networking, and technology exhibitions that will shape the future of Kenya\'s public transport system. Key areas of focus include digital fare payment systems, transport infrastructure, vehicle technology, regulatory reforms, and sustainable mobility solutions.'
  },
  {
    id: 'leadership-awards',
    title: 'Sustainable Mobility Leadership Awards',
    subtitle: 'Celebrating Excellence',
    description: 'A prestigious recognition program celebrating outstanding contributions and leadership in Kenya\'s public transport sector.',
    icon: Award,
    fullDescription: 'The Public Transport Leadership Excellence Awards is a prestigious recognition program designed to celebrate outstanding contributions and leadership in Kenya\'s public transport sector. As part of the Kenya Transport Summit & Expo 2025 in Nakuru City, this gala dinner will bring together key stakeholders, policymakers, industry leaders, and innovators to honor individuals and organizations that have demonstrated exemplary service, innovation, and impact in shaping the future of public transport in Kenya.\n\nObjectives:\n- Recognize and honor outstanding leadership, innovation, and service excellence in public transport\n- Encourage best practices and inspire continuous improvement in the industry\n- Foster collaboration among key stakeholders, including government agencies, transport operators, technology providers, and development partners\n- Showcase innovations and policies that have enhanced safety, efficiency, and accessibility in public transport\n\nThe inaugural awards will take place during the 2025 Kenya Transport Summit & Expo in Nairobi.'
  },
  {
    id: 'breathe-cities',
    title: 'Breathe Cities',
    subtitle: 'Improving Air Quality',
    description: 'A comprehensive communication and advocacy strategy focused on improving air quality in Nairobi through multi-faceted regulatory approach.',
    icon: Wind,
    fullDescription: 'This Project aims to improve air quality in Nairobi through a comprehensive communication, advocacy, and campaign strategy focused on multi-faceted regulatory approach. Led by Kusudi Cause Communication Trust (KCCT), the project will involve collaboration with The National Public Transport Alliance (NAPTA), Muungano wa Wanavijiji, and Groots Kenya.\n\nBy raising public awareness, empowering communities to participate in policy development, and advocating for effective regulations, the project will create a collaborative environment for tracking air pollution in Nairobi. This effort will complement the development of regulations to enforce relevant Nairobi City County Acts, ensuring Nairobi\'s population becomes a key supporter and driver of enhanced regulations fostering transformative change.'
  }
];

const ProgramCard = ({ program, index, onClick }) => {
  const Icon = program.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)' }}
      onClick={onClick}
      className="group cursor-pointer h-full"
    >
      <div className="h-full bg-white rounded-2xl overflow-hidden border border-slate-200/50 hover:border-slate-300 transition-all duration-300 flex flex-col">
        {/* Color Bar */}
        <div className="h-1.5 bg-gradient-to-r from-napta-green to-napta-blue"></div>

        {/* Content */}
        <div className="p-6 sm:p-7 flex flex-col h-full">
          {/* Icon */}
          <div className="w-14 h-14 bg-gradient-to-br from-napta-green to-napta-blue rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon size={28} />
          </div>

          {/* Title and Subtitle */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700 transition-all duration-300">
            {program.title}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-napta-green mb-3">
            {program.subtitle}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
            {program.description}
          </p>

          {/* CTA Link */}
          <div className="mt-4 inline-flex items-center gap-2 text-napta-green font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-300">
            Learn More
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProgramsPage = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-napta-navy via-napta-blue to-napta-brightBlue rounded-b-[2rem] sm:rounded-b-[3rem] shadow-xl overflow-hidden py-10 sm:py-12 mx-1 sm:mx-1">
        <div className="absolute inset-0 opacity-20">
          <img
            src={fleetImage}
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
              <p className="text-white/80 text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] uppercase">
                Our Initiatives
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">Programs</span>
          </h1>
            <p className="text-white/70 text-[11px] sm:text-xs max-w-2xl leading-relaxed">
              Transformative initiatives driving sustainable public transport, leadership excellence, and policy reform across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-canvas-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {programsData.map((program, index) => (
              <ProgramCard
                key={program.id}
                program={program}
                index={index}
                onClick={() => navigateTo(`programs/${program.id}`)}
              />
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
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 lg:p-12"
          >
            <div className="absolute top-0 left-0 w-96 h-96 bg-napta-blue/20 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-napta-green/20 rounded-full blur-3xl opacity-70"></div>

            <motion.div
              className="absolute top-10 right-10 w-20 h-20 border border-white/10 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
                    Join our <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">transformation</span> journey
                  </h2>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal mb-0">
                    Be part of our initiatives and help us drive sustainable public transport across Africa.
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
                    <div className="absolute inset-0 bg-gradient-to-r from-napta-green/20 to-napta-blue/20 rounded-2xl sm:rounded-3xl blur-xl opacity-50"></div>
                    <div className="relative">
                      <motion.button
                        onClick={(e) => {
                          e.preventDefault();
                          navigateTo('contact');
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold py-4 sm:py-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-napta-green/20 hover:shadow-xl hover:shadow-napta-green/30 relative overflow-hidden group"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-napta-blue to-napta-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative flex items-center gap-2">
                          Get In Touch
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

export default ProgramsPage;
