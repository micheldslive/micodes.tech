'use client';

import LottieRender, { LottieComponentProps } from 'lottie-react';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { IconNameProps } from '@/types';
import { loadLottie } from '@/utils/functions';

type LottieProps = Pick<LottieComponentProps, 'lottieRef' | 'style' | 'className'> & IconNameProps;

export const Lottie = ({ iconName, lottieRef, style, className }: LottieProps) => {
  const [animationData, setAnimationData] = useState<unknown>(null);

  useEffect(() => {
    let mounted = true;
    const loadIcon = async () => {
      if (mounted) setAnimationData((await loadLottie(iconName)).default);
    };
    loadIcon();
    return () => {
      mounted = false;
    };
  }, [iconName]);

  if (!animationData) return null;

  return (
    <LottieRender
      lottieRef={lottieRef}
      style={style ?? { width: 24, height: 24 }}
      animationData={animationData}
      className={cn(
        'fill-slate-900 filter-none [&_*[stroke]]:stroke-slate-900 [&_*[stroke]]:dark:stroke-slate-50 [&_path]:fill-slate-900 [&_path]:dark:fill-slate-50',
        className,
      )}
      loop={false}
      autoplay={false}
    />
  );
};
