import { formatCurrency } from 'utils';

describe('currency', () => {
  it('should return currency with group separator', () => {
    const month = formatCurrency('1000');

    expect(month).toBe('1,000');
  });

  it('should return currency with decimal separator', () => {
    const month = formatCurrency('1000.00');

    expect(month).toBe('1,000.00');
  });
});
