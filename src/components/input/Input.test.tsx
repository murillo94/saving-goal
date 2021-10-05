import { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Input } from '../input';

describe('Input', () => {
  test('should render as textbox', () => {
    const onValueChange = jest.fn();
    const { getByRole, getByText } = render(
      <Input name="amount" onValueChange={onValueChange} />,
    );

    expect(getByRole('textbox')).toBeInTheDocument();
    expect(getByText('Dollar sign')).toBeInTheDocument();
  });

  test('should have aria label', () => {
    const onValueChange = jest.fn();
    const { getByLabelText } = render(
      <Input
        name="amount"
        onValueChange={onValueChange}
        ariaLabel="Type an amount to saving"
      />,
    );

    expect(getByLabelText('Type an amount to saving')).toBeInTheDocument();
  });

  test('should have default value', () => {
    const onValueChange = jest.fn();
    const { getByRole } = render(
      <Input name="amount" onValueChange={onValueChange} value="10000" />,
    );

    expect(getByRole('textbox')).toHaveValue('10,000');
  });

  test('should change the input value', () => {
    const onChange = jest.fn();
    const InputTest = () => {
      const [value, setValue] = useState('');
      return (
        <Input
          id="id-test"
          name="amount"
          ariaLabel="Type an amount to saving"
          value={value}
          onValueChange={value => {
            setValue(value);
            onChange(value);
          }}
        />
      );
    };

    const { getByLabelText } = render(<InputTest />);
    const input = getByLabelText(
      'Type an amount to saving',
    ) as HTMLInputElement;

    expect(input.value).toBe('');
    expect(onChange).not.toBeCalled();

    fireEvent.change(input, { target: { value: 1000 } });

    expect(input.value).toBe('1,000');
    expect(onChange).toBeCalledWith('1000');

    fireEvent.change(input, { target: { value: 1000.99 } });

    expect(input.value).toBe('1,000.99');
    expect(onChange).toBeCalledWith('1000.99');

    fireEvent.change(input, { target: { value: -4000 } });

    expect(input.value).toBe('4,000');
    expect(onChange).toBeCalledWith('4000');
  });
});
