'use client';

import { AnimatePresence, stagger, useAnimate, usePresence } from 'framer-motion';
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useContext, useEffect, useRef } from 'react';

// FrozenRoute keeps the previous route content frozen while it animates out
function FrozenRoute({ children }: Readonly<PropsWithChildren>) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{children}</>;
  }

  return <LayoutRouterContext.Provider value={frozen}>{children}</LayoutRouterContext.Provider>;
}

function TransitionWrapper({ children }: Readonly<PropsWithChildren>) {
  const [scope, animate] = useAnimate();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    const runAnimation = async () => {
      if (isPresent) {
        // Enter animation - set hidden first, then animate to visible
        await animate('.animate-item', { y: -50, opacity: 0 }, { duration: 0 });
        await animate(
          '.animate-item',
          { y: 0, opacity: 1 },
          {
            duration: 0.5,
            type: 'spring',
            stiffness: 300,
            damping: 24,
            delay: stagger(0.1),
          },
        );
      } else {
        // Exit animation - animate to hidden, then allow removal
        await animate(
          '.animate-item',
          { y: -50, opacity: 0 },
          { duration: 0.2, delay: stagger(0.05) },
        );
        safeToRemove();
      }
    };

    runAnimation();
  }, [isPresent, animate, safeToRemove]);

  return (
    <div ref={scope} className="h-full w-full">
      <FrozenRoute>{children}</FrozenRoute>
    </div>
  );
}

export function TransitionProvider({ children }: Readonly<PropsWithChildren>) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <TransitionWrapper key={pathname}>{children}</TransitionWrapper>
    </AnimatePresence>
  );
}
