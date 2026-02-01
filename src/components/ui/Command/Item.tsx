'use client';

import type { ActionImpl } from 'kbar';
import { type LottieComponentProps } from 'lottie-react';
import { ComponentProps, type ReactElement } from 'react';

import { If } from '@/components/utils';
import { cn } from '@/lib/utils';

export interface TAction extends ActionImpl {
  icon: ReactElement<LottieComponentProps>;
}

type ItemProps = ComponentProps<'div'> & {
  action: TAction;
  active: boolean;
};

export const Item = ({ action, active, ref }: ItemProps) => {
  if (active) {
    action.icon.props.lottieRef?.current?.play();
  } else {
    action.icon.props.lottieRef?.current?.stop();
  }

  return (
    <div
      ref={ref}
      className={cn(
        'm-0 flex cursor-pointer items-center justify-between bg-slate-50 px-4 py-3 text-slate-800 dark:bg-slate-800 dark:text-slate-50',
        '[&_svg]:relative [&_svg]:-top-0.5 [&_svg]:h-5 [&_svg]:w-5',
        active && 'bg-white/10 text-slate-800 dark:text-slate-50',
      )}
    >
      <div className="flex items-center gap-2">
        <If condition={!!action.icon}>{action.icon}</If>
        <div className="flex flex-col">
          <span>{action.name}</span>
        </div>
      </div>
      {!!action.shortcut?.length && (
        <div className="grid grid-flow-col gap-1" aria-hidden>
          {action.shortcut.map((shortcut) => (
            <kbd key={shortcut}>{shortcut}</kbd>
          ))}
        </div>
      )}
    </div>
  );
};
