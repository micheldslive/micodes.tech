'use client';

import { useTranslation } from 'react-i18next';
import Typewriter from 'typewriter-effect';

import { Wave } from '@/components/common';
import { SlideFadeIn } from '@/components/transitions';
import { Command, Typography } from '@/components/ui';
import { useMenuStore } from '@/stores';

import { Navigation } from './Navigation';

export const Intro = () => {
  const { t } = useTranslation();
  const { isOpen } = useMenuStore();
  return (
    <SlideFadeIn delay={1} className="relative flex flex-col" show={!isOpen}>
      <div className="relative flex min-h-screen flex-col justify-center max-md:text-2xl">
        <div className="relative text-center">
          <Wave label={t('intro.myself.label')} name={t('intro.myself.name')} wave="MD" />
          <Wave label={t('intro.callme.label')} name={t('intro.callme.name')} wave="MC" />
          <div className="mb-4">
            <Typography
              as="span"
              filling="inline"
              variation="random"
              weight="normal"
              className="text-base text-slate-500 md:text-2xl dark:text-slate-50"
            >
              <Typewriter
                options={{
                  strings: t('intro.typewriter', { returnObjects: true }) as string[],
                  autoStart: true,
                  deleteSpeed: 80,
                  delay: 60,
                  loop: true,
                }}
              />
            </Typography>
            <Command.Button />
          </div>
          <Navigation />
        </div>
      </div>
    </SlideFadeIn>
  );
};
