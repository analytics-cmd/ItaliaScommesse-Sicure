
export interface Operator {
  id: string;
  name: string;
  logoUrl: string;
  licenseNumber: string;
  rating: number; // 1-5
  features: string[];
  badges?: ('HOT' | 'NEW' | 'TOP' | 'ESCLUSIVO')[]; // Trust symbols
  description: string;
  fullReview: string; // Detailed review text for /reviews page (500+ words)
  promoLongDescription?: string; // Specific 300-500 word guide for /promo-codes/:id page
  expertTake: string; // Witty, insider insight
  bottomLine: string; // Final verdict sentence
  pros: string[];
  cons: string[];
  ratingBreakdown: {
    odds: number;
    app: number;
    support: number;
    bonuses: number;
  };
  promoCode: string;
  bonusOffer: string;
  link: string; // This will be managed by linkManager but kept for reference if needed
  category: 'sports' | 'casino' | 'hybrid';
  reviewAuthor: string;
  reviewDate: string;
  authorId: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  expertise: string[];
  socialLinks: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum LegalPageType {
  TERMS = 'terms',
  PRIVACY = 'privacy',
  RESPONSIBLE = 'responsible',
  COOKIES = 'cookies'
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl: string;
  relatedOperatorId: string;
  authorId: string;
  category: 'Guide' | 'Bonus' | 'News';
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index
  explanation: string;
}
