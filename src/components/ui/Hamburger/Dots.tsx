'use client';

import { ComponentProps } from 'react';

import { For } from '@/components/utils';
import { cn } from '@/lib/utils';
import { hamburgerDots } from '@/utils/constants';

type DotsProps = ComponentProps<'div'>;

export const Dots = ({ className, ...props }: DotsProps) => (
  <For each={hamburgerDots}>
    {(dot, index) => (
      <div
        key={index}
        className={cn(
          'absolute h-2 w-2 scale-100 rounded-full border-2 bg-transparent transition-all duration-300 ease-[cubic-bezier(.61,.01,.42,1)]',
          'border-slate-500 dark:border-slate-50',
          'group-hover:scale-0 group-hover:opacity-0',
          'group-data-[open=true]:scale-0 group-data-[open=true]:opacity-0',
          className,
        )}
        style={{
          left: `${dot.col * 12 + 3}px`,
          top: `${dot.row * 12 + 3}px`,
        }}
        {...props}
      />
    )}
  </For>
);
