import { styled } from 'theme';

export const Button = styled('button', {
  fontFamily: '$workSans',
  fontSize: '$3',
  fontWeight: '$3',
  borderRadius: '$3',
  border: 'none',
  p: '$3',
  outline: 'none',
  cursor: 'pointer',
  variants: {
    appearance: {
      default: {
        color: '$neutralWhite',
        backgroundColor: '$brandColorPrimary',
        '&:hover': {
          opacity: '0.9',
        },
        '&:focus': {
          boxShadow: '$1',
        },
      },
    },
    width: {
      default: {
        width: '320px',
        '@small': {
          width: '100%',
        },
      },
      fill: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    appearance: 'default',
    width: 'default',
  },
});
