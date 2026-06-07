import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ darkMode, setDarkMode, activeSection, setActiveSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Simplified and consolidated editorial menu structure as requested
  const navItems = [
    { 
      id: 'about', 
      label: 'About', 
      targetId: 'about',
      activeIds: ['about'],
      subtitle: 'Biography & Specs'
    },
    { 
      id: 'work', 
      label: 'Work', 
      targetId: 'films',
      activeIds: ['films', 'modeling', 'timeline', 'brands'],
      subtitle: 'Cinema & Couture'
    },
    { 
      id: 'gallery', 
      label: 'Gallery', 
      targetId: 'gallery',
      activeIds: ['gallery'],
      subtitle: 'Editorial Gallery'
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      targetId: 'contact',
      activeIds: ['contact'],
      subtitle: 'Get In Touch'
    },
  ];

  const handleNavClick = (targetId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 79; // Subtract header height to prevent section headers from being covered
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Instantly set section to make UI ultra-responsive
      const matchedItem = navItems.find(item => item.targetId === targetId || item.activeIds.includes(targetId));
      if (matchedItem) {
        setActiveSection(targetId);
      }
    }
  };

  // Helper to determine if a menu item is active
  const isItemActive = (item: typeof navItems[number]) => {
    return item.activeIds.includes(activeSection);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-500 ${
        darkMode 
          ? 'bg-[#0A0A0A]/85 border-neutral-900/60 text-[#F5F5F5]' 
          : 'bg-[#F9F9F8]/85 border-neutral-200/60 text-[#111111]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo - High-fashion editorial look */}
        <a
          href="/"
          onClick={() => handleNavClick('hero')} 
          className="text-left cursor-pointer group focus:outline-none"
          id="logo-button"
        >
          <span className="font-serif text-lg sm:text-xl tracking-[0.25em] font-light block transition-opacity group-hover:opacity-80">
            G G
          </span>
        </a>

        {/* Desktop Navigation - Clean, Typographically Refined */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => {
            const isActive = isItemActive(item);
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.targetId)}
                className={`relative py-2 text-[11px] font-mono uppercase tracking-[0.2em] cursor-pointer transition-all duration-300 hover:opacity-100 ${
                  isActive ? 'opacity-100 font-medium' : 'opacity-40'
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                      darkMode ? 'bg-white' : 'bg-black'
                    }`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-3">
          {/* Light/Dark Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-full border transition-all duration-300 cursor-pointer focus:outline-none ${
              darkMode 
                ? 'border-neutral-900 bg-neutral-950/40 hover:bg-neutral-900/80 text-neutral-300 hover:text-white' 
                : 'border-neutral-200 bg-neutral-100/40 hover:bg-neutral-100/80 text-neutral-600 hover:text-black'
            }`}
            aria-label="Toggle Theme"
            id="theme-toggle"
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Toggle Button for Mobile Devices (Mobile/Tablet viewport) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-full border transition-all duration-300 cursor-pointer focus:outline-none ${
              darkMode 
                ? 'border-neutral-900 bg-neutral-950/60 text-neutral-300 hover:text-white hover:bg-neutral-900' 
                : 'border-neutral-200 bg-neutral-100/60 text-neutral-600 hover:text-black hover:bg-neutral-100'
            }`}
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </div>

      {/* Deluxe Dropdown Drawer on Mobile with Subtle Slide Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`md:hidden border-t overflow-hidden transition-colors duration-500 ${
              darkMode ? 'bg-[#0B0B0B] border-neutral-900/80' : 'bg-[#FAF9F6] border-[#e1e0d9]'
            }`}
            id="mobile-menu-panel"
          >
            <div className="px-6 py-8 space-y-5">
              {navItems.map((item) => {
                const isActive = isItemActive(item);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.targetId)}
                    className="flex items-center justify-between w-full py-2 group cursor-pointer text-left focus:outline-none"
                    id={`mobile-nav-${item.id}`}
                  >
                    <div>
                      {/* Serif & Sans-Serif Elegant Labeling */}
                      <span className={`block font-serif text-lg tracking-wide transition-colors ${
                        isActive
                          ? darkMode ? 'text-white font-medium' : 'text-black font-medium'
                          : darkMode ? 'text-neutral-400 group-hover:text-neutral-200' : 'text-neutral-500 group-hover:text-neutral-800'
                      }`}>
                        {item.label}
                      </span>
                      <span className="block text-[9px] font-mono uppercase tracking-widest opacity-40 mt-0.5">
                        {item.subtitle}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      {isActive && (
                        <div className={`w-1.5 h-1.5 rounded-full ${darkMode ? 'bg-white' : 'bg-black'}`} />
                      )}
                      <ArrowRight 
                        size={12} 
                        className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${
                          darkMode ? 'text-neutral-400' : 'text-neutral-500'
                        }`} 
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
