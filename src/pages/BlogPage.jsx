import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowUpRight, Search, Tag, Users, Building2, TrendingUp, Wind, Target } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';
import blogHeroImage from '../assets/home/new2.jpeg';
import basigoImage from '../assets/basigo-home-page-kenya-og_image (1).webp';

const blogPost = {
  id: 'air-quality-nairobi',
  title: 'Clearing the Air: Transforming Nairobi\'s Air Quality Through Sustainable Transport',
  excerpt: 'Exploring how NAPTA and partners are working to reduce air pollution in Nairobi by transforming the public transport sector.',
  author: 'Charles Aholi',
  date: 'May 29, 2025',
  readTime: '3 min read',
  category: 'Environment',
  image: basigoImage,
  tags: ['Environment', 'Air Quality', 'Nairobi', 'Sustainable Transport'],
  content: [
    {
      type: 'heading',
      text: 'The Challenge: Air Quality in Nairobi'
    },
    {
      type: 'paragraph',
      text: 'Nairobi, Kenya\'s vibrant capital, faces significant air quality challenges. As the city grows, so does traffic congestion, with thousands of matatus and buses serving millions of commuters daily. While these vehicles are the lifeblood of Nairobi\'s transport system, older, poorly maintained vehicles contribute significantly to urban air pollution.'
    },
    {
      type: 'paragraph',
      text: 'Air pollution in Nairobi has been linked to a range of health issues, including respiratory problems, cardiovascular disease, and reduced lung development in children. The main culprits are particulate matter (PM2.5 and PM10) and nitrogen oxides (NOx), much of which comes from vehicle emissions.'
    },
    {
      type: 'heading',
      text: 'NAPTA\'s Approach: Sustainable Transport Solutions'
    },
    {
      type: 'paragraph',
      text: 'The National Public Transport Alliance (NAPTA) is taking a multi-faceted approach to address this challenge, working closely with government agencies, transport operators, and communities to create cleaner, more sustainable transport options.'
    },
    {
      type: 'list',
      items: [
        'Fleet Modernization Program: Supporting operators to upgrade to newer, cleaner vehicles',
        'Driver Training: Educating drivers on eco-friendly driving techniques',
        'Policy Advocacy: Working with policymakers to strengthen emission standards',
        'Alternative Fuels: Exploring electric and hybrid vehicles for public transport'
      ]
    },
    {
      type: 'heading',
      text: 'The Breathe Cities Initiative'
    },
    {
      type: 'paragraph',
      text: 'Through the Breathe Cities initiative, NAPTA is partnering with Kusudi Cause Communication Trust, Muungano wa Wanavijiji, and Groots Kenya to improve air quality in Nairobi. This comprehensive program combines communication, advocacy, and policy engagement to create lasting change.'
    },
    {
      type: 'paragraph',
      text: 'Key components of Breathe Cities include community awareness campaigns, policy development support, and collaborative monitoring of air quality across the city. By empowering communities and working with policymakers, the initiative aims to make Nairobi\'s air cleaner and healthier for everyone.'
    },
    {
      type: 'heading',
      text: 'Policy and Regulatory Reforms'
    },
    {
      type: 'paragraph',
      text: 'NAPTA is actively advocating for stronger policies and regulations to reduce vehicle emissions. This includes supporting the implementation of stricter vehicle inspection standards, promoting cleaner fuels, and working with the government to create incentives for electric and hybrid vehicles in public transport.'
    },
    {
      type: 'heading',
      text: 'Looking Ahead: A Greener Nairobi'
    },
    {
      type: 'paragraph',
      text: 'While challenges remain, there is reason for optimism. With the combined efforts of NAPTA, government agencies, transport operators, and communities, Nairobi is on a path toward cleaner air and a more sustainable transport system. Every new eco-friendly vehicle, every trained driver, and every supportive policy brings us one step closer to a greener, healthier city for all.'
    }
  ]
};

const categories = ['All', 'Environment', 'Sustainability'];

const BlogCard = ({ post, scrollToArticle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)' }}
      className="group cursor-pointer h-full"
    >
      <div className="h-full bg-white rounded-2xl overflow-hidden border border-slate-200/50 hover:border-slate-300 transition-all duration-300 flex flex-col">
        {/* Image */}
        <div className="relative aspect-[4/2] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-napta-green to-napta-blue text-white text-[10px] sm:text-xs font-semibold">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 flex flex-col flex-grow">
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 mb-3 text-[10px] sm:text-xs text-slate-500">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={12} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-napta-navy transition-colors duration-300">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow mb-4">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, tagIndex) => (
              <span key={tagIndex} className="px-2 py-1 rounded-full bg-slate-100 text-[9px] sm:text-xs text-slate-600">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Link */}
          <button 
            onClick={() => scrollToArticle(post.id)}
            className="inline-flex items-center gap-2 text-napta-green font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all duration-300 text-left"
          >
            Read Article
            <ArrowUpRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const scrollToArticle = (id) => {
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
            src={blogHeroImage}
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
                Stories & Insights
              </p>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white mb-2 leading-tight">
              NAPTA Blog
            </h1>
            <p className="text-white/70 text-[11px] sm:text-xs max-w-xl leading-relaxed">
              Stay informed with the latest news, insights, and stories about transforming public transport in Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article Preview */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-3xl px-4 sm:px-6 lg:px-8">
          <BlogCard post={blogPost} scrollToArticle={scrollToArticle} />
        </div>
      </section>

      {/* Full Article */}
      <section id={blogPost.id} className="py-8 sm:py-12 bg-canvas-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4 text-[10px] sm:text-xs text-slate-500">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-napta-green to-napta-blue text-white font-semibold">
                  {blogPost.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{blogPost.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{blogPost.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={12} />
                  <span>By {blogPost.author}</span>
                </div>
              </div>

              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-napta-navy mb-6 leading-tight">
                {blogPost.title}
              </h1>

              <div className="rounded-2xl overflow-hidden mb-8">
                <img
                  src={blogPost.image}
                  alt={blogPost.title}
                  className="w-full aspect-[4/2.5] object-cover"
                />
              </div>
            </div>

            {/* Article Content */}
            <div className="space-y-6">
              {blogPost.content.map((section, index) => {
                if (section.type === 'heading') {
                  return (
                    <h2 key={index} className="text-lg sm:text-xl lg:text-2xl font-bold text-napta-navy mt-10 mb-4">
                      {section.text}
                    </h2>
                  );
                }
                if (section.type === 'paragraph') {
                  return (
                    <p key={index} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {section.text}
                    </p>
                  );
                }
                if (section.type === 'list') {
                  return (
                    <div key={index} className="space-y-3 my-6">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-napta-green mt-2 flex-shrink-0" />
                          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <h3 className="text-sm font-semibold text-slate-800 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1.5 rounded-full bg-slate-100 text-xs sm:text-sm text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
                    Stay Updated
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal mb-0">
                  Get the latest articles, news, and updates delivered straight to your inbox.
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
                    <button className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold py-3.5 sm:py-4 rounded-xl sm:rounded-2xl text-xs sm:text-sm transition-all duration-300 shadow-lg shadow-napta-green/20 hover:shadow-xl hover:shadow-napta-green/30">
                      <span className="absolute inset-0 bg-gradient-to-r from-napta-blue to-napta-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
                      <span className="relative flex items-center gap-2">
                        Subscribe Now
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </button>
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

export default BlogPage;
