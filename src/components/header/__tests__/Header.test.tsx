import { render } from '@testing-library/react';

import { Header } from '../../header';

describe('Header', () => {
  it('should render as header', () => {
    const { getByRole } = render(<Header />);

    const header = getByRole('banner');

    expect(header).toBeInTheDocument();
  });

  it('should have image logo', () => {
    const { getByRole } = render(<Header />);

    const header = getByRole('img');

    expect(header).toHaveAccessibleName('Origin logo');
  });
});
