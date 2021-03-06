import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';

import { Text } from '../typography';
import { Icon } from '../icon';

import { styled } from 'theme';
import { useMonth } from 'hooks';

const ToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: 'inline-flex',
  backgroundColor: '$neutralWhite',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$blueGray50',
  borderRadius: '$1',
  p: '$1',
  boxSizing: 'border-box',
  minWidth: '220px',
  width: '100%',
  height: '56px',
});

const Item = styled(ToggleGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: '$neutralWhite',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  ml: '$4',
  p: '$1',
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
  '&:last-child': {
    borderTopRightRadius: '$1',
    borderBottomRightRadius: '$1',
  },
  '&:hover:enabled': {
    backgroundColor: '$blueGray50',
  },
  '&:focus': {
    position: 'relative',
    boxShadow: '$2',
    backgroundColor: '$blueGray50',
  },
  '@small': {
    py: '$1',
    px: '$2',
  },
});

interface Props {
  initialValue: Date;
  onChange?: (value: Date) => void;
}

export const Month = ({ initialValue, onChange }: Props) => {
  const { month, year, handleDownMonth, handleUpMonth, handleKeyDown } =
    useMonth({ initialValue, onChange });

  return (
    <ToggleGroup
      type="single"
      aria-label="Reach goal by"
      orientation="horizontal"
      loop={false}
    >
      <Item
        value="left"
        aria-label="Down month"
        onClick={handleDownMonth}
        onKeyDown={handleKeyDown}
      >
        <Icon name="chevron-left" label="Arrow left" />
      </Item>
      <Item value="month" aria-label="Month" disabled>
        <Text appearance="gray900" weight="semiBold">
          {month}
        </Text>
        <Text appearance="gray400" size="small">
          {year}
        </Text>
      </Item>
      <Item
        value="right"
        aria-label="Up month"
        onClick={handleUpMonth}
        onKeyDown={handleKeyDown}
      >
        <Icon name="chevron-right" label="Arrow right" />
      </Item>
    </ToggleGroup>
  );
};
