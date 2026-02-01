'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

const className = 'text-slate-500 dark:text-slate-50';

const icons: Record<string, ReactNode> = {
  dark: <Sun size={20} className={className} />,
  light: <Moon size={20} className={className} />,
};

export const Theme = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();

  const onToggle = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Button.Icon
      onClick={onToggle}
      className={cn(
        'group relative h-9 w-9 cursor-pointer border-0 bg-transparent p-0 transition-all duration-300 ease-[cubic-bezier(.61,.01,.42,1)] hover:scale-110 hover:delay-100 focus:outline-none',
        className,
      )}
      label={t('header.theme.label')}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme && icons[theme]}
        </motion.div>
      </AnimatePresence>
    </Button.Icon>
  );
};
