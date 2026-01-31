'use client';

import { Button, ButtonProps } from '@/components/ui';
import { ComponentProps } from 'react';
import { Tooltip } from '../Tooltip';
import { cn } from '@/lib/utils';

export type ClickerProps = ButtonProps & Pick<ComponentProps<'option'>, 'label'>;

export const Clicker = ({ label, children, className, ...props }: ClickerProps) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        {children && (
          <Button variant="transparent" size="icon" className={cn("cursor-hover", className)} {...props}>
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
};
