'use client';

import { useProgress } from '@react-three/drei';
import { useEffect } from 'react';

import { useLoader } from '@/providers';

export const CanvasLoader = () => {
  const { active, progress } = useProgress();
  const { setIsLoading } = useLoader();

  useEffect(() => {
    if (progress === 100 || !active) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, active, setIsLoading]);

  return null;
};
