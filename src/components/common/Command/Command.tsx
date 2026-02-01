'use client';

import { useKBar } from 'kbar';
import { useTranslation } from 'react-i18next';
import { RiCommandFill } from 'react-icons/ri';

import { Button } from '@/components/ui';

export const Command = () => {
  const { query } = useKBar();
  const { t } = useTranslation();

  return (
    <Button.Icon onClick={query.toggle} label={t('header.command.label')}>
      <RiCommandFill className="size-6" />
    </Button.Icon>
  );
};
