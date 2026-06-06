import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Team Data
const boardOfDirectors = [
  {
    id: 1,
    name: 'Titus Karanja',
    role: 'Board Chairman',
    bio: '20+ years in stockbroking, fund management, banking, corporate finance advisory. Past: Founded African Alliance Securities (Kenya); led Co-operative Consultancy Services; directed Co-operative Bank\'s Banking Division; MD at Sidian Bank Kenya. Current: Managing Partner, Fintech Frontiers; CEO, Fintech Institute; Long-Term Expert, EIB TA East Africa.',
    image: '/src/assets/team/titus.jpg' // Placeholder
  },
  {
    id: 2,
    name: 'Charles Aholi',
    role: 'Executive Director',
    bio: 'Charles is a lawyer with over eight years of experience in the public transportation sector. He holds an LLB (Hons) from Kenyatta University, a Postgraduate Diploma in Law from the Kenya School of Law, and is pursuing an MA in Leadership and Management at the Management University of Africa. He\'s skilled in program development and implementation, policy analysis and development, stakeholder engagement, and advocacy.',
    image: '/src/assets/team/charles.jpg' // Placeholder
  },
  {
    id: 3,
    name: 'Eng. Doreen Kirima',
    role: 'Board Member / Senior Engineer',
    bio: 'Eng. Doreen Kirima is a licensed civil engineer with over 12 years of experience in highways and transportation engineering. As a Senior Engineer at the Kenya Urban Roads Authority (KURA), she has supervised major road construction projects and led road design teams. She holds an MSc and BSc in Civil Engineering (transportation) from the University of Nairobi, along with diplomas in Innovation for Change in Public Transport from Lund University and Business Information & Technology from Strathmore. Doreen chairs the Young Engineers Committee for the Federation of African Engineering Organizations and was honored with FAEO\'s silver award in 2022.',
    image: '/src/assets/team/doreen.jpg' // Placeholder
  },
  {
    id: 4,
    name: 'Mary Mukoma',
    role: 'Board Member / Legal Advisor',
    bio: 'Mary Mukoma is an Advocate of the High Court of Kenya and Commissioner for Oaths. She holds an LLB from Kenyatta University and a Postgraduate Diploma in Law from the Kenya School of Law, and is pursuing an LLM at the University of Nairobi. Mary specializes in commercial, conveyancing, and family law, and sits on several boards as a non-executive director.',
    image: '/src/assets/team/mary.jpg' // Placeholder
  },
  {
    id: 5,
    name: 'Cyprine Odada',
    role: 'Board Member / Urban Planner',
    bio: 'Cyprine Odada is an urban planner and sustainability expert who founded Critical Mass Nairobi, promoting cycling, active mobility, and safer streets. Recognized as a "Remarkable Woman in Transport" (2023) and "Young Leader in Sustainable Transport" (2020), she spoke at TEDx Nairobi in 2019.',
    image: '/src/assets/team/cyprine.jpg' // Placeholder
  },
  {
    id: 6,
    name: 'John Paul Ochoro',
    role: 'Board Member / Risk Specialist',
    bio: 'John Paul Ochoro is an insurance and risk management professional with broad experience in operations, claims analysis, and claims process re-engineering. He holds a Bachelor of Commerce from Egerton University, a Postgraduate Diploma in Insurance from the College of Insurance Nairobi, and is pursuing a Bachelor of Laws at Mount Kenya University plus a Master\'s in Ethics and Organizational Leadership from Tangaza University College. He has held various corporate roles and advises on insurance and risk management.',
    image: '/src/assets/team/johnpaul.jpg' // Placeholder
  }
];

