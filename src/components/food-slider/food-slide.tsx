'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

import placeholderImage from '@/public/hero-img.png';

import { FoodSlideType } from './types';

interface FoodSlideProps {
  item: FoodSlideType;
  active: boolean;
}

const FoodSlide = ({
  item,
  active,
}: FoodSlideProps) => {
  return (
    <motion.div
      animate={{
        opacity: active ? 1 : 0.45,
        filter: active
          ? 'blur(0px)'
          : 'blur(2px)',
      }}
      transition={{
        duration: 0.45,
        ease: 'easeInOut',
      }}
      className={cn(
        'relative flex shrink-0 items-end justify-center',
        'min-w-[110px] sm:min-w-[140px] lg:min-w-[180px]'
      )}
    >
      <div
        className={cn(
          'absolute bottom-0 left-1/2',
          '-translate-x-1/2',
          'border transition-all duration-500',
          'h-14 w-28',
          'sm:h-16 sm:w-36',
          'lg:h-20 lg:w-44',
          active
            ? 'border-primary'
            : 'border-primary/20'
        )}
        style={{
          clipPath:
            'polygon(0 35%, 100% 0%, 100% 100%, 0% 100%)',
        }}
      />
      <Card
        className={cn(
          'relative overflow-hidden rounded-full',
          'border-border/50',
          'shadow-lg shadow-black/5',
          'transition-all duration-500',
          'size-20 sm:size-28 lg:size-36'
        )}
      >
        <Image
          src={
            item.image
              ? item.image
              : placeholderImage
          }
          alt={item.title}
          fill
          priority
          className='object-cover'
        />
      </Card>
    </motion.div>
  );
};

export default FoodSlide;