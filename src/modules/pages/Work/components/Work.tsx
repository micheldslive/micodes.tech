'use client';

import { Base } from '@/components/common';

import { WorkList } from './WorkList';
import { WorkPreview } from './WorkPreview';

export const Work = () => (
  <Base>
    <WorkPreview />
    <WorkList />
  </Base>
);
