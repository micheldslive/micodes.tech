import { format, parseISO } from 'date-fns';
import { useTranslation } from 'react-i18next';

import { Typography } from '@/components/ui';
import { For } from '@/components/utils';
import { CareerProps } from '@/types';
import { formatDurationString } from '@/utils/formatters';

export const Career = () => {
  const { t } = useTranslation();
  const career = t('page.about.career', { returnObjects: true }) as CareerProps[];
  return (
    <div className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 pt-20">
      <For each={career}>
        {({ company, companyUrl, title, location, startDate, endDate }, index) => (
          <Typography
            as="article"
            filling="inline"
            variation="random"
            weight="normal"
            color="secondary"
            key={index}
            style={{ marginBottom: 40 }}
            aria-label="career"
          >
            <h3>{title}</h3>
            <p style={{ margin: 0 }}>
              <a href={companyUrl} target="_blank" rel="noreferrer">
                {company}
              </a>
              <span> • {location}</span>
            </p>
            <p style={{ margin: 0 }}>
              <span>{format(parseISO(startDate), 'LLL yyyy')}</span>
              <span> – </span>
              <span>{endDate ? format(parseISO(endDate), 'LLL yyyy') : 'Present'}</span>
              <span> • </span>
              <span>{formatDurationString(startDate, endDate)}</span>
            </p>
          </Typography>
        )}
      </For>
    </div>
  );
};
