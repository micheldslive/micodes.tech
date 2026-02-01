'use client';

import { KBarResults, useMatches } from 'kbar';

import { Item, TAction } from './Item';

export const Base = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className="bg-slate-50 px-4 py-2 text-2xs tracking-[1px] uppercase dark:bg-slate-800">
            {item}
          </div>
        ) : (
          <Item action={item as TAction} active={active} />
        )
      }
    />
  );
};
