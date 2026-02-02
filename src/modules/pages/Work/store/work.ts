'use client';

import { createStore, useStore } from 'zustand';

interface WorkState {
  activeImage?: string;
}

interface WorkActions {
  setActiveImage: (image: WorkState['activeImage']) => void;
}

type WorkStore = WorkState & WorkActions;

const workStore = createStore<WorkStore>()((set) => ({
  activeImage: undefined,
  setActiveImage: (image) => set(() => ({ activeImage: image })),
}));

export const useWorkStore = () => useStore(workStore);
