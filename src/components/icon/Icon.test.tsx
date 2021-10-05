import { render } from '@testing-library/react';

import { Icon } from '../icon';

describe('Icon', () => {
  it('should have icon label', () => {
    const { getByText } = render(
      <Icon name="dollar-sign" label="blue house" />,
    );

    const label = getByText('blue house');

    expect(label).toBeInTheDocument();
  });
});
