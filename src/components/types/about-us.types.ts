import * as React from 'react';

export interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export interface StatCardProps {
  stat: StatItem;
  className?: string;
}
