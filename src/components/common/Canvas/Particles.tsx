'use client';

import { useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';

import { For } from '@/components/utils';
import { TargetInitials, TargetProps } from '@/types';
import { COMBINATIONS, PARTICLE_COUNT_GOAL } from '@/utils/constants';
import { padToLength, scalePositions } from '@/utils/functions';

import { Particle } from './Particle';
import { ParticleColorProps } from './types';

const REFERENCE_ASPECT = 16 / 9;

export const Particles = ({ color }: ParticleColorProps) => {
  const { viewport } = useThree();

  const scaleFactor = useMemo(() => {
    const currentAspect = viewport.width / viewport.height;

    return Math.max(0.5, Math.min(1, currentAspect / REFERENCE_ASPECT));
  }, [viewport.width, viewport.height]);

  const { particles, targets } = useMemo(() => {
    const processedTargets = Object.entries(COMBINATIONS).reduce<
      Record<TargetInitials, TargetProps[]>
    >(
      (acc, [key, letterArrays]) => {
        const combined = letterArrays.flat();
        const scaled = scalePositions(combined);
        const responsiveScaled = scaled.map(([x, y, z]) => [x * scaleFactor, y, z] as TargetProps);
        acc[key as TargetInitials] = padToLength(responsiveScaled, PARTICLE_COUNT_GOAL);
        return acc;
      },
      {} as Record<TargetInitials, TargetProps[]>,
    );

    const particleData = Array.from({ length: PARTICLE_COUNT_GOAL }, () => ({
      position: [
        THREE.MathUtils.randFloatSpread(16 * scaleFactor),
        THREE.MathUtils.randFloatSpread(9),
        THREE.MathUtils.randFloatSpread(5) - 1,
      ] as [number, number, number],
      baseScale: 0.35 + THREE.MathUtils.randFloat(0, 0.25),
      floatSpeed: 0.3 + THREE.MathUtils.randFloat(0, 0.4),
      distortAmount: 0.25 + THREE.MathUtils.randFloat(0, 0.2),
      timeOffset: THREE.MathUtils.randFloat(0, Math.PI * 2),
    }));

    return { particles: particleData, targets: processedTargets };
  }, [scaleFactor]);

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
          scaleFactor={scaleFactor}
          color={color}
        />
      )}
    </For>
  );
};
