import { type ElementType, type ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import { TypographyVariants, typographyVariants } from '@/styles/theme';

type TypographyProps<T extends ElementType> = {
  as?: T;
} & TypographyVariants &
  Omit<ComponentProps<T>, 'as' | keyof TypographyVariants>;

export function Typography<T extends ElementType = 'span'>({
  as,
  className,
  filling,
  variation,
  weight,
  color,
  ...props
}: TypographyProps<T>) {
  const Component = (as || 'span') as 'span';

  return (
    <Component
      className={cn(typographyVariants({ filling, variation, weight, color }), className)}
      {...props}
    />
  );
}
