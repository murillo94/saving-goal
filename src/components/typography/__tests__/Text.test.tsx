import { render } from '@testing-library/react';

import { Text } from '../../typography';

describe('Text', () => {
  it('should be paragraph as default render', () => {
    const { getByText } = render(<Text>title as p</Text>);

    const paragraph = getByText('title as p');

    expect(paragraph).toHaveTextContent('title as p');
  });

  it('should have polymorphic as heading', () => {
    const { getByRole } = render(<Text as="h1">title as heading</Text>);

    const heading = getByRole('heading');

    expect(heading).toHaveTextContent('title as heading');
  });
});
