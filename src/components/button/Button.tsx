import { styled } from 'theme';

export const Button = styled('button', {
  fontFamily: '$workSans',
  fontSize: '$3',
  fontWeight: '$3',
  borderRadius: '$3',
  border: 'none',
  p: '$3',
  width: 'auto',
  cursor: 'pointer',
  variants: {
    appearance: {
      default: {
        color: '$neutralWhite',
        backgroundColor: '$brandColorPrimary',
        '&:hover': {
          opacity: '0.9',
        },
      },
    },
  },
  defaultVariants: {
    appearance: 'default',
  },
});
