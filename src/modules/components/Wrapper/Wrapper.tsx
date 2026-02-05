'use client';

import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

export type WrapperProps = ComponentProps<'div'>;

export const Wrapper = ({ className, ...props }: WrapperProps) => (
  <div
    className={cn(
      'relative container mx-auto flex h-full w-full max-w-7xl flex-col px-6 lg:pt-0',
      className,
    )}
    {...props}
  />
);
