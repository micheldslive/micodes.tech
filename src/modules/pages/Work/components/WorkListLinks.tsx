'use client';

import { Lottie } from '@/components/common';
import { Link } from '@/components/ui';
import { useLottieAnimation } from '@/hooks';
import { WorkItemProps } from '@/types';

type WorkItemLinksProps = Pick<WorkItemProps, 'links'>;

export const WorkItemLinks = ({ links }: WorkItemLinksProps) => {
  const github = useLottieAnimation();

  const hasWeb = Boolean(links.web);

  return (
    <div className="flex min-h-8.75 items-center gap-2">
      {links.github && hasWeb && (
        <Link.Tooltip
          href={links.github}
          target="_blank"
          onMouseEnter={github.play}
          onMouseLeave={github.stop}
          onClick={(event) => event.stopPropagation()}
          label="Github"
        >
          <Lottie lottieRef={github.ref} iconName="source" />
        </Link.Tooltip>
      )}
    </div>
  );
};
