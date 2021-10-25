import { render } from '@testing-library/react';

import Home from '../index.page';

describe('Home', () => {
  it('should render', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Hello word')).toBeInTheDocument();
  });
});
