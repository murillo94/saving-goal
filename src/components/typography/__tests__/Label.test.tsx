import { render } from '@testing-library/react';

import { Label } from '../../typography';

describe('Label', () => {
  it('should have input value', () => {
    const { getByLabelText } = render(
      <>
        <Label htmlFor="amount">Type an amount to saving</Label>
        <input id="amount" name="amount" value="input-value" readOnly />
      </>,
    );

    const input = getByLabelText('Type an amount to saving');

    expect(input).toHaveValue('input-value');
  });
});
