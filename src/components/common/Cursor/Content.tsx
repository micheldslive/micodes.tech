'use client';

import { useMediaQuery } from '@/hooks';

import { Base } from './Base';

export const Content = () => {
  const isMobile = useMediaQuery('(max-width: 62rem)');

  if (isMobile) return null;

  return <Base />;
};
