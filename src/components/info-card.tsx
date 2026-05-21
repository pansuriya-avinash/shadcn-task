import * as React from 'react';

import {
  Card,
  CardContent,
} from '@/components/ui/card';

import { cn } from '@/lib/utils';
import { InfoCardProps } from './types';

const InfoCard = ({
  icon,
  title,
  details,
  className,
}: InfoCardProps) => {
  return (
    <Card
      className={cn(
        'border border-transparent rounded-none',
        'bg-background shadow-md shadow-black/5',
        'align-middle',
        'hover:border-primary hover:shadow-none',
        'transition-colors duration-300',
        className
      )}
    >
      <CardContent
        className={cn(
          'space-y-4',
          'p-5 sm:p-6',
          'flex items-center justify-center flex-col text-center'
        )}
      >
        <div
          className={cn(
            'flex size-12 items-center justify-center rounded-full',
            'border border-border'
          )}
        >
          {icon}
        </div>

        <div className='space-y-2'>
          <h3
            className={cn(
              'text-base font-semibold',
              'text-card-foreground'
            )}
          >
            {title}
          </h3>

          <div className='space-y-1'>
            {details.map((detail, index) => (
              <p
                key={index}
                className={cn(
                  'text-sm leading-6',
                  'text-muted-foreground'
                )}
              >
                {detail}
              </p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCard;