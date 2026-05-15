import Image from 'next/image';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';
import { OfferCardProps } from './types';


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

        <Button
          className={cn(
            'w-fit rounded-full',
            'bg-primary text-primary-foreground',
            'hover:bg-primary/90'
          )}
        >
          {offer.buttonText}
        </Button>
      </div>
    </div>
  );
}

export default OfferCard;