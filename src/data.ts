import type { Film, ModelingProject, BrandAssociation, TimelineEvent, GalleryItem, TestimonialQuote } from './types';

// MOVIES

import FilmWWWImage from './assets/images/films/wonder-woman-wide.webp';
import FilmWWPortImage from './assets/images/films/wonder-woman-portrait.jpg'
import FilmRNWImage from './assets/images/films/red-notice-wide.jpg';
import FilmRNPImage from './assets/images/films/red-notice-portrait.jpg';
import FilmHOSWImage from './assets/images/films/heart-of-stone-wide.jpg';
import FilmHOSPImage from './assets/images/films/heart-of-stone-portfolio.jpg';
import FilmDOTNWImage from './assets/images/films/death-on-the-nile-wide.jpg';
import FilmDOTNPImage from './assets/images/films/death-on-the-nile-portrait.jpg';
import FilmFFWImage from './assets/images/films/fast-five-wide.jpg';
import FilmFFPImage from './assets/images/films/fast-five-portrait.jpg';
import FilmJLWImage from './assets/images/films/justice-league-wide.jpg';
import FilmJLPImage from './assets/images/films/justice-league-portrait.jpg';

// MODELING

import ModelingGucciImage from './assets/images/modeling/modeling-gucci-bamboo-portrait.jpg';
import ModelingTiffanyImage from './assets/images/modeling/tiffany-and-co-portrait.webp';
import ModelingMissUniverseImage from './assets/images/modeling/miss-israel-pageant-portrait.jpg';
import ModelingVogueImage from './assets/images/modeling/vogue-2020-portrait.webp';
import ModelingCastroImage from './assets/images/modeling/castro-jeans-portrait.jpg'
import ModelingMarieClaireImage from './assets/images/modeling/marie-claire-2021-portrait-2.jpg';

// BRAND ASSOCIATIONS

import BrandTiffanyImage from './assets/images/brand-associations/Tiffany-Co-3.jpg';
import BrandHublotImage from './assets/images/brand-associations/hublot.jpg';
import BrandRevlonImage from './assets/images/brand-associations/revlon-portrait-cover-official.jpg';
import BrandReebokImage from './assets/images/brand-associations/reebok-portrait.jpg';

// GALLERY

import GalleryStudioImgCover from './assets/images/gallery/studio/studio-portrait-cover.jpg';
import GalleryStudioImg1 from './assets/images/gallery/studio/studio-portrait-001.jpg';
import GalleryStudioImg2 from './assets/images/gallery/studio/studio-portrait-002.jpg';
import GalleryStudioImg3 from './assets/images/gallery/studio/studio-portrait-003.jpg';
import GalleryStudioImg4 from './assets/images/gallery/studio/studio-portrait-004.jpg';
import GalleryStudioImg5 from './assets/images/gallery/studio/studio-portrait-005.jpg';
import GalleryStudioImg6 from './assets/images/gallery/studio/studio-portrait-006.jpg';
import GalleryStudioImg7 from './assets/images/gallery/studio/studio-portrait-007.jpg';
import GalleryStudioImg8 from './assets/images/gallery/studio/studio-portrait-008.jpg';
import GalleryStudioImg9 from './assets/images/gallery/studio/studio-portrait-009.jpg';
import GalleryStudioImg10 from './assets/images/gallery/studio/studio-portrait-010.jpg';
import GalleryStudioImg11 from './assets/images/gallery/studio/studio-portrait-011.jpg';
import GalleryStudioImg12 from './assets/images/gallery/studio/studio-portrait-012.jpg';
import GalleryStudioImg13 from './assets/images/gallery/studio/studio-portrait-013.jpg';
import GalleryStudioImg14 from './assets/images/gallery/studio/studio-portrait-014.jpg';
import GalleryStudioImg15 from './assets/images/gallery/studio/studio-portrait-015.jpg';
import GalleryStudioImg16 from './assets/images/gallery/studio/studio-portrait-016.jpg';
import GalleryStudioImg17 from './assets/images/gallery/studio/studio-portrait-017.jpg';
import GalleryStudioImg18 from './assets/images/gallery/studio/studio-portrait-018.jpg';
import GalleryStudioImg19 from './assets/images/gallery/studio/studio-portrait-019.jpg';
import GalleryStudioImg20 from './assets/images/gallery/studio/studio-portrait-020.jpg';
import GalleryStudioImg21 from './assets/images/gallery/studio/studio-portrait-021.jpg';
import GalleryStudioImg22 from './assets/images/gallery/studio/studio-portrait-022.jpg';
import GalleryStudioImg23 from './assets/images/gallery/studio/studio-portrait-023.jpg';

