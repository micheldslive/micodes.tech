'use client';

import { Lottie } from '@/components/common';
import { Link } from '@/components/ui';
import { useLottieAnimation } from '@/hooks';
import { WorkItemProps } from '@/types';

type WorkItemLinksProps = Pick<WorkItemProps, 'links'>;

export const WorkItemLinks = ({ links }: WorkItemLinksProps) => {
  const github = useLottieAnimation();
  const web = useLottieAnimation();

  return (
    <div className="flex min-h-[35px] items-center gap-2">
      {links.github && (
        <Link.Tooltip
          href={links.github}
          target="_blank"
          onMouseEnter={github.play}
          onMouseLeave={github.stop}
          label="Github"
        >
          <Lottie lottieRef={github.ref} iconName="source" />
        </Link.Tooltip>
      )}

      {links.web && (
        <Link.Tooltip
          href={links.web}
          target="_blank"
          onMouseEnter={web.play}
          onMouseLeave={web.stop}
          label="Live"
        >
          <Lottie lottieRef={web.ref} iconName="copy-link" />
        </Link.Tooltip>
      )}
    </div>
  );
};
