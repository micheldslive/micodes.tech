'use client';

import { useTranslation } from 'react-i18next';

import { Heading, Social } from '@/components/common';
import { Link, Typography } from '@/components/ui';
import { Wrapper } from '@/modules/components';
import { SelectOption } from '@/types';

import { Title } from './Title';

export const Content = () => {
  const { t } = useTranslation();
  const title = t('page.contact.title');
  const email = t('page.contact.email', { returnObjects: true }) as SelectOption;
  const social = t('page.contact.social');
  return (
    <Wrapper>
      <Heading>{title}</Heading>
      <div className="flex h-full flex-col justify-baseline overflow-y-auto pt-4 md:flex-row md:justify-between">
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
    </Wrapper>
  );
};
