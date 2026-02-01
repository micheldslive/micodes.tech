'use client';

import { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';

import { Hamburger as HamburgerUI } from '@/components/ui';
import { UseDisclosureReturnProps } from '@/hooks';
import { useMicodes } from '@/stores';

export type HamburgerProps = Partial<UseDisclosureReturnProps> &
  Pick<ComponentProps<'button'>, 'className'>;

export const Hamburger = () => {
  const { t } = useTranslation();
  const { isOpen, onToggle } = useMicodes();

  return <HamburgerUI isOpen={isOpen} onToggle={onToggle} label={t('header.hamburger.label')} />;
};
