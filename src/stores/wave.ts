'use client';

import { createStore, useStore } from 'zustand';

import { TargetInitials } from '@/types';

interface WaveState {
  current: TargetInitials | 'none';
}

interface WaveActions {
  setWave: (wave: WaveState['current']) => void;
}

type WaveStore = WaveState & WaveActions;

const waveStore = createStore<WaveStore>()((set) => ({
  current: 'none',
  setWave: (current) => set(() => ({ current })),
}));

export const useWaveStore = () => useStore(waveStore);

export type { WaveState };
