import { styled } from 'theme';
import { COLORS } from './utils/colors';

export const Text = styled('p', {
  margin: '0',
  variants: {
    appearance: COLORS,
    size: {
      xxsmall: {
        fontSize: '$1',
        lineHeight: '16px',
      },
      xsmall: {
        fontSize: '$2',
        lineHeight: '21px',
      },
      small: {
        fontSize: '$3',
        lineHeight: '24px',
      },
      medium: {
        fontSize: '$4',
        lineHeight: '21.6px',
      },
      large: {
        fontSize: '$5',
        lineHeight: '24px',
      },
      xlarge: {
        fontSize: '$6',
        lineHeight: '28.8px',
      },
      xxlarge: {
        fontSize: '$7',
        lineHeight: '38px',
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
