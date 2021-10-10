import CurrencyInputField, {
  CurrencyInputProps,
} from 'react-currency-input-field';

import { Box, Icon } from 'components';

import { optionsCurrency } from 'utils';

import { styled } from 'theme';

type Props = Omit<CurrencyInputProps, 'onValueChange'> & {
  ariaLabel?: string;
  onValueChange: (value: any) => void;
};

const InputStyled = styled('input', {
  fontFamily: '$rubik',
  fontSize: '$6',
  fontWeight: '$2',
  lineHeight: '28.8px',
  color: '$blueGray600',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '$blueGray50',
  borderRadius: '$1',
  p: '$2',
  pl: '$9',
  outline: 'none',
  boxSizing: 'border-box',
  width: '100%',
  height: '56px',
  '&[type="number"], &[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':
    {
      appearance: 'textfield',
    },
  '&:focus': {
    boxShadow: '$2',
  },
  '@small': {
    fontSize: '$5',
    lineHeight: '24px',
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
      onValueChange={onValueChange}
      {...optionsCurrency}
    />
  </Container>
);
