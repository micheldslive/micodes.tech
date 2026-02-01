/* eslint-disable react/no-unknown-property */

'use client';

import { MeshDistortMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

import { useWaveStore } from '@/stores';

import { ParticleProps } from './types';

export const Particle = ({
  targets,
  initialPosition,
  baseScale,
  floatSpeed,
  distortAmount,
  timeOffset,
  color,
}: ParticleProps) => {
  const { current: wave } = useWaveStore();
  const meshRef = useRef<THREE.Mesh | null>(null);

  const currentPos = useRef(new THREE.Vector3(...initialPosition));

  const velocity = useRef(
    new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(0.015),
      THREE.MathUtils.randFloatSpread(0.015),
      THREE.MathUtils.randFloatSpread(0.008),
    ),
  );

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    let target: THREE.Vector3;

    if (wave !== 'none') {
      target = new THREE.Vector3(...targets[wave]);
    } else {
      target = currentPos.current;

      const t = state.clock.elapsedTime + timeOffset;

      velocity.current.x += Math.sin(t * 0.5) * 0.0003;
      velocity.current.y += Math.cos(t * 0.4) * 0.0003;
      velocity.current.z += Math.sin(t * 0.3) * 0.0001;

      velocity.current.x += THREE.MathUtils.randFloatSpread(0.0008);
      velocity.current.y += THREE.MathUtils.randFloatSpread(0.0008);

      velocity.current.multiplyScalar(0.985);
      velocity.current.clampLength(0, 0.025);

      currentPos.current.add(velocity.current);

      if (Math.abs(currentPos.current.x) > 8) velocity.current.x *= -1;
      if (Math.abs(currentPos.current.y) > 4.5) velocity.current.y *= -1;
      if (Math.abs(currentPos.current.z) > 3) velocity.current.z *= -1;
    }

    mesh.position.lerp(target, wave === 'none' ? 0.015 : 0.06);

    mesh.rotation.x += delta * 0.08 * floatSpeed;
    mesh.rotation.y += delta * 0.12 * floatSpeed;

    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2 + timeOffset) * 0.05;
    mesh.scale.setScalar(baseScale * pulse);
  });

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <sphereGeometry args={[1, 48, 48]} />
      <MeshDistortMaterial
        color={color}
        roughness={0.5}
        metalness={0.9}
        envMapIntensity={1}
        distort={distortAmount}
        speed={1.5}
      />
    </mesh>
  );
};