import GalleryHighFashionImgCover from './assets/images/gallery/high-fashion/high-fashion-cover.jpg';
import GalleryHighFashionImg1 from './assets/images/gallery/high-fashion/high-fashion.jpg';
import GalleryHighFashionImg2 from './assets/images/gallery/high-fashion/high-fashion-01.jpg';
import GalleryHighFashionImg3 from './assets/images/gallery/high-fashion/high-fashion-02.jpg';
import GalleryHighFashionImg4 from './assets/images/gallery/high-fashion/high-fashion-03.jpg';
import GalleryHighFashionImg5 from './assets/images/gallery/high-fashion/high-fashion-04.jpg';
import GalleryHighFashionImg6 from './assets/images/gallery/high-fashion/high-fashion-05.jpg';
import GalleryHighFashionImg7 from './assets/images/gallery/high-fashion/high-fashion-06.jpg';
import GalleryHighFashionImg8 from './assets/images/gallery/high-fashion/high-fashion-07.jpg';
import GalleryHighFashionImg9 from './assets/images/gallery/high-fashion/high-fashion-08.jpg';
import GalleryHighFashionImg10 from './assets/images/gallery/high-fashion/high-fashion-09.jpg';
import GalleryHighFashionImg11 from './assets/images/gallery/high-fashion/high-fashion-10.jpg';
import GalleryHighFashionImg12 from './assets/images/gallery/high-fashion/high-fashion-11.jpg';
import GalleryHighFashionImg13 from './assets/images/gallery/high-fashion/high-fashion-12.jpg';
import GalleryHighFashionImg14 from './assets/images/gallery/high-fashion/high-fashion-13.jpg';
import GalleryHighFashionImg15 from './assets/images/gallery/high-fashion/high-fashion-14.jpg';
import GalleryHighFashionImg16 from './assets/images/gallery/high-fashion/high-fashion-15.jpg';
import GalleryHighFashionImg17 from './assets/images/gallery/high-fashion/high-fashion-16.jpg';

import GalleryTiffanyImgCover from './assets/images/gallery/tiffany/tiffany-co-002.jpg';
import GalleryTiffanyImg1 from './assets/images/gallery/tiffany/Tiffany-Co-2.jpg';
import GalleryTiffanyImg2 from './assets/images/gallery/tiffany/Tiffany-Co-3.jpg';
import GalleryTiffanyImg3 from './assets/images/gallery/tiffany/tiffany-2.jpg';
import GalleryTiffanyImg4 from './assets/images/gallery/tiffany/tiffany-3.jpg';
import GalleryTiffanyImg5 from './assets/images/gallery/tiffany/tiffany-4.jpg';
import GalleryTiffanyImg6 from './assets/images/gallery/tiffany/tiffany-5.jpg';
import GalleryTiffanyImg7 from './assets/images/gallery/tiffany/tiffany-6.jpg';
import GalleryTiffanyImg8 from './assets/images/gallery/tiffany/tiffany-7.jpg';
import GalleryTiffanyImg9 from './assets/images/gallery/tiffany/tiffany-co-006.jpg';
import GalleryTiffanyImg10 from './assets/images/gallery/tiffany/tiffany-co-007.jpg';

import GalleryVogueImgCover from './assets/images/gallery/vogue/vogue-cover.webp';
import GalleryVogueImg1 from './assets/images/gallery/vogue/vogue-01.webp';
import GalleryVogueImg2 from './assets/images/gallery/vogue/vogue-02.webp';
import GalleryVogueImg3 from './assets/images/gallery/vogue/vogue-03.webp';
import GalleryVogueImg4 from './assets/images/gallery/vogue/vogue-04.webp';
import GalleryVogueImg5 from './assets/images/gallery/vogue/vogue-05.webp';
import GalleryVogueImg6 from './assets/images/gallery/vogue/vogue-06.webp';
import GalleryVogueImg7 from './assets/images/gallery/vogue/vogue-07.webp';
import GalleryVogueImg8 from './assets/images/gallery/vogue/vogue-08.webp';
import GalleryVogueImg9 from './assets/images/gallery/vogue/vogue-09.webp';
import GalleryVogueImg10 from './assets/images/gallery/vogue/vogue-10.webp';
import GalleryVogueImg11 from './assets/images/gallery/vogue/vogue-11.webp';
import GalleryVogueImg12 from './assets/images/gallery/vogue/vogue-12.webp';

