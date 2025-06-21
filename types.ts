export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorId: string;
  duration: string;
  price: number;
  originalPrice?: number;
  thumbnailUrl: string;
  category: string;
  rating: number;
  reviewCount: number;
  description: string;
  overview: string;
  syllabus: SyllabusItem[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  studentsEnrolled: number;
  language: string;
  lastUpdated: string;
}

export interface SyllabusItem {
  id: string;
  title: string;
  lessons: Lesson[];
  duration: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isCompleted?: boolean;
  type: 'video' | 'quiz' | 'reading';
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  bio: string;
  longBio: string;
  imageUrl: string;
  socialLinks: { platform: string; url: string }[];
  expertise: string[];
  coursesTaughtIds: string[];
  videoIntroUrl?: string;
  quote?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  author: string;
  excerpt: string;
  content: string; // HTML content or Markdown
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  date: string; // ISO string or human-readable
  time: string;
  location: string; // Or "Online"
  imageUrl: string;
  shortDescription: string;
  fullDescription: string;
  speakerInfo?: { name: string; title: string };
  schedule?: { time: string; activity: string }[];
  registrationLink: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  imageUrl: string;
}

export interface PartnerLogo {
  id: string;
  name: string;
  logoUrl: string; // Grayscale version preferably
}

// Cart specific types
export interface CartItem extends Course {
  // quantity is typically 1 for courses, but can be added if needed
  // quantity: number; 
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Course) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  isItemInCart: (itemId: string) => boolean;
}

// Checkout specific types
export interface CheckoutFormData {
  fullName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  cardholderName: string;
  cardNumber: string;
  expiryDate: string; // MM/YY
  cvv: string;
}

export interface CheckoutFormErrors {
  fullName?: string;
  email?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  cardholderName?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}