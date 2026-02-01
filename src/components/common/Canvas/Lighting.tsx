/* eslint-disable react/no-unknown-property */
'use client';

import { useMemo } from 'react';
import * as THREE from 'three';

import { LIGHT_COLOR } from '@/utils/constants';

type LightingProps = {
  mainColor: string;
};

export const Lighting = ({ mainColor }: LightingProps) => {
  const lightsData = useMemo(() => {
    const lights: {
      position: readonly [number, number, number];
      intensity: number;
    }[] = [];

    for (let i = 0; i < 6; i++) {
      lights.push({
        position: [
          THREE.MathUtils.randFloatSpread(14),
          THREE.MathUtils.randFloatSpread(8),
          1 + THREE.MathUtils.randFloat(0, 2),
        ],
        intensity: 0.3 + THREE.MathUtils.randFloat(0, 0.4),
      });
    }

    return lights;
  }, []);

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#f0f0ff" />
      <directionalLight position={[-10, -5, -5]} intensity={0.3} color={mainColor} />
      <spotLight position={[0, 15, 5]} angle={0.4} penumbra={1} intensity={0.6} color="#ffffff" />
      {lightsData.map((light, index) => (
        <pointLight
          key={index}
          position={light.position}
          intensity={light.intensity}
          color={LIGHT_COLOR}
          distance={8}
          decay={2}
        />
      ))}
    </>
  );
};
