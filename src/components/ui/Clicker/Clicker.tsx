'use client';

import { ComponentProps } from 'react';

import { Button, ButtonProps } from '@/components/ui';
import { cn } from '@/lib/utils';

import { Tooltip } from '../Tooltip';

export type ClickerProps = ButtonProps & Pick<ComponentProps<'option'>, 'label'>;

export const Clicker = ({ label, children, className, ...props }: ClickerProps) => (
  <Tooltip.Root>
    <Tooltip.Trigger asChild>
      {children && (
        <Button
          variant="transparent"
          size="icon"
          className={cn('cursor-hover', className)}
          {...props}
        >
          {children}
          <span className="sr-only">{label}</span>
        </Button>
      )}
    </Tooltip.Trigger>
    {label && (
      <Tooltip.Content side={'bottom'} sideOffset={4}>
        <span>{label}</span>
      </Tooltip.Content>
    )}
  </Tooltip.Root>
);
