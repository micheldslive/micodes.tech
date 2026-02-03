'use client';

import { Canvas as ThreeCanvas } from '@react-three/fiber';
import { motion } from 'framer-motion';

import { useLoader } from '@/providers';

import { CanvasLoader } from './CanvasLoader';
import { CANVAS_CONFIG } from './config';
import { Scene } from './Scene';

const Canvas = () => {
  const { isLoading } = useLoader();

  return (
    <motion.div
      className="absolute inset-0 z-0 bg-slate-100 dark:bg-slate-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoading ? 0 : 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <ThreeCanvas {...CANVAS_CONFIG}>
        <CanvasLoader />
        <Scene />
      </ThreeCanvas>
    </motion.div>
  );
};

export default Canvas;
