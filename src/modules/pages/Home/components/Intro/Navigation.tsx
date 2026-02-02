'use client';

import { useTranslation } from 'react-i18next';

import { Link, Typography } from '@/components/ui';
import { For } from '@/components/utils';
import { NavigationProps } from '@/types';

export const Navigation = () => {
  const { t } = useTranslation();
  const navigation = t('intro.navigation', { returnObjects: true }) as NavigationProps[];
  return (
    <ul className="flex justify-center gap-4">
      <For each={navigation}>
        {(props, index) => (
          <Typography
            key={index}
            as="li"
            filling="inline"
            variation="random"
            weight="normal"
            className="text-base text-slate-500 dark:text-slate-50"
          >
            <Link.Underline {...props} />
          </Typography>
        )}
      </For>
    </ul>
  );
};
