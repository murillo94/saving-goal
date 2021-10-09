import { formatValue } from 'react-currency-input-field';

type FormatValueOptions = {
  decimalSeparator?: string;
  groupSeparator?: string;
  disableGroupSeparators?: boolean;
  decimalScale?: number;
  prefix?: string;
  suffix?: string;
};

export const formatCurrency = (
  value: string,
  options: FormatValueOptions = {},
) => {
  const customOptions = { ...optionsCurrency, ...options };

  return formatValue({ value, ...customOptions });
};

export const optionsCurrency = {
  groupSeparator: ',',
  decimalSeparator: '.',
};
