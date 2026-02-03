import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { PropsWithChildren } from 'react';

import { Cursor, Header, Menu } from '@/components/common';
import { Noise } from '@/components/ui';
import { i18nConfig } from '@/i18nConfig';

import initTranslations from '../i18n';

import { Providers } from './providers';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Micodes',
  description: 'Hello, its my personal portfolio',
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ['default'];

type RootProps = Readonly<
  PropsWithChildren & {
    params: Promise<{ locale: string }>;
  }
>;

export default async function Root({ children, params }: RootProps) {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <NextTopLoader color="#606887" showSpinner={false} />
        <main className="min-h-screen">
          <Providers namespaces={i18nNamespaces} locale={locale} resources={resources}>
            <Noise />
            <Cursor />
            <section className="relative z-1 min-h-screen w-full overflow-hidden">
              <Header />
              <div className="animate-item">
                <Menu />
              </div>
              <div className="animate-item">{children}</div>
            </section>
          </Providers>
        </main>
      </body>
    </html>
  );
}
