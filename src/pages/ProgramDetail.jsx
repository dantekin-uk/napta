import React from 'react';
import { motion } from 'framer-motion';
import { useNavigation } from '../contexts/NavigationContext';
import { ArrowLeft, BookOpen, Users, Leaf, Award, Zap, Wind, Target, Handshake, TrendingUp, Lightbulb } from 'lucide-react';
import leadershipAwardsImage from '../assets/gallery23.webp';
import summitImage from '../assets/summatau.jpg';
import legalReformsImage from '../assets/unnamed (7) (1).jpg';
import fleetRenewalImage from '../assets/home/fleet.jpg';
import breatheCitiesImage from '../assets/home/breathe.jpeg';
import leadershipImage from '../assets/home/training.jpeg';

const programsData = [
  {
    id: 'legal-reforms',
    title: 'Public Transport Legal, Regulatory and Policy Reforms',
    subtitle: 'Strengthening Legal Frameworks',
    description: 'Identify existing gaps, challenges and opportunities in the legal, regulatory and policy framework that governs the public transport sector.',
    icon: BookOpen,
    image: legalReformsImage,
    fullDescription: 'This program seeks to identify existing gaps, challenges and opportunities in the legal, regulatory and policy framework that governs the public transport sector. The sector is governed by various Acts of Parliament, Regulations, County legislation and the Constitution of Kenya 2010. For the sector to thrive and serve the public well, it needs a vibrant legal framework that is aligned to the ideals of a safe, efficient, clean and sustainable public transport.\n\nUnder this program, we undertake audits of the existing legal, regulatory and policy framework with a view of identifying areas of improvement. We engage all stakeholders including government agencies, county governments, public transport operators, civil society organizations, development partners and passengers to get their views on various proposals for reforms.',
    keyImpactAreas: [
      { icon: BookOpen, label: 'Legal Audit', value: 'Comprehensive reviews of existing transport laws' },
      { icon: Users, label: 'Stakeholder Engagement', value: 'Including all sector players in reforms' },
      { icon: Target, label: 'Policy Alignment', value: 'Aligning with Constitution & global best practices' },
      { icon: Leaf, label: 'Sustainability Focus', value: 'Incorporating environmental considerations' }
    ]
  },
  {
    id: 'fleet-renewal',
    title: 'Financing Fleet Renewal for Public Transport Operators',
    subtitle: 'Modernizing Public Transport',
    description: 'A transformative initiative anchored on three core pillars—Training, Restructuring, and Financing.',
    icon: Zap,
    image: fleetRenewalImage,
    fullDescription: 'The Financing of Fleet Renewal for Public Transport Operators is a transformative initiative designed to modernize and professionalize Kenya\'s public transport sector. Anchored on three core pillars—Training, Restructuring, and Financing, the program seeks to address the systemic challenges facing the matatu sector, paving the way for safer, cleaner, and more efficient public transportation services.\n\nThe program targets Public Service Vehicle (PSV) Saccos/companies, aiming to equip their officials, drivers, and conductors with essential skills and knowledge, restructure their operations to align with best practices, and facilitate access to affordable financing for upgrading their fleets and systems. This integrated approach will unlock the sector\'s potential, improve passenger experiences, and foster sustainable urban mobility.',
    keyImpactAreas: [
      { icon: Users, label: 'Capacity Building', value: 'Training for operators, drivers, and conductors' },
      { icon: TrendingUp, label: 'Operations Restructuring', value: 'Implementing professional management systems' },
      { icon: Zap, label: 'Affordable Financing', value: 'Facilitating access to fleet upgrade funding' },
      { icon: Leaf, label: 'Green Fleet', value: 'Promoting cleaner, more efficient vehicles' }
    ]
  },
  {
    id: 'transformational-leadership',
    title: 'Transformational Public Transport Leadership Program',
    subtitle: 'Developing Tomorrow\'s Leaders',
    description: 'Developing exceptional public and private sector leaders to serve the public transport sector with enhanced competencies.',
    icon: Users,
    image: leadershipImage,
    fullDescription: 'The Transformational Public Transport Leadership Program is devoted to developing exceptional public and private sector leaders to serve the public transport sector. The Program provides individuals in mid-level to senior management positions with opportunities to improve leadership skills, enhance their leadership competencies, and work with peers and mentors in the public transport sector.\n\nThe Program cultivates leadership excellence in a diverse group of professionals who are committed to building and maintaining a world-class public transportation system in an environment that is constantly changing. In future we hope to host the Transform Transport Leadership Conference for public transportation professionals to engage in workshops, experience technical tours, and network with colleagues. Keynote speakers and educational sessions explore cutting-edge topics, including transformative technology, community building, innovative funding and finance, safety and security, workforce development, mega projects, and more.',
    keyImpactAreas: [
      { icon: Users, label: 'Leadership Development', value: 'Building capacity of mid & senior managers' },
      { icon: Award, label: 'Mentorship Program', value: 'Connecting emerging leaders with industry veterans' },
      { icon: Lightbulb, label: 'Innovation Leadership', value: 'Driving transformative thinking in the sector' },
      { icon: Handshake, label: 'Network Building', value: 'Creating strong professional networks' }
    ]
  },
  {
    id: 'public-summit',
    title: 'The Kenya Transport Summit & Expo',
    subtitle: 'Driving Industry Dialogue',
    description: 'An annual gathering of key stakeholders fostering dialogue, innovation, and collaboration to drive transformation in the industry.',
    icon: Award,
    image: summitImage,
    fullDescription: 'The Kenya Transport Summit & Expo is an annual gathering of key stakeholders in Kenya\'s public transport sector, aimed at fostering dialogue, innovation, and collaboration to drive transformation in the industry. The event serves as a premier platform for policymakers, transport operators, fintech innovators, vehicle manufacturers, investors, and regulatory bodies to discuss challenges, share insights, and showcase emerging technologies that can improve efficiency, safety, and sustainability in public transport.\n\nThe summit is designed to facilitate policy discussions, industry networking, and technology exhibitions that will shape the future of Kenya\'s public transport system. Key areas of focus include digital fare payment systems, transport infrastructure, vehicle technology, regulatory reforms, and sustainable mobility solutions.',
    keyImpactAreas: [
      { icon: Handshake, label: 'Industry Collaboration', value: 'Bringing together all key sector stakeholders' },
      { icon: Lightbulb, label: 'Tech Innovation', value: 'Showcasing digital payment & mobility solutions' },
      { icon: Target, label: 'Policy Dialogue', value: 'Discussing regulatory & infrastructure reforms' },
      { icon: TrendingUp, label: 'Future Readiness', value: 'Preparing for emerging transport technologies' }
    ]
  },
  {
    id: 'leadership-awards',
    title: 'Sustainable Mobility Leadership Awards',
    subtitle: 'Celebrating Excellence',
    description: 'A prestigious recognition program celebrating outstanding contributions and leadership in Kenya\'s public transport sector.',
    icon: Award,
    image: leadershipAwardsImage,
    fullDescription: 'The Public Transport Leadership Excellence Awards is a prestigious recognition program designed to celebrate outstanding contributions and leadership in Kenya\'s public transport sector. As part of the Kenya Transport Summit & Expo 2025 in Nakuru City, this gala dinner will bring together key stakeholders, policymakers, industry leaders, and innovators to honor individuals and organizations that have demonstrated exemplary service, innovation, and impact in shaping the future of public transport in Kenya.\n\nObjectives:\n- Recognize and honor outstanding leadership, innovation, and service excellence in public transport\n- Encourage best practices and inspire continuous improvement in the industry\n- Foster collaboration among key stakeholders, including government agencies, transport operators, technology providers, and development partners\n- Showcase innovations and policies that have enhanced safety, efficiency, and accessibility in public transport\n\nThe inaugural awards will take place during the 2025 Kenya Transport Summit & Expo in Nairobi.',
    keyImpactAreas: [
      { icon: Award, label: 'Excellence Recognition', value: 'Celebrating outstanding sector contributions' },
      { icon: TrendingUp, label: 'Best Practices', value: 'Inspiring continuous improvement industry-wide' },
      { icon: Handshake, label: 'Collaboration', value: 'Fostering partnerships across the ecosystem' },
      { icon: Lightbulb, label: 'Innovation Showcase', value: 'Highlighting groundbreaking solutions' }
    ]
  },
  {
    id: 'breathe-cities',
    title: 'Breathe Cities',
    subtitle: 'Improving Air Quality',
    description: 'A comprehensive communication and advocacy strategy focused on improving air quality in Nairobi through multi-faceted regulatory approach.',
    icon: Wind,
    image: breatheCitiesImage,
    fullDescription: 'This Project aims to improve air quality in Nairobi through a comprehensive communication, advocacy, and campaign strategy focused on multi-faceted regulatory approach. Led by Kusudi Cause Communication Trust (KCCT), the project will involve collaboration with The National Public Transport Alliance (NAPTA), Muungano wa Wanavijiji, and Groots Kenya.\n\nBy raising public awareness, empowering communities to participate in policy development, and advocating for effective regulations, the project will create a collaborative environment for tracking air pollution in Nairobi. This effort will complement the development of regulations to enforce relevant Nairobi City County Acts, ensuring Nairobi\'s population becomes a key supporter and driver of enhanced regulations fostering transformative change.',
    keyImpactAreas: [
      { icon: Wind, label: 'Air Quality Monitoring', value: 'Tracking pollution levels in Nairobi' },
      { icon: Users, label: 'Community Engagement', value: 'Empowering communities in policy development' },
      { icon: Leaf, label: 'Regulatory Advocacy', value: 'Advocating for clean transport regulations' },
      { icon: TrendingUp, label: 'Behavior Change', value: 'Driving sustainable transport choices' }
    ]
  }
];

