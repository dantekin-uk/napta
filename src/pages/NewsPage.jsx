import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Search, Tag, ExternalLink, Building2 } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import new1Image from '../assets/home/new1.jpeg';
import new2Image from '../assets/home/new2.jpeg';
import newsHeroImage from '../assets/home/_APF6663.JPG';

const newsData = [
  {
    id: 'taita-taveta-partnership',
    title: 'NAPTA Partners with Taita Taveta County Government',
    excerpt: 'Collaboration agreement to establish a structured framework for planning, implementing, and financing sustainable, safe, and inclusive transportation systems within the county.',
    date: 'June 1, 2025',
    readTime: '5 min read',
    category: 'Partnerships',
    attendees: [
      'H.E. Christine Saru Kilalo - Deputy Governor of Taita Taveta County',
      'Mr. Friday Mwafuga - County Secretary of Taita Taveta County',
      'Arch. Martin Tairo Maseghe - CECM Public Works, Infrastructure, Housing & Energy Taita Taveta County',
      'Pst. Rina Josephine - Chief Officer - Public Works, Infrastructure, Housing & Energy, Taita Taveta County',
      'Mr. Charles Aholi - Executive Director - National Public Transport Alliance (NAPTA)',
      'Mr. John Paul Ochoro - Director Programs & Operations NAPTA',
      'Mr. John Mwilwatsi - Lead for Communications NAPTA'
    ],
    objectives: [
      'Strengthen the organization and regulation of public and informal transport services',
      'Enhance road safety through capacity building, awareness, and data-driven interventions',
      'Promote sustainable and low-carbon mobility solutions',
      'Build institutional capacity of the County Transport and Safety Committee (CTSC)',
      'Jointly mobilize financial and technical resources to implement agreed programs'
    ],
    image: new1Image,
    isVideo: false
  },
  {
    id: 'citizen-tv-interview',
    title: 'NAPTA CEO Featured on Citizen TV Discussing Urban Air Quality',
    excerpt: 'Mr. Charles Aholi, Executive Director of NAPTA, appeared on Citizen TV on May 29th to discuss strategies for reducing air pollution in urban cities.',
    date: 'May 29, 2025',
    readTime: '3 min read',
    category: 'Media Coverage',
    interviewDetails: [
      'Appeared on Citizen TV',
      'Topic: Reducing air pollution in urban cities',
      'Date: May 29, 2025'
    ],
    image: new2Image,
    isVideo: true
  }
];

const categories = ['All', 'Partnerships', 'Media Coverage', 'Events', 'Announcements'];

const NewsCard = ({ news, index, scrollToStory }) => {
  const { navigateTo } = useNavigation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer h-full"
    >
      <div className="h-full bg-white rounded-2xl overflow-hidden border border-slate-200/50 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
        {/* Image or Video */}
        <div className="relative overflow-hidden">
          {news.isVideo ? (
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/kYP-BJgP-zI?si=SdXGW7dh-0C0FLY5"
                width="100%"
                height="100%"
                style={{ border: '0' }}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="aspect-video">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-napta-green to-napta-blue text-white text-[10px] sm:text-xs font-semibold">
              {news.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 flex flex-col flex-grow">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-3 text-[10px] sm:text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{news.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-napta-navy mb-3 leading-tight group-hover:text-napta-blue transition-colors duration-300">
            {news.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
            {news.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {news.category && (
              <span className="px-2 py-1 rounded-full bg-slate-50 text-[9px] sm:text-xs text-slate-600">
                {news.category}
              </span>
            )}
          </div>

          {/* Read More Link */}
          <button 
            onClick={() => scrollToStory(news.id)}
            className="inline-flex items-center gap-2 text-napta-green font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-300 text-left"
          >
            Read More
            <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = newsData.filter(news => {
    const matchesCategory = activeCategory === 'All' || news.category === activeCategory;
    const matchesSearch = 
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const scrollToStory = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-canvas">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-napta-navy via-napta-blue to-napta-brightBlue rounded-b-[2rem] sm:rounded-b-[3rem] shadow-xl overflow-hidden py-10 sm:py-12 mx-1 sm:mx-1">
        <div className="absolute inset-0 opacity-20">
          <img
            src={newsHeroImage}
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
                Latest Updates
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
              NAPTA News
            </h1>
            <p className="text-white/70 text-[11px] sm:text-xs max-w-xl leading-relaxed">
              Stay up-to-date with the latest news, announcements, and developments from NAPTA.
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
                placeholder="Search news..."
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

      {/* News Grid */}
      <section className="py-8 sm:py-12 bg-canvas-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredNews.map((news, index) => (
                <NewsCard key={news.id} news={news} index={index} scrollToStory={scrollToStory} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <p className="text-slate-600 text-xs sm:text-sm">No news items found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Detailed News Section - Expanded Cards */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl font-extrabold text-napta-navy mb-8">Featured Stories</h2>

          {newsData.map((news, index) => (
            <motion.div
              id={news.id}
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-10"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/70 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image or Video */}
                  <div className="lg:col-span-5">
                    <div className="h-full">
                      {news.isVideo ? (
                        <div className="aspect-video">
                          <iframe
                            src="https://www.youtube.com/embed/kYP-BJgP-zI?si=SdXGW7dh-0C0FLY5"
                            width="100%"
                            height="100%"
                            style={{ border: '0' }}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : (
                        <div className="aspect-video lg:aspect-auto">
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4 text-[10px] sm:text-xs text-slate-500">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-napta-green to-napta-blue text-white text-[10px] font-semibold">
                        {news.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{news.date}</span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-napta-navy mb-4 leading-tight">
                      {news.title}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                      {news.excerpt}
                    </p>

                    {/* Additional Details */}
                    {news.objectives && (
                      <div className="mb-6">
                        <h4 className="text-sm sm:text-base font-bold text-napta-navy mb-3 flex items-center gap-2">
                          <Building2 size={16} />
                          Key Objectives
                        </h4>
                        <ul className="space-y-2">
                          {news.objectives.map((objective, i) => (
                            <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                              <span className="w-2 h-2 rounded-full bg-napta-green mt-1.5 flex-shrink-0" />
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {news.attendees && (
                      <div className="mb-6">
                        <h4 className="text-sm sm:text-base font-bold text-napta-navy mb-3 flex items-center gap-2">
                          <Users size={16} />
                          Signing Ceremony Attendees
                        </h4>
                        <ul className="space-y-2">
                          {news.attendees.map((attendee, i) => (
                            <li key={i} className="text-xs sm:text-sm text-slate-600">
                              • {attendee}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {news.interviewDetails && (
                      <div className="mb-6">
                        <h4 className="text-sm sm:text-base font-bold text-napta-navy mb-3 flex items-center gap-2">
                          <Users size={16} />
                          Interview Details
                        </h4>
                        <ul className="space-y-2">
                          {news.interviewDetails.map((detail, i) => (
                            <li key={i} className="text-xs sm:text-sm text-slate-600">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
