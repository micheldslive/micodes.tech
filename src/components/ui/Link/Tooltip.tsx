'use client';

import { cn } from '@/lib/utils';

import { Tooltip as TooltipUI } from '../Tooltip';

import { AnchorTooltipProps } from './Link';

export const Tooltip = ({ className, children, label, ...props }: AnchorTooltipProps) => (
  <TooltipUI.Root>
    <TooltipUI.Trigger asChild>
      {children && (
        <a
          className={cn(
            'transition-all duration-300 ease-out xl:pointer-events-none xl:invisible xl:opacity-0',
            'group-hover/item:xl:pointer-events-auto group-hover/item:xl:visible group-hover/item:xl:opacity-100',
            className,
          )}
          rel="noreferrer"
          {...props}
        >
          {children}
          <span className="sr-only">{label}</span>
        </a>
      )}
    </TooltipUI.Trigger>
    {label && (
      <TooltipUI.Content side={'bottom'} sideOffset={4}>
        <span>{label}</span>
      </TooltipUI.Content>
    )}
  </TooltipUI.Root>
);
