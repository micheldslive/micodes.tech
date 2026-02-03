'use client';

import { useTranslation } from 'react-i18next';

import { Heading, Badge, BadgeProps } from '@/components/common';

import { Career } from './Career';
import { Me } from './Me';

export const Content = () => {
  const { t } = useTranslation();
  const title = t('page.about.title');
  const badge = t('page.about.badge', { returnObjects: true }) as BadgeProps;
  return (
    <div className="relative container mx-auto flex w-full max-w-7xl flex-col px-6 lg:pt-0">
      <Heading>{title}</Heading>
      <Badge {...badge} className="absolute -top-9 -right-2" />
      <div className="scrollbar-hide h-full overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <Me />
        <Career />
      </div>
    </div>
  );
};
