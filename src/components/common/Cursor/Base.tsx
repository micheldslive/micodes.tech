'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

export const Base = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (event: MouseEvent) =>
      setPosition({
        x: event.pageX - 10,
        y: event.pageY - 10,
      });

    const handleOver = (event: MouseEvent) =>
      setIsHovering(!!(event.target as HTMLElement).closest('.cursor-hover'));

    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseover', handleOver);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseover', handleOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={cn(
        'pointer-events-none fixed z-100 h-5 w-5 scale-100 rounded-full bg-slate-500',
        'mix-blend-difference transition-transform duration-150 ease-in-out dark:bg-slate-50',
        isHovering && 'scale-[2.5]',
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};
