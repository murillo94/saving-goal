import type { ScaleValue } from './stitches.config';

type Scale = ScaleValue<'space'>;

export const UTILS = {
  m: (value: Scale) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (value: Scale) => ({
    marginTop: value,
  }),
  mr: (value: Scale) => ({
    marginRight: value,
  }),
  mb: (value: Scale) => ({
    marginBottom: value,
  }),
  ml: (value: Scale) => ({
    marginLeft: value,
  }),
  mx: (value: Scale) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: Scale) => ({
    marginTop: value,
    marginBottom: value,
  }),

  p: (value: Scale) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: (value: Scale) => ({
    paddingTop: value,
  }),
  pr: (value: Scale) => ({
    paddingRight: value,
  }),
  pb: (value: Scale) => ({
    paddingBottom: value,
  }),
  pl: (value: Scale) => ({
    paddingLeft: value,
  }),
  px: (value: Scale) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: Scale) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
};
