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

  it('should return currency with decimal scale', () => {
    const month = formatCurrency('1000.3739', { decimalScale: 2 });

    expect(month).toBe('1,000.37');
  });

  it('should return currency with prefix', () => {
    const month = formatCurrency('1000.00', { prefix: '$' });

    expect(month).toBe('$1,000.00');
  });
});
