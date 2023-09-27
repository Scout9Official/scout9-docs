import { COLORS } from '@/config/colors';
import { tv } from 'tailwind-variants';

// @TODO fix typings
// @ts-ignore
export const title = tv({
  base: 'tracking-tight font-semibold',
  variants: {
    color: {
      purple: `from-[${COLORS.lightPurple}] to-[${COLORS.purple}]`,
      // purple: `from-[#D7BDFF] to-[#A66CFF]`,
      violet: 'from-[#FF1CF7] to-[#b249f8]',
      yellow: 'from-[#FF705B] to-[#FFB457]',
      blue: 'from-[#5EA2EF] to-[#0072F5]',
      cyan: 'from-[#00b7fa] to-[#01cfea]',
      green: 'from-[#6FEE8D] to-[#17c964]',
      pink: 'from-[#FF72E1] to-[#F54C7A]',
      foreground: 'dark:from-[#FFFFFF] dark:to-[#4B4B4B]',
    },
    size: {
      xs: 'text-xl md:text-2xl',
      sm: 'text-3xl md:text-4xl',
      md: 'text-[1.8rem] sm:text-[2.3rem] md:text-5xl leading-9',
      lg: 'text-4xl md:text-6xl',
      xl: 'text-6xl md:text-8xl',
    },
    fullWidth: {
      true: 'w-full block',
    },
    display: {
      inline: 'inline',
      block: 'block',
      inlineBlock: 'inline-block',
    }
  },
  defaultVariants: {
    size: 'md',
    display: 'inline',
    fullWidth: true,
  },
  compoundVariants: [
    {
      color: [
        'violet',
        'purple',
        'yellow',
        'blue',
        'cyan',
        'green',
        'pink',
        'foreground',
      ],
      class: 'bg-clip-text text-transparent bg-gradient-to-b',
    },
  ],
});

// @ts-ignore
export const subtitle = tv({
  base: 'w-full md:w-1/2 my-2 text-default-600 block max-w-full',
  variants: {
    fullWidth: {
      true: '!w-full',
    },
    size: {
      xs: 'text-base lg:text-xl',
      sm: 'text-md lg:text-2xl',
      md: 'text-lg lg:text-3xl',
      lg: 'text-xl lg:text-4xl',
    },

  },
  defaultVariants: {
    fullWidth: true,
    size: 'md',
  }
});

// @ts-ignore
export const card = tv({
  slots: {
    base: 'col-span-12 h-[300px]',
    header: 'absolute z-10 top-1 flex-col !items-start text-left',
    headerSubtitle: 'text-tiny uppercase font-bold',
    headerTitle: 'font-medium text-large',
    bgImage: 'z-0 w-full h-full object-cover',
    footerContainer: 'absolute justify-between z-10 bottom-0 border-t-1',
    // footerContent: 'flex flex-grow gap-2 items-center',
    footerAvatar: 'rounded-full w-10 h-11',
    footerText: 'text-tiny text-left',
    footerAction: '',
  },
  variants: {
    size: {
      sm: {
        base: 'sm:col-span-4',
        headerTitle: 'text-large',
        footerAction: 'text-tiny'
      },
      md: {
        base: 'w-full sm:col-span-5',
        headerTitle: 'text-2xl',
        footerAction: 'text-tiny'
      },
      lg: {
        base: 'w-full sm:col-span-7',
        headerTitle: 'text-xl',
        // footerAction: ''
      },
    },
    mode: {
      light: {
        headerTitle: 'text-black',
        headerSubtitle: 'text-black/60',
        footerContainer: 'bg-white/30 border-zinc-100/50',
        footerAvatar: 'bg-white'
      },
      dark: {
        headerTitle: 'text-white/90',
        headerSubtitle: 'text-white/60',
        footerContainer: 'bg-black/40 border-default-600 dark:border-default-100',
        footerText: 'text-white/60',
        footerAvatar: 'bg-black'
      },
    }
  },
  defaultVariants: {
    size: 'md',
    mode: 'light',
  },
});
