'use client';

import { Provider as TooltipProvider } from '@radix-ui/react-tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createInstance, Resource } from 'i18next';
import { ThemeProvider } from 'next-themes';
import { useState, type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { Canvas, Preloader } from '@/components/common';
import { KBarProvider, LoaderProvider, TransitionProvider } from '@/providers';

import initTranslations from '../i18n';

type ProvidersProps = {
  children: ReactNode;
  locale: string;
  namespaces: string[];
  resources: Resource;
};

export const Providers = ({ children, locale, namespaces, resources }: ProvidersProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
          forcedTheme={undefined}
        >
          <LoaderProvider>
            <TooltipProvider>
              <KBarProvider>
                <Preloader />
                <TransitionProvider>{children}</TransitionProvider>
              </KBarProvider>
            </TooltipProvider>
            <Canvas />
          </LoaderProvider>
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
};
