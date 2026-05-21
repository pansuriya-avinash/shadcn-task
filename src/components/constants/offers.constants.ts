import type { Offer } from '../types';
import offerImage1 from '@/public/offer1.png';
import offerImage2 from '@/public/offer2.jpg';
import offerImage3 from '@/public/offer3.jpg';

export const OFFERS: Offer[] = [
  {
    id: "1",
    title: "Lunch Deal",
    price: "$9.99",
    discount: "10%",
    image: offerImage1,
    buttonText: "Book your table",
    isLarge: true,
    position: "top-right",
  },
  {
    id: "2",
    title: "BOGO Special",
    image: offerImage2,
    buttonText: "Claim offer",
    isLarge: false,
    position: "bottom-left",
  },
  {
    id: "3",
    title: "Family Meal",
    price: "$29.99",
    image: offerImage3,
    buttonText: "Book your table",
    isLarge: false,
    position: "top-right",
  },
];
