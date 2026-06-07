import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MODELING_PROJECTS } from '../data';
import { Calendar, ExternalLink, ChevronDown, Check } from 'lucide-react';

interface ModelingProps {
  darkMode: boolean;
}

export default function Modeling({ darkMode }: ModelingProps) {
  const [selectedType, setSelectedType] = useState<'All' | 'Editorial' | 'Runway' | 'Cover'>('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredModelingProps = useMemo(() => {
    if (selectedType === 'All') return MODELING_PROJECTS;
    return MODELING_PROJECTS.filter((p) => p.type === selectedType);
  }, [selectedType]);

  return (
    <section 
      id="modeling" 
      className={`py-24 px-6 border-b transition-colors duration-500 ${
        darkMode ? 'border-neutral-900 bg-[#070707]' : 'border-neutral-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
          <div className="text-left space-y-3">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-60 block">
              COUTURE &amp; COVERAGE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl tracking-normal font-light">
              Modeling <span className="font-serif italic font-light">&amp; Runways</span>
            </h2>
            <div className={`h-px w-20 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-300'}`} />
          </div>

          {/* Type Dropdown Filter */}
          <div className="relative w-full sm:max-w-60 z-30">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-50 block mb-2 text-left">
              Campaign Type
            </span>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-[11px] font-mono uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer focus:outline-none ${
                darkMode
                  ? 'bg-[#121212] border-neutral-800 text-white hover:border-neutral-700'
                  : 'bg-white border-neutral-200 text-black hover:border-neutral-400'
              }`}
              id="model-type-dropdown-trigger"
            >
              <span>{selectedType === 'All' ? 'All Campaigns' : `${selectedType} Campaigns`}</span>
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
                    {(['All', 'Editorial', 'Runway', 'Cover'] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setSelectedType(type);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[10px] uppercase font-mono tracking-widest transition-colors flex items-center justify-between cursor-pointer focus:outline-none ${
                          selectedType === type
                            ? darkMode
                              ? 'bg-white text-black font-semibold'
                              : 'bg-black text-white font-semibold'
                            : darkMode
                            ? 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                            : 'text-neutral-600 hover:text-black hover:bg-neutral-50/80'
                        }`}
                        id={`model-type-option-${type}`}
                      >
                        <span>{type}</span>
                        {selectedType === type && <Check size={10} />}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Modeling Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredModelingProps.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 30 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                className={`border group flex flex-col md:flex-row h-auto md:h-85 overflow-hidden transition-colors duration-500 ${
                  darkMode ? 'border-neutral-900 bg-[#0C0C0C]' : 'border-neutral-100 bg-[#FAF9F6]'
                }`}
                id={`modeling-project-${project.id}`}
              >
                {/* Visual Imagery */}
                <div className="w-full md:w-5/12 md:h-full relative overflow-hidden bg-neutral-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1.2s]"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black/70 to-transparent pointer-events-none" />
                  
                  {/* Category Stamp on Portrait */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[8px] font-mono tracking-[0.2em] uppercase bg-black/80 font-medium text-white/95 border border-white/15">
                      {project.type}
                    </span>
                  </div>

                  <span className="absolute bottom-4 left-4 font-mono text-[9px] tracking-widest text-white/80">
                    CAMP. {project.year}
                  </span>
                </div>

                {/* Info and Highlights Column */}
                <div className="w-full md:w-7/12 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[9px] tracking-[0.2em] uppercase opacity-50">
                          {project.client}
                        </span>
                        <span className="font-mono text-[9px] opacity-40 flex items-center gap-1">
                          <Calendar size={10} /> {project.year}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl tracking-normal font-light">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-xs font-light leading-relaxed opacity-70">
                      {project.description}
                    </p>

                    {/* Bullet Highlights in Editorial lists */}
                    <div className="space-y-1.5 pt-1.5 border-t border-neutral-200 dark:border-neutral-900/40">
                      <span className="font-mono text-[8px] tracking-[0.2em] uppercase opacity-40 block">Key Highlights</span>
                      <ul className="grid grid-cols-1 gap-1">
                        {project.highlights.map((hlt, hIdx) => (
                          <li key={hIdx} className="text-[10px] font-light flex items-start gap-1.5 opacity-80">
                            <span className="text-neutral-400 font-mono mt-0.5">&bull;</span>
                            <span className="line-clamp-1">{hlt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Brand signature arrow link */}
                  <div className="flex items-center justify-end pt-4 border-t border-neutral-150 dark:border-neutral-900">
                    <a
                      href="#contact"
                      className="text-[9px] flex items-center gap-1 font-mono uppercase tracking-[0.2em] opacity-45 hover:opacity-100 transition-opacity"
                    >
                      Campaign Dossier <ExternalLink size={10} />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
