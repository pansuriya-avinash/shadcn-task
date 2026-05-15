import type { StaticImageData } from 'next/image';

export interface Dish {
  id: string;
  title: string;
  category: string;
  description: string;
  image: StaticImageData;
}

export interface NewItem extends Dish {
  price: string;
}
