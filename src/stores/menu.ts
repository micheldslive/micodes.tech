'use client';

import { createStore, useStore } from 'zustand';

interface MenuState {
  isOpen: boolean;
}

interface MenuActions {
  toggle: () => void;
  close: () => void;
}

type MenuStore = MenuState & MenuActions;

const menuStore = createStore<MenuStore>()((set) => ({
  isOpen: false,
  toggle: () => set(({ isOpen }) => ({ isOpen: !isOpen })),
  close: () => set(() => ({ isOpen: false })),
}));

export const useMenuStore = () => useStore(menuStore);
