import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText, Search, Calendar, Filter } from 'lucide-react';
import resourcesHeroImage from '../assets/home/policy.jpg';

// Import all PDFs
import summit2024PDF from '../assets/resources/2024-transport-summit.pdf';
import summit2025PDF from '../assets/resources/KNPTS 2025 REPORT 2025.pdf';
import breatheCitiesPDF from '../assets/resources/breathe-cities-campaign.pdf';
import cleanEnergyPDF from '../assets/resources/clean-energy-report.pdf';
import eMobilityPDF from '../assets/resources/e-mobility-transition-nairobi.pdf';
import firstDocPDF from '../assets/resources/first-doc-report.pdf';
import formalizationPDF from '../assets/resources/formalization-matatu-report.pdf';
import greenMobilityPDF from '../assets/resources/green-mobility-report.pdf';
import naptaReportPDF from '../assets/resources/napta-report.pdf';
import partnershipPDF from '../assets/resources/napta-safetek-komint-partnership.pdf';
import paratransitRoundtablePDF from '../assets/resources/paratransit-roundtable.pdf';
import paratransitStudyPDF from '../assets/resources/paratransit-study-analysis.pdf';
import urbanGreeningPDF from '../assets/resources/urban-greening-report.pdf';

const resourcesData = [
  {
    id: 'summit-2024',
    title: '2024 Transport Summit Report',
    description: 'Full report from the inaugural Nairobi Metropolitan Area Matatu Summit & Expo.',
    category: 'Summits & Events',
    date: '2024',
    file: summit2024PDF,
    fileSize: '1.2 MB'
  },
  {
    id: 'summit-2025',
    title: 'KNPTS 2025 Summit Report',
    description: 'Complete report from the Kenya National Public Transport Summit 2025.',
    category: 'Summits & Events',
    date: '2025',
    file: summit2025PDF,
    fileSize: '1.8 MB'
  },
  {
    id: 'breathe-cities',
    title: 'Breathe Cities Campaign',
    description: 'Comprehensive report on the Breathe Cities initiative to improve air quality in Nairobi.',
    category: 'Campaigns',
    date: '2024',
    file: breatheCitiesPDF,
    fileSize: '0.9 MB'
  },
  {
    id: 'clean-energy',
    title: 'Clean Energy Report',
    description: 'Report detailing clean energy solutions for public transportation in Kenya.',
    category: 'Research & Reports',
    date: '2025',
    file: cleanEnergyPDF,
    fileSize: '1.5 MB'
  },
  {
    id: 'e-mobility',
    title: 'E-Mobility Transition in Nairobi',
    description: 'Analysis of e-mobility transition opportunities and challenges in Nairobi.',
    category: 'Research & Reports',
    date: '2025',
    file: eMobilityPDF,
    fileSize: '2.1 MB'
  },
  {
    id: 'first-doc',
    title: 'First Document Report',
    description: 'Initial foundational report outlining NAPTA\'s mission and objectives.',
    category: 'Organization',
    date: '2023',
    file: firstDocPDF,
    fileSize: '0.7 MB'
  },
  {
    id: 'formalization',
    title: 'Matatu Formalization Report',
    description: 'Study on the formalization of the matatu sector in Kenya.',
    category: 'Research & Reports',
    date: '2024',
    file: formalizationPDF,
    fileSize: '1.4 MB'
  },
  {
    id: 'green-mobility',
    title: 'Green Mobility Report',
    description: 'Strategies and recommendations for green and sustainable mobility solutions.',
    category: 'Research & Reports',
    date: '2025',
    file: greenMobilityPDF,
    fileSize: '1.6 MB'
  },
  {
    id: 'napta-report',
    title: 'NAPTA Annual Report',
    description: 'Annual report highlighting NAPTA\'s achievements and initiatives.',
    category: 'Organization',
    date: '2024',
    file: naptaReportPDF,
    fileSize: '1.1 MB'
  },
  {
    id: 'partnership',
    title: 'NAPTA-Safetek-Komint Partnership',
    description: 'Details of the strategic partnership between NAPTA, Safetek, and Komint.',
    category: 'Partnerships',
    date: '2024',
    file: partnershipPDF,
    fileSize: '0.8 MB'
  },
  {
    id: 'paratransit-roundtable',
    title: 'Paratransit Roundtable',
    description: 'Report from the paratransit stakeholder roundtable discussions.',
    category: 'Summits & Events',
    date: '2025',
    file: paratransitRoundtablePDF,
    fileSize: '0.9 MB'
  },
  {
    id: 'paratransit-study',
    title: 'Paratransit Study & Analysis',
    description: 'In-depth analysis of the paratransit sector in Kenya.',
    category: 'Research & Reports',
    date: '2024',
    file: paratransitStudyPDF,
    fileSize: '1.3 MB'
  },
  {
    id: 'urban-greening',
    title: 'Urban Greening Report',
    description: 'Report on urban greening initiatives and their impact on public transport.',
    category: 'Research & Reports',
    date: '2025',
    file: urbanGreeningPDF,
    fileSize: '1.0 MB'
  }
];

const categories = ['All', 'Summits & Events', 'Research & Reports', 'Campaigns', 'Partnerships', 'Organization'];

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = resourcesData.filter(resource => {
    const matchesCategory = activeCategory === 'All' || resource.category === activeCategory;
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-napta-navy via-napta-blue to-napta-brightBlue rounded-b-[2rem] sm:rounded-b-[3rem] shadow-xl overflow-hidden py-10 sm:py-12 mx-1 sm:mx-1">
        <div className="absolute inset-0 opacity-20">
          <img
            src={resourcesHeroImage}
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
                Knowledge Hub
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
              Resources & Reports
            </h1>
            <p className="text-white/70 text-[11px] sm:text-xs max-w-xl leading-relaxed">
              Explore our collection of reports, publications, and resources on public transport transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* Search */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={16} className="text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 sm:py-4 border border-slate-200 rounded-xl bg-canvas focus:ring-2 focus:ring-napta-green focus:border-transparent outline-none text-xs sm:text-sm transition-all duration-300"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-napta-green to-napta-blue text-white shadow-md shadow-napta-green/20'
                      : 'bg-canvas text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-8 sm:py-12 bg-canvas-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer h-full"
                >
                  <div className="h-full bg-white rounded-2xl overflow-hidden border border-slate-200/50 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                    {/* Icon */}
                    <div className="p-6 sm:p-7 pb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-napta-green to-napta-blue rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                        <FileText size={24} />
                      </div>

                      {/* Title & Category */}
                      <div className="mb-3">
                        <span className="text-[10px] font-semibold text-napta-green uppercase tracking-wider">
                          {resource.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-napta-navy mt-1 leading-tight group-hover:text-napta-blue transition-colors duration-300">
                          {resource.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                        {resource.description}
                      </p>

                      {/* Metadata */}
                      <div className="flex items-center gap-4 mb-4 text-[10px] text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{resource.date}</span>
                        </div>
                        <span className="text-slate-400">•</span>
                        <span>{resource.fileSize}</span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={resource.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold px-3 py-2.5 rounded-lg text-xs transition-all duration-300"
                        >
                          <ExternalLink size={14} />
                          View
                        </a>
                        <a
                          href={resource.file}
                          download
                          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold px-3 py-2.5 rounded-lg text-xs shadow-sm transition-all duration-300"
                        >
                          <Download size={14} />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <p className="text-slate-600 text-xs sm:text-sm">No resources found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
