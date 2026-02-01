'use client';

import { ComponentProps } from 'react';

import { Button, ButtonIconProps } from '@/components/ui';
import { UseDisclosureReturnProps } from '@/hooks';
import { cn } from '@/lib/utils';

import { Atoms } from './Atoms';
import { Dots } from './Dots';

export type HamburgerProps = Partial<UseDisclosureReturnProps> &
  Pick<ComponentProps<'button'>, 'className'> &
  Pick<ButtonIconProps, 'label'>;

export const Hamburger = ({ onToggle, isOpen, className, label }: HamburgerProps) => (
  <Button.Icon
    onClick={onToggle}
    className={cn(
      'group relative h-9 w-9 cursor-pointer border-0 bg-transparent p-0 transition-all duration-300 ease-[cubic-bezier(.61,.01,.42,1)] hover:scale-110 hover:delay-100 focus:outline-none',
      className,
    )}
    data-open={isOpen}
    label={label}
  >
    <Dots />
    <Atoms />
  </Button.Icon>
);
