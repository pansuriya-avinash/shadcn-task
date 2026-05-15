import { StatItem } from "../types"
import {
  ArrowRight,
  ChefHat,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';

export const stats: StatItem[] = [
  {
    icon: (
      <Sparkles
        className='size-7 text-muted-foreground'
        strokeWidth={1.7}
      />
    ),
    value: '20+',
    label: 'Years of Culinary Expertise',
  },
  {
    icon: (
      <ChefHat
        className='size-7 text-muted-foreground'
        strokeWidth={1.7}
      />
    ),
    value: '70+',
    label: 'Signature Dishes Perfected',
  },
  {
    icon: (
      <Users
        className='size-7 text-muted-foreground'
        strokeWidth={1.7}
      />
    ),
    value: '500+',
    label: 'Happy Guests Every Month',
  },
  {
    icon: (
      <Trophy
        className='size-7 text-muted-foreground'
        strokeWidth={1.7}
      />
    ),
    value: '25',
    label: 'Prestigious Culinary Awards',
  },
];