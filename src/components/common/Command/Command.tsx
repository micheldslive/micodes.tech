'use client';

import { Clicker } from '@/components/ui';
import { RiCommandFill } from 'react-icons/ri';
import { useKBar } from 'kbar';
import { useTranslation } from 'react-i18next';

export const Command = () => {
  const { query } = useKBar();
  const { t } = useTranslation();

  return (
    <Clicker onClick={query.toggle} label={t('header.command.label')}>
      <RiCommandFill className="size-6" />
    </Clicker>
  );
};
