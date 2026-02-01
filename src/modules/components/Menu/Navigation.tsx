'use client';

import { useTranslation } from 'react-i18next';

import { Link, Typography } from '@/components/ui';
import { For } from '@/components/utils';
import { useWave } from '@/hooks';
import { cn } from '@/lib/utils';
import { useMenuStore } from '@/stores';
import { NavigationProps, TargetInitials } from '@/types';

type MenuNavegationProps = {
  wave: TargetInitials;
} & NavigationProps;

export const Navigation = () => {
  const { t } = useTranslation();
  const { startBullets, stopBullets } = useWave();
  const { close } = useMenuStore();
  const navigation = t('menu.navigation', { returnObjects: true }) as MenuNavegationProps[];
  return (
    <ol className="flex flex-col gap-4 [counter-reset:counter]">
      <For each={navigation}>
        {({ wave, ...props }, index) => (
          <Typography
            key={index}
            as="li"
            filling="inline"
            variation="random"
            weight="extrabold"
            onMouseEnter={() => startBullets(wave)}
            onMouseLeave={stopBullets}
            className={cn(
              'w-4/5 text-left text-6xl text-slate-500 uppercase [counter-increment:counter] md:text-8xl dark:text-slate-50',
            )}
          >
            <Link
              className="block duration-400 before:mr-2 before:font-[studiofeixen-writer,studiofeixen,Arial,Helvetica,sans-serif] before:text-[1rem] before:-tracking-widest before:content-['0'_counter(counter)] hover:[font-variation-settings:'wght'_800,'wdth'_100]"
              onClick={close}
              {...props}
            />
          </Typography>
        )}
      </For>
    </ol>
  );
};
