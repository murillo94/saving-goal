import * as LabelRadix from '@radix-ui/react-label';

import { styled } from 'theme';
import { COLORS } from './utils/colors';

export const Label = styled(LabelRadix.Root, {
  fontFamily: '$workSans',
  fontSize: '$2',
  fontWeight: '$1',
  lineHeight: '21px',
  textAlign: 'left',
  display: 'block',
  '@small': {
    fontSize: '$1',
    lineHeight: '16px',
  },
  variants: {
    appearance: COLORS,
  },
  defaultVariants: {
    appearance: 'gray900',
  },
});
