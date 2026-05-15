export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  feedback: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}
