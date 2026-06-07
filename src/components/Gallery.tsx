import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY } from '../data';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, ChevronDown, Check } from 'lucide-react';

interface GalleryProps {
  darkMode: boolean;
}

export default function Gallery({ darkMode }: GalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Editorials' | 'Cinematic' | 'Photography' | 'Events' | 'Magazine'>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = ['All', 'Editorials', 'Cinematic', 'Photography', 'Events', 'Magazine'] as const;

  // Filter items matching selected category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY;
    return GALLERY.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenLightbox = (id: string) => {
    const index = filteredItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      setSelectedItemIndex(index);
      setActiveImageIndex(0);
    }
  };

  const activeLightboxItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeLightboxItem) return;
    const len = activeLightboxItem.images.length;
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : len - 1));
  };

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeLightboxItem) return;
    const len = activeLightboxItem.images.length;
    setActiveImageIndex((prev) => (prev < len - 1 ? prev + 1 : 0));
  };

  const handlePrevItem = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex === null) return;
    const prevIndex = selectedItemIndex > 0 ? selectedItemIndex - 1 : filteredItems.length - 1;
    setSelectedItemIndex(prevIndex);
    setActiveImageIndex(0);
  };

  const handleNextItem = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedItemIndex === null) return;
    const nextIndex = selectedItemIndex < filteredItems.length - 1 ? selectedItemIndex + 1 : 0;
    setSelectedItemIndex(nextIndex);
    setActiveImageIndex(0);
  };

  return (
    <section 
      id="gallery" 
      className={`py-24 px-6 border-b transition-colors duration-500 ${
        darkMode ? 'border-neutral-900 bg-[#0A0A0A]' : 'border-neutral-200 bg-[#FAF9F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-3">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-60 block">
            VISUAL MONUMENTS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-normal font-light">
            Gallery <span className="font-serif italic font-light">&amp; Shoots</span>
          </h2>
          <div className={`h-px w-20 mx-auto md:mx-0 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-300'}`} />
        </div>

        {/* Gallery Dropdown Controller */}
        <div className="flex justify-center md:justify-start mb-12">
          <div className="relative w-full max-w-70 z-30">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-50 block mb-2 text-left">
              Filter Gallery Category
            </span>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-[11px] font-mono uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer focus:outline-none ${
                darkMode
                  ? 'bg-[#121212] border-neutral-800 text-white hover:border-neutral-700'
                  : 'bg-white border-neutral-200 text-black hover:border-neutral-400'
              }`}
              id="gallery-dropdown-trigger"
            >
              <span>{selectedCategory === 'All' ? 'All Portfolios' : `${selectedCategory}`}</span>
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
                          setSelectedCategory(cat);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[10px] uppercase font-mono tracking-widest transition-colors flex items-center justify-between cursor-pointer focus:outline-none ${
                          selectedCategory === cat
                            ? darkMode
                              ? 'bg-white text-black font-semibold'
                              : 'bg-black text-white font-semibold'
                            : darkMode
                            ? 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                            : 'text-neutral-600 hover:text-black hover:bg-neutral-50/80'
                        }`}
                        id={`gallery-dropdown-option-${cat}`}
                      >
                        <span>{cat}</span>
                        {selectedCategory === cat && <Check size={10} />}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.03 }}
                onClick={() => handleOpenLightbox(item.id)}
                className={`group relative overflow-hidden aspect-3/4 border cursor-pointer ${
                  darkMode ? 'border-neutral-900 bg-neutral-950' : 'border-neutral-100 bg-[#F5F5F5]'
                }`}
                id={`gallery-card-${item.id}`}
              >
                {/* Image Cover */}
                <img
                  src={item.imageCover}
                  alt={item.title}
                  className="w-full h-full object-cover object-top grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Overlay on Hover with editorial text */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-white/60 border border-white/20 px-2 py-0.5">
                      {item.category}
                    </span>
                    <span className="text-white/40 flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-sm">
                      <ImageIcon size={11} className="text-white/60" />
                      <span className="font-mono text-[9px] text-white/60">{item.images.length}</span>
                    </span>
                  </div>

                  <div className="text-left space-y-1">
                    <h4 className="font-serif text-white text-sm font-light tracking-wide">{item.title}</h4>
                    <p className="text-[10px] text-white/75 font-light leading-snug line-clamp-2">
                      {item.description}
                    </p>
                    <span className="block font-mono text-[8px] tracking-wider text-white/40 pt-1 uppercase">
                      Click to View Editorial Series
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Deluxe Seamless Lightbox Component with Campaign Image Slider and Thumbnails */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-50 flex flex-col justify-between"
            id="gallery-lightbox-overlay"
            onClick={() => setSelectedItemIndex(null)}
          >
            {/* Top Toolbar */}
            <div className="h-20 px-6 flex items-center justify-between text-white border-b border-neutral-900/60 z-10 bg-black/50 backdrop-blur-sm">
              <div className="text-left">
                <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-neutral-400 block">
                  {activeLightboxItem.category} • Shoot Project
                </span>
                <span className="font-serif italic text-base">
                  {activeLightboxItem.title}
                </span>
              </div>

              <div className="flex items-center space-x-6 animate-fade-in">
                <div className="hidden md:flex items-center space-x-2 text-[10px] font-mono text-neutral-400">
                  <span>Photo Project:</span>
                  <button 
                    onClick={handlePrevItem}
                    className="p-1 px-2 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer"
                  >
                    Prev Campaign
                  </button>
                  <button 
                    onClick={handleNextItem}
                    className="p-1 px-2 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors cursor-pointer"
                  >
                    Next Campaign
                  </button>
                </div>
                <span className="font-mono text-[10px] text-neutral-400">
                  Image {activeImageIndex + 1} / {activeLightboxItem.images.length}
                </span>
                <button
                  onClick={() => setSelectedItemIndex(null)}
                  className="p-2 border border-neutral-800 hover:bg-neutral-900 transition-colors uppercase font-mono text-[9px] tracking-widest flex items-center gap-1.5 cursor-pointer text-white"
                  id="close-lightbox"
                >
                  Close <X size={12} />
                </button>
              </div>
            </div>

            {/* Middle Main Slider */}
            <div className="grow flex items-center justify-between px-4 sm:px-10 relative">
              {/* Previous Image Button */}
              <button
                onClick={handlePrevImage}
                className="p-3 border border-neutral-800 bg-neutral-950/60 hover:bg-white hover:text-black transition-all text-white rounded-none cursor-pointer absolute left-4 sm:left-10 z-20"
                aria-label="Previous Image"
                id="lightbox-prev"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Central Display Image */}
              <div className="w-full max-w-4xl mx-auto h-[48vh] sm:h-[58vh] flex flex-col items-center justify-center p-2 relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeLightboxItem.images[activeImageIndex]}
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    src={activeLightboxItem.images[activeImageIndex]}
                    alt={`${activeLightboxItem.title} - View ${activeImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain pointer-events-none border border-neutral-900 shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>

              {/* Next Image Button */}
              <button
                onClick={handleNextImage}
                className="p-3 border border-neutral-800 bg-neutral-950/60 hover:bg-white hover:text-black transition-all text-white rounded-none cursor-pointer absolute right-4 sm:right-10 z-20"
                aria-label="Next Image"
                id="lightbox-next"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Bottom Controls / Campaign Thumbnails & Description */}
            <div 
              className="p-6 pb-8 text-center text-white bg-black/80 backdrop-blur-md border-t border-neutral-900 z-10 w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-3xl mx-auto space-y-4">
                {/* Thumbnails list */}
                <div className="flex justify-center items-center gap-2 overflow-x-auto py-1">
                  {activeLightboxItem.images.map((imgUrl, thumbIdx) => (
                    <button
                      key={`${activeLightboxItem.id}-thumb-${thumbIdx}`}
                      onClick={() => setActiveImageIndex(thumbIdx)}
                      className={`relative w-12 h-16 sm:w-16 sm:h-20 shrink-0 border transition-all duration-300 overflow-hidden cursor-pointer ${
                        activeImageIndex === thumbIdx 
                          ? 'border-white scale-[1.02] ring-1 ring-white/50' 
                          : 'border-neutral-800 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img 
                        src={imgUrl} 
                        alt="Thumbnail" 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[8px] tracking-[0.3em] uppercase opacity-45">EDITORIAL STATEMENT &amp; DESCRIPTION</span>
                  <p className="text-xs font-light leading-relaxed text-neutral-300 max-w-xl mx-auto">
                    {activeLightboxItem.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
