'use client';
import NextLink, { LinkProps } from 'next/link';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type AnchorProps = LinkProps & Pick<ComponentProps<'a'>, 'className' | 'children'>;

const Base = ({ className, children, ...props }: AnchorProps) => (
  <NextLink
    className={cn('cursor-hover inline-block text-inherit no-underline', className)}
    {...props}
  >
    {children}
  </NextLink>
);

const Underline = ({ className, children, ...props }: AnchorProps) => (
  <NextLink
    className={cn('group/Link cursor-hover relative block w-fit overflow-hidden pb-2', className)}
    {...props}
  >
    <span className="whitespace-nowrap">{children}</span>
    <span className="absolute bottom-0 left-0 h-0.75 w-full -translate-x-100 bg-slate-500 transition-transform duration-400 ease-in-out group-hover/Link:translate-x-0 dark:bg-slate-50" />
  </NextLink>
);

export const Link = Object.assign(Base, {
  Underline,
});
