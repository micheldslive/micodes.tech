'use client';

import { Hamburger, Command, Theme } from '@/components/common';
import { Link } from '@/components/ui';

import { Logotype } from './Logotype';

export const Header = () => (
  <header className="fixed top-14 right-0 left-0 z-10 flex items-center justify-between px-6 sm:px-14 md:top-24 md:px-22">
    <Link href="/">
      <Logotype />
    </Link>
    <nav className="flex items-center gap-3 text-slate-400">
      <Command />
      <Theme />
      <Hamburger />
    </nav>
  </header>
);
