import { formatValue } from 'react-currency-input-field';

export const formatCurrency = (value: string) =>
  formatValue({ value, ...optionsCurrency });

export const optionsCurrency = {
  groupSeparator: ',',
  decimalSeparator: '.',
};
