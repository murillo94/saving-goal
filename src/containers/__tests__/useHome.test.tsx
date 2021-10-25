import { renderHook, act } from '@testing-library/react-hooks';

import { useHome } from '../useHome';

import { INFO_GOALS } from 'persistence';

describe('useHome', () => {
  beforeEach(() => {
    jest
      .useFakeTimers('modern')
      .setSystemTime(new Date(Date.UTC(2022, 5, 1, 7, 0, 0, 0)));
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should render default values', () => {
    const { result } = renderHook(() => useHome());

    expect(result.current.goalDate).toBe('June 2022.');
    expect(result.current.distanceDates).toBe(1);
    expect(result.current.amount).toBe('');
    expect(result.current.formatAmount).toBe('$0');
    expect(result.current.formatMonthlyAmount).toBe('$0');
  });

  describe('handleAmount', () => {
    it('should change amount value', () => {
      const { result } = renderHook(() => useHome());

      act(() => {
        result.current.handleAmount('20000');
      });

      expect(result.current.amount).toBe('20000');
      expect(result.current.formatAmount).toBe('$20,000');
    });
  });

  describe('handleReachDate', () => {
    it('should change date value', () => {
      const { result } = renderHook(() => useHome());

      act(() => {
        result.current.handleReachDate(new Date(2022, 5, 1, 7));
      });

      expect(result.current.goalDate).toBe('June 2022.');
      expect(result.current.distanceDates).toBe(1);
      expect(result.current.formatMonthlyAmount).toBe('$0');
    });
  });

  describe('handleSubmit', () => {
    it('should submit values on alert', () => {
      const { result } = renderHook(() => useHome());

      act(() => {
        result.current.handleSubmit();
      });

      expect(localStorage.setItem).toBeCalledWith(
        'goals',
        JSON.stringify({
          ...INFO_GOALS,
          'buy-a-house': {
            title: INFO_GOALS['buy-a-house'].title,
            goal: {
              amount: '',
              reachDate: '2022-06-01T07:00:00.000Z',
            },
          },
        }),
      );
    });
  });
});
