import { render } from '@testing-library/react';

import { Card } from '../../card';

describe('Card', () => {
  it('should have default variant as border', () => {
    const { getByText } = render(<Card>card</Card>);

    const card = getByText('card');

    expect(card).toHaveClass('c-kJRIxC c-kJRIxC-gEVGHw-appearance-border');
  });

  it('should have variant as shadow', () => {
    const { getByText } = render(<Card appearance="shadow">card</Card>);

    const card = getByText('card');

    expect(card).toHaveClass('c-kJRIxC c-kJRIxC-fxJPIf-appearance-shadow');
  });
});
