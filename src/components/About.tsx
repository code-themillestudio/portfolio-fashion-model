import { Award, Compass, Heart } from 'lucide-react';
import PhysicalStats from './PhysicalStats';
import ImageCover from '../assets/images/others/hero-cover-3.jpg';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const values = [
    {
      title: 'Authentic Strength',
      desc: 'Integrating her military fitness background (IDF) into full-stunt cinematic roles, proving power and grace exist in equal measure.',
      icon: Award,
    },
    {
      title: 'Global Advocacy',
      desc: 'Championing clean water access, supporting children’s health organizations, and speaking out globally in support of female leadership.',
      icon: Heart,
    },
    {
      title: 'Pilot Wave Productions',
      desc: 'Pioneering storytelling behind the camera. Producing stories of profound women like Irena Sendler and Hedy Lamarr.',
      icon: Compass,
    },
  ];

  return (
    <section 
      id="about" 
      className={`py-24 px-6 border-b transition-colors duration-500 ${
        darkMode ? 'border-neutral-900 bg-[#070707]' : 'border-neutral-200 bg-[#FCFAF7]'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b transition-colors duration-500 dark:border-neutral-900 border-neutral-100">
          <div className="space-y-3">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-60 block">
              THE ESSENCE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide">
              About <span className="font-serif italic font-light">Gal Gadot</span>
            </h2>
          </div>
          <p className="max-w-md font-sans text-xs sm:text-sm font-light leading-relaxed opacity-75">
            A versatile force of screens, runways, and executive boards. Gal marries Israeli combat perseverance with global high jewelry sophistication.
          </p>
        </div>

        {/* Narrative & Visual Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Creative Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-xl sm:text-3xl font-light leading-snug tracking-wide">
                An authentic synthesis of courage, high-fashion poise, and artistic vision.
              </h3>
              
              <div className="text-sm font-light leading-relaxed space-y-4 opacity-85">
                <p>
                  Born and raised in Rosh Haayin, Israel, Gal Gadot’s entry onto the world stage began with her crowning as Miss Israel in 2004 at the age of 18. This pivotal moment opened the doors to elite global modeling, taking her to major runways in Europe and high-fashion spreads in New York.
                </p>
                <p>
                  At 20, Gal enlisted for her mandatory two-year service in the Israel Defense Forces, serving as a combat fitness trainer. It was during these intense years that she mastered advanced combat choreography, weapons safety, and high-altitude conditioning—tactical foundations that later defined her physical presence in blockbusters.
                </p>
                <p>
                  With her performance as Wonder Woman, Gal didn’t just enter Hollywood; she redefined the modern female superhero archetype, bringing exceptional nobility, warmth, and kinetic strength. Off screen, Gal leads Pilot Wave Productions alongside her partner, aiming to champion voices that inspire resilience.
                </p>
              </div>
            </div>

            {/* Values / Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="space-y-3">
                    <div className="flex items-center space-x-2 text-neutral-400">
                      <Icon size={14} className={darkMode ? 'text-white' : 'text-black'} />
                      <span className="font-mono text-[9px] tracking-wider uppercase font-semibold">
                        {val.title}
                      </span>
                    </div>
                    <p className="text-[11.5px] font-light leading-relaxed opacity-75">
                      {val.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Editorial Visual (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 border dark:border-neutral-900 border-neutral-200 overflow-hidden shadow-xl bg-neutral-900 group">
              <img 
                src={ImageCover} 
                alt="Gal Gadot Editorial Pose" 
                className="w-full h-full object-cover object-top grayscale brightness-90 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-950/25 pointer-events-none mix-blend-overlay" />
              
              {/* Overlay Quote */}
              <div className="absolute inset-x-6 bottom-6 bg-black/60 backdrop-blur-sm p-4 border border-white/5 text-white space-y-1">
                <span className="font-mono text-[8px] tracking-widest uppercase opacity-55">MUSE STATEMENT</span>
                <p className="font-serif italic text-xs leading-relaxed font-light">
                  "I want people to feel that everything is possible when they look at our projects. Authenticity is the ultimate couture."
                </p>
              </div>
            </div>

            {/* Tiny Background Grid Decoration strictly professional */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l border-t dark:border-neutral-900 border-neutral-200 -z-10 pointer-events-none hidden md:block" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b dark:border-neutral-900 border-neutral-200 -z-10 pointer-events-none hidden md:block" />
          </div>
        </div>

        {/* Agency Specifications Base Subsection (Measurements Dashboard) */}
        <div className="pt-12 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-50 block">PHYSICAL STATS &amp; ATTRIBUTES</span>
            <div className="h-px w-20 bg-neutral-500/20 mx-auto" />
          </div>
          <PhysicalStats darkMode={darkMode} />
        </div>

      </div>
    </section>
  );
}
