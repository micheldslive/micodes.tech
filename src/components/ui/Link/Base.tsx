'use client';
import NextLink from 'next/link';

import { cn } from '@/lib/utils';

import { AnchorProps } from './Link';

export const Base = ({ className, children, ...props }: AnchorProps) => (
  <NextLink
    className={cn('cursor-hover inline-block text-inherit no-underline', className)}
    {...props}
  >
    {children}
  </NextLink>
);
