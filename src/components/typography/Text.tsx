import { styled } from 'theme';
import { COLORS } from './utils/colors';

// ajustar responsivo

export const Text = styled('p', {
  margin: '0',
  variants: {
    appearance: COLORS,
    size: {
      xsmall: {
        fontSize: '$1',
        lineHeight: '16px',
      },
      small: {
        fontSize: '$2',
        lineHeight: '21px',
        '@small': {
          fontSize: '$1',
          lineHeight: '16px',
        },
      },
      medium: {
        fontSize: '$3',
        lineHeight: '24px',
        '@small': {
          fontSize: '$2',
          lineHeight: '21px',
        },
      },
      large: {
        fontSize: '$5',
        lineHeight: '24px',
        '@small': {
          fontSize: '$4',
          lineHeight: '21.6px',
        },
      },
      xlarge: {
        fontSize: '$6',
        lineHeight: '28.8px',
        '@small': {
          fontSize: '$5',
          lineHeight: '24px',
        },
      },
      xxlarge: {
        fontSize: '$7',
        lineHeight: '38px',
        '@small': {
          fontSize: '$6',
          lineHeight: '28.8px',
        },
      },
    },
    weight: {
      initial: {
        fontWeight: '$1',
      },
      normal: {
        fontWeight: '$2',
      },
      semiBold: {
        fontWeight: '$3',
      },
    },
    font: {
      workSans: {
        fontFamily: '$workSans',
      },
      rubik: {
        fontFamily: '$rubik',
      },
    },
    align: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
  },
  defaultVariants: {
    appearance: 'primary',
    size: 'medium',
    weight: 'initial',
    font: 'workSans',
    align: 'left',
  },
});
