'use client';

import * as React from 'react';
import { motion } from 'framer-motion';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import FoodSlide from './food-slide';
import { foodSlides } from './slider-data';

interface FoodSliderProps {
  activeIndex: number;
  onIndexChange: (index: number) => void;
  isTransitioning: boolean;
}

const AUTO_PLAY_DELAY = 2500;

function FoodSlider({
  activeIndex,
  onIndexChange,
}: FoodSliderProps) {
  /**
   * Triple slides for seamless looping
   */
  const loopSlides = React.useMemo(
    () => [...foodSlides, ...foodSlides, ...foodSlides],
    []
  );

  /**
   * Auto active item change
   */
  React.useEffect(() => {
    const interval = setInterval(() => {
      onIndexChange(
        (activeIndex + 1) % foodSlides.length
      );
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(interval);
  }, [activeIndex, onIndexChange]);

  const actualActiveIndex =
    activeIndex % foodSlides.length;

  return (
    <Card className='border-none bg-transparent shadow-none'>
      <CardContent className='relative overflow-hidden p-0 py-4'>
        {/* Left Fade */}
        <div className='pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent' />

        {/* Right Fade */}
        <div className='pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent' />

        <motion.div
          className={cn(
            'flex w-max items-center gap-4',
            'sm:gap-6',
            'lg:gap-8'
          )}
          animate={{
            x: ['0%', '-33.333%'],
          }}
          transition={{
            duration: 18,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {loopSlides.map((item, index) => {
            const originalIndex =
              index % foodSlides.length;

            return (
              <FoodSlide
                key={`${item.id}-${index}`}
                item={item}
                active={
                  originalIndex ===
                  actualActiveIndex
                }
              />
            );
          })}
        </motion.div>
      </CardContent>
    </Card>
  );
}

export default FoodSlider;