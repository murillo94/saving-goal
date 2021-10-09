import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

import { Text } from '../typography';
import { Icon } from '../icon';

import { styled } from 'theme';
import { useMonth } from 'hooks/use-month';

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: 'inline-flex',
  backgroundColor: '$neutralWhite',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$blueGray50',
  borderRadius: '$1',
  p: '$1',
  boxSizing: 'border-box',
  width: '100%',
});

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: '$neutralWhite',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '$5',
  cursor: 'pointer',
  '&:first-child': {
    marginLeft: 0,
    borderTopLeftRadius: '$1',
    borderBottomLeftRadius: '$1',
  },
  '&:not(:first-child):not(:last-child)': {
    width: '100%',
    cursor: 'auto',
  },
  '&:last-child': { borderTopRightRadius: '$1', borderBottomRightRadius: '$1' },
  '&:hover:enabled': { backgroundColor: '$blueGray50' },
  '&:focus': {
    position: 'relative',
    boxShadow: '$2',
    backgroundColor: '$blueGray50',
  },
});

interface Props {
  onChange?: (value: Date) => void;
}

export const Month = ({ onChange }: Props) => {
  const { month, year, handleDownMonth, handleUpMonth, handleKeyDown } =
    useMonth({ onChange });

  return (
    <StyledToggleGroup
      type="single"
      aria-label="Select a month"
      orientation="horizontal"
      loop={false}
    >
      <StyledItem
        value="left"
        aria-label="Down month"
        onClick={handleDownMonth}
        onKeyDown={handleKeyDown}
      >
        <Icon name="chevron-left" label="Arrow left" />
      </StyledItem>
      <StyledItem value="month" aria-label="Month" disabled>
        <Text appearance="gray900" weight="semiBold">
          {month}
        </Text>
        <Text appearance="gray400" size="small">
          {year}
        </Text>
      </StyledItem>
      <StyledItem
        value="right"
        aria-label="Up month"
        onClick={handleUpMonth}
        onKeyDown={handleKeyDown}
      >
        <Icon name="chevron-right" label="Arrow right" />
      </StyledItem>
    </StyledToggleGroup>
  );
};