import GalleryBeautyImgCover from './assets/images/gallery/beauty/revlon.jpg';
import GalleryBeautyImg1 from './assets/images/gallery/beauty/revlon-01.jpg';
import GalleryBeautyImg2 from './assets/images/gallery/beauty/revlon-02.jpg';
import GalleryBeautyImg3 from './assets/images/gallery/beauty/revlon-03.jpg';
import GalleryBeautyImg4 from './assets/images/gallery/beauty/revlon-04.jpg';
import GalleryBeautyImg5 from './assets/images/gallery/beauty/revlon-portrait-3.jpg';
import GalleryBeautyImg6 from './assets/images/gallery/beauty/revlon-portrait-4.jpg';
import GalleryBeautyImg7 from './assets/images/gallery/beauty/revlon-portrait-5.jpg';
import GalleryBeautyImg8 from './assets/images/gallery/beauty/revlon-portrait-6.jpg';
import GalleryBeautyImg9 from './assets/images/gallery/beauty/revlon-portrait-cover-main-1.jpg';
import GalleryBeautyImg10 from './assets/images/gallery/beauty/revlon-portrait-cover-main.jpg';
import GalleryBeautyImg11 from './assets/images/gallery/beauty/revlon-portrait-cover-official.jpg';
import GalleryBeautyImg12 from './assets/images/gallery/beauty/revlon-portrait-cover.jpg';
import GalleryBeautyImg13 from './assets/images/gallery/beauty/revlon-portrait.jpg';

import GalleryCinematicImgCover from './assets/images/gallery/cinematic/cinematic-cover.jpg';
import GalleryCinematicImg1 from './assets/images/gallery/cinematic/cinematic-01.webp';
import GalleryCinematicImg2 from './assets/images/gallery/cinematic/cinematic-02.webp';
import GalleryCinematicImg3 from './assets/images/gallery/cinematic/cinematic-03.webp';
import GalleryCinematicImg4 from './assets/images/gallery/cinematic/cinematic-04.webp';
import GalleryCinematicImg5 from './assets/images/gallery/cinematic/cinematic-05.webp';
import GalleryCinematicImg6 from './assets/images/gallery/cinematic/cinematic-06.jpg';
import GalleryCinematicImg7 from './assets/images/gallery/cinematic/cinematic-07.jpg';
import GalleryCinematicImg8 from './assets/images/gallery/cinematic/cinematic-08.jpg';
import GalleryCinematicImg9 from './assets/images/gallery/cinematic/cinematic-09.jpg';
import GalleryCinematicImg10 from './assets/images/gallery/cinematic/cinematic-10.jpg';
import GalleryCinematicImg11 from './assets/images/gallery/cinematic/cinematic-11.jpg';


import GalleryMagImgCover from './assets/images/gallery/magazine/mag-cover.jpg';
import GalleryMagImg1 from './assets/images/gallery/magazine/mag-01.jpg';
import GalleryMagImg2 from './assets/images/gallery/magazine/mag-02.jpg';
import GalleryMagImg3 from './assets/images/gallery/magazine/mag-03.jpg';
import GalleryMagImg4 from './assets/images/gallery/magazine/mag-04.jpg';
import GalleryMagImg5 from './assets/images/gallery/magazine/mag-05.jpg';
import GalleryMagImg6 from './assets/images/gallery/magazine/mag-06.jpg';
import GalleryMagImg7 from './assets/images/gallery/magazine/mag-07.jpg';
import GalleryMagImg8 from './assets/images/gallery/magazine/mag-08.jpg';
import GalleryMagImg9 from './assets/images/gallery/magazine/mag-09.jpg';
import GalleryMagImg10 from './assets/images/gallery/magazine/mag-10.jpg';
import GalleryMagImg11 from './assets/images/gallery/magazine/mag-11.jpg';
import GalleryMagImg12 from './assets/images/gallery/magazine/mag-12.jpg';
import GalleryMagImg13 from './assets/images/gallery/magazine/mag-13.jpg';
import GalleryMagImg14 from './assets/images/gallery/magazine/mag-14.jpg';
import GalleryMagImg15 from './assets/images/gallery/magazine/mag-15.jpg';
import GalleryMagImg16 from './assets/images/gallery/magazine/mag-16.jpg';
import GalleryMagImg17 from './assets/images/gallery/magazine/mag-17.jpg';
import GalleryMagImg18 from './assets/images/gallery/magazine/mag-18.jpg';
import GalleryMagImg19 from './assets/images/gallery/magazine/mag-19.jpg';
import GalleryMagImg20 from './assets/images/gallery/magazine/mag-20.jpg';
import GalleryMagImg21 from './assets/images/gallery/magazine/mag-21.jpg';
import GalleryMagImg22 from './assets/images/gallery/magazine/mag-22.jpg';
import GalleryMagImg23 from './assets/images/gallery/magazine/mag-23.jpg';
import GalleryMagImg24 from './assets/images/gallery/magazine/mag-24.jpg';
import GalleryMagImg25 from './assets/images/gallery/magazine/mag-25.jpg';
import GalleryMagImg26 from './assets/images/gallery/magazine/mag-26.jpg';
import GalleryMagImg27 from './assets/images/gallery/magazine/mag-27.jpg';
import GalleryMagImg28 from './assets/images/gallery/magazine/mag-28.jpg';

