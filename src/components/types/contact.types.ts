import * as React from 'react';

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

export interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
  className?: string;
}
