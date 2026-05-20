"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { OfferCardProps } from './types';
import { EASE_OUT_EXPO } from '@/lib/animation';


const OfferCard = ({
  offer,
  className,
}: OfferCardProps) => {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-3xl',
        'shadow-xl shadow-black/10',
        offer.isLarge
          ? 'h-[380px] sm:h-[450px] lg:h-[590px]'
          : 'h-[260px] sm:h-[280px]',
        className
      )}
    >
      <Image
        src={offer.image}
        alt={offer.title}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={cn(
          'object-cover',
          'transition-transform duration-700',
          'group-hover:scale-105'
        )}
      />

      <div
        className={cn(
          'absolute inset-0',
          'bg-gradient-to-t',
          'from-black/75 via-black/20 to-transparent'
        )}
      />

      <div
        className={cn(
          'relative z-10 flex h-full flex-col justify-end',
          'p-6 sm:p-8'
        )}
      >
        {offer.discount && (
          <div className='mb-3'>
            <span
              className={cn(
                'text-4xl font-bold tracking-tight text-white',
                'sm:text-5xl'
              )}
            >
              <span className='text-primary'>
                {offer.discount}
              </span>{' '}
              OFF
            </span>
          </div>
        )}

        <h3
          className={cn(
            'mb-5',
            'text-2xl font-semibold text-white',
            'sm:text-3xl'
          )}
        >
          {offer.title}
          {offer.price && (
            <span className='ml-2'>
              - {offer.price}
            </span>
          )}
        </h3>
        <motion.div transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}>
          <Button
            className={cn(
              'group relative w-fit overflow-hidden rounded-full',
              'bg-primary text-primary-foreground',
              'before:absolute before:inset-0 before:rounded-[inherit]',
              'before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)]',
              'before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0]',
              'before:bg-no-repeat',
              'before:transition-[background-position_0s_ease] before:duration-1000',
              'hover:before:bg-[position:-100%_0,0_0]',
              'dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]',
              'transition-all duration-300',
              'hover:bg-[color-mix(in_oklab,var(--primary)_90%,transparent)] hover:shadow-lg hover:shadow-primary/40',
            )}
          >
            {offer.buttonText}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default OfferCard;