/**
 * Types for the Gal Gadot Portfolio Website
 */

export interface Film {
  id: string;
  title: string;
  year: number;
  role: string;
  genre: string[];
  director: string;
  boxOffice?: string;
  description: string;
  imageCover: string;
  image: string;
  characterDetail: string;
  coStars: string[];
  rating: string;
}

export interface ModelingProject {
  id: string;
  title: string;
  client: string;
  year: number;
  type: 'Editorial' | 'Runway' | 'Cover';
  description: string;
  image: string;
  highlights: string[];
}

export interface BrandAssociation {
  id: string;
  name: string;
  role: string;
  description: string;
  activeCampaign: string;
  yearStarted: number;
  quote: string;
  image: string;
}

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  subtitle: string;
  description: string;
  category: 'Acting' | 'Modeling' | 'Personal' | 'Milestone';
  detailText?: string;
}

export interface GalleryItem {
  id: string;
  imageCover: string;
  images: string[];
  title: string;
  category: 'Editorials' | 'Cinematic' | 'Photography' | 'Events' | 'Magazine';
  description: string;
}

export interface TestimonialQuote {
  id: string;
  author: string;
  role: string;
  text: string;
  source: string;
}
