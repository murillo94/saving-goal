import { render } from '@testing-library/react';

import { Inline } from '../../inline';

describe('Inline', () => {
  it('should have default flex css', () => {
    const { getByTestId } = render(<Inline data-testid="inline-id" />);

    const inline = getByTestId('inline-id');

    expect(inline).toHaveClass('c-bZNrxE-jroWjL-spaceY-center');
    expect(inline).toHaveClass('c-bZNrxE-gMrDRs-responsive-true');
  });

  it('should have spaceX as between', () => {
    const { getByTestId } = render(
      <Inline data-testid="inline-id" spaceX="between" />,
    );

    const inline = getByTestId('inline-id');

    expect(inline).toHaveClass('c-bZNrxE-knmidH-spaceX-between');
  });

  it('should have spaceY as initial', () => {
    const { getByTestId } = render(
      <Inline data-testid="inline-id" spaceY="initial" />,
    );

    const inline = getByTestId('inline-id');

    expect(inline).toHaveClass('c-bZNrxE-ebbZJG-spaceY-initial');
  });

  it('should have spaceY as center', () => {
    const { getByTestId } = render(<Inline data-testid="inline-id" />);

    const inline = getByTestId('inline-id');

    expect(inline).toHaveClass('c-bZNrxE-jroWjL-spaceY-center');
  });
});
