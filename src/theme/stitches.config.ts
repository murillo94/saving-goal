import { createStitches, VariantProps, ScaleValue } from '@stitches/react';

import { MEDIA } from './media';
import { THEME } from './theming';
import { UTILS } from './utils';

export const { styled, css, globalCss, keyframes, theme, getCssText } =
  createStitches({
    theme: THEME,
    media: MEDIA,
    utils: UTILS,
  });

export type { VariantProps, ScaleValue };
