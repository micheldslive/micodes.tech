'use client';

import { ComponentProps } from 'react';

import { For } from '@/components/utils';
import { atomsVariants } from '@/styles/theme';
import { hamburgerAtoms } from '@/utils/constants';

type DotsProps = ComponentProps<'div'>;

export const Atoms = ({ className, ...props }: DotsProps) => (
  <For each={hamburgerAtoms}>
    {(atom, index) => <div key={index} className={atomsVariants({ atom, className })} {...props} />}
  </For>
);
