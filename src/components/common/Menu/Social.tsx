'use client';

import { useTranslation } from 'react-i18next';

import { Link, Typography } from '@/components/ui';
import { For } from '@/components/utils';
import { NavigationProps } from '@/types';

export const Social = () => {
  const { t } = useTranslation();
  const social = t('menu.social', { returnObjects: true }) as NavigationProps[];
  return (
    <ul className="flex gap-8 pt-5">
      <For each={social}>
        {(props, index) => (
          <Typography
            key={index}
            as="li"
            filling="inline"
            variation="random"
            weight="normal"
            className="w-fit text-xl text-slate-500 duration-400 md:text-xl dark:text-slate-50"
          >
            <Link.Underline {...props} />
          </Typography>
        )}
      </For>
    </ul>
  );
};
