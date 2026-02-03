'use client';

import { ComponentProps } from 'react';

import { Typography } from '@/components/ui';

type TitleProps = Pick<ComponentProps<'option'>, 'children' | 'label'>;

export const Title = ({ children, label }: TitleProps) => (
  <div className="flex justify-center gap-6">
    <Typography
      as="h3"
      filling="inline"
      variation="random"
      weight="extrabold"
      color="secondary"
      className="text-xl"
    >
      {label}
    </Typography>

    {children}
  </div>
);
