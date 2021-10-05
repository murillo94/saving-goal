import CurrencyInputField, {
  CurrencyInputProps,
} from 'react-currency-input-field';

import { Box, Icon } from 'components';

import { styled } from 'theme';

type Props = Omit<CurrencyInputProps, 'onValueChange'> & {
  ariaLabel?: string;
  onValueChange: (value: any) => void;
};

const InputStyled = styled('input', {
  fontFamily: '$rubik',
  fontSize: '$6',
  fontWeight: '$2',
  color: '$blueGray600',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$blueGray50',
  borderRadius: '$1',
  p: '$2',
  pl: '$9',
  boxSizing: 'border-box',
  '&[type="number"], &[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':
    {
      appearance: 'textfield',
    },
});

const Container = styled(Box, {
  position: 'relative',
});

const IconContainer = styled(Box, {
  position: 'absolute',
  left: '$3',
  top: '$3',
});

export const Input = ({ id, name, ariaLabel, value, onValueChange }: Props) => (
  <Container>
    <IconContainer>
      <Icon name="dollar-sign" label="Dollar sign" />
    </IconContainer>
    <InputStyled
      as={CurrencyInputField}
      id={id}
      name={name}
      aria-label={ariaLabel}
      value={value}
      defaultValue=""
      allowNegativeValue={false}
      groupSeparator=","
      decimalSeparator="."
      onValueChange={onValueChange}
    />
  </Container>
);
