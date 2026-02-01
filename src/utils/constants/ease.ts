'use client';

import { cubicBezier } from 'framer-motion';

export const EASE_TYPES = {
  easeOut: [0, 0, 0.58, 1],
  'slow-down': cubicBezier(0, 0, 0, 1),
  smooth: cubicBezier(0.5, 0, 0, 1),
  overshoot: [0.33, 1, 0.68, 1],
  easeInOut: [0.645, 0.045, 0.355, 1],
  elastic: cubicBezier(0.34, 1.56, 0.64, 1),
  tilt: [0.03, 0.98, 0.52, 0.99],
} as const;

export type EaseType = keyof typeof EASE_TYPES;