import GalleryRedCarpetImgCover from './assets/images/gallery/red-carpet/red-carpet-cover.jpg';
import GalleryRedCarpetImg1 from './assets/images/gallery/red-carpet/red-carpet-1.jpg';
import GalleryRedCarpetImg2 from './assets/images/gallery/red-carpet/red-carpet-2.jpg';
import GalleryRedCarpetImg3 from './assets/images/gallery/red-carpet/red-carpet-3.jpg';
import GalleryRedCarpetImg4 from './assets/images/gallery/red-carpet/red-carpet-4.jpg';
import GalleryRedCarpetImg5 from './assets/images/gallery/red-carpet/red-carpet-5.jpg';
import GalleryRedCarpetImg6 from './assets/images/gallery/red-carpet/red-carpet-6.jpg';
import GalleryRedCarpetImg7 from './assets/images/gallery/red-carpet/red-carpet-7.jpg';
import GalleryRedCarpetImg8 from './assets/images/gallery/red-carpet/red-carpet-8.jpg';
import GalleryRedCarpetImg9 from './assets/images/gallery/red-carpet/red-carpet-9.jpg'


export const FILMS: Film[] = [
  {
    id: 'film-1',
    title: 'Wonder Woman',
    year: 2017,
    role: 'Diana Prince / Wonder Woman',
    genre: ['Action', 'Adventure', 'Fantasy'],
    director: 'Patty Jenkins',
    boxOffice: '$822.8 Million',
    rating: 'PG-13',
    description: 'An Amazon princess finds herself thrust into the midst of World War I, discovering her full powers and true destiny in the process.',
    characterDetail: 'Gal Gadot\'s portrayal of Diana Prince brought an unparalleled blend of strength, grace, and compassion, defining the iconic superhero for a new generation. Critics praised her physical commanding presence paired with rare warmth.',
    coStars: ['Chris Pine', 'Robin Wright', 'Danny Huston', 'David Thewlis'],
    imageCover: FilmWWWImage,
    image: FilmWWPortImage
  },
  {
    id: 'film-2',
    title: 'Red Notice',
    year: 2021,
    role: 'The Bishop (Sarah Black)',
    genre: ['Comedy', 'Action', 'Thriller'],
    director: 'Rawson Marshall Thurber',
    boxOffice: 'Netflix Blockbuster (Most watched of all time)',
    rating: 'PG-13',
    description: 'An FBI profiler pursuing the world\'s most wanted art thief becomes his reluctant partner in crime to catch an elusive thief who\'s always one step ahead.',
    characterDetail: 'As "The Bishop", Gal Gadot commands the screen as a cunning, lethal, and remarkably sophisticated art thief. Exuding high-fashion allure and masterclass hand-to-hand acrobatics, she effortlessly outsmarts the competition.',
    coStars: ['Dwayne Johnson', 'Ryan Reynolds', 'Ritu Arya'],
    imageCover: FilmRNWImage,
    image: FilmRNPImage
  },
  {
    id: 'film-3',
    title: 'Heart of Stone',
    year: 2023,
    role: 'Rachel Stone',
    genre: ['Action', 'Thriller', 'Adventure'],
    director: 'Tom Harper',
    boxOffice: 'No. 1 Globally on Netflix',
    rating: 'PG-13',
    description: 'An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker from stealing its most valuable and dangerous weapon.',
    characterDetail: 'Rachel Stone is a grounded, grit-driven operative. Unlike the mythical stature of Diana Prince, Stone relies on sheer human intellect, military training, and instinct. Gal performed massive high-altitude stunts to bring the tactical world to life.',
    coStars: ['Jamie Dornan', 'Alia Bhatt', 'Sophie Okonedo'],
    imageCover: FilmHOSWImage,
    image: FilmHOSPImage,
  },
  {
    id: 'film-4',
    title: 'Death on the Nile',
    year: 2022,
    role: 'Linnet Ridgeway-Doyle',
    genre: ['Mystery', 'Crime', 'Drama'],
    director: 'Kenneth Branagh',
    boxOffice: '$137.3 Million',
    rating: 'PG-13',
    description: 'While on vacation on the Nile River, Hercule Poirot must investigate the murder of a young heiress who seemed to have everything to live for.',
    characterDetail: 'Linnet Ridgeway is a radiant, ultra-wealthy heiress whose presence in Egypt sparks severe envy and romance. Wrapped in exquisite 1930s Tiffany diamonds and high-society couture, Gal portrays vulnerability masked behind a steel-like guard.',
    coStars: ['Kenneth Branagh', 'Armie Hammer', 'Annette Bening', 'Emma Mackey'],
    image: FilmDOTNPImage,
    imageCover: FilmDOTNWImage
  },
  {
    id: 'film-5',
    title: 'Fast Five',
    year: 2011,
    role: 'Gisele Yashar',
    genre: ['Action', 'Crime', 'Thriller'],
    director: 'Justin Lin',
    boxOffice: '$626.1 Million',
    rating: 'PG-13',
    description: 'Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom while being pursued by a powerful Brazilian drug lord and a relentless federal agent.',
    characterDetail: 'Gisele Yashar is a former Mossad agent who brings elite military marksmanship and tactical intelligence to Toretto\'s crew. This breakthrough role propelled Gal onto the global stage, showcasing her mechanical mastery and high-octane action capabilities.',
    coStars: ['Vin Diesel', 'Paul Walker', 'Dwayne Johnson', 'Sung Kang'],
    image: FilmFFPImage,
    imageCover: FilmFFWImage
  },
  {
    id: 'film-6',
    title: 'Justice League',
    year: 2017,
    role: 'Diana Prince / Wonder Woman',
    genre: ['Action', 'Sci-Fi', 'Adventure'],
    director: 'Zack Snyder',
    boxOffice: '$657.9 Million',
    rating: 'PG-13',
    description: 'Fueled by his restored faith in humanity and inspired by Superman\'s selfless act, Bruce Wayne enlists the help of his new-found ally, Diana Prince, to face an even greater enemy.',
    characterDetail: 'In this ensemble, Diana acts as the central pillar of hope, tactical general, and emotional anchor of the newly minted Justice League as they mount a global defense against Steppenwolf.',
    coStars: ['Ben Affleck', 'Henry Cavill', 'Amy Adams', 'Jason Momoa', 'Ezra Miller'],
    image: FilmJLPImage,
    imageCover: FilmJLWImage
  }
];

