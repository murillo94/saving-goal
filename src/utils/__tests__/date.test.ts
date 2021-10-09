import {
  addMonth,
  subMonth,
  getMonth,
  getYear,
  distanceBetweenDates,
} from 'utils';

describe('date', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern').setSystemTime(new Date(2021, 1, 1, 7));
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should add a month on date', () => {
    const month = addMonth(new Date(), 1).toDateString();

    expect(month).toBe('Mon Mar 01 2021');
  });

  it('should sub a month on date', () => {
    const month = subMonth(new Date(), 3).toDateString();

    expect(month).toBe('Sun Nov 01 2020');
  });

  it('should get month on date', () => {
    const month = getMonth(new Date());

    expect(month).toBe('February');
  });

  it('should get year on date', () => {
    const month = getYear(new Date());

    expect(month).toBe(2021);
  });

  it('should get diference between dates', () => {
    const month = distanceBetweenDates(
      new Date(2014, 0, 31),
      new Date(2014, 8, 1),
    );

    expect(month).toBe(8);
  });
});
