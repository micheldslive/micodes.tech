'use client';

import { motion } from 'framer-motion';
import { ComponentProps } from 'react';

import { Typography } from '@/components/ui';
import { useWave } from '@/hooks';
import { WaveState } from '@/stores';

type WaveProps = {
  name?: string;
  wave: WaveState['current'];
} & Pick<ComponentProps<'option'>, 'label'>;

export function Wave({ label, name, wave }: WaveProps) {
  const { backgroundPositionX, startWave, stopWave } = useWave();
  return (
    <Typography
      as="h3"
      filling="outline"
      variation="normal"
      className="text-2xl leading-6 tracking-[0.05rem] md:text-7xl md:leading-12"
    >
      {label}{' '}
      <span className="relative">
        <motion.span
          aria-hidden
          style={{ backgroundPositionX }}
          className="absolute bottom-0 left-0 z-1 h-3/7 w-full bg-[url('/images/wave.svg')] bg-left bg-repeat-x opacity-60 md:h-3/8 dark:bg-[url('/images/wave-light.svg')] dark:opacity-40"
        />
        <Typography
          as="span"
          filling="inline"
          variation="random"
          className="cursor-hover relative z-2 inline-block cursor-help"
          onMouseEnter={() => startWave(wave)}
          onMouseLeave={stopWave}
        >
          {name}
        </Typography>
      </span>
    </Typography>
  );
}
