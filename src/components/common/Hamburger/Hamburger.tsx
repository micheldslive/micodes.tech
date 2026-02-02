'use client';

import { ComponentProps } from 'react';
import { useTranslation } from 'react-i18next';

import { Hamburger as HamburgerUI } from '@/components/ui';
import { UseDisclosureReturnProps } from '@/hooks';
import { useMenuStore } from '@/stores';

export type HamburgerProps = Partial<UseDisclosureReturnProps> &
  Pick<ComponentProps<'button'>, 'className'>;

export const Hamburger = () => {
  const { t } = useTranslation();
  const { isOpen, toggle } = useMenuStore();
  const label = isOpen ? t('header.hamburger.close') : t('header.hamburger.open');

  return <HamburgerUI isOpen={isOpen} onToggle={toggle} label={label} />;
};
