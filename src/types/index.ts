import { Url } from 'next/dist/shared/lib/router/router';
import { Dispatch, SetStateAction } from 'react';

import { COMBINATIONS } from '@/utils/constants';
import { getDeviceType } from '@/utils/functions';

export type NavigationProps = {
  children: string;
  href: Url;
};

export type SocialProps = {
  github?: string;
  web?: string;
};

export type IconNameProps = {
  iconName?: string;
};

export type WorkItemProps = {
  title: string;
  image: string;
  description?: string;
  links: SocialProps;
  isNew?: boolean;
};

export interface WorkProps {
  work: WorkItemProps;
  onHover: Dispatch<SetStateAction<string>>;
  isHovered: boolean;
}

export type TargetInitials = keyof typeof COMBINATIONS;

export type TargetProps = [number, number, number];

export type CommandButtonProps = {
  type?: ReturnType<typeof getDeviceType>;
};
