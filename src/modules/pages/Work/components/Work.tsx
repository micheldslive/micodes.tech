'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Base } from '@/components/common';
import { WorkItemProps } from '@/types';

import { WorkList } from './WorkList';
import { WorkPreview } from './WorkPreview';

export const Work = () => {
  const { t } = useTranslation();
  const works = t('page.work.items', { returnObjects: true }) as WorkItemProps[];

  useEffect(() => {
    works.forEach((work) => {
      const img = new Image();
      img.src = work.image;
    });
  }, [works]);

  return (
    <Base>
      <WorkPreview />
      <WorkList />
    </Base>
  );
};
