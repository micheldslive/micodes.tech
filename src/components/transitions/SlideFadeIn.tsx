'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ComponentProps } from 'react';

import { EASE_TYPES, EaseType } from '@/utils/constants';

export type SlideFadeInDirection = 'up' | 'right' | 'down' | 'left';

export type SlideFadeInAnimationProps = {
  show?: boolean;
  slide?: number;
  slideTo?: number;
  easeType?: EaseType;
  direction?: SlideFadeInDirection;
  delay?: number;
  opacityFrom?: number;
  opacityTo?: number;
  opacityDuration?: number;
  xDuration?: number;
  yDuration?: number;
};

export type SlideFadeInProps = SlideFadeInAnimationProps &
  Pick<ComponentProps<'div'>, 'children' | 'className'>;

export const SlideFadeIn = (props: SlideFadeInProps) => {
  const {
    show = true,
    slide = 50,
    direction = 'down',
    easeType = 'smooth',
    delay = 0,
    opacityFrom = 0,
    opacityTo = 1,
    opacityDuration = 1,
    xDuration = 1,
    yDuration = 1,
    slideTo = 0,
    ...rest
  } = props;

  const enterTransition = {
    opacity: { delay, duration: opacityDuration },
    x: { delay, duration: xDuration, ease: EASE_TYPES[easeType] },
    y: { delay, duration: yDuration, ease: EASE_TYPES[easeType] },
  };

  const exitTransition = {
    opacity: { delay: 0, duration: opacityDuration },
    x: { delay: 0, duration: xDuration, ease: EASE_TYPES[easeType] },
    y: { delay: 0, duration: yDuration, ease: EASE_TYPES[easeType] },
  };

  const animations = {
    up: {
      initial: { y: slide, opacity: opacityFrom },
      animate: { y: slideTo, opacity: opacityTo, transition: enterTransition },
      exit: { y: slide, opacity: opacityFrom, transition: exitTransition },
    },
    right: {
      initial: { x: -slide, opacity: opacityFrom },
      animate: { x: slideTo, opacity: opacityTo, transition: enterTransition },
      exit: { x: -slide, opacity: opacityFrom, transition: exitTransition },
    },
    down: {
      initial: { y: -slide, opacity: opacityFrom },
      animate: { y: slideTo, opacity: opacityTo, transition: enterTransition },
      exit: { y: -slide, opacity: opacityFrom, transition: exitTransition },
    },
    left: {
      initial: { x: slide, opacity: opacityFrom },
      animate: { x: slideTo, opacity: opacityTo, transition: enterTransition },
      exit: { x: slide, opacity: opacityFrom, transition: exitTransition },
    },
  } as const;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={animations[direction]}
          initial="initial"
          animate="animate"
          exit="exit"
          {...rest}
        />
      )}
    </AnimatePresence>
  );
};
