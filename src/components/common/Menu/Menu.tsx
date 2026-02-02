'use client';

import { SlideFadeIn } from '@/components/transitions';
import { cn } from '@/lib/utils';
import { useMenuStore } from '@/stores';

import { Navigation } from './Navigation';
import { Social } from './Social';

export const Menu = () => {
  const { isOpen } = useMenuStore();
  return (
    <div
      className={cn(
        'pointer-events-none fixed flex h-screen w-4/5 flex-col justify-center max-md:text-2xl',
        isOpen && 'pointer-events-auto',
      )}
    >
      <SlideFadeIn
        delay={1}
        className="relative pl-[clamp(20vw,30vw,30vw)] text-center"
        show={isOpen}
      >
        <Navigation />
        <Social />
      </SlideFadeIn>
    </div>
  );
};
