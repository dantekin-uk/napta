import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigation } from '../contexts/NavigationContext'

function Header() {
  const { navigateTo, currentPage } = useNavigation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const menuItems = [
    {
      label: 'About Us',
      items: [
        { label: 'Our Story & Values', href: 'story', isPage: true },
        { label: 'Our Team', href: 'team', isPage: true },
        { label: 'Our Partners', href: 'partners', isPage: true }
      ]
    },
    {
      label: 'Programs',
      items: [
        { label: 'All Programs', href: 'programs', isPage: true },
        { label: 'Legal & Policy Reforms', href: 'programs/legal-reforms', isPage: true },
        { label: 'Fleet Renewal Initiative', href: 'programs/fleet-renewal', isPage: true },
        { label: 'Transformational Leadership', href: 'programs/transformational-leadership', isPage: true },
        { label: 'Breathe Cities Campaign', href: 'programs/breathe-cities', isPage: true }
      ]
    }
  ]

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('header')) setMobileMenuOpen(false)
    }
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white/95 via-blue-50/50 to-white/95 backdrop-blur-xl border-b border-napta-navy/10">
      <style>{`
        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateY(-12px);
            filter: blur(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        .logo-hover {
          position: relative;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .logo-hover:hover {
          filter: drop-shadow(0 12px 24px rgba(15, 37, 87, 0.25));
          transform: translateY(-4px) scale(1.05);
        }

        .nav-link {
          position: relative;
          color: #475569;
          font-weight: 600;
          font-size: 0.8125rem;
          letter-spacing: 0.01em;
          transition: all 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #22c55e 0%, #2563eb 100%);
          border-radius: 3px;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .nav-link:hover {
          color: #0f2557;
        }

        .dropdown-menu {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-12px);
          filter: blur(8px);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .group:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          filter: blur(0);
          animation: dropdownSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .dropdown-link {
          position: relative;
          overflow: hidden;
          display: block;
          transition: all 0.3s ease;
          color: #374151;
          font-weight: 700;
        }

        .dropdown-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1e40af15 0%, #22c55e15 100%);
          border-radius: 0.5rem;
          z-index: -1;
          transition: left 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .dropdown-link:hover {
          color: #0f2557;
          padding-left: 1.25rem;
        }

        .dropdown-link:hover::before {
          left: 0;
        }

        .dropdown-accent {
          position: absolute;
          top: 0;
          left: -4px;
          width: 4px;
          height: 0;
          background: linear-gradient(180deg, #22c55e 0%, #2563eb 100%);
          border-radius: 0 2px 2px 0;
          transition: height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .dropdown-link:hover .dropdown-accent {
          height: 100%;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              navigateTo('home');
            }} 
            className="flex-shrink-0 logo-hover"
          >
            <img
              src="/naptalogo.png"
              alt="NAPTA Logo"
              className="h-11 sm:h-14 w-auto"
            />
          </a>

          {/* Desktop & Tablet Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {menuItems.map((menu, idx) => (
              <div key={idx} className="relative group">
                <button
                  onClick={(e) => {
                    if (menu.label === 'Programs') {
                      e.preventDefault();
                      navigateTo('programs');
                    }
                  }}
                  className="nav-link px-3 py-2 flex items-center gap-1.5 rounded-lg transition-all duration-300"
                >
                  {menu.label}
                  <svg className="w-4 h-4 transition-all duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="dropdown-menu absolute left-0 mt-2 w-60 bg-white rounded-xl shadow-2xl border border-napta-navy/10 backdrop-blur-sm">
                  <div className="py-2 px-1">
                    {menu.items.map((item, i) => (
                      <a
                        key={i}
                        href={item.isPage ? '#' : item.href}
                        className={`dropdown-link px-4 py-3 text-sm rounded-lg relative group/item ${item.isPage && (currentPage === item.href || currentPage.startsWith('programs/')) && item.href.startsWith('programs/') ? 'bg-napta-green/5' : item.isPage && currentPage === item.href ? 'bg-napta-green/5' : ''}`}
                        onClick={(e) => {
                          if (item.isPage) {
                            e.preventDefault();
                            navigateTo(item.href);
                            setMobileMenuOpen(false);
                          } else {
                            setMobileMenuOpen(false);
                          }
                        }}
                      >
                        <span className="dropdown-accent"></span>
                        <span className="relative z-10">{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateTo('summit');
              }} 
              className={`nav-link px-3 py-2 rounded-lg transition-all duration-300 ${currentPage === 'summit' ? 'text-napta-green' : ''}`}
            >
              The Summit
            </a>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                navigateTo('resources');
              }} 
              className={`nav-link px-3 py-2 rounded-lg transition-all duration-300 ${currentPage === 'resources' ? 'text-napta-green' : ''}`}
            >
              Resources
            </a>
          </nav>

          {/* CTA Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              navigateTo('contact');
            }}
            className="hidden sm:inline-flex items-center bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold px-5 py-2 rounded-lg shadow-md shadow-napta-green/20 hover:shadow-lg hover:shadow-napta-green/30 transition-all duration-300 text-xs sm:text-sm relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-napta-blue to-napta-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative">Partner With Us</span>
          </button>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl text-napta-navy hover:bg-gradient-to-r from-blue-50 to-green-50 transition-all duration-300 shadow-sm hover:shadow-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/30 md:hidden z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Floating Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
              className="md:hidden fixed top-20 left-4 right-4 z-50"
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-napta-blue/20 overflow-hidden">
                {/* Menu Items */}
                <div className="p-4 space-y-2">
                  {menuItems.map((menu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="border-b border-napta-blue/10 pb-2 last:border-0 last:pb-0"
                    >
                      <button className="w-full text-left text-napta-navy font-semibold py-1.5 text-xs sm:text-sm">
                        {menu.label}
                      </button>
                      <div className="pl-3 mt-1 space-y-1">
                        {menu.items.map((item, i) => (
                          <a
                            key={i}
                            href={item.isPage ? '#' : item.href}
                            onClick={(e) => {
                              if (item.isPage) {
                                e.preventDefault();
                                navigateTo(item.href);
                                setMobileMenuOpen(false);
                              } else {
                                setMobileMenuOpen(false);
                              }
                            }}
                            className={`block py-1.5 text-gray-700 text-xs hover:text-napta-navy font-medium transition-all duration-300 ${item.isPage && (currentPage === item.href || (currentPage.startsWith('programs/') && item.href.startsWith('programs/'))) ? 'text-napta-green' : ''}`}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  ))}

                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('summit');
                      setMobileMenuOpen(false);
                    }}
                    className={`block py-1.5 text-napta-navy font-semibold text-xs sm:text-sm hover:text-napta-green transition-all duration-300 ${currentPage === 'summit' ? 'text-napta-green' : ''}`}
                  >
                    The Summit
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('resources');
                      setMobileMenuOpen(false);
                    }}
                    className={`block py-1.5 text-napta-navy font-semibold text-xs sm:text-sm hover:text-napta-green transition-all duration-300 ${currentPage === 'resources' ? 'text-napta-green' : ''}`}
                  >
                    Resources
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo('faq');
                      setMobileMenuOpen(false);
                    }}
                    className={`block py-1.5 text-napta-navy font-semibold text-xs sm:text-sm hover:text-napta-green transition-all duration-300 ${currentPage === 'faq' ? 'text-napta-green' : ''}`}
                  >
                    FAQs
                  </motion.a>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 }}
                    className="pt-3"
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo('contact');
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-center bg-gradient-to-r from-napta-green to-napta-blue hover:from-napta-lightGreen hover:to-napta-brightBlue text-white font-semibold px-6 py-2.5 rounded-lg shadow-md shadow-napta-green/20 transition-all duration-300 text-xs sm:text-sm"
                    >
                      Partner With Us
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
