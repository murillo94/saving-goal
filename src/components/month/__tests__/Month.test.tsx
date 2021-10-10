import { render, fireEvent } from '@testing-library/react';

import { Month } from '../../month';

const initialDate = new Date(Date.UTC(2021, 10, 10, 10, 0, 0, 0));

describe('Month', () => {
  beforeEach(() => {
    jest
      .useFakeTimers('modern')
      .setSystemTime(new Date(Date.UTC(2021, 10, 10, 10, 0, 0, 0)));
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should have default label', () => {
    const onChange = jest.fn();
    const { getByLabelText, getByText } = render(
      <Month initialValue={initialDate} onChange={onChange} />,
    );

    const label = getByLabelText('Reach goal by');
    const arrowLeft = getByText('Arrow left');
    const arrowRight = getByText('Arrow right');
    const month = getByText('November');
    const year = getByText('2021');

    expect(label).toBeInTheDocument();
    expect(arrowLeft).toBeInTheDocument();
    expect(arrowRight).toBeInTheDocument();
    expect(month).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });

  it('should down month', () => {
    const onChange = jest.fn();
    const { getByLabelText, getByText } = render(
      <Month initialValue={initialDate} onChange={onChange} />,
    );

    const label = getByLabelText('Down month');
    fireEvent.click(label);

    const month = getByText('November');
    const year = getByText('2021');

    expect(month).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });

  it('should up month', () => {
    const onChange = jest.fn();
    const { getByLabelText, getByText } = render(
      <Month initialValue={initialDate} onChange={onChange} />,
    );

    const label = getByLabelText('Up month');
    fireEvent.click(label);

    const month = getByText('December');
    const year = getByText('2021');

    expect(month).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });
});
