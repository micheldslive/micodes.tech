'use client';

import { Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from '@/components/ui';

const className = 'text-slate-500 dark:text-slate-50';

const icons: Record<string, ReactNode> = {
  light: <Sun size={20} className={className} />,
  dark: <Moon size={20} className={className} />,
  system: <Laptop size={20} className={className} />,
};

const labels: Record<string, string> = {
  light: 'header.theme.light',
  dark: 'header.theme.dark',
  system: 'header.theme.system',
};

export const Theme = () => {
  const { theme, setTheme, themes } = useTheme();
  const { t } = useTranslation();

  const options = [
    ...themes.map((theme) => ({
      value: theme,
      icon: icons[theme],
      label: t(String(labels[theme])),
    })),
  ];

  return (
    <Select
      handleChange={setTheme}
      value={theme}
      options={options}
      label={t('header.theme.label')}
    />
  );
};
