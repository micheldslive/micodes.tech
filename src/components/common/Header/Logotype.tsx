'use client';

import { SlideFadeIn } from '@/components/transitions';
import { Logo, Typography } from '@/components/ui';
import { useMenuStore } from '@/stores';

export const Logotype = () => {
  const { isOpen } = useMenuStore();
  return (
    <div className="flex items-center gap-5 text-slate-400">
      <Logo className="h-fit max-w-16 fill-slate-500 md:max-w-16 dark:fill-slate-50" />
      <SlideFadeIn delay={1} show={isOpen}>
        <Typography
          as="span"
          filling="inline"
          variation="random"
          weight="normal"
          className="hidden text-2xl text-slate-500 lowercase sm:block dark:text-slate-50!"
        >
          Micodes/Michel Domingos
        </Typography>
      </SlideFadeIn>
    </div>
  );
};
