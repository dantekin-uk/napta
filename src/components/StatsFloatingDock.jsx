import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Users, Building2, Leaf } from 'lucide-react';

// Animated number component
const AnimatedNumber = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });
  
  useEffect(() => {
    if (!isInView) return;
    
    const targetValue = parseInt(value.replace(/[^0-9]/g, ''));
    const increment = targetValue / (duration * 60); // 60 fps
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);
    
    return () => clearInterval(timer);
  }, [isInView, value, duration]);
  
  return <span ref={ref}>{`${count}${value.replace(/[0-9]/g, '')}`}</span>;
};

const StatsFloatingDock = () => {
  const stats = [
    {
      label: 'Years of Sector Transformation',
      value: '5+',
      icon: Clock,
      gradient: 'from-napta-navy to-napta-blue',
      bgGradient: 'from-napta-navy/15 to-napta-blue/10',
      iconBg: 'bg-[#eef2ff] border-[#c7d2fe]',
      iconColor: 'text-[#0f2557]',
      hoverGlow: 'bg-[#0f2557]/20',
    },
    {
      label: 'Operators Engaged & Trained',
      value: '50000+',
      icon: Users,
      gradient: 'from-napta-blue to-napta-brightBlue',
      bgGradient: 'from-napta-blue/15 to-napta-brightBlue/10',
      iconBg: 'bg-[#dbeafe] border-[#93c5fd]',
      iconColor: 'text-[#1e40af]',
      hoverGlow: 'bg-[#1e40af]/20',
    },
    {
      label: 'Global & Institutional Partners',
      value: '20+',
      icon: Building2,
      gradient: 'from-napta-brightBlue to-napta-green',
      bgGradient: 'from-napta-brightBlue/15 to-napta-green/10',
      iconBg: 'bg-[#e0f2fe] border-[#7dd3fc]',
      iconColor: 'text-[#2563eb]',
      hoverGlow: 'bg-[#2563eb]/20',
    },
    {
      label: 'Green Fleet & E-Mobility Blueprints',
      value: '50+',
      icon: Leaf,
      gradient: 'from-napta-green to-napta-lightGreen',
      bgGradient: 'from-napta-green/15 to-napta-lightGreen/10',
      iconBg: 'bg-[#dcfce7] border-[#86efac]',
      iconColor: 'text-[#16a34a]',
      hoverGlow: 'bg-[#22c55e]/20',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex justify-center -translate-y-8 sm:-translate-y-10 relative z-20 px-3 sm:px-4 md:px-6 lg:px-8 mb-8 sm:mb-12">
      <div className={`w-full max-w-6xl transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* Main Dock Container */}
        <div className="relative">
          {/* Animated glow effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-napta-green/12 via-napta-blue/10 to-napta-green/12 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-napta-blue/8 via-transparent to-napta-green/8 rounded-3xl blur-2xl opacity-50"></div>

          {/* Glass morphism card */}
          <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_8px_40px_-12px_rgba(15,37,87,0.15)] ring-1 ring-slate-200/70 overflow-hidden">
            {/* Gradient border animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-napta-green/20 via-napta-blue/15 to-napta-green/20 opacity-0 hover:opacity-100 transition-all duration-700 rounded-3xl animate-gradient-shift"></div>
            
            {/* Subtle inner shadow */}
            <div className="absolute inset-0 shadow-inner rounded-3xl bg-gradient-to-br from-white/40 to-transparent"></div>

            <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl px-3 sm:px-5 md:px-6 py-3 sm:py-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="group relative flex flex-col items-center justify-center text-center"
                      style={{
                        animation: isVisible ? `fadeInUp 0.8s ease-out ${index * 0.2}s backwards` : 'none',
                      }}
                    >
                      {/* Enhanced gradient blob background */}
                      <div className={`absolute -inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-br ${stat.bgGradient} rounded-xl sm:rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl sm:blur-3xl -z-10 scale-105 group-hover:scale-110`}></div>
                      
                      {/* Floating particles effect */}
                      <div className="absolute inset-0 overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-napta-blue rounded-full animate-float"></div>
                        <div className="absolute top-3/4 right-1/4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-napta-navy rounded-full animate-float-delayed"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-napta-green rounded-full animate-float"></div>
                      </div>

                      {/* Modern Icon Container */}
                      <div className="mb-1.5 sm:mb-2 md:mb-3 relative">
                        <div className={`${stat.iconBg} p-1.5 sm:p-2.5 md:p-3 rounded-xl sm:rounded-2xl border transition-all duration-700 transform group-hover:scale-105 sm:group-hover:scale-110 group-hover:shadow-lg relative overflow-hidden`}>
                          <div className={`absolute inset-0 ${stat.hoverGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl`} />
                          <Icon 
                            className={`w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-6 md:h-6 relative z-10 ${stat.iconColor}`}
                            strokeWidth={2.25}
                          />
                        </div>
                      </div>

                      {/* Enhanced Value */}
                      <motion.div
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-napta-navy mb-1 sm:mb-1.5 tabular-nums tracking-tight leading-none"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                      >
                        <AnimatedNumber value={stat.value} duration={2} />
                      </motion.div>

                      {/* Modern Label */}
                      <motion.p
                        className="text-slate-500 font-medium text-[10px] sm:text-xs leading-snug mb-0.5 sm:mb-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                      >
                        {stat.label}
                      </motion.p>

                      {/* Modern bottom accent line */}
                      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 sm:h-1 bg-gradient-to-r ${stat.gradient} group-hover:w-6 sm:group-hover:w-8 md:group-hover:w-12 transition-all duration-700 rounded-full shadow-lg`}></div>
                      
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-l border-napta-green/25 rounded-tl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <div className="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-r border-napta-green/25 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
            opacity: 0.8;
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-8px) rotate(-180deg);
            opacity: 0.8;
          }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default StatsFloatingDock;
