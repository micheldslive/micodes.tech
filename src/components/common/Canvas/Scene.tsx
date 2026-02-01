/* eslint-disable react/no-unknown-property */
'use client';

import { Environment } from '@react-three/drei';
import { useTheme, UseThemeProps } from 'next-themes';

import { SCENE_THEMES } from '@/utils/constants';

import { Particles } from './Particles';
import { SceneLighting } from './SceneLighting';

export const Scene = () => {
  const { theme } = useTheme();
  const scene = SCENE_THEMES[(theme as Required<UseThemeProps>['systemTheme']) ?? 'dark'];

  return (
    <>
      <color attach="background" args={[scene.background]} />
      <fog attach="fog" args={[scene.fog, 8, 25]} />
      <SceneLighting mainColor={scene.main} />
      <Environment preset={scene.preset} />
      <Particles color={scene.main} />
    </>
  );
};
