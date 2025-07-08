export interface VillageData {
  name: string;
  description: string;
  location: string;
  achievements: string[];
  facilities: Facility[];
  government: GovernmentMember[];
  articles: Article[];
  images: VillageImage[];
}

export interface Facility {
  id: string;
  name: string;
  type: 'tourism' | 'religious' | 'health' | 'food' | 'government';
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface GovernmentMember {
  id: string;
  name: string;
  position: string;
  level: 'head' | 'secretary' | 'section' | 'subsection';
}

export interface Article {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  image?: string;
  author?: string;
}

export interface VillageImage {
  id: string;
  url: string;
  alt: string;
  category: 'hero' | 'culture' | 'food' | 'nature' | 'people';
}

export interface ContactInfo {
  phone: string;
  email: string;
  website: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    youtube?: string;
  };
}