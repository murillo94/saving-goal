import { render } from '@testing-library/react';

import { Box } from '../../box';

describe('Box', () => {
  it('should have polymorphic as heading', () => {
    const { getByRole } = render(<Box as="h1">title</Box>);

    const heading = getByRole('heading');

    expect(heading).toHaveTextContent('title');
  });
});
