import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUOTES } from '../data';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface QuotesSliderProps {
  darkMode: boolean;
}

export default function QuotesSlider({ darkMode }: QuotesSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev < QUOTES.length - 1 ? prev + 1 : 0));
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : QUOTES.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < QUOTES.length - 1 ? prev + 1 : 0));
  };

  const activeQuote = QUOTES[currentIndex];

  return (
    <div 
      className={`border-b transition-colors duration-500 py-20 px-6 ${
        darkMode ? 'border-neutral-900 bg-[#090909]' : 'border-neutral-100 bg-[#FBFAF9]'
      }`}
      id="quotes-slider"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        <Quote size={40} className={`mx-auto mb-6 opacity-10 ${darkMode ? 'text-white' : 'text-black'}`} />

        <div className="min-h-45 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className="space-y-6"
            >
              {/* Quote text */}
              <p className="font-serif italic text-lg sm:text-2xl md:text-3xl font-light tracking-wide leading-relaxed">
                &ldquo;{activeQuote.text}&rdquo;
              </p>

              {/* Quote citation metadata */}
              <div className="space-y-1">
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-45 block">
                  AUTHOR CORRESPONDENCE
                </span>
                <h4 className="font-serif text-base tracking-wide font-medium">
                  {activeQuote.author}
                </h4>
                <p className="text-[10px] font-mono tracking-widest uppercase opacity-65">
                  {activeQuote.role} &bull; <span className="italic">{activeQuote.source}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel indicators & arrows */}
        <div className="flex items-center justify-center space-x-8 mt-10">
          <button
            onClick={handlePrev}
            className={`p-2 border transition-all hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer ${
              darkMode ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
            }`}
            aria-label="Previous Quote"
            id="quote-prev"
          >
            <ChevronLeft size={13} />
          </button>

          {/* Bullet Indicators */}
          <div className="flex items-center space-x-2">
            {QUOTES.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? darkMode ? 'bg-white w-4' : 'bg-black w-4'
                    : darkMode ? 'bg-neutral-800' : 'bg-neutral-300'
                }`}
                aria-label={`Go to Quote ${idx + 1}`}
                id={`quote-bullet-${q.id}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className={`p-2 border transition-all hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer ${
              darkMode ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'
            }`}
            aria-label="Next Quote"
            id="quote-next"
          >
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}
