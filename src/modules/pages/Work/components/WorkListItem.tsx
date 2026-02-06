'use client';

import { Typography } from '@/components/ui';
import { cn } from '@/lib/utils';
import { type WorkItemProps } from '@/types';

import { useWorkStore } from '../store/work';

import { WorkItemLinks } from './WorkListLinks';

type WorkListItemProps = {
  work: WorkItemProps;
};

export const WorkListItem = ({ work }: WorkListItemProps) => {
  const { setActiveImage } = useWorkStore();

  const Component = work.links.web || work.links.github ? 'a' : 'div';

  return (
    <div
      onMouseEnter={() => setActiveImage(work.image)}
      onMouseLeave={() => setActiveImage(undefined)}
      className="group/item"
    >
      <Component
        href={work.links?.web ?? work.links.github}
        target="_blank"
        className="cursor-hover relative flex w-full flex-row items-center justify-between border-b-2 border-slate-500 py-6 group-last/item:border-none dark:border-slate-50"
      >
        <div className="flex w-full items-center overflow-hidden">
          <div className="absolute overflow-hidden">
            <Typography
              as="h4"
              color="secondary"
              className="relative -translate-x-full pr-3 font-studiofeixen-variable text-2xl font-bold transition-transform duration-300 group-hover/item:translate-x-0"
            >
              →
            </Typography>
          </div>
          <Typography
            as="h4"
            color="secondary"
            filling="inline"
            variation="random"
            weight="bold"
            className={cn(
              'mr-10 truncate text-2xl whitespace-nowrap transition-transform duration-300',
              'lowercase group-hover/item:translate-x-8',
            )}
          >
            {work.title}
          </Typography>

          {work.isNew && (
            <span className="mr-10 w-fit rounded-3xl border border-[#78ffd1] bg-[#78ffd1] px-1.5 py-0.5 text-xs font-semibold text-slate-500 lowercase dark:bg-transparent dark:text-slate-50">
              new
            </span>
          )}
        </div>

        <div className="flex w-fit justify-end text-right">
          <WorkItemLinks links={work.links} />
        </div>
      </Component>
    </div>
  );
};
