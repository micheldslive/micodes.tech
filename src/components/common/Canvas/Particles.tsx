'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

import { For } from '@/components/utils';
import { TargetInitials, TargetProps } from '@/types';
import { COMBINATIONS, PARTICLE_COUNT_GOAL } from '@/utils/constants';
import { padToLength, scalePositions } from '@/utils/functions';

import { Particle } from './Particle';
import { ParticleColorProps } from './types';

export const Particles = ({ color }: ParticleColorProps) => {
  const { particles, targets } = useMemo(() => {
    const processedTargets = Object.entries(COMBINATIONS).reduce<
      Record<TargetInitials, TargetProps[]>
    >(
      (acc, [key, letterArrays]) => {
        const combined = letterArrays.flat();
        const scaled = scalePositions(combined);
        acc[key as TargetInitials] = padToLength(scaled, PARTICLE_COUNT_GOAL);
        return acc;
      },
      {} as Record<TargetInitials, TargetProps[]>,
    );

    const particleData = Array.from({ length: PARTICLE_COUNT_GOAL }, () => ({
      position: [
        THREE.MathUtils.randFloatSpread(16),
        THREE.MathUtils.randFloatSpread(9),
        THREE.MathUtils.randFloatSpread(5) - 1,
      ] as [number, number, number],
      baseScale: 0.35 + THREE.MathUtils.randFloat(0, 0.25),
      floatSpeed: 0.3 + THREE.MathUtils.randFloat(0, 0.4),
      distortAmount: 0.25 + THREE.MathUtils.randFloat(0, 0.2),
      timeOffset: THREE.MathUtils.randFloat(0, Math.PI * 2),
    }));

    return { particles: particleData, targets: processedTargets };
  }, []);

  return (
    <For each={particles}>
      {(particle, index) => (
        <Particle
          key={index}
          targets={Object.entries(targets).reduce<Record<TargetInitials, TargetProps>>(
            (acc, [key, targetArray]) => {
              acc[key as TargetInitials] = targetArray[index];
              return acc;
            },
            {} as Record<TargetInitials, TargetProps>,
          )}
          initialPosition={particle.position}
          baseScale={particle.baseScale}
          floatSpeed={particle.floatSpeed}
          distortAmount={particle.distortAmount}
          timeOffset={particle.timeOffset}
          color={color}
        />
      )}
    </For>
  );
};
