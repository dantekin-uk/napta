import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Load team images dynamically
const teamImageModules = import.meta.glob('../assets/team/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

// Create a map from filename (without extension) to image src
const teamImageMap = Object.entries(teamImageModules).reduce((acc, [path, src]) => {
  // Handle both / and \ separators, convert to lowercase key
  const filename = path.replace(/\\/g, '/').split('/').pop().split('.')[0].toLowerCase();
  acc[filename] = src;
  return acc;
}, {});

// Helper function to get team member image
const getTeamImage = (name) => {
  const nameLower = name.toLowerCase();
  
  // Handle specific name mappings
  if (nameLower.includes('cyprine')) return teamImageMap['cyprian'];
  if (nameLower.includes('mary')) return teamImageMap['marry'];
  
  if (nameLower === 'john paul ochoro') {
    // Find the john.webp file (contains johnpaul)
    for (const [key, src] of Object.entries(teamImageModules)) {
      const filename = key.replace(/\\/g, '/').split('/').pop().toLowerCase();
      if (filename.includes('johnpaul')) {
        return src;
      }
    }
  }
  
  if (nameLower.includes('john mwilwatsi')) {
    // Find the John.jpg file (contains john but not johnpaul)
    for (const [key, src] of Object.entries(teamImageModules)) {
      const filename = key.replace(/\\/g, '/').split('/').pop().toLowerCase();
      if (filename.includes('john') && !filename.includes('johnpaul')) {
        return src;
      }
    }
  }
  
  if (nameLower.includes('eng. doreen')) return teamImageMap['eng'];
  if (nameLower.includes('paschalin')) return teamImageMap['paschalin'];
  if (nameLower.includes('wambui')) return teamImageMap['wambui'];
  
  // Try first name
  const firstName = name.split(' ')[0].toLowerCase();
  return teamImageMap[firstName] || null;
};

// Team Data
const boardOfDirectors = [
  {
    id: 1,
    name: 'Titus Karanja',
    role: 'Board Chairman',
    bio: '20+ years in stockbroking, fund management, banking, corporate finance advisory. Past: Founded African Alliance Securities (Kenya); led Co-operative Consultancy Services; directed Co-operative Bank\'s Banking Division; MD at Sidian Bank Kenya. Current: Managing Partner, Fintech Frontiers; CEO, Fintech Institute; Long-Term Expert, EIB TA East Africa.',
    get image() { return getTeamImage(this.name); },
    category: 'Board of Directors'
  },
  {
    id: 2,
    name: 'Charles Aholi',
    role: 'Executive Director',
    bio: 'Charles is a lawyer with over eight years of experience in the public transportation sector. He holds an LLB (Hons) from Kenyatta University, a Postgraduate Diploma in Law from the Kenya School of Law, and is pursuing an MA in Leadership and Management at the Management University of Africa. He\'s skilled in program development and implementation, policy analysis and development, stakeholder engagement, and advocacy.',
    get image() { return getTeamImage(this.name); },
    category: 'Board of Directors'
  },
  {
    id: 3,
    name: 'Eng. Doreen Kirima',
    role: 'Board Member / Senior Engineer',
    bio: 'Eng. Doreen Kirima is a licensed civil engineer with over 12 years of experience in highways and transportation engineering. As a Senior Engineer at the Kenya Urban Roads Authority (KURA), she has supervised major road construction projects and led road design teams. She holds an MSc and BSc in Civil Engineering (transportation) from the University of Nairobi, along with diplomas in Innovation for Change in Public Transport from Lund University and Business Information & Technology from Strathmore. Doreen chairs the Young Engineers Committee for the Federation of African Engineering Organizations and was honored with FAEO\'s silver award in 2022.',
    get image() { return getTeamImage(this.name); },
    category: 'Board of Directors'
  },
  {
    id: 4,
    name: 'Mary Mukoma',
    role: 'Board Member / Legal Advisor',
    bio: 'Mary Mukoma is an Advocate of the High Court of Kenya and Commissioner for Oaths. She holds an LLB from Kenyatta University and a Postgraduate Diploma in Law from the Kenya School of Law, and is pursuing an LLM at the University of Nairobi. Mary specializes in commercial, conveyancing, and family law, and sits on several boards as a non-executive director.',
    get image() { return getTeamImage(this.name); },
    category: 'Board of Directors'
  },
  {
    id: 5,
    name: 'Cyprine Odada',
    role: 'Board Member / Urban Planner',
    bio: 'Cyprine Odada is an urban planner and sustainability expert who founded Critical Mass Nairobi, promoting cycling, active mobility, and safer streets. Recognized as a "Remarkable Woman in Transport" (2023) and "Young Leader in Sustainable Transport" (2020), she spoke at TEDx Nairobi in 2019.',
    get image() { return getTeamImage(this.name); },
    category: 'Board of Directors'
  },
  {
    id: 6,
    name: 'John Paul Ochoro',
    role: 'Board Member / Risk Specialist',
    bio: 'John Paul Ochoro is an insurance and risk management professional with broad experience in operations, claims analysis, and claims process re-engineering. He holds a Bachelor of Commerce from Egerton University, a Postgraduate Diploma in Insurance from the College of Insurance Nairobi, and is pursuing a Bachelor of Laws at Mount Kenya University plus a Master\'s in Ethics and Organizational Leadership from Tangaza University College. He has held various corporate roles and advises on insurance and risk management.',
    get image() { return getTeamImage(this.name); },
    category: 'Board of Directors'
  },
  {
    id: 16,
    name: 'Paschalin Basil',
    role: 'Board Member',
    bio: '',
    get image() { return getTeamImage(this.name); },
    category: 'Board of Directors'
  }
];

const managementTeam = [
  {
    id: 7,
    name: 'Charles Aholi',
    role: 'Executive Director',
    bio: 'Charles is a lawyer with over eight years of experience in the public transportation sector. He holds an LLB (Hons) from Kenyatta University, a Postgraduate Diploma in Law from the Kenya School of Law, and is pursuing an MA in Leadership and Management at the Management University of Africa. He\'s skilled in program development and implementation, policy analysis and development, stakeholder engagement, and advocacy.',
    get image() { return getTeamImage(this.name); },
    category: 'Management Team'
  },
  {
    id: 8,
    name: 'John Paul Ochoro',
    role: 'Lead - Operations, Programs & Administration',
    bio: 'John Paul Ochoro is an insurance and risk management professional with broad experience in operations, claims analysis, and claims process re-engineering. He holds a Bachelor of Commerce from Egerton University, a Postgraduate Diploma in Insurance from the College of Insurance Nairobi, and is pursuing a Bachelor of Laws at Mount Kenya University plus a Master\'s in Ethics and Organizational Leadership from Tangaza University College. He has held various corporate roles and advises on insurance and risk management.',
    get image() { return getTeamImage(this.name); },
    category: 'Management Team'
  },
  {
    id: 9,
    name: 'Clare Adongo',
    role: 'Lead - Training & Innovation',
    bio: 'Clare is passionate about sustainable mobility and social development. She is pursuing a Master\'s in Development Studies at the University of Nairobi and has extensive experience in transport research and project management, with various certifications and trainings.',
    get image() { return getTeamImage(this.name); },
    category: 'Management Team'
  },
  {
    id: 10,
    name: 'Babu Mukoko',
    role: 'Lead - Sustainable Urban & Rural Mobility',
    bio: 'Babu Mukoko is a seasoned planner focused on sustainable urban and rural mobility. Experience includes consulting for Trademark Africa, UN-Habitat, and JICA. Education: BA in Planning; certificates in Environmental Impact Assessment/Audits; pursuing a Data Protection certificate at CIPIT, Strathmore. Affiliations: Kenya Institute of Planners, Architectural Association of Kenya, Kenya Transport Researchers Network, and Environmental Institute of Kenya.',
    get image() { return getTeamImage(this.name); },
    category: 'Management Team'
  },
  {
    id: 11,
    name: 'Austin Akuku',
    role: 'Lead - Finance & Investment',
    bio: 'Austin has 16+ years of experience in banking and is the former Senior Regional Finance Manager for AME Technology & Operations. He currently leads Group Performance & Strategy Implementation at House of Procurement Kenya Ltd. Credentials: ACCA member; Higher Diploma in Microfinance; BSc; pursuing an MBA in Strategic Management.',
    get image() { return getTeamImage(this.name); },
    category: 'Management Team'
  },
  {
    id: 12,
    name: 'Wambui Kariuki',
    role: 'Lead - Research & Policy',
    bio: 'Wambui Kariuki is a transport researcher and final-year PhD candidate at the Fair Transport Lab, Technion Israel Institute of Technology. Her work investigates dignity as a framework for advancing transport justice in public policy and social sciences, focusing on people-centered approaches for equitable mobility in the Global South. She brings over a decade of experience in research, teaching, and policy.',
    get image() { return getTeamImage(this.name); },
    category: 'Management Team'
  },
  {
    id: 13,
    name: 'John Mwilwatsi',
    role: 'Lead - Corporate Communication & Marketing',
    bio: 'John Mwilwatsi is a Communications and Journalism professional with over 4 years of experience in multimedia content production. He has collaborated with various organizations including Pamoja Fm, Transparency International, Earth Journalism Network and Radio Baraza to amplify community voices and drive impactful storytelling.John is skilled in leveraging multimedia tools and data-driven strategies to enhance audience reach and engagement. He has been recognized with multiple awards by the Association of Grassroots Journalists Kenya for his excellence in environmental and children-focused reporting.He holds a Bachelors Degree in Kiswahili and Communication from the Catholic University of Eastern Africa (CUEA)', 
    get image() { return getTeamImage(this.name); },
    category: 'Management Team'
  },
  {
    id: 14,
    name: 'Dan Frankline',
    role: 'Lead - Digital Strategy & IT',
    bio: '', // No bio provided
    portfolio: 'https://dante-eta.vercel.app/',
    get image() { return getTeamImage(this.name); },
    category: 'Management Team'
  },
  {
    id: 15,
    name: 'Karen Kamura',
    role: 'Communication & Marketing Intern',
    bio: 'Karen Kamura is an undergraduate Communications student and emerging Public Relations professional with experience in event management, public relations, and sales. She has supported the successful execution of corporate and charity events, stakeholder engagement, and brand visibility initiatives. Passionate about communication and creativity, Karen combines strong interpersonal skills with a keen eye for art and design to create engaging content and meaningful experiences.', 
    get image() { return getTeamImage(this.name); },
    category: 'Management Team'
  }
];

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section - Exact like Partners Page */}
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
                Our Team
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
              Leadership & <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-lightGreen">Network</span>
            </h1>
            <p className="text-white/70 text-[11px] sm:text-xs max-w-2xl leading-relaxed">
              A multidisciplinary steering committee driving sustainable public transport across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Board of Directors</h2>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {boardOfDirectors.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                whileHover={{ y: -2 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative overflow-hidden rounded-xl mb-2">
                  <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-slate-400 hidden">
                      <span className="text-2xl font-bold">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{member.name}</h3>
                <p className="text-[10px] sm:text-xs font-medium text-napta-green leading-tight">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-slate-200 mx-1 sm:mx-1" />

      {/* Management Team Section */}
      <section className="py-10 sm:py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Management Team</h2>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {managementTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                whileHover={{ y: -2 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative overflow-hidden rounded-xl mb-2">
                  <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full flex items-center justify-center text-slate-400 hidden">
                      <span className="text-2xl font-bold">{member.name.charAt(0)}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">{member.name}</h3>
                <p className="text-[10px] sm:text-xs font-medium text-napta-green leading-tight">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Exactly like Partners Page */}
      <section className="py-10 sm:py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 lg:p-12"
          >
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
                  className="lg:col-span-7"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                    <div className="w-6 h-[2px] bg-gradient-to-r from-napta-green to-napta-blue rounded-full"></div>
                    <span className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                      Join Our Team
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight tracking-tight">
                    Want to join our team and <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">movement</span>?
                  </h2>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal mb-0">
                    We're always looking for passionate individuals to help drive sustainable public transport across Africa.
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
                      <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold py-4 sm:py-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-napta-green/20 hover:shadow-xl hover:shadow-napta-green/30 relative overflow-hidden group"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-napta-blue to-napta-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        <span className="relative flex items-center gap-2">
                          Join Our Team
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal - Fixed and always visible */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedMember(null)}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 hover:bg-slate-100 shadow-sm transition-all duration-300"
              >
                <X size={20} className="text-slate-500" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch">
                {/* Left - Image */}
                  <div className="lg:col-span-2 flex">
                    <div className="w-full overflow-hidden">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 hidden">
                        <span className="text-6xl font-bold text-slate-400/30">{selectedMember.name.charAt(0)}</span>
                      </div>
                    </div>
                  </div>

                {/* Right - Content */}
                <div className="lg:col-span-3 p-6 sm:p-8 flex items-center bg-gradient-to-br from-white to-slate-50">
                  <div className="w-full">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-[2px] bg-napta-green rounded-full" />
                      <p className="text-napta-green text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase">
                        {selectedMember.category}
                      </p>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 leading-tight">
                      {selectedMember.name}
                    </h2>
                    <p className="text-base sm:text-lg font-semibold text-napta-navy mb-6">
                      {selectedMember.role}
                    </p>
                    {selectedMember.bio && (
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {selectedMember.bio}
                      </p>
                    )}
                    {selectedMember.portfolio && (
                      <a
                        href={selectedMember.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-napta-green to-napta-blue text-white font-semibold rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                      >
                        View My Portfolio
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamPage;
