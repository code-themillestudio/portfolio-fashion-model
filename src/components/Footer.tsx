// import { ArrowUp, Film, ExternalLink } from 'lucide-react';
import { RiInstagramLine, RiTwitterLine, RiArrowUpLine, RiFilmLine, RiExternalLinkLine } from '@remixicon/react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Instagram', handle: '@gal_gadot', url: 'https://instagram.com/gal_gadot', icon: RiInstagramLine },
    { name: 'Twitter/X', handle: '@GalGadot', url: 'https://twitter.com/GalGadot', icon: RiTwitterLine },
    { name: 'IMDb Profile', handle: 'Gal Gadot', url: 'https://www.imdb.com/name/nm2933757/', icon: RiFilmLine },
  ];

  return (
    <footer 
      className={`py-16 px-6 transition-colors duration-500 border-t ${
        darkMode ? 'bg-[#050505] border-neutral-900 text-neutral-400' : 'bg-[#FAF9F6] border-neutral-200 text-neutral-600'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side: Brand info and copyright */}
        <div className="text-center md:text-left space-y-2">
          <span className="font-serif text-lg tracking-[0.25em] font-light text-black dark:text-white block">
            GAL GADOT
          </span>
          <p className="font-mono text-[9px] tracking-widest uppercase opacity-75">
            &copy; {new Date().getFullYear()} GAL GADOT ARCHIVE. ALL RIGHTS SECURED.
          </p>
          <p className="text-[10px] font-light opacity-55">
            Crafted for high fashion and theatrical portfolio illustration. Fictionalized representation routing for demo purposes.
          </p>
        </div>

        {/* Middle: Social handles tree (IMDb, Twitter, Insta) */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 group text-xs font-mono tracking-wider hover:opacity-100 transition-opacity ${
                  darkMode ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-black'
                }`}
                id={`social-${social.name}`}
              >
                <Icon size={14} className="opacity-70 group-hover:opacity-100" />
                <span>{social.handle}</span>
                <RiExternalLinkLine size={10} className="opacity-40 group-hover:opacity-100" />
              </a>
            );
          })}
        </div>

        {/* Right Side: Back to top action */}
        <div>
          <button
            onClick={scrollToTop}
            className={`px-5 py-3 border font-mono text-[9px] tracking-[0.25em] uppercase flex items-center gap-1.5 transition-all cursor-pointer ${
              darkMode 
                ? 'border-neutral-800 text-neutral-300 hover:bg-neutral-900 hover:text-white' 
                : 'border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:text-black'
            }`}
            id="back-to-top-btn"
          >
            Symmetry Ascend <RiArrowUpLine size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}
