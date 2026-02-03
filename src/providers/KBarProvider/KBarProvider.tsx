'use client';

import {
  KBarAnimator,
  KBarPositioner,
  KBarProvider as Provider,
  KBarSearch,
  KBarPortal,
} from 'kbar';
import { type LottieComponentProps, type LottieRefCurrentProps } from 'lottie-react';
import { useRouter } from 'next/navigation';
import { type PropsWithChildren, type ReactElement, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RiGithubLine, RiLinkedinLine } from 'react-icons/ri';

import { Lottie } from '@/components/common';
import { Command } from '@/components/ui';

type ActionType = {
  id: string;
  name: string;
  shortcut: string[];
  keywords: string;
  section: string;
  perform: () => void;
  icon: ReactElement<LottieComponentProps> | ReactElement;
};

export const KBarProvider = ({ children }: PropsWithChildren) => {
  const copyLinkRef = useRef<LottieRefCurrentProps>(null);
  const emailRef = useRef<LottieRefCurrentProps>(null);
  const sourceRef = useRef<LottieRefCurrentProps>(null);
  const homeRef = useRef<LottieRefCurrentProps>(null);
  const aboutRef = useRef<LottieRefCurrentProps>(null);
  const projectsRef = useRef<LottieRefCurrentProps>(null);

  const router = useRouter();

  const { t } = useTranslation();

  const copyUrl = useCallback(() => {
    void navigator.clipboard.writeText(window.location.href);
  }, []);

  const iconStyle = { width: 24, height: 24 };

  const actions: ActionType[] = [
    {
      id: 'home',
      name: t('common.kbar.actions.home'),
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: t('common.kbar.sections.goto'),
      perform: () => router?.push('/'),
      icon: <Lottie lottieRef={homeRef} style={iconStyle} iconName="home" />,
    },
    {
      id: 'work',
      name: t('common.kbar.actions.work'),
      shortcut: ['g', 'w'],
      keywords: 'go-work',
      section: t('common.kbar.sections.goto'),
      perform: () => router?.push('/work'),
      icon: <Lottie lottieRef={projectsRef} style={iconStyle} iconName="work" />,
    },
    {
      id: 'about',
      name: t('common.kbar.actions.about'),
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: t('common.kbar.sections.goto'),
      perform: () => router?.push('/about'),
      icon: <Lottie lottieRef={aboutRef} style={iconStyle} iconName="about" />,
    },
    {
      id: 'copy',
      name: t('common.kbar.actions.copy'),
      shortcut: ['u'],
      keywords: 'copy-url',
      section: t('common.kbar.sections.general'),
      perform: copyUrl,
      icon: <Lottie lottieRef={copyLinkRef} style={iconStyle} iconName="copy-link" />,
    },
    {
      id: 'email',
      name: t('common.kbar.actions.email'),
      shortcut: ['e'],
      keywords: 'send-email',
      section: t('common.kbar.sections.general'),
      perform: () => router?.push('/contact'),
      icon: <Lottie lottieRef={emailRef} style={iconStyle} iconName="email" />,
    },
    {
      id: 'source',
      name: t('common.kbar.actions.source'),
      shortcut: ['s'],
      keywords: 'view-source',
      section: t('common.kbar.sections.general'),
      perform: () =>
        window.open('https://github.com/micheldslive/micodes.tech', '_blank', 'noopener,noreferrer'),
      icon: <Lottie lottieRef={sourceRef} style={iconStyle} iconName="source" />,
    },
    {
      id: 'github',
      name: 'GitHub',
      shortcut: ['f', 'g'],
      keywords: 'go-github',
      section: t('common.kbar.sections.follow'),
      perform: () =>
        window.open('https://github.com/micheldslive', '_blank', 'noopener,noreferrer'),
      icon: <RiGithubLine />,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['f', 'l'],
      keywords: 'go-linkedin',
      section: t('common.kbar.sections.follow'),
      perform: () =>
        window.open('https://linkedin.com/in/micheldslive', '_blank', 'noopener,noreferrer'),
      icon: <RiLinkedinLine />,
    },
  ];

  return (
    <Provider actions={actions} i18nIsDynamicList>
      <KBarPortal>
        <KBarPositioner className="fixed inset-0 z-200 box-border flex w-full items-start justify-center bg-black/80 px-4 pt-[14vh] pb-4">
          <KBarAnimator className="w-full max-w-150 overflow-hidden rounded-lg bg-slate-800 text-slate-800 supports-backdrop-filter:bg-slate-50 supports-backdrop-filter:backdrop-blur-[25px] supports-backdrop-filter:backdrop-saturate-300 supports-backdrop-filter:[-webkit-backdrop-filter:saturate(300%)_blur(25px)] dark:bg-slate-800 dark:text-slate-50 [&>div>div::-webkit-scrollbar]:hidden">
            <KBarSearch
              className="m-0 box-border w-full border-none bg-slate-50 px-4 py-3 text-base text-slate-800 outline-none dark:bg-slate-800 dark:text-slate-50"
              placeholder="Type a command or search…"
            />
            <Command />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </Provider>
  );
};
