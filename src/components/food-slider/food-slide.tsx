'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

import placeholderImage from '@/public/hero-img.png';

import { FoodSlideType } from './types';

interface FoodSlideProps {
  item: FoodSlideType;
  active: boolean;
}

function FoodSlide({
  item,
  active,
}: FoodSlideProps) {
  return (
    <motion.div
      animate={{
        opacity: active ? 1 : 0.65,
      }}
      transition={{
        duration: 0.45,
        ease: 'easeInOut',
      }}
      className={cn(
        'relative flex shrink-0 items-center justify-center'
      )}
    >
      {/* Background Shape */}
      <div
        className={cn(
          'absolute bottom-1 left-1/2 -z-10',
          '-translate-x-1/2 transition-all duration-500',
          active
            ? 'text-primary'
            : 'text-border'
        )}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 161 92'
          fill='none'
          className='h-16 w-28 sm:h-20 sm:w-36 lg:h-24 lg:w-44'
        >
          <path
            d='M0.682517 80.6118L0.501193 39.6946C0.480127 34.9409 3.80852 30.8294 8.46241 29.8603L148.426 0.713985C154.636 -0.579105 160.465 4.16121 160.465 10.504V80.7397C160.465 86.2674 155.98 90.7465 150.453 90.7397L10.6701 90.5674C5.16936 90.5607 0.706893 86.1125 0.682517 80.6118Z'
            stroke='currentColor'
          />
        </svg>
      </div>

      {/* Food Image */}
      <motion.div
        animate={{
          rotate: active ? 0 : -2,
          // scale: active ? 1.08 : 0.88,
        }}
        transition={{
          duration: 0.4,
        }}
        className={cn(
          'relative flex items-center justify-center',
          'h-20 w-20',
          'sm:h-28 sm:w-28',
          'lg:h-36 lg:w-36'
        )}
      >
        <Image
          src={item.image || placeholderImage}
          alt={item.title}
          width={100}
          height={100}
          className='object-cover drop-shadow-xl'
        />
      </motion.div>
    </motion.div>
  );
}

export default FoodSlide;