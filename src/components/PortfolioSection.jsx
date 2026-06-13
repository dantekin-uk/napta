import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigation } from '../contexts/NavigationContext';
import fleetImage from '../assets/home/fleet.jpg';
import breatheImage from '../assets/home/breathe.jpeg';
import policyImage from '../assets/home/policy.jpg';

const layoutSpring = { type: "spring", stiffness: 180, damping: 28, mass: 0.85 };
const contentSpring = { type: "spring", stiffness: 220, damping: 30, mass: 0.7 };
const fadeEase = [0.4, 0, 0.2, 1];

const portfolios = [
  {
    title: "Fleet Renewal",
    headline: "Modernizing public transport.",
    body: "Anchored on Training, Restructuring, and Financing. We equip operators with essential skills and facilitate access to affordable capital for critical fleet upgrades.",
    cta: "Explore Fleet Renewal",
    image: fleetImage,
    programId: "fleet-renewal"
  },
  {
    title: "Breathe Cities",
    headline: "Improving urban air quality.",
    body: "A comprehensive advocacy campaign empowering local communities to track air pollution and participate directly in environmental policy development.",
    cta: "Discover Breathe Cities",
    image: breatheImage,
    programId: "breathe-cities"
  },
  {
    title: "Policy Reforms",
    headline: "Aligning regulatory frameworks.",
    body: "We audit existing transport policies to identify critical gaps. By engaging government agencies and operators, we drive systemic reforms for safe, sustainable mobility.",
    cta: "View Reform Initiatives",
    image: policyImage,
    programId: "legal-reforms"
  },
];