const managementTeam = [
  {
    id: 7,
    name: 'Charles Aholi',
    role: 'Executive Director',
    bio: 'Charles is a lawyer with over eight years of experience in the public transportation sector. He holds an LLB (Hons) from Kenyatta University, a Postgraduate Diploma in Law from the Kenya School of Law, and is pursuing an MA in Leadership and Management at the Management University of Africa. He\'s skilled in program development and implementation, policy analysis and development, stakeholder engagement, and advocacy.',
    image: '/src/assets/team/charles.jpg' // Placeholder
  },
  {
    id: 8,
    name: 'John Paul Ochoro',
    role: 'Lead - Operations, Programs & Administration',
    bio: 'John Paul Ochoro is an insurance and risk management professional with broad experience in operations, claims analysis, and claims process re-engineering. He holds a Bachelor of Commerce from Egerton University, a Postgraduate Diploma in Insurance from the College of Insurance Nairobi, and is pursuing a Bachelor of Laws at Mount Kenya University plus a Master\'s in Ethics and Organizational Leadership from Tangaza University College. He has held various corporate roles and advises on insurance and risk management.',
    image: '/src/assets/team/johnpaul.jpg' // Placeholder
  },
  {
    id: 9,
    name: 'Clare Adongo',
    role: 'Lead - Training & Innovation',
    bio: 'Clare is passionate about sustainable mobility and social development. She is pursuing a Master\'s in Development Studies at the University of Nairobi and has extensive experience in transport research and project management, with various certifications and trainings.',
    image: '/src/assets/team/clare.jpg' // Placeholder
  },
  {
    id: 10,
    name: 'Babu Mukoko',
    role: 'Lead - Sustainable Urban & Rural Mobility',
    bio: 'Babu Mukoko is a seasoned planner focused on sustainable urban and rural mobility. Experience includes consulting for Trademark Africa, UN-Habitat, and JICA. Education: BA in Planning; certificates in Environmental Impact Assessment/Audits; pursuing a Data Protection certificate at CIPIT, Strathmore. Affiliations: Kenya Institute of Planners, Architectural Association of Kenya, Kenya Transport Researchers Network, and Environmental Institute of Kenya.',
    image: '/src/assets/team/babu.jpg' // Placeholder
  },
  {
    id: 11,
    name: 'Austin Akuku',
    role: 'Lead - Finance & Investment',
    bio: 'Austin has 16+ years of experience in banking and is the former Senior Regional Finance Manager for AME Technology & Operations. He currently leads Group Performance & Strategy Implementation at House of Procurement Kenya Ltd. Credentials: ACCA member; Higher Diploma in Microfinance; BSc; pursuing an MBA in Strategic Management.',
    image: '/src/assets/team/austin.jpg' // Placeholder
  },
  {
    id: 12,
    name: 'Wambui Kariuki',
    role: 'Lead - Research & Policy',
    bio: 'Wambui Kariuki is a transport researcher and final-year PhD candidate at the Fair Transport Lab, Technion Israel Institute of Technology. Her work investigates dignity as a framework for advancing transport justice in public policy and social sciences, focusing on people-centered approaches for equitable mobility in the Global South. She brings over a decade of experience in research, teaching, and policy.',
    image: '/src/assets/team/wambui.jpg' // Placeholder
  },
  {
    id: 13,
    name: 'John Mwilwatsi',
    role: 'Lead - Corporate Communication & Marketing',
    bio: '', // No bio provided
    image: '/src/assets/team/john.jpg' // Placeholder
  },
  {
    id: 14,
    name: 'Dan Frankline',
    role: 'Lead - Digital Strategy & IT',
    bio: '', // No bio provided
    image: '/src/assets/team/dan.jpg' // Placeholder
  },
  {
    id: 15,
    name: 'Karen Kamura',
    role: 'Communication & Marketing Intern',
    bio: '', // No bio provided
    image: '/src/assets/team/karen.jpg' // Placeholder
  }
];

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-gradient-to-r from-napta-green to-napta-blue rounded-full" />
              <p className="text-slate-500 text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
                Our Team
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 leading-tight">
              Leadership & <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">Network</span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
              A multidisciplinary steering committee driving sustainable public transport across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Board of Directors</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {boardOfDirectors.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
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
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm font-medium text-napta-green">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-slate-200 mx-3 sm:mx-4 lg:mx-8 max-w-7xl mx-auto" />

      {/* Management Team Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Management Team</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {managementTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
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
                <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                <p className="text-sm font-medium text-napta-green">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl bg-white rounded-3xl sm:rounded-[2.5rem] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-md transition-all duration-300"
                >
                  <X size={20} className="text-slate-600" />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left - Image */}
                  <div className="lg:col-span-5">
                    <div className="h-80 lg:h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full flex items-center justify-center text-slate-400 hidden">
                        <span className="text-8xl font-bold text-slate-400/30">{selectedMember.name.charAt(0)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10">
                    <p className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                      Team Member
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                      {selectedMember.name}
                    </h2>
                    <p className="text-base sm:text-lg font-semibold text-slate-700 mb-6">
                      {selectedMember.role}
                    </p>
                    {selectedMember.bio && (
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {selectedMember.bio}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeamPage;
