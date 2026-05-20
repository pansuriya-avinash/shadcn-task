'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

import { Card, CardContent } from '@/components/ui/card';

import FoodSlide from './food-slide';
import { foodSlides } from './slider-data';

interface FoodSliderProps {
  activeIndex: number;
  onIndexChange: (index: number) => void;
}

function FoodSlider({
  activeIndex,
  onIndexChange,
}: FoodSliderProps) {
  const [api, setApi] = React.useState<CarouselApi>();

  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    })
  );

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      onIndexChange(api.selectedScrollSnap());
    };

    onSelect();

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api, onIndexChange]);

  return (
    <Card className='border-none bg-transparent shadow-none'>
      <CardContent className='relative overflow-hidden p-0 py-4'>
        {/* Left Fade */}
        <div className='pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-background to-transparent' />

        {/* Right Fade */}
        <div className='pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-background to-transparent' />

        <Carousel
          setApi={setApi}
          opts={{
            align: 'center',
            loop: true,
          }}
          plugins={[plugin.current]}
          className='w-full'
        >
          <CarouselContent className='-ml-2 md:-ml-4'>
            {foodSlides.map((item, index) => (
              <CarouselItem
                key={item.id}
                className={`
                  basis-[120px]
                  sm:basis-[160px]
                  lg:basis-[190px]
                  pl-2
                  md:pl-4
                `}
              >
                <motion.div
                  animate={{
                    y:
                      activeIndex === index
                        ? -6
                        : 0,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <FoodSlide
                    item={item}
                    active={
                      activeIndex === index
                    }
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </CardContent>
    </Card>
  );
}

export default FoodSlider;