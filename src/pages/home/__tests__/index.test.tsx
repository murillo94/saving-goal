import { render } from '@testing-library/react';

import Home from '../index.page';

describe('Home', () => {
  it('should render', () => {
    const { getByRole } = render(<Home />);

    const heading = getByRole('heading');

    expect(heading).toHaveTextContent('Here are your savings goals!');
  });
});
