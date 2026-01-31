export const localesOptions = [{ value: 'en', label: 'English' }] as const;

export const locales = Array.from(localesOptions, (locale) => locale.value);
export type Locale = (typeof locales)[number];

import { Config } from 'next-i18n-router/dist/types';

export const i18nConfig: Config = {
  locales,
  defaultLocale: 'en',
};