export const MODELING_PROJECTS: ModelingProject[] = [
  {
    id: 'model-1',
    title: 'Gucci Bamboo Fragrance',
    client: 'Gucci Group',
    year: 2015,
    type: 'Editorial',
    description: 'The global high-end fragrance campaign representing an organic blend of strength, femininity, and botanical luxury.',
    image: ModelingGucciImage,
    highlights: ['Global TV Commercial face', 'Directed by Fabien Baron', 'Featured in Vogue, Elle, Harper\'s Bazaar worldwide']
  },
  {
    id: 'model-2',
    title: 'Tiffany & Co. - Botanica Blue Book',
    client: 'Tiffany & Co.',
    year: 2022,
    type: 'Editorial',
    description: 'Showcasing the legendary high jewelry collections, capturing the exquisite balance of natural floral motifs and breathtaking hand-set diamonds.',
    image: ModelingTiffanyImage,
    highlights: ['First campaign after brand re-launch under LVMH', 'Showcased the historic 80-carat Empire Diamond necklace', 'Immersive digital and print worldwide campaign']
  },
  {
    id: 'model-3',
    title: 'Miss Israel & Miss Universe Stage',
    client: 'Miss Israel Pageant',
    year: 2004,
    type: 'Runway',
    description: 'Gal Gadot competed and won the Miss Israel crown in 2004 at age 18, advancing to represent the country at the international Miss Universe stage in Ecuador.',
    image: ModelingMissUniverseImage,
    highlights: ['Crowned Miss Israel 2004', 'Launched global modeling career and high-fashion contracts', 'Transitioned directly into elite runway engagements']
  },
  {
    id: 'model-4',
    title: 'Vogue Magazine Global Cover',
    client: 'Condé Nast',
    year: 2020,
    type: 'Cover',
    description: 'The definitive high-fashion editorial cover shot by supreme fashion photographers, portraying the synthesis of athletic resilience and romantic high couture.',
    image: ModelingVogueImage,
    highlights: ['Shot by portrait expert Annie Leibovitz', 'Feature story on modeling history and theatrical physical training', 'Styling in customized Chanel couture']
  },
  {
    id: 'model-5',
    title: 'Castro Fashion - Summer Runway',
    client: 'Castro Jeans',
    year: 2014,
    type: 'Runway',
    description: 'A decade-long partnership as the primary brand ambassador for Israel\'s most prestigious fashion house, leading seasonal runway catalogs.',
    image: ModelingCastroImage,
    highlights: ['10+ catalog runway seasons', 'Pioneered mixed-urban streetwear campaigns', 'Record-breaking brand retention across nationwide billboards']
  },
  {
    id: 'model-6',
    title: 'Marie Claire - Modern Icon Shoot',
    client: 'Hearst Magazines',
    year: 2021,
    type: 'Cover',
    description: 'Intense studio photoshoot with strong structured silhouettes, leather blazers, and geometric monochrome backdrops denoting empowerment.',
    image: ModelingMarieClaireImage,
    highlights: ['Artistic focus on female power structures in Hollywood', 'Styled by Elizabeth Stewart', 'Full digital feature including personal interview']
  }
];

