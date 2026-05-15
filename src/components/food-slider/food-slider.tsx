'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Card } from '@/components/ui/card';

import FoodSlide from './food-slide';
import { foodSlides } from './slider-data';

const SLIDE_WIDTH = 220;

interface FoodSliderProps {
  activeIndex: number;
  onIndexChange: (index: number) => void;
  isTransitioning: boolean;
}

const FoodSlider = ({ activeIndex, onIndexChange, isTransitioning }: FoodSliderProps) => {

  const infiniteSlides = React.useMemo(
    () => [...foodSlides, ...foodSlides],
    []
  );

  const nextSlide = React.useCallback(() => {
    onIndexChange(activeIndex + 1);
  }, [activeIndex, onIndexChange]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const actualActiveIndex = activeIndex % foodSlides.length;

  return (
    <Card
      className={cn(
        'relative overflow-hidden py-2',
        'border-none bg-transparent shadow-none'
      )}
    >
      <div className='relative overflow-hidden'>
        <motion.div
          animate={{
            x: `calc(50% - ${
              activeIndex * SLIDE_WIDTH + 110
            }px)`,
          }}
          transition={{
            duration: isTransitioning ? 0.7 : 0,
            ease: 'easeInOut',
          }}
          className={cn(
            'flex items-center gap-4',
            'sm:gap-6',
            'lg:gap-10'
          )}
        >
          {infiniteSlides.map((item, index) => (
            <FoodSlide
              key={`${item.id}-${index}`}
              item={item}
              active={actualActiveIndex === (index % foodSlides.length)}
            />
          ))}
        </motion.div>
      </div>
    </Card>
  );
};

export default FoodSlider;