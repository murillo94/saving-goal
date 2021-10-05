import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

import ChevronLeft from '../../../public/icons/chevron-left.svg';
import ChevronRight from '../../../public/icons/chevron-right.svg';
import DollarSign from '../../../public/icons/dollar-sign.svg';
import House from '../../../public/icons/house.svg';

import type { AccessibleIconProps } from '@radix-ui/react-accessible-icon';

const icons = {
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  'dollar-sign': DollarSign,
  house: House,
} as const;

type Icons = keyof typeof icons;

type Props = AccessibleIconProps & {
  name: Icons;
};

export const Icon = ({ name, label }: Props) => {
  const Component = icons[name];

  return (
    <AccessibleIcon.Root label={label}>
      <Component />
    </AccessibleIcon.Root>
  );
};
