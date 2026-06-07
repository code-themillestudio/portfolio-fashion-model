import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FILMS } from '../data';
import type { Film } from '../types';
import { Search, X, Clapperboard, Award, DollarSign, UserCheck, Eye, ChevronDown, Check } from 'lucide-react';

interface FilmographyProps {
  darkMode: boolean;
}

export default function Filmography({ darkMode }: FilmographyProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  // Extract all unique genres
  const allGenres = useMemo(() => {
    const genres = new Set<string>();
    FILMS.forEach((f) => f.genre.forEach((g) => genres.add(g)));
    return ['All', ...Array.from(genres)];
  }, []);

  // Filter films based on search, and category choice
  const filteredFilms = useMemo(() => {
    return FILMS.filter((film) => {
      const matchesSearch = 
        film.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        film.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        film.director.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === 'All' || film.genre.includes(selectedGenre);
      return matchesSearch && matchesGenre;
    });
  }, [searchTerm, selectedGenre]);

  return (
    <section 
      id="films" 
      className={`py-24 px-6 border-b transition-colors duration-500 ${
        darkMode ? 'border-neutral-900 bg-[#0A0A0A]' : 'border-neutral-200 bg-[#FAF9F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-3">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase opacity-60 block">
            CINEMATIC LEGACY
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-normal font-light">
            Filmography <span className="font-serif italic font-light">&amp; Actings</span>
          </h2>
          <div className={`h-px w-20 mx-auto md:mx-0 ${darkMode ? 'bg-neutral-800' : 'bg-neutral-300'}`} />
        </div>

        {/* Filter and Search Bar Controller */}
        <div className="flex flex-col sm:flex-row gap-6 justify-between items-end mb-12 w-full">
          {/* Genre Dropdown */}
          <div className="relative w-full sm:max-w-70 z-30">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-50 block mb-2 text-left">
              Filter by Genre
            </span>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-[11px] font-mono uppercase tracking-[0.2em] border transition-all duration-300 cursor-pointer focus:outline-none ${
                darkMode
                  ? 'bg-[#121212] border-neutral-800 text-white hover:border-neutral-700'
                  : 'bg-white border-neutral-200 text-black hover:border-neutral-300'
              }`}
              id="genre-dropdown-trigger"
            >
              <span>{selectedGenre}</span>
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
                    className={`absolute left-0 right-0 mt-1.5 border z-30 max-h-64 overflow-y-auto rounded-none shadow-xl ${
                      darkMode ? 'bg-[#121212] border-neutral-800' : 'bg-white border-neutral-200'
                    }`}
                  >
                    {allGenres.map((genre) => (
                      <button
                        key={genre}
                        onClick={() => {
                          setSelectedGenre(genre);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[10px] uppercase font-mono tracking-widest transition-colors flex items-center justify-between cursor-pointer focus:outline-none ${
                          selectedGenre === genre
                            ? darkMode
                              ? 'bg-white text-black font-semibold'
                              : 'bg-black text-white font-semibold'
                            : darkMode
                            ? 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                            : 'text-neutral-600 hover:text-black hover:bg-neutral-50/80'
                        }`}
                        id={`genre-option-${genre}`}
                      >
                        <span>{genre}</span>
                        {selectedGenre === genre && <Check size={10} />}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full sm:max-w-xs">
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-50 block mb-2 text-left">
              Search Keyword
            </span>
            <input
              type="text"
              placeholder="Search by Title, Role or Director..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full py-2.5 pl-10 pr-4 text-xs tracking-wider border transition-all duration-300 outline-none rounded-none ${
                darkMode
                  ? 'bg-[#121212] border-neutral-800 focus:border-neutral-500 text-white'
                  : 'bg-white border-neutral-200 focus:border-neutral-500 text-black'
              }`}
              id="film-search-input"
            />
            <Search 
              size={13} 
              className={`absolute left-3.5 bottom-3.5 ${
                darkMode ? 'text-neutral-500' : 'text-neutral-400'
              }`} 
            />
          </div>
        </div>

        {/* Films Grid Layout */}
        {filteredFilms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredFilms.map((film, index) => (
                <motion.div
                  key={film.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                  layout
                  onClick={() => setSelectedFilm(film)}
                  className={`border group overflow-hidden relative cursor-pointer flex flex-col justify-between h-112.5 transition-all duration-500 shadow-sm ${
                    darkMode ? 'border-neutral-900 bg-[#0F0F0F]' : 'border-neutral-100 bg-white'
                  }`}
                  id={`film-card-${film.id}`}
                >
                  {/* Poster Image Cover */}
                  <div className="relative h-62.5 overflow-hidden bg-neutral-900">
                    <img
                      src={film.imageCover}
                      alt={film.title}
                      className="w-full h-full object-cover object-top grayscale brightness-90 hover:brightness-100 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    
                    {/* Genre badges on poster */}
                    <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap">
                      {film.genre.map((g) => (
                        <span 
                          key={g} 
                          className="px-2 py-0.5 text-[8px] font-mono tracking-widest bg-black/75 text-white/90 border border-white/10 uppercase"
                        >
                          {g}
                        </span>
                      ))}
                    </div>

                    <span className="absolute bottom-4 right-4 font-mono text-[10px] text-white/90 tracking-widest bg-black/60 px-2 py-0.5 border border-white/5">
                      {film.year}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 grow flex flex-col justify-between">
                    <div className="space-y-2">
                      <span className="font-mono text-[9px] tracking-[0.25em] uppercase opacity-55 block">
                        Character Name
                      </span>
                      <h3 className="font-serif text-lg tracking-wide group-hover:italic transition-all">
                        {film.title}
                      </h3>
                      <p className={`font-serif italic text-sm tracking-wide ${darkMode ? 'text-white/80' : 'text-neutral-800'}`}>
                        &quot;{film.role}&quot;
                      </p>
                      <p className="text-xs font-light leading-relaxed opacity-70 line-clamp-3 mt-2">
                        {film.description}
                      </p>
                    </div>

                    {/* Bottom Details Footer on Card */}
                    <div className="flex items-center justify-between border-t pt-4 mt-4 transition-colors duration-500 border-neutral-100 dark:border-neutral-900">
                      <div className="text-left">
                        <span className="font-mono text-[8px] tracking-widest uppercase opacity-50 block">Director</span>
                        <span className="text-[11px] uppercase tracking-wider font-light">{film.director}</span>
                      </div>
                      <span className={`text-[10px] flex items-center gap-1 font-mono uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity ${
                        darkMode ? 'text-white' : 'text-black'
                      }`}>
                        View Details <Eye size={12} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed rounded-none transition-colors border-neutral-300 dark:border-neutral-800">
            <p className="font-serif text-lg italic opacity-60">No cinematic masterpieces matched your search results.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedGenre('All'); }} 
              className="mt-4 px-6 py-2 border font-mono text-xs uppercase tracking-widest hover:bg-neutral-150 dark:hover:bg-neutral-900 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Deluxe Experimental Details Overlay Modal */}
      <AnimatePresence>
        {selectedFilm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
            id="film-detail-modal-bg"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto relative border shadow-2xl ${
                darkMode ? 'bg-[#0E0E0E] text-white border-neutral-800' : 'bg-white text-black border-neutral-200'
              }`}
              id="film-detail-modal"
            >
              {/* Close Button overlay */}
              <button
                onClick={() => setSelectedFilm(null)}
                className={`absolute top-4 right-4 z-10 p-2 border transition-all hover:rotate-90 hover:bg-neutral-100 dark:hover:bg-neutral-900 cursor-pointer ${
                  darkMode ? 'border-neutral-800 text-neutral-300' : 'border-neutral-200 text-neutral-600'
                }`}
                id="close-film-modal"
              >
                <X size={15} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-10">
                {/* Left Side: Column Poster Display */}
                <div className="md:col-span-5 space-y-4">
                  <div className="aspect-3/4 relative overflow-hidden ring-1 ring-black/10">
                    <img 
                      src={selectedFilm.image} 
                      alt={selectedFilm.title} 
                      className="w-full h-full object-cover object-top grayscale"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="font-mono text-[8px] tracking-widest block opacity-75">MAIN CHARACTER</span>
                      <p className="font-serif italic text-base leading-tight mt-0.5">{selectedFilm.role}</p>
                    </div>
                  </div>

                  <div className={`p-4 border font-mono text-[10px] space-y-1.5 ${
                    darkMode ? 'bg-neutral-900/30 border-neutral-800' : 'bg-neutral-50 border-neutral-150'
                  }`}>
                    <div className="flex justify-between">
                      <span className="opacity-50">PRODUCTION YEAR</span>
                      <span className="font-medium">{selectedFilm.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-50">MATURITY RATING</span>
                      <span className="font-medium bg-neutral-200 dark:bg-neutral-800 px-1">{selectedFilm.rating}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-50">MAIN DIRECTORS</span>
                      <span className="font-medium">{selectedFilm.director}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Column Information Details */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Header Details */}
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap gap-1">
                        {selectedFilm.genre.map((gen) => (
                          <span key={gen} className="font-mono text-[8px] uppercase tracking-widest border border-current px-2 py-0.5 opacity-60">
                            {gen}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-serif text-3xl md:text-4xl tracking-tight font-light mt-1">
                        {selectedFilm.title}
                      </h3>
                      <p className="font-serif italic text-lg opacity-80 border-b pb-4 border-neutral-100 dark:border-neutral-900">
                        {selectedFilm.role}
                      </p>
                    </div>

                    {/* Description Body */}
                    <div className="space-y-4 mt-6">
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] tracking-widest uppercase opacity-40 flex items-center gap-1">
                          <Clapperboard size={10} /> Synopsis
                        </span>
                        <p className="text-xs font-light leading-relaxed opacity-90">
                          {selectedFilm.description}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <span className="font-mono text-[9px] tracking-widest uppercase opacity-40 flex items-center gap-1">
                          <Award size={10} /> Portrayer Narrative &amp; Craft
                        </span>
                        <p className="text-xs font-light leading-relaxed opacity-90 italic">
                          {selectedFilm.characterDetail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className={`p-3 border ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
                        <span className="font-mono text-[8px] tracking-widest uppercase opacity-40 flex items-center gap-1">
                          <DollarSign size={10} /> Box-Office Status
                        </span>
                        <span className="text-xs font-medium block mt-1 tracking-wide">{selectedFilm.boxOffice || 'N/A'}</span>
                      </div>
                      <div className={`p-3 border ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
                        <span className="font-mono text-[8px] tracking-widest uppercase opacity-40 flex items-center gap-1">
                          <UserCheck size={10} /> Key Co-Stars
                        </span>
                        <span className="text-[11px] font-light block mt-1 truncate">{selectedFilm.coStars.slice(0, 3).join(', ')}</span>
                      </div>
                    </div>

                    {/* Close action */}
                    <button
                      onClick={() => setSelectedFilm(null)}
                      className={`w-full py-3 text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 border text-center cursor-pointer ${
                        darkMode 
                          ? 'bg-neutral-900 hover:bg-white text-white hover:text-black border-neutral-800' 
                          : 'bg-neutral-100 hover:bg-black text-black hover:text-white border-neutral-200'
                      }`}
                      id="modal-close-btn"
                    >
                      Return to Filmography
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
