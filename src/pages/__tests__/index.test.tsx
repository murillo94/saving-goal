import { render, fireEvent } from '@testing-library/react';

import Home from '../index';

describe('Button', () => {
  beforeEach(() => {
    jest
      .useFakeTimers('modern')
      .setSystemTime(new Date(Date.UTC(2021, 9, 10, 10, 0, 0, 0)));
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should render page', () => {
    const { getByText, getByRole, getByLabelText } = render(<Home />);

    const mainTitle = getByRole('heading', {
      name: "Let's plan your saving goal.",
    });
    const goalTitle = getByRole('heading', {
      name: 'Buy a house',
    });
    const goalDescription = getByText('Saving goal');

    expect(mainTitle).toBeInTheDocument();
    expect(goalTitle).toBeInTheDocument();
    expect(goalDescription).toBeInTheDocument();

    const totalAmountInput = getByLabelText('Total amount') as HTMLInputElement;
    fireEvent.change(totalAmountInput, { target: { value: 1000 } });

    expect(totalAmountInput.value).toBe('1,000');

    const reachDateInput = getByLabelText('Up month') as HTMLInputElement;
    fireEvent.click(reachDateInput);

    const reachDateMonth = getByText('November');
    const reachDateYear = getByText('2021');

    expect(reachDateMonth).toBeInTheDocument();
    expect(reachDateYear).toBeInTheDocument();

    const monthyAmountTitle = getByText('Monthly amount');
    const monthyAmountValue = getByText('$500');

    expect(monthyAmountTitle).toBeInTheDocument();
    expect(monthyAmountValue).toBeInTheDocument();

    const submitButton = getByRole('button', { name: 'Confirm' });

    expect(submitButton).toBeInTheDocument();
  });
});
