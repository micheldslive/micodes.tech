'use client';

import { Canvas as ThreeCanvas } from '@react-three/fiber';

import { CANVAS_CONFIG } from './config';
import { Scene } from './Scene';

const Canvas = () => (
  <div className="absolute inset-0 z-0">
    <ThreeCanvas {...CANVAS_CONFIG}>
      <Scene />
    </ThreeCanvas>
  </div>
);

export default Canvas;
