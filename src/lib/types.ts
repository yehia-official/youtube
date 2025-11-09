import type { ImagePlaceholder } from './placeholder-images';

export type CourseCategory = 'Frontend' | 'Python' | 'AI' | 'Tools';

export type Course = {
  id: string;
  title: string;
  description: string;
  image: ImagePlaceholder;
  category: CourseCategory;
  url: string;
};

export type Video = {
  id: string;
  title: string;
  thumbnail: ImagePlaceholder;
  url: string;
};

export type Review = {
  id: string;
  title: string;
  rating: number;
  pros: string[];
  cons: string[];
  image: ImagePlaceholder;
  videoUrl?: string;
  description: string;
};

export type Testimonial = {
  id: string;
  rating: number;
  summary: string;
  author: {
    name: string;
    title: string;
    image: ImagePlaceholder;
  };
};

export type Article = {
  id: string;
  title: string;
  description: string;
  content: string;
  image: ImagePlaceholder;
  url: string;
};
