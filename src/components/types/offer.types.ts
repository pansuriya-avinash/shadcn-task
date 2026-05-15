import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface Offer {
  id: string;
  title: string;
  price?: string;
  discount?: string;
  image: StaticImport;
  buttonText: string;
  isLarge?: boolean;
}

export interface OfferCardProps {
  offer: Offer;
  className?: string;
}
