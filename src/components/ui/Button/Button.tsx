import { Slot } from '@radix-ui/react-slot';
import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import { buttonVariants, ButtonVariants } from '@/styles/theme';

import { Tooltip } from '../Tooltip';

export type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    asChild?: boolean;
  };

export const Base = ({ className, variant, size, asChild = false, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={buttonVariants({ variant, size, className })} {...props} />;
};

export type ButtonIconProps = ButtonProps & Pick<ComponentProps<'option'>, 'label'>;

export const Icon = ({ label, children, className, ...props }: ButtonIconProps) => (
  <Tooltip.Root>
    <Tooltip.Trigger asChild>
      {children && (
        <Base
          variant="transparent"
          size="icon"
          className={cn('cursor-hover', className)}
          {...props}
        >
          {children}
          <span className="sr-only">{label}</span>
        </Base>
      )}
    </Tooltip.Trigger>
    {label && (
      <Tooltip.Content side={'bottom'} sideOffset={4}>
        <span>{label}</span>
      </Tooltip.Content>
    )}
  </Tooltip.Root>
);

export const Button = Object.assign(Base, {
  Icon,
});
