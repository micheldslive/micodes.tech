import { cva, type VariantProps } from 'class-variance-authority';

export type TypographyVariants = VariantProps<typeof typographyVariants>;

export const typographyVariants = cva(
  "tracking-normal [font-variation-settings:'wght'_var(--font-wght),'wdth'_var(--font-wdth)]",
  {
    variants: {
      filling: {
        outline:
          'text-transparent [-webkit-text-stroke:2px_var(--color-slate-500)] max-lg:[-webkit-text-stroke:2px_var(--color-slate-500)] dark:[-webkit-text-stroke:2px_var(--color-slate-300)] max-lg:dark:[-webkit-text-stroke:2px_var(--color-slate-300)]',
        inline: 'text-slate-500 [-webkit-text-stroke:0] dark:text-slate-300',
      },

      variation: {
        normal: '[--font-wdth:100]',
        random:
          'font-[studiofeixen-variable,studiofeixen,Arial,Helvetica,sans-serif] [--font-wdth:125]',
      },

      color: {
        primary: 'text-slate-500 dark:text-slate-300',
        secondary: 'text-slate-500 dark:text-slate-50',
        none: '',
      },

      weight: {
        normal: '[--font-wght:500]',
        medium: '[--font-wght:600]',
        bold: '[--font-wght:700]',
        extrabold: '[--font-wght:800]',
      },
    },

    defaultVariants: {
      filling: 'inline',
      variation: 'normal',
      weight: 'extrabold',
      color: 'none',
    },
  },
);