export const BRANDS: BrandAssociation[] = [
  {
    id: 'brand-1',
    name: 'Tiffany & Co.',
    role: 'Global Brand Ambassador',
    description: 'Representing ultimate elegance and luxury innovation, Gal features prominently as the face of High Jewelry collections, fusing historical craftsmanship with contemporary poise.',
    activeCampaign: 'Botanica: High Jewelry Collection',
    yearStarted: 2021,
    quote: "Tiffany has a legacy of storytelling through design. It is an honor to display works that are truly masterpieces of art.",
    image: BrandTiffanyImage
  },
  {
    id: 'brand-2',
    name: 'Hublot Watches',
    role: 'Friend of the Brand',
    description: 'Embodying the "Art of Fusion," Gal represents the legendary Swiss luxury watchmaker. Her mechanical, military intelligence background beautifully binds with Hublot\'s high-tech, architectural wristwatches.',
    activeCampaign: 'The Spirit of Big Bang Monochrome',
    yearStarted: 2022,
    quote: "Hublot represents precision, resilience, and daring forward concepts. That philosophy of non-compromise fits my life perfectly.",
    image: BrandHublotImage
  },
  {
    id: 'brand-3',
    name: 'Revlon',
    role: 'Global Campaign Ambassador',
    description: 'Fronting the iconic "Live Boldly" campaign, promoting self-expression, diverse strength, intelligence, and female solidary through creative beauty collections.',
    activeCampaign: 'Live Boldly Makeup Masterclass',
    yearStarted: 2018,
    quote: "To live boldly is to be unapologetically authentic. Revlon provides a platform to celebrate our diverse paths to empowerment.",
    image: BrandRevlonImage
  },
  {
    id: 'brand-4',
    name: 'Reebok',
    role: 'Athletic Brand Ambassador',
    description: 'Fusing fitness with mental fortitude, Gal partners with Reebok on a massive global scale, emphasizing functional fitness, athletic balance, and confidence on and off the mat.',
    activeCampaign: 'Be More Human Campaign',
    yearStarted: 2018,
    quote: "Fitness has always been a fundamental pillar of my life. Training allows me to test physical walls and find inner serenity.",
    image: BrandReebokImage
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    id: 'time-1',
    year: 2004,
    title: 'Crowned Miss Israel',
    subtitle: 'A National Triumph',
    description: 'At only 18 years old, Gal Gadot won Israel\'s premier beauty pageant, setting her on an immediate course toward elite global campaigns and high-fashion exploration.',
    category: 'Modeling',
    detailText: 'The victory instantly launched her into Europe and New York runway circles, while teaching her the foundational stage presence, grace, and press-handling that would serve her throughout her cinematic journey.'
  },
  {
    id: 'time-2',
    year: 2005,
    title: 'Military Service (IDF)',
    subtitle: 'Discipline and Grounded Strength',
    description: 'Enlisted in the Israel Defense Forces for her mandatory two years of military service, working as a combat fitness instructor.',
    category: 'Personal',
    detailText: 'During her active term, she mastered advanced combat training, physical stamina systems, and firearm safety. These tactical foundations directly contributed to her highly acclaimed stunt capability and physical authenticity in Hollywood action blockbusters.'
  },
  {
    id: 'time-3',
    year: 2009,
    title: 'Hollywood Breakthrough / Fast & Furious',
    subtitle: 'Gisele Yashar Redefines Action',
    description: 'Cast as tactical expert Gisele Yashar in "Fast & Furious" (fourth installment), performing her own stunt work and motorcycle maneuvers.',
    category: 'Acting',
    detailText: 'Director Justin Lin was so impressed with her military background and weapon handling that he revised her character\'s skill level to be an elite counter-intelligence operative, establishing her as an action mainstay.'
  },
  {
    id: 'time-4',
    year: 2016,
    title: 'First Appearance as Wonder Woman',
    subtitle: 'Dawn of Justice Shockwave',
    description: 'Made her explosive, critically revered debut as Wonder Woman in Zack Snyder\'s "Batman v Superman: Dawn of Justice."',
    category: 'Acting',
    detailText: 'Despite mixed reviews for the movie itself, Gadot\'s grand entrance—backed by Hans Zimmer\'s iconic cello theme—was universally heralded as the highlight of the production, initiating a historic global obsession.'
  },
  {
    id: 'time-5',
    year: 2017,
    title: 'Solo Wonder Woman Global Phenomenon',
    subtitle: 'History-Making Summer Blockbuster',
    description: 'Starred in Patty Jenkins\' legendary "Wonder Woman" solo film, breaking multiple box office records for female directors.',
    category: 'Milestone',
    detailText: 'The film went on to gross over $822 million globally, cementing Gal Gadot as a household name and bringing a profound, iconic female archetype of peace, justice, and physical force into twentieth-century cinematic history.'
  },
  {
    id: 'time-6',
    year: 2019,
    title: 'Founded Pilot Wave Productions',
    subtitle: 'Taking the Reins Behind the Camera',
    description: 'Launched the production house "Pilot Wave" alongside her husband Jaron Varsano, aiming to champion singular, impactful narratives of historical women.',
    category: 'Milestone',
    detailText: 'Pilot Wave projects include high-profile historical dramas concerning Irena Sendler, Hedy Lamarr, and geopolitical thrillers, placing Gal firmly at the helm of storytelling and female executive production.'
  },
  {
    id: 'time-7',
    year: 2023,
    title: 'Hollywood Walk of Fame star announced',
    subtitle: 'An Eternal Legend Inscribed',
    description: 'The Hollywood Chamber of Commerce announced that Gal Gadot would receive her dedicated star on the Hollywood Walk of Fame in the class of 2024.',
    category: 'Milestone',
    detailText: 'Honoring her multi-faceted achievements in global cinema, philanthropy, and artistic elevation of powerful female portrayals in the cultural mainstream.'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-img-1',
    imageCover: GalleryStudioImgCover,
    images: [
      GalleryStudioImg1,
      GalleryStudioImg2,
      GalleryStudioImg3,
      GalleryStudioImg4,
      GalleryStudioImg5,
      GalleryStudioImg6,
      GalleryStudioImg7,
      GalleryStudioImg8,
      GalleryStudioImg9,
      GalleryStudioImg10,
      GalleryStudioImg11,
      GalleryStudioImg12,
      GalleryStudioImg13,
      GalleryStudioImg14,
      GalleryStudioImg15,
      GalleryStudioImg16,
      GalleryStudioImg17,
      GalleryStudioImg18,
      GalleryStudioImg19,
      GalleryStudioImg20,
      GalleryStudioImg21,
      GalleryStudioImg22,
      GalleryStudioImg23
    ],
    title: 'Editorial Studio Portrait',
    category: 'Editorials',
    description: 'High-contrast studio portrait emphasizing sharp geometric contours, capturing minimalist elegance and classical poise.'
  },
  {
    id: 'gal-img-2',
    imageCover: GalleryHighFashionImgCover,
    images: [
      GalleryHighFashionImg1,
      GalleryHighFashionImg2,
      GalleryHighFashionImg3,
      GalleryHighFashionImg4,
      GalleryHighFashionImg5,
      GalleryHighFashionImg6,
      GalleryHighFashionImg7,
      GalleryHighFashionImg8,
      GalleryHighFashionImg9,
      GalleryHighFashionImg10,
      GalleryHighFashionImg11,
      GalleryHighFashionImg12,
      GalleryHighFashionImg13,
      GalleryHighFashionImg14,
      GalleryHighFashionImg15,
      GalleryHighFashionImg16,
      GalleryHighFashionImg17
    ],
    title: 'High-Fashion Runway Motion',
    category: 'Editorials',
    description: 'Captured in fluid motion during Paris fashion engagements, sporting customized avant-garde outerwear with rich fabric dynamics.'
  },
  {
    id: 'gal-img-3',
    imageCover: GalleryTiffanyImgCover,
    images: [
      GalleryTiffanyImg1,
      GalleryTiffanyImg2,
      GalleryTiffanyImg3,
      GalleryTiffanyImg4,
      GalleryTiffanyImg5,
      GalleryTiffanyImg6,
      GalleryTiffanyImg7,
      GalleryTiffanyImg8,
      GalleryTiffanyImg9,
      GalleryTiffanyImg10
    ],
    title: 'Tiffany & Co. - Elegant Jewels',
    category: 'Photography',
    description: 'A series of luminous portraits showcasing the intricate craftsmanship of Tiffany\'s high jewelry, with a focus on the interplay of light and shadow to highlight the brilliance of the diamonds and the elegance of Gal\'s features.'
  },
  {
    id: 'gal-img-4',
    imageCover: GalleryVogueImgCover,
    images: [
      GalleryVogueImg1,
      GalleryVogueImg2,
      GalleryVogueImg3,
      GalleryVogueImg4,
      GalleryVogueImg5,
      GalleryVogueImg6,
      GalleryVogueImg7,
      GalleryVogueImg8,
      GalleryVogueImg9,
      GalleryVogueImg10,
      GalleryVogueImg11,
      GalleryVogueImg12
    ],
    title: 'Vogue Magazine Specials',
    category: 'Photography',
    description: 'A series of high-contrast, monochrome portraits shot by Annie Leibovitz for Vogue, emphasizing the interplay of light and shadow to highlight Gal\'s sculptural features and commanding presence.'
  },
  {
    id: 'gal-img-5',
    imageCover: GalleryBeautyImgCover,
    images: [
      GalleryBeautyImg1,
      GalleryBeautyImg2,
      GalleryBeautyImg3,
      GalleryBeautyImg4,
      GalleryBeautyImg5,
      GalleryBeautyImg6,
      GalleryBeautyImg7,
      GalleryBeautyImg8,
      GalleryBeautyImg9,
      GalleryBeautyImg10,
      GalleryBeautyImg11,
      GalleryBeautyImg12,
      GalleryBeautyImg13
    ],
    title: 'Beauty Campaign Close-up',
    category: 'Editorials',
    description: 'Luminous natural lighting portrait showcasing fine cosmetics craftsmanship, focusing on raw, compelling warmth.'
  },
  {
    id: 'gal-img-6',
    imageCover: GalleryCinematicImgCover,
    images: [
      GalleryCinematicImg1,
      GalleryCinematicImg2,
      GalleryCinematicImg3,
      GalleryCinematicImg4,
      GalleryCinematicImg5,
      GalleryCinematicImg6,
      GalleryCinematicImg7,
      GalleryCinematicImg8,
      GalleryCinematicImg9,
      GalleryCinematicImg10,
      GalleryCinematicImg11
    ],
    title: 'Cinematic Setting Sunset',
    category: 'Cinematic',
    description: 'Backlit high-contrast shot mirroring high-octane cinematic desert dunes, symbolizing adventure and resilience.'
  },
  {
    id: 'gal-img-7',
    imageCover: GalleryMagImgCover,
    images: [
      GalleryMagImg1,
      GalleryMagImg2,
      GalleryMagImg3,
      GalleryMagImg4,
      GalleryMagImg5,
      GalleryMagImg6,
      GalleryMagImg7,
      GalleryMagImg8,
      GalleryMagImg9,
      GalleryMagImg10,
      GalleryMagImg11,
      GalleryMagImg12,
      GalleryMagImg13,
      GalleryMagImg14,
      GalleryMagImg15,
      GalleryMagImg16,
      GalleryMagImg17,
      GalleryMagImg18,
      GalleryMagImg19,
      GalleryMagImg20,
      GalleryMagImg21,
      GalleryMagImg22,
      GalleryMagImg23,
      GalleryMagImg24,
      GalleryMagImg25,
      GalleryMagImg26,
      GalleryMagImg27,
      GalleryMagImg28
    ],
    title: 'Top Magazine Cover Shoot',
    category: 'Magazine',
    description: 'A dynamic cover shoot for a leading fashion magazine, featuring bold styling and dramatic lighting to capture Gal\'s multifaceted persona and global appeal.'
  },
  {
    id: 'gal-img-8',
    imageCover: GalleryRedCarpetImgCover,
    images: [
      GalleryRedCarpetImg1,
      GalleryRedCarpetImg2,
      GalleryRedCarpetImg3,
      GalleryRedCarpetImg4,
      GalleryRedCarpetImg5,
      GalleryRedCarpetImg6,
      GalleryRedCarpetImg7,
      GalleryRedCarpetImg8,
      GalleryRedCarpetImg9
    ],
    title: 'Red Carpet Golden Hour',
    category: 'Events',
    description: 'Unfiltered red carpet candid capturing an energetic, genuine laugh amidst media flashes at the global world premiere.'
  }
];

export const QUOTES: TestimonialQuote[] = [
  {
    id: 'q-1',
    author: 'Patty Jenkins',
    role: 'Director, Wonder Woman',
    text: "Gal Gadot is the most authentic person you could ever meet. She has an intrinsic, effortless nobility, a deep-seated inner light that shines through her character and elevates everyone she works with on set.",
    source: "The New York Times Feature Story"
  },
  {
    id: 'q-2',
    author: 'Gal Gadot',
    role: 'Artist Statement',
    text: "I wanted to show that a woman can be powerful and strong, without having to pretend to be a man. We have our own voice, our own emotional depth, and our own beautiful empathy that is our ultimate strength.",
    source: "Global Women in Cinema Keynote Address"
  },
  {
    id: 'q-3',
    author: 'Kenneth Branagh',
    role: 'Director / Actor, Death on the Nile',
    text: "Behind Gal's obvious cinematic majesty lies a razor-sharp, disciplined intellect. She works with immense precision, absorbing historical details and executing physical actions flawlessly under any climate.",
    source: "Entertainment Weekly"
  }
];
