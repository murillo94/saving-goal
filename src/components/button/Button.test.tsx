import { render, fireEvent } from '@testing-library/react';

import { Button } from '../button';

describe('Button', () => {
  test('should render enabled', () => {
    const { getByRole } = render(<Button>Confirm</Button>);

    const button = getByRole('button');

    expect(button).toHaveTextContent('Confirm');
    expect(button).not.toBeDisabled();
  });

  test('should call on click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>Confirm</Button>);

    const button = getByRole('button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
    expect(button).toHaveAttribute('type', 'submit');
  });
});
