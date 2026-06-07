import { useState } from 'react';
import { Ruler, Sparkles, Globe } from 'lucide-react';
import ImageCover from '../assets/images/others/physical-stats-cover-4.jpg';

interface MeasurementsProps {
  darkMode: boolean;
}

export default function Measurements({ darkMode }: MeasurementsProps) {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('imperial');

  // Gal Gadot's high-fashion modeling statistics
  const stats = {
    height: { metric: '178 cm', imperial: '5\'10"' },
    bust: { metric: '86 cm', imperial: '34"' },
    waist: { metric: '58 cm', imperial: '23"' },
    hips: { metric: '86 cm', imperial: '34"' },
    shoe: { metric: '39 EU', imperial: '8.5 US' },
    dress: { metric: '34 EU', imperial: '4 US' },
    eyes: 'Dark Brown',
    hair: 'Dark Brown',
    nationality: 'Israeli'
  };

  return (
    <div 
      className={`border p-6 sm:p-8 max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center transition-all duration-500 shadow-xl ${
        darkMode 
          ? 'bg-[#0f0f0f] border-neutral-900 text-neutral-300' 
          : 'bg-white border-neutral-200 text-neutral-800'
      }`}
      id="modeling-composite-card"
    >
      {/* Left Column: Portrait Comp Shot */}
      <div className="w-full md:w-2/5 aspect-3/4 relative overflow-hidden group border border-neutral-800/10 dark:border-neutral-800/80">
        <img 
          src={ImageCover}
          alt="Gal Gadot Runway Card Portrait" 
          className="w-full h-full object-cover object-top grayscale brightness-95 group-hover:grayscale-0 transition-all duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-neutral-950/20 mix-blend-overlay" />
      </div>

      {/* Right Column: High-Fashion Agency Profile Stats */}
      <div className="w-full md:w-3/5 space-y-6">
        <div className="flex items-center justify-between border-b pb-4 transition-colors duration-500 dark:border-neutral-900 border-neutral-100">
          <div>
            <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-400 block uppercase">
              AGENCY SPECS SHEET
            </span>
            <h3 className="font-serif text-2xl font-light tracking-wide">
              Model <span className="italic font-light">Measurements</span>
            </h3>
          </div>

          {/* Unit Switcher Button */}
          <div className="flex border border-neutral-300 dark:border-neutral-800 p-0.5 rounded-none text-[9px] font-mono">
            <button
              onClick={() => setUnit('imperial')}
              className={`px-2.5 py-1 transition-colors hover:text-white cursor-pointer ${
                unit === 'imperial'
                  ? darkMode ? 'bg-white text-black' : 'bg-black text-white'
                  : 'text-neutral-500 hover:text-black dark:hover:text-white'
              }`}
            >
              IN
            </button>
            <button
              onClick={() => setUnit('metric')}
              className={`px-2.5 py-1 transition-colors hover:text-white cursor-pointer ${
                unit === 'metric'
                  ? darkMode ? 'bg-white text-black' : 'bg-black text-white'
                  : 'text-neutral-500 hover:text-black dark:hover:text-white'
              }`}
            >
              CM
            </button>
          </div>
        </div>

        {/* Specs Matrix */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 font-sans text-sm">
          {/* Height */}
          <div className="flex justify-between items-center border-b border-dashed dark:border-neutral-900 border-neutral-100 pb-2">
            <span className="font-mono text-[10px] tracking-wider uppercase opacity-55">Height</span>
            <span className="font-semibold">{unit === 'imperial' ? stats.height.imperial : stats.height.metric}</span>
          </div>

          {/* Bust */}
          <div className="flex justify-between items-center border-b border-dashed dark:border-neutral-900 border-neutral-100 pb-2">
            <span className="font-mono text-[10px] tracking-wider uppercase opacity-55">Bust</span>
            <span className="font-semibold">{unit === 'imperial' ? stats.bust.imperial : stats.bust.metric}</span>
          </div>

          {/* Waist */}
          <div className="flex justify-between items-center border-b border-dashed dark:border-neutral-900 border-neutral-100 pb-2">
            <span className="font-mono text-[10px] tracking-wider uppercase opacity-55">Waist</span>
            <span className="font-semibold">{unit === 'imperial' ? stats.waist.imperial : stats.waist.metric}</span>
          </div>

          {/* Hips */}
          <div className="flex justify-between items-center border-b border-dashed dark:border-neutral-900 border-neutral-100 pb-2">
            <span className="font-mono text-[10px] tracking-wider uppercase opacity-55">Hips</span>
            <span className="font-semibold">{unit === 'imperial' ? stats.hips.imperial : stats.hips.metric}</span>
          </div>

          {/* Shoe */}
          <div className="flex justify-between items-center border-b border-dashed dark:border-neutral-900 border-neutral-100 pb-2">
            <span className="font-mono text-[10px] tracking-wider uppercase opacity-55">Shoe Size</span>
            <span className="font-semibold">{unit === 'imperial' ? stats.shoe.imperial : stats.shoe.metric}</span>
          </div>

          {/* Dress */}
          <div className="flex justify-between items-center border-b border-dashed dark:border-neutral-900 border-neutral-100 pb-2">
            <span className="font-mono text-[10px] tracking-wider uppercase opacity-55">Dress Size</span>
            <span className="font-semibold">{unit === 'imperial' ? stats.dress.imperial : stats.dress.metric}</span>
          </div>

          {/* Hair */}
          <div className="flex justify-between items-center border-b border-dashed dark:border-neutral-900 border-neutral-100 pb-2">
            <span className="font-mono text-[10px] tracking-wider uppercase opacity-55">Hair Color</span>
            <span className="font-semibold">{stats.hair}</span>
          </div>

          {/* Eyes */}
          <div className="flex justify-between items-center border-b border-dashed dark:border-neutral-900 border-neutral-100 pb-2">
            <span className="font-mono text-[10px] tracking-wider uppercase opacity-55">Eye Color</span>
            <span className="font-semibold">{stats.eyes}</span>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-4 flex flex-wrap gap-4 text-[10px] font-mono opacity-65">
          <span className="flex items-center gap-1">
            <Globe size={11} /> Nationality: {stats.nationality}
          </span>
          <span className="flex items-center gap-1">
            <Ruler size={11} /> High Couture Ready
          </span>
          <span className="flex items-center gap-1">
            <Sparkles size={11} /> Global Model Icon
          </span>
        </div>

        <p className="text-[10.5px] leading-relaxed font-light italic opacity-70">
          "Known for her physical commanding stature on runways and in action blockbusters. Gal synthesizes elite athlete discipline with classical European style curves."
        </p>
      </div>
    </div>
  );
}
