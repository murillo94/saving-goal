import { styled } from 'theme';

export const Inline = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  variants: {
    spaceX: {
      between: {
        justifyContent: 'space-between',
      },
    },
    spaceY: {
      initial: {
        alignItems: 'initial',
      },
      center: {
        alignItems: 'center',
      },
    },
    responsive: {
      true: {
        '@small': {
          flexDirection: 'column',
        },
      },
    },
  },
  defaultVariants: {
    spaceY: 'center',
    responsive: true,
  },
});
