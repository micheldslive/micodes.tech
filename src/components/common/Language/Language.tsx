'use client';

import { US, BR } from 'country-flag-icons/react/3x2';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { Switcher } from '@/components/ui';
import { i18nConfig } from '@/i18nConfig';

export const Language = () => {
  const { i18n, t } = useTranslation();
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = i18n.language;

  const options = [
    {
      value: t('header.language.options.en.value'),
      label: t('header.language.options.en.label'),
      icon: <US className="max-w-5" aria-label="United States" />,
    },
    {
      value: t('header.language.options.pt.value'),
      label: t('header.language.options.pt.label'),
      icon: <BR className="max-w-5" aria-label="Brazil" />,
    },
  ];

  const handleChange = (locale: string) => {
    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push('/' + locale + currentPathname);
    } else {
      router.push(
        currentPathname ? currentPathname.replace(`/${currentLocale}`, `/${locale}`) : '',
      );
    }

    router.refresh();
  };

  return (
    <Switcher
      handleChange={handleChange}
      value={currentLocale}
      options={options}
      label={t('header.language.title')}
    />
  );
};
