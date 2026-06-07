import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRANDS } from '../data';
// import { Sparkles, ArrowRight, Quote } from 'lucide-react';
import { RiSparkling2Line, RiArrowRightLine, RiDoubleQuotesR } from '@remixicon/react';

interface BrandsProps {
  darkMode: boolean;
}

export default function Brands({ darkMode }: BrandsProps) {
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);

  const activeBrand = BRANDS[activeBrandIndex];

  return (
    <section 
      id="brands" 
      className={`py-24 px-6 border-b transition-colors duration-500 ${
        darkMode ? 'border-neutral-900 bg-[#0A0A0A]' : 'border-neutral-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-3">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-60 block">
            LUXURY ALLIANCES
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-normal font-light">
            Brand Associations <span className="font-serif italic font-light">&amp; Partners</span>
          </h2>
          <div className={`h-px w-20 mx-auto md:mx-0 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-300'}`} />
        </div>

        {/* Brand Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Brand Left Nav List (4 Column) */}
          <div className="lg:col-span-4 space-y-3 self-start">
            <span className="font-mono text-[8px] tracking-[0.25em] uppercase opacity-40 block mb-2">PARTNER DIRECTORY</span>
            {BRANDS.map((brand, bIdx) => {
              const isActive = activeBrandIndex === bIdx;
              return (
                <button
                  key={brand.id}
                  onClick={() => setActiveBrandIndex(bIdx)}
                  className={`w-full text-left p-4 border transition-all duration-350 cursor-pointer flex justify-between items-center ${
                    isActive
                      ? darkMode
                        ? 'bg-white text-black border-white pl-6'
                        : 'bg-black text-white border-black pl-6'
                      : darkMode
                      ? 'border-neutral-900 bg-neutral-950/30 text-neutral-400 hover:text-white hover:border-neutral-800'
                      : 'border-neutral-100 bg-[#FAFAF9] text-neutral-600 hover:text-black hover:border-neutral-200'
                  }`}
                  id={`brand-select-${brand.id}`}
                >
                  <div className="space-y-0.5">
                    <span className="font-serif text-base tracking-wide font-medium">{brand.name}</span>
                    <span className="font-mono text-[9px] block opacity-60 uppercase">{brand.role.split(' ')[0]} Engagement</span>
                  </div>
                  {isActive && <RiArrowRightLine size={14} />}
                </button>
              );
            })}
          </div>

          {/* Active Brand Dossier Display Card (8 Column) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBrand.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={`border overflow-hidden grid grid-cols-1 md:grid-cols-12 transition-all duration-500 shadow-xl ${
                  darkMode ? 'bg-[#0E0E0E] border-neutral-800 text-white' : 'bg-white border-neutral-150 text-black'
                }`}
                id={`brand-panel-${activeBrand.id}`}
              >
                {/* Visual Campaign block */}
                <div className="md:col-span-5 h-full min-h-80 relative bg-neutral-950 overflow-hidden">
                  <img
                    src={activeBrand.image}
                    alt={activeBrand.name}
                    className="w-full h-full object-cover object-top grayscale brightness-90 hover:scale-[1.03] transition-transform duration-[1.5s]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                  
                  {/* Floating logo stamp */}
                  <div className="absolute bottom-6 left-6 text-white text-left space-y-1">
                    <span className="font-mono text-[8px] tracking-[0.3em] uppercase opacity-75">PARTNERSHIP INITIATOR</span>
                    <h4 className="font-serif text-xl tracking-wide font-light">{activeBrand.name}</h4>
                  </div>
                </div>

                {/* Information Campaign block */}
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-between space-y-8">
                  <div className="space-y-5">
                    
                    {/* Header tags */}
                    <div className="flex justify-between items-center border-b pb-4 transition-colors border-neutral-100 dark:border-neutral-900">
                      <div>
                        <span className="font-mono text-[8px] tracking-widest uppercase opacity-45 block">Contract Title</span>
                        <span className="text-[12px] font-medium tracking-wide font-mono uppercase text-sky-500 dark:text-sky-450">{activeBrand.role}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[8px] tracking-widest uppercase opacity-45 block">Started</span>
                        <span className="text-[11px] font-mono tracking-wider font-light">{activeBrand.yearStarted}</span>
                      </div>
                    </div>

                    {/* Campaign Context */}
                    <div className="space-y-2 text-left">
                      <span className="font-mono text-[9px] tracking-widest uppercase opacity-40 flex items-center gap-1.5">
                        <RiSparkling2Line size={11} className={darkMode ? 'text-white' : 'text-black'} /> Leading Campaigns
                      </span>
                      <h4 className="font-serif italic text-lg opacity-85">{activeBrand.activeCampaign}</h4>
                      <p className="text-xs font-light leading-relaxed opacity-70">
                        {activeBrand.description}
                      </p>
                    </div>

                  </div>

                  {/* Ambassador Quote */}
                  <div className={`p-4 border relative text-left transition-colors duration-500 ${
                    darkMode ? 'bg-neutral-900/30 border-neutral-800' : 'bg-neutral-50/80 border-neutral-100'
                  }`}>
                    <RiDoubleQuotesR size={18} className="absolute top-3 right-3 opacity-15" />
                    <p className="font-serif text-[11px] italic leading-relaxed opacity-85 pr-6">
                      &quot;{activeBrand.quote}&quot;
                    </p>
                    <span className="font-mono text-[8px] tracking-widest uppercase block mt-2 text-right opacity-50">— Gal Gadot Statement</span>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
