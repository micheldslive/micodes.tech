import parse from 'html-react-parser';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Typography } from '@/components/ui';

export const Me = () => {
  const { t } = useTranslation();
  const image = t('page.about.image');
  const name = t('page.home.me.name');

  return (
    <div
      className="flex flex-col items-center justify-between gap-5 md:flex-row"
      aria-label="About"
    >
      <section className="w-auto md:w-1/2">
        <Image alt={name} src={image} width="300" height="406" priority className="h-auto w-full" />
      </section>
      <section className="w-auto md:w-1/2">
        <Typography
          as="blockquote"
          filling="inline"
          variation="normal"
          weight="normal"
          color="secondary"
          className="[&>p]:mb-2"
        >
          {parse(t('page.about.me'))}
        </Typography>
      </section>
    </div>
  );
};