const getRandomPrograms = (programId, count = 3) => {
  const otherPrograms = programsData.filter(p => p.id !== programId);
  const shuffled = [...otherPrograms].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const ProgramDetail = ({ programId }) => {
  const { navigateTo } = useNavigation();
  const program = programsData.find(p => p.id === programId);

  if (!program) {
    return (
      <div className="min-h-screen bg-canvas flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Program not found</h2>
          <button
            onClick={() => navigateTo('programs')}
            className="text-napta-green font-semibold hover:text-napta-blue transition-colors"
          >
            Back to Programs
          </button>
        </div>
      </div>
    );
  }

  const Icon = program.icon;
  const randomPrograms = getRandomPrograms(programId);

  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero Section with Image */}
      <section className="relative bg-gradient-to-r from-napta-navy via-napta-blue to-napta-brightBlue rounded-b-[2rem] sm:rounded-b-[3rem] shadow-xl overflow-hidden py-6 sm:py-8 mx-1 sm:mx-1">
        {/* Background Image with Overlay */}
        {program.image && (
          <div className="absolute inset-0">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-napta-navy/90 via-napta-blue/80 to-napta-brightBlue/70"></div>
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigateTo('programs')}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs sm:text-sm font-semibold">Back to Programs</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white leading-tight">
              {program.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="prose prose-sm sm:prose max-w-none">
              {program.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="mt-10 pt-10 border-t border-slate-200">
              <h3 className="text-lg sm:text-xl font-bold text-napta-navy mb-6">
                Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">Impact Areas</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {program.keyImpactAreas.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="group relative overflow-hidden bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 border border-slate-200 hover:border-slate-300 transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-napta-green/10 to-napta-blue/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 transition-transform"></div>
                      <div className="relative z-10">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-napta-green to-napta-blue rounded-lg sm:rounded-xl flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Icon size={20} className="sm:w-6 sm:h-6" />
                        </div>
                        <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm mb-1 sm:mb-2">{item.label}</h4>
                        <p className="text-[10px] sm:text-xs sm:text-sm text-slate-600 leading-relaxed">{item.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 pt-10 border-t border-slate-200"
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 lg:p-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-napta-blue/20 rounded-full blur-3xl opacity-70"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-napta-green/20 rounded-full blur-3xl opacity-70"></div>
                
                <div className="relative z-10">
                  <p className="text-slate-300 text-sm sm:text-base mb-6">
                    Interested in learning more or getting involved with this program?
                  </p>
                  <button
                    onClick={() => navigateTo('contact')}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-lg shadow-napta-green/20 hover:shadow-xl hover:shadow-napta-green/30 transition-all duration-300 text-sm sm:text-base group"
                  >
                    Get In Touch
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Program Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-canvas-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-napta-navy mb-8">
              Explore Other <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">Programs</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {randomPrograms.map((prog, idx) => {
                const ProgIcon = prog.icon;
                return (
                  <motion.div
                    key={prog.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)' }}
                    onClick={() => navigateTo(`programs/${prog.id}`)}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/50 hover:border-slate-300 transition-all duration-300 h-full flex flex-col p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-napta-green to-napta-blue rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                        <ProgIcon size={24} />
                      </div>
                      <h3 className="text-sm sm:text-base font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-napta-green group-hover:to-napta-blue transition-all duration-300">
                        {prog.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 flex-grow mb-4 leading-relaxed">
                        {prog.description}
                      </p>
                      <div className="inline-flex items-center gap-2 text-napta-green font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-300">
                        Explore <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
