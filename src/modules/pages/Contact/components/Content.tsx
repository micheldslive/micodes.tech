'use client';

import { useTranslation } from 'react-i18next';

import { Heading, Social } from '@/components/common';
import { Link, Typography } from '@/components/ui';
import { SelectOption } from '@/types';

import { Title } from './Title';

export const Content = () => {
  const { t } = useTranslation();
  const title = t('page.contact.title');
  const email = t('page.contact.email', { returnObjects: true }) as SelectOption;
  const social = t('page.contact.social');
  return (
    <div className="relative container mx-auto flex w-full max-w-7xl flex-col px-6 lg:pt-0">
      <Heading>{title}</Heading>
      <div className="flex h-full flex-col justify-between overflow-y-auto pt-4 md:flex-row">
        <Title label={email.label}>
          <Typography
            as="span"
            filling="inline"
            variation="random"
            weight="normal"
            color="secondary"
            className="text-xl"
          >
            <Link.Underline href={`mailto:${email.value}`}>
              {'↗ '}
              {email.value}
            </Link.Underline>
          </Typography>
        </Title>
        <Title label={social}>
          <Social className="flex-col gap-0 p-0" />
        </Title>
      </div>
    </div>
  );
};