const PortfolioCard = ({ portfolio, index, isActive, onInteract, onNavigate }) => (
  <motion.div
    layout
    layoutId={`portfolio-card-${index}`}
    onMouseEnter={() => onInteract(index)}
    onClick={() => onNavigate(portfolio.programId)}
    animate={{ flex: isActive ? 3.2 : 1 }}
    transition={{ layout: layoutSpring, flex: layoutSpring }}
    className="relative flex min-h-[260px] lg:min-h-[320px] rounded-xl lg:rounded-2xl overflow-hidden cursor-pointer group shadow-lg shadow-napta-navy/8 ring-1 ring-slate-900/5 will-change-[flex]"
  >
    <motion.div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${portfolio.image})` }}
      animate={{ scale: isActive ? 1.06 : 1 }}
      transition={layoutSpring}
    />

    <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/95 via-napta-navy/65 to-napta-navy/30" />

    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-napta-green/25 via-transparent to-napta-blue/15"
      animate={{ opacity: isActive ? 1 : 0 }}
      transition={{ duration: 0.45, ease: fadeEase }}
    />

    <motion.div
      className="absolute inset-0 bg-black/25 backdrop-blur-[1px]"
      animate={{ opacity: isActive ? 0.2 : 0.25 }}
      transition={{ duration: 0.4, ease: fadeEase }}
    />

    <div className="relative z-10 h-full min-h-[inherit] w-full">
      {/* Number badge — fixed top-right, identical on every card */}
      <span
        className={`absolute top-4 right-4 lg:top-5 lg:right-5 z-20 hidden lg:flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold border transition-colors duration-300 ${
          isActive
            ? "bg-white/15 border-napta-green/50 text-napta-lightGreen"
            : "bg-white/10 border-white/20 text-white/50"
        }`}
      >
        0{index + 1}
      </span>

      {/* Card title — top when expanded, bottom-vertical when collapsed */}
      <motion.h3
        layout="position"
        transition={contentSpring}
        className={`absolute z-10 font-bold text-white tracking-tight transition-all duration-300 ${
          isActive
            ? "top-4 left-4 lg:top-5 lg:left-5 pr-10 text-base sm:text-lg lg:text-xl"
            : "bottom-4 left-4 lg:bottom-5 lg:left-5 text-sm lg:[writing-mode:vertical-rl] lg:rotate-180 lg:max-h-[180px]"
        }`}
      >
        {portfolio.title}
      </motion.h3>

      {/* Expanded content — pinned to bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 z-10"
        initial={false}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 12 }}
        transition={{
          opacity: { duration: 0.32, ease: fadeEase },
          y: contentSpring,
        }}
        style={{ pointerEvents: isActive ? "auto" : "none" }}
      >
        <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 leading-snug">
          {portfolio.headline}
        </h4>

        <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-3 lg:mb-4 max-w-md">
          {portfolio.body}
        </p>

        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(portfolio.programId);
          }}
          className="group/btn relative inline-flex items-center gap-2 bg-napta-green hover:bg-napta-lightGreen text-white font-medium px-3.5 py-2 rounded-lg text-xs shadow-md shadow-napta-green/20"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>{portfolio.cta}</span>
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
          />
        </motion.button>
      </motion.div>

      {/* Collapsed accent line — beside vertical title */}
      <motion.div
        className="absolute bottom-4 left-9 lg:bottom-5 lg:left-10 z-10 hidden lg:block"
        animate={{ opacity: isActive ? 0 : 1 }}
        transition={{ duration: 0.28, ease: fadeEase }}
        style={{ pointerEvents: "none" }}
      >
        <div className="w-8 h-[2px] bg-gradient-to-r from-napta-green to-transparent rounded-full" />
      </motion.div>
    </div>

    <motion.div
      className="absolute inset-0 rounded-xl lg:rounded-2xl pointer-events-none"
      animate={{
        boxShadow: isActive
          ? "inset 0 0 0 1px rgba(255,255,255,0.12), 0 24px 48px -12px rgba(15, 37, 87, 0.35)"
          : "inset 0 0 0 1px rgba(255,255,255,0.06), 0 8px 24px -8px rgba(15, 37, 87, 0.15)",
      }}
      transition={{ duration: 0.45, ease: fadeEase }}
    />
  </motion.div>
);

const MobilePortfolioCard = ({ portfolio, index, onNavigate }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="relative flex-shrink-0 w-[82vw] max-w-[300px] snap-center min-h-[300px] rounded-xl overflow-hidden shadow-lg shadow-napta-navy/10 ring-1 ring-slate-900/5"
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${portfolio.image})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-napta-navy/95 via-napta-navy/65 to-napta-navy/30" />
    <div className="absolute inset-0 bg-gradient-to-br from-napta-green/20 via-transparent to-napta-blue/10" />
    <div className="absolute inset-0 bg-black/25" />

    <div className="relative z-10 h-full flex flex-col justify-between p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="text-napta-lightGreen text-[9px] font-semibold tracking-[0.15em] uppercase">
            0{index + 1}
          </span>
          <h3 className="text-base font-bold text-white mt-0.5 leading-tight">
            {portfolio.title}
          </h3>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white mb-1.5 leading-snug">
          {portfolio.headline}
        </h4>
        <p className="text-white/70 text-xs leading-relaxed mb-3 line-clamp-3">
          {portfolio.body}
        </p>
        <button
          onClick={() => onNavigate(portfolio.programId)}
          className="inline-flex items-center gap-1.5 bg-napta-green text-white font-medium px-3 py-2 rounded-lg text-xs shadow-md shadow-napta-green/20"
        >
          {portfolio.cta}
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  </motion.div>
);

const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { navigateTo } = useNavigation();

  const handleNavigate = (programId) => {
    navigateTo(`programs/${programId}`);
  };

  return (
    <section className="py-10 sm:py-14 bg-canvas overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-6 h-[2px] bg-napta-green rounded-full" />
            <p className="text-napta-green text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase">
              Core Operations
            </p>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-napta-navy mb-2 leading-tight">
            Transformative{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-napta-green to-napta-blue">
              Programs
            </span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Translating independent research into actionable knowledge and
            scalable resources to shape the future of public mobility.
          </p>
        </motion.div>

        <div className="relative rounded-2xl bg-canvas-alt ring-1 ring-slate-200/70 p-2 sm:p-3 shadow-[0_4px_24px_-8px_rgba(15,37,87,0.08)]">
          <LayoutGroup>
            <motion.div
              layout
              className="hidden lg:flex lg:items-stretch gap-2"
              onMouseLeave={() => setActiveIndex(0)}
            >
              {portfolios.map((portfolio, index) => (
                <PortfolioCard
                  key={portfolio.title}
                  portfolio={portfolio}
                  index={index}
                  isActive={activeIndex === index}
                  onInteract={setActiveIndex}
                  onNavigate={handleNavigate}
                />
              ))}
            </motion.div>
          </LayoutGroup>

          {/* Mobile — horizontal scroll row */}
          <div className="lg:hidden -mx-1">
            <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 px-1 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {portfolios.map((portfolio, index) => (
                <MobilePortfolioCard
                  key={portfolio.title}
                  portfolio={portfolio}
                  index={index}
                  onNavigate={handleNavigate}
                />
              ))}
            </div>
            <div className="flex items-center justify-center gap-1.5 mt-3">
              {portfolios.map((_, index) => (
                <span
                  key={index}
                  className="w-1.5 h-1.5 rounded-full bg-slate-300"
                />
              ))}
            </div>
            <p className="text-center text-[10px] text-slate-400 mt-1.5 tracking-wide">
              Swipe to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
