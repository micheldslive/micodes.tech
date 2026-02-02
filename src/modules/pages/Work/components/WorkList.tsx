'use client';

import { useTranslation } from 'react-i18next';

import { Typography } from '@/components/ui';
import { For } from '@/components/utils';
import { type WorkItemProps } from '@/types';

import { WorkListItem } from './WorkListItem';

export const WorkList = () => {
  const { t } = useTranslation();
  const title = t('work.title');
  const works = t('work.items', { returnObjects: true }) as WorkItemProps[];
  return (
    <div className="flex w-full flex-col px-6 md:w-1/2 md:pr-15 lg:pt-0 lg:pr-[clamp(50px,15vw,240px)]">
      <div>
        <div className="flex items-center justify-between pb-4">
          <Typography
            as="h2"
            filling="inline"
            variation="random"
            color="secondary"
            className="text-6xl uppercase"
          >
            {title}
          </Typography>
          <Typography as="h5" color="secondary" weight="bold" className="text-3xl">
            {works.length}
          </Typography>
        </div>
        <hr className="border-t-2 border-slate-500 dark:border-slate-50" />
      </div>

      <div className="scrollbar-hide h-full overflow-y-auto [&::-webkit-scrollbar]:hidden">
        <For each={works}>{(work, index) => <WorkListItem key={index} work={work} />}</For>
      </div>
    </div>
  );
};
