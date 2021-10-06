import { addMonth, subMonth, getMonth, getYear } from 'utils';

describe('date', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern').setSystemTime(new Date(2021, 1, 1, 7));
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('add a month on date', () => {
    const month = addMonth(new Date(), 1).toDateString();

    expect(month).toBe('Mon Mar 01 2021');
  });

  it('sub a month on date', () => {
    const month = subMonth(new Date(), 3).toDateString();

    expect(month).toBe('Sun Nov 01 2020');
  });

  it('get month on date', () => {
    const month = getMonth(new Date());

    expect(month).toBe('February');
  });

  it('get year on date', () => {
    const month = getYear(new Date());

    expect(month).toBe(2021);
  });
});
