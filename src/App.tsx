import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Filmography from './components/Filmography';
import Modeling from './components/Modeling';
import Timeline from './components/Timeline';
import Brands from './components/Brands';
import Gallery from './components/Gallery';
import QuotesSlider from './components/QuotesSlider';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Default to true (premium luxury dark theme), but fully supports toggling
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Sync dark class on document element so Tailwind styles match
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Set up a robust scroll spy to automatically highlight current visible navigation links
  useEffect(() => {
    const sections = ['hero', 'about', 'films', 'modeling', 'timeline', 'brands', 'gallery', 'contact'];
    
    const handleScroll = () => {
      // Force to "contact" if we are scrolled very close to the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      // 120px offset from the top to account for the sticky header
      const offsetLimit = 150;
      let currentActive = 'hero';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the element's top is scrolled above or near the offset limit
          if (rect.top <= offsetLimit) {
            currentActive = id;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Initial calculation with a slight timeout to ensure clean rendering
    const timeoutId = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleExploreClick = () => {
    setActiveSection('films');
    const filmsElem = document.getElementById('films');
    if (filmsElem) {
      filmsElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const handleBookingClick = () => {
    setActiveSection('contact');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div 
      className={`min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden ${
        darkMode ? 'bg-[#0A0A0A] text-[#F5F5F5]' : 'bg-[#F9F9F8] text-[#111111]'
      }`}
      id="app-container"
    >
      {/* Editorial Navigation Bar */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Experiential Grid Pages */}
      <main className="w-full">
        {/* Landing Hero Screen */}
        <Hero 
          darkMode={darkMode} 
          onExploreClick={handleExploreClick}
          onBookingClick={handleBookingClick} 
        />

        {/* Elegant About & Physical Measurements Section */}
        <About darkMode={darkMode} />

        {/* Cinematic Showcase Section */}
        <Filmography darkMode={darkMode} />

        {/* Modeling & Couture Catalog Section */}
        <Modeling darkMode={darkMode} />

        {/* Life & Achievements Chronology Section */}
        <Timeline darkMode={darkMode} />

        {/* Luxury Campaign Partnerships Section */}
        <Brands darkMode={darkMode} />
        
        {/* Visual Shoots Masonry Gallery Section */}
        <Gallery darkMode={darkMode} />

        {/* Editorial Correspondence Quote Carousel Slider */}
        <QuotesSlider darkMode={darkMode} />

        {/* Custom Submission Contact Commission Section */}
        <Contact darkMode={darkMode} />
      </main>

      {/* Fine-Art Editorial Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
