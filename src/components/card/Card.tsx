import { styled } from 'theme';

export const Card = styled('div', {
  backgroundColor: '$neutralWhite',
  borderRadius: '$2',
  variants: {
    appearance: {
      border: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '$blueGray50',
        overflow: 'auto',
      },
      shadow: {
        boxShadow: '$3',
      },
    },
  },
  defaultVariants: {
    appearance: 'border',
  },
});
