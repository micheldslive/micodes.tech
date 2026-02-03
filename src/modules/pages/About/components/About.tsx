'use client';

import { SlideFadeIn } from '@/components/transitions';
import { useMenuStore } from '@/stores';

import { Content } from './Content';

export const About = () => {
  const { isOpen } = useMenuStore();
  return (
    <SlideFadeIn
      delay={1}
      className="mt-[clamp(200px,25vh,300px)] flex h-[calc(100vh-clamp(200px,25vh,300px))] w-full flex-col md:flex-row lg:pt-0"
      show={!isOpen}
    >
      <Content />
    </SlideFadeIn>
  );
};
