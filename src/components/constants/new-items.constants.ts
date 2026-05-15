import type { NewItem } from '../types';
import newItemsImage1 from '@/public/newitem1.png';
import newItemsImage2 from '@/public/newitem2.png';
import newItemsImage3 from '@/public/newitem3.png';

export const NEW_ITEMS: NewItem[] = [
  {
    id: '1',
    title: 'Truffle Mushroom Risotto',
    category: 'Main course',
    description:
      'Creamy arborio rice with wild mushrooms and black truffle oil.',
    image: newItemsImage1,
    price: '$24.99',
  },
  {
    id: '2',
    title: 'Lobster Bisque',
    category: 'Soup',
    description:
      'Rich and creamy soup made with fresh lobster and herbs.',
    image: newItemsImage2,
    price: '$18.99',
  },
  {
    id: '3',
    title: 'Wagyu Beef Burger',
    category: 'Burger',
    description:
      'Premium wagyu beef with caramelized onions and special sauce.',
    image: newItemsImage3,
    price: '$28.99',
  },
];
