import { renderHook, act } from '@testing-library/react-hooks';

import { useMonth } from '../useMonth';

const onChange = jest.fn();

describe('useMonth', () => {
  beforeEach(() => {
    jest
      .useFakeTimers('modern')
      .setSystemTime(new Date(Date.UTC(2020, 5, 1, 7, 0, 0, 0)));
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should render default values', () => {
    const { result } = renderHook(() =>
      useMonth({ initialValue: new Date(2020, 5, 1, 7) }),
    );

    expect(result.current.month).toBe('June');
    expect(result.current.year).toBe(2020);
  });

  describe('handleDownMonth', () => {
    it('should down month value without setter', () => {
      const { result } = renderHook(() =>
        useMonth({ initialValue: new Date(2020, 5, 1, 7) }),
      );

      act(() => {
        result.current.handleUpMonth();
        result.current.handleUpMonth();
        result.current.handleDownMonth();
      });

      expect(result.current.month).toBe('July');
      expect(result.current.year).toBe(2020);
      expect(onChange).not.toBeCalled();
    });

    it('should down month value with setter', () => {
      const { result } = renderHook(() =>
        useMonth({ initialValue: new Date(2020, 5, 1, 7), onChange }),
      );

      act(() => {
        result.current.handleUpMonth();
        result.current.handleUpMonth();
        result.current.handleDownMonth();
      });

      expect(result.current.month).toBe('July');
      expect(result.current.year).toBe(2020);
      expect(onChange).toBeCalled();
    });

    it('should not down month value when month is past', () => {
      const { result } = renderHook(() =>
        useMonth({ initialValue: new Date(2020, 5, 1, 7) }),
      );

      act(() => {
        result.current.handleDownMonth();
      });

      expect(result.current.month).toBe('June');
      expect(result.current.year).toBe(2020);
    });
  });

  describe('handleUpMonth', () => {
    it('should up month value without setter', () => {
      const { result } = renderHook(() =>
        useMonth({ initialValue: new Date(2020, 5, 1, 7) }),
      );

      act(() => {
        result.current.handleUpMonth();
      });

      expect(result.current.month).toBe('July');
      expect(result.current.year).toBe(2020);
      expect(onChange).not.toBeCalled();
    });

    it('should up month value with setter', () => {
      const { result } = renderHook(() =>
        useMonth({ initialValue: new Date(2020, 5, 1, 7), onChange }),
      );

      act(() => {
        result.current.handleUpMonth();
      });

      expect(result.current.month).toBe('July');
      expect(result.current.year).toBe(2020);
      expect(onChange).toBeCalled();
    });
  });

  describe('handleKeyDown', () => {
    it('should down month on key down arrow left', () => {
      const { result } = renderHook(() =>
        useMonth({ initialValue: new Date(2020, 5, 1, 7) }),
      );

      act(() => {
        result.current.handleUpMonth();
        result.current.handleUpMonth();
        // @ts-ignore
        result.current.handleKeyDown({ type: 'keydown', code: 'ArrowLeft' });
      });

      expect(result.current.month).toBe('July');
      expect(result.current.year).toBe(2020);
      expect(onChange).not.toBeCalled();
    });

    it('should not down month when key type is keydown', () => {
      const { result } = renderHook(() =>
        useMonth({ initialValue: new Date(2020, 5, 1, 7) }),
      );

      act(() => {
        // @ts-ignore
        result.current.handleKeyDown({ type: 'focus', code: 'ArrowLeft' });
      });

      expect(result.current.month).toBe('June');
      expect(result.current.year).toBe(2020);
      expect(onChange).not.toBeCalled();
    });

    it('should up month on key down right left', () => {
      const { result } = renderHook(() =>
        useMonth({ initialValue: new Date(2020, 5, 1, 7) }),
      );

      act(() => {
        // @ts-ignore
        result.current.handleKeyDown({ type: 'keydown', code: 'ArrowRight' });
      });

      expect(result.current.month).toBe('July');
      expect(result.current.year).toBe(2020);
      expect(onChange).not.toBeCalled();
    });

    it('should not up month when key type is keydown', () => {
      const { result } = renderHook(() =>
        useMonth({ initialValue: new Date(2020, 5, 1, 7) }),
      );

      act(() => {
        // @ts-ignore
        result.current.handleKeyDown({ type: 'focus', code: 'ArrowRight' });
      });

      expect(result.current.month).toBe('June');
      expect(result.current.year).toBe(2020);
      expect(onChange).not.toBeCalled();
    });
  });
});
