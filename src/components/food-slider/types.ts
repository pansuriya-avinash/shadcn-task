import type { StaticImageData } from 'next/image';

export type FoodSlideType = {
  id: number;
  title: string;
  image: string | StaticImageData;
  review: string;

};