import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TIMELINE } from '../data';
import { Landmark, Calendar, Award, Star, Compass, ChevronDown, CheckCircle, Check } from 'lucide-react';

interface TimelineProps {
  darkMode: boolean;
}

export default function Timeline({ darkMode }: TimelineProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Acting' | 'Modeling' | 'Personal' | 'Milestone'>('All');
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = ['All', 'Acting', 'Modeling', 'Personal', 'Milestone'] as const;

  const filteredEvents = useMemo(() => {
    if (activeCategory === 'All') return TIMELINE;
    return TIMELINE.filter((ev) => ev.category === activeCategory);
  }, [activeCategory]);

  const toggleExpand = (id: string) => {
    setExpandedEventId((prev) => (prev === id ? null : id));
  };

  const getCategoryIcon = (cat: 'Acting' | 'Modeling' | 'Personal' | 'Milestone') => {
    switch (cat) {
      case 'Acting': return Star;
      case 'Modeling': return Award;
      case 'Personal': return Compass;
      case 'Milestone': return Landmark;
    }
  };

  return (
    <section 
      id="timeline" 
      className={`py-24 px-6 border-b transition-colors duration-500 ${
        darkMode ? 'border-neutral-900 bg-[#070707]' : 'border-neutral-200 bg-[#FAF9F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-3">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-60 block">
            CHRONOLOGICAL MILEPOSTS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-normal font-light">
            Career Timeline <span className="font-serif italic font-light">&amp; History</span>
          </h2>
          <div className={`h-px w-20 mx-auto md:mx-0 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-300'}`} />
        </div>

        {/* Categories Dropdown selector */}
        <div className="flex justify-center md:justify-start mb-16 pb-2">
          <div className="relative w-full max-w-70 z-30">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-50 block mb-2 text-left">
              Filter Milestone Category
            </span>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-[11px] font-mono uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer focus:outline-none ${
                darkMode
                  ? 'bg-[#121212] border-neutral-800 text-white hover:border-neutral-700'
                  : 'bg-white border-neutral-200 text-black hover:border-neutral-400'
              }`}
              id="timeline-dropdown-trigger"
            >
              <span>{activeCategory === 'All' ? 'All Milestones' : `${activeCategory} Events`}</span>
              <ChevronDown size={12} className={`transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <>
                  {/* Invisible clickcatcher to close dropdown on click outside */}
                  <div className="fixed inset-0 z-20" onClick={() => setDropdownOpen(false)} />
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className={`absolute left-0 right-0 mt-1.5 border z-30 rounded-none shadow-xl ${
                      darkMode ? 'bg-[#121212] border-neutral-800' : 'bg-white border-neutral-200'
                    }`}
                  >
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setExpandedEventId(null);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[10px] uppercase font-mono tracking-widest transition-colors flex items-center justify-between cursor-pointer focus:outline-none ${
                          activeCategory === cat
                            ? darkMode
                              ? 'bg-white text-black font-semibold'
                              : 'bg-black text-white font-semibold'
                            : darkMode
                            ? 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                            : 'text-neutral-600 hover:text-black hover:bg-neutral-50/80'
                        }`}
                        id={`timeline-dropdown-option-${cat}`}
                      >
                        <span>{cat}</span>
                        {activeCategory === cat && <Check size={10} />}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Timelines Path Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central string line matching styling */}
          <div className={`absolute left-4 md:left-1/2 translate-x-[-0.5px] top-4 bottom-4 w-px transition-colors duration-500 ${
            darkMode ? 'bg-neutral-800' : 'bg-neutral-200'
          }`} />

          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((event, index) => {
                const IconComponent = getCategoryIcon(event.category);
                const isEven = index % 2 === 0;
                const isExpanded = expandedEventId === event.id;

                return (
                  <motion.div
                    key={event.id}
                    layout
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                    id={`timeline-row-${event.id}`}
                  >
                    {/* Left/Right Card Spacer */}
                    <div className="hidden md:block w-5/12" />

                    {/* Chrono Circular Badge Pin */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        onClick={() => toggleExpand(event.id)}
                        className={`w-9 h-9 rounded-full border flex items-center justify-center shadow-lg cursor-pointer transition-colors duration-300 ${
                          darkMode 
                            ? 'bg-neutral-950 border-neutral-800 hover:bg-white text-white hover:text-black' 
                            : 'bg-white border-neutral-200 hover:bg-black text-black hover:text-white'
                        }`}
                        id={`timeline-pin-${event.id}`}
                      >
                        <IconComponent size={14} />
                      </motion.div>
                    </div>

                    {/* Timeline Content Card */}
                    <div className="w-full md:w-5/12 pl-12 md:pl-0">
                      <motion.div
                        whileHover={{ y: -3 }}
                        onClick={() => toggleExpand(event.id)}
                        className={`p-6 border text-left cursor-pointer transition-all duration-300 relative shadow-sm hover:shadow-md ${
                          darkMode 
                            ? 'border-neutral-900 bg-neutral-950/80 hover:border-neutral-700 text-white' 
                            : 'border-neutral-100 bg-white hover:border-neutral-300 text-black'
                        }`}
                        id={`timeline-card-${event.id}`}
                      >
                        {/* Upper tag bar */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-base font-semibold tracking-wider flex items-center gap-1">
                            <Calendar size={12} className="opacity-50" /> {event.year}
                          </span>
                          <span className={`text-[8px] font-mono tracking-widest px-2 py-0.5 border uppercase ${
                            darkMode ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
                          }`}>
                            {event.category}
                          </span>
                        </div>

                        {/* Event Title */}
                        <h3 className="font-serif text-lg tracking-normal font-light">
                          {event.title}
                        </h3>
                        <p className={`font-serif italic text-xs leading-relaxed mt-0.5 mb-2 opacity-75 ${
                          darkMode ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                          {event.subtitle}
                        </p>

                        {/* Quick Brief */}
                        <p className="text-xs font-light leading-relaxed opacity-70">
                          {event.description}
                        </p>

                        {/* Interactive Expand Details Block with motion */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className={`mt-4 pt-4 border-t font-sans text-xs font-light leading-relaxed opacity-85 transition-colors duration-500 space-y-2 text-left ${
                                darkMode ? 'border-neutral-900' : 'border-neutral-100'
                              }`}>
                                <p>{event.detailText || 'No further campaign descriptions available for this block.'}</p>
                                <div className="flex items-center gap-1.5 font-mono text-[8px] tracking-widest uppercase opacity-60 text-green-500 mt-2">
                                  <CheckCircle size={10} /> Authenticated Milestone
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Expanding Icon controller */}
                        <div className="mt-4 flex justify-between items-center text-[9px] font-mono tracking-widest uppercase opacity-45">
                          <span>{isExpanded ? 'Collapse Stories' : 'Read History'}</span>
                          <ChevronDown 
                            size={12} 
                            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                          />
                        </div>

                      </motion.div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
