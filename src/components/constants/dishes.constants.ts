import type { Dish } from '../types';
import popularImage1 from '@/public/popular1.png';
import popularImage2 from '@/public/popular2.png';
import popularImage3 from '@/public/popular3.png';
import popularImage4 from '@/public/popular4.png';

export const DISHES: Dish[] = [
  {
    id: '1',
    title: 'Grilled Herb Chicken',
    category: 'Main course',
    description:
      'Juicy chicken grilled with herbs and served with garlic sauce.',
    image: popularImage4,
  },
  {
    id: '2',
    title: 'Classic Margherita Pizza',
    category: 'Pizza',
    description:
      'Crispy crust, fresh mozzarella, and basil—a true classic.',
    image: popularImage3,
  },
  {
    id: '3',
    title: 'Spicy Shrimp Linguine',
    category: 'Main course',
    description:
      'Shrimp, chili, and creamy tomato sauce tossed to perfection.',
    image: popularImage2,
  },
  {
    id: '4',
    title: 'Chocolate Lava Cake',
    category: 'Dessert',
    description:
      'Warm molten cake with a scoop of vanilla ice cream.',
    image: popularImage1,
  },
];
