import { TargetProps } from '@/types';

export const LIGHT_COLOR = '#e8e8ff';
export const PARTICLE_COUNT_GOAL = 80;
export const LETTER_SCALE = 0.9;

export const SCENE_THEMES = {
  dark: {
    background: '#2b2b33',
    fog: '#2b2b33',
    main: '#8288a0',
    preset: 'night',
  },
  light: {
    background: '#f8f9ff',
    fog: '#f8f9ff',
    main: '#f0e4ff',
    preset: 'warehouse',
  },
} as const;

// ================== M for MD (far left) ==================
export const LETTER_M_LEFT_POSITIONS: TargetProps[] = [
  // left vertical
  [-9, 2, 0],
  [-9, 1, 0],
  [-9, 0, 0],
  [-9, -1, 0],
  [-9, -2, 0],
  // left diagonal
  [-8.5, 1.5, 0],
  [-8, 1, 0],
  [-7.5, 0.5, 0],
  // middle
  [-7, 0, 0],
  // right diagonal
  [-6.5, 0.5, 0],
  [-6, 1, 0],
  [-5.5, 1.5, 0],
  // right vertical
  [-5, 2, 0],
  [-5, 1, 0],
  [-5, 0, 0],
  [-5, -1, 0],
  [-5, -2, 0],
];

// ================== D for MD (left, next to M) ==================
export const LETTER_D_POSITIONS: TargetProps[] = [
  // vertical
  [-3, 2, 0],
  [-3, 1, 0],
  [-3, 0, 0],
  [-3, -1, 0],
  [-3, -2, 0],
  // top curve
  [-2.5, 2, 0],
  [-2, 1.8, 0],
  [-1.5, 1.5, 0],
  // middle curve
  [-1, 1, 0],
  [-0.8, 0.5, 0],
  [-0.8, 0, 0],
  [-0.8, -0.5, 0],
  [-1, -1, 0],
  // bottom curve
  [-1.5, -1.5, 0],
  [-2, -1.8, 0],
  [-2.5, -2, 0],
];

// ================== M for MC (left, before C) ==================
export const LETTER_M_RIGHT_POSITIONS: TargetProps[] = [
  // left vertical
  [1, 2, 0],
  [1, 1, 0],
  [1, 0, 0],
  [1, -1, 0],
  [1, -2, 0],
  // left diagonal
  [1.5, 1.5, 0],
  [2, 1, 0],
  [2.5, 0.5, 0],
  // middle
  [3, 0, 0],
  // right diagonal
  [3.5, 0.5, 0],
  [4, 1, 0],
  [4.5, 1.5, 0],
  // right vertical
  [5, 2, 0],
  [5, 1, 0],
  [5, 0, 0],
  [5, -1, 0],
  [5, -2, 0],
];

// ================== C for MC (right of M, opening left) ==================
export const LETTER_C_RIGHT_POSITIONS: TargetProps[] = [
  // top curve
  [7, 1.8, 0],
  [7.5, 2, 0],
  [8, 2, 0],
  [8.5, 1.8, 0],
  // left side (open side - opens left)
  [6.5, 1.5, 0],
  [6.2, 1, 0],
  [6.2, 0.5, 0],
  [6.2, 0, 0],
  [6.2, -0.5, 0],
  [6.2, -1, 0],
  [6.5, -1.5, 0],
  // bottom curve
  [7, -1.8, 0],
  [7.5, -2, 0],
  [8, -2, 0],
  [8.5, -1.8, 0],
];

// ================== H (correct position - kept) ==================
export const LETTER_H_POSITIONS: TargetProps[] = [
  [-7, 2, 0],
  [-7, 1, 0],
  [-7, 0, 0],
  [-7, -1, 0],
  [-7, -2, 0],
  [-6, 0, 0],
  [-5, 0, 0],
  [-4, 2, 0],
  [-4, 1, 0],
  [-4, 0, 0],
  [-4, -1, 0],
  [-4, -2, 0],
];

// ================== W (classic format fixed) ==================
export const LETTER_W_POSITIONS: TargetProps[] = [
  // first leg (left) - going down
  [-7, 2, 0],
  [-6.8, 1, 0],
  [-6.6, 0, 0],
  [-6.4, -1, 0],
  [-6.2, -2, 0],
  // first rise (to center V)
  [-5.8, -1, 0],
  [-5.5, 0, 0],
  // center peak (inverted V)
  [-5, 0.5, 0],
  // second descent
  [-4.5, 0, 0],
  [-4.2, -1, 0],
  // second leg (right) - going up
  [-3.8, -2, 0],
  [-3.6, -1, 0],
  [-3.4, 0, 0],
  [-3.2, 1, 0],
  [-3, 2, 0],
];

// ================== A (point facing up) ==================
export const LETTER_A_POSITIONS: TargetProps[] = [
  // top point
  [-5.5, 2, 0],
  // left diagonal (going down)
  [-6, 1, 0],
  [-6.5, 0, 0],
  [-7, -1, 0],
  [-7.5, -2, 0],
  // right diagonal (going down)
  [-5, 1, 0],
  [-4.5, 0, 0],
  [-4, -1, 0],
  [-3.5, -2, 0],
  // middle horizontal bar
  [-6.5, -0.5, 0],
  [-6, -0.5, 0],
  [-5.5, -0.5, 0],
  [-5, -0.5, 0],
  [-4.5, -0.5, 0],
];

// ================== E (new letter - left position) ==================
export const LETTER_E_POSITIONS: TargetProps[] = [
  // vertical (left side)
  [-7, 2, 0],
  [-7, 1, 0],
  [-7, 0, 0],
  [-7, -1, 0],
  [-7, -2, 0],
  // top line
  [-6, 2, 0],
  [-5, 2, 0],
  [-4, 2, 0],
  // middle line
  [-6, 0, 0],
  [-5, 0, 0],
  // bottom line
  [-6, -2, 0],
  [-5, -2, 0],
  [-4, -2, 0],
];

export const COMBINATIONS = {
  MD: [LETTER_M_LEFT_POSITIONS, LETTER_D_POSITIONS],
  MC: [LETTER_M_RIGHT_POSITIONS, LETTER_C_RIGHT_POSITIONS],
  HM: [LETTER_H_POSITIONS],
  WK: [LETTER_W_POSITIONS],
  AB: [LETTER_A_POSITIONS],
  CT: [LETTER_E_POSITIONS],
} as const;
