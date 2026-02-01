'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SlideFadeIn } from '@/components/transitions';
import { For } from '@/components/utils';
import { useMenuStore } from '@/stores';
import { WorkItemProps } from '@/types';

import { WorkItem } from './WorkItem';

export const Work = () => {
  const [isHovered, setIsHovered] = useState('');
  const { isOpen } = useMenuStore();
  const { t } = useTranslation();

  const items = t('work.items', { returnObjects: true }) as WorkItemProps[];

  return (
    <SlideFadeIn
      delay={1}
      className="flex h-full max-h-[calc(100vh-164px)] overflow-y-auto pt-40"
      show={!isOpen}
    >
      <For each={items}>
        {(work, index) => (
          <WorkItem
            key={index}
            work={work}
            onHover={setIsHovered}
            isHovered={work.title === isHovered}
          />
        )}
      </For>
    </SlideFadeIn>
  );
};
