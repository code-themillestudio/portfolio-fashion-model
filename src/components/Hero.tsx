import { motion } from 'motion/react';
import { ArrowDown, Flame, Sparkles, Award, Compass } from 'lucide-react';
import HeroImage from '../assets/images/others/hero-cover.jpg';

interface HeroProps {
  darkMode: boolean;
  onExploreClick: () => void;
  onBookingClick: () => void;
}

export default function Hero({ darkMode, onExploreClick, onBookingClick }: HeroProps) {
  const highlights = [
    { title: 'Cinematic Stature', value: 'Over $3.5B Box Office', icon: Flame },
    { title: 'High Fashion Icon', value: 'Tiffany & Co. / Gucci / Vogue', icon: Sparkles },
    { title: 'Production Captain', value: 'Founded Pilot Wave Productions', icon: Compass },
    { title: 'Global Legacy', value: 'Hollywood Walk of Fame Class 2024', icon: Award },
  ];

  return (
    <section 
      id="hero" 
      className={`min-h-screen relative flex flex-col justify-between pt-24 pb-8 overflow-hidden transition-colors duration-500`}
    >
      {/* Background Ambience Design */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {darkMode ? (
          <>
            <div className="absolute top-1/4 left-1/4 w-100 h-100 rounded-full bg-neutral-900/40 blur-[130px]" />
            <div className="absolute bottom-1/4 right-10 w-125 h-137.5 rounded-full bg-neutral-800/40 blur-[150px]" />
            <div className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] bg-size-[16px_16px] opacity-25" />
          </>
        ) : (
          <>
            <div className="absolute top-1/4 left-1/3 w-93.75 h-93.75 rounded-full bg-[#E5E4E2]/50 blur-[100px]" />
            <div className="absolute bottom-1/3 right-1/4 w-125 h-125 rounded-full bg-[#EAE8E4]/40 blur-[120px]" />
            <div className="absolute inset-0 bg-[radial-gradient(#ddd_1px,transparent_1px)] bg-size-[16px_16px] opacity-40" />
          </>
        )}
      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 w-full grow flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 z-10 py-8 lg:py-0">
        {/* Left Editorial Text Column */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="font-mono text-xs tracking-[0.35em] uppercase opacity-70 block">
              Gla-mour &bull; Strength &bull; Grace
            </span>

            <h1 className="font-serif text-5xl sm:text-7xl xl:text-8xl tracking-tight leading-[0.95] font-light">
              GAL <br className="hidden lg:block" />
              <span className="font-serif italic font-light">GADOT</span>
            </h1>

            <p className="font-sans text-sm sm:text-base xl:text-lg max-w-lg mx-auto lg:mx-0 font-light leading-relaxed opacity-85 mt-6">
              Empowering global cinema and elite high fashion. From Israeli defense trainer to global superhero archetype and high-jewelry muse, showcasing authentic strength, empathy, and artistic vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={onExploreClick}
              className={`px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 relative group overflow-hidden cursor-pointer ${
                darkMode ? 'bg-white text-black hover:bg-neutral-200' : 'bg-black text-white hover:bg-neutral-800'
              }`}
              id="cta-explore"
            >
              Explore Filmography
            </button>
            <button
              onClick={onBookingClick}
              className={`px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium border transition-all duration-300 hover:border-black dark:hover:border-white cursor-pointer ${
                darkMode ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
              }`}
              id="cta-contact"
            >
              Inquire Booking
            </button>
          </motion.div>
        </div>

        {/* Right High-Fashion Artistic Portrait Framing */}
        <div className="flex-1 w-full max-w-105 lg:max-w-none flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-4/5 max-w-120 group"
          >
            {/* Elegant outer geometric thin lines representing editorial borders */}
            <div className={`absolute -inset-4 border transition-colors duration-500 pointer-events-none ${
              darkMode ? 'border-neutral-800' : 'border-neutral-200'
            }`} />

            {/* Main Image Framing with elegant dark wash overlay on hover */}
            <div className={`w-full h-full overflow-hidden border relative z-10 shadow-2xl transition-colors duration-500 flex items-center justify-center ${
              darkMode ? 'border-neutral-900 bg-neutral-950' : 'border-neutral-100 bg-neutral-200'
            }`}>
              <img
                // src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200"
                src={HeroImage}
                alt="Gal Gadot Portrait Muse"
                className="w-full h-full object-cover object-top grayscale brightness-95 hover:grayscale-0 hover:scale-[1.03] transition-all duration-1000 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom tag detailing the shoot */}
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <p className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-75">STUDIO ARCHIVE</p>
                <h4 className="font-serif text-lg tracking-wide font-light">The Monochrome Studies — Session IV</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Highlights Bento Indicators - Premium presentation of milestones */}
      <div className={`w-full border-t border-b transition-colors duration-500 mt-12 py-8 z-10 ${
        darkMode ? 'border-neutral-900 bg-neutral-950/20' : 'border-neutral-200 bg-neutral-50/20'
      }`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((h, i) => {
            const IconComp = h.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="space-y-2 text-center lg:text-left"
              >
                <div className="flex items-center justify-center lg:justify-start space-x-2 opacity-60">
                  <IconComp size={12} className={darkMode ? 'text-white' : 'text-black'} />
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em]">{h.title}</span>
                </div>
                <div className="font-serif text-base sm:text-lg tracking-wide font-medium">
                  {h.value}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Downward Navigation Cue */}
      <div className="w-full flex justify-center pt-6 z-10">
        <motion.button
          onClick={onExploreClick}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className={`flex flex-col items-center gap-1 opacity-50 hover:opacity-100 transition-opacity cursor-pointer`}
          id="btn-scroll-down"
        >
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase">Discovers</span>
          <ArrowDown size={14} />
        </motion.button>
      </div>
    </section>
  );
}
