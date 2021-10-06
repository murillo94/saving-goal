import { useState, useRef, KeyboardEvent } from 'react';

import { addMonth, subMonth, getMonth, getYear } from 'utils';

interface Props {
  onChange?: (value: Date) => void;
}

export const useMonth = ({ onChange }: Props) => {
  const fixedMonth = useRef(new Date());
  const [timestamp, setTimestamp] = useState(fixedMonth.current);
  const month = getMonth(timestamp);
  const year = getYear(timestamp);

  const handleDownMonth = () => {
    const value = subMonth(timestamp, 1);

    if (fixedMonth.current <= value) {
      setTimestamp(value);
      onChange?.(value);
    }
  };

  const handleUpMonth = () => {
    const value = addMonth(timestamp, 1);
    setTimestamp(value);
    onChange?.(value);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.type === 'keydown') {
      if (e.code === 'ArrowLeft') {
        handleDownMonth();
      }

      if (e.code === 'ArrowRight') {
        handleUpMonth();
      }
    }
  };

  return { month, year, handleDownMonth, handleUpMonth, handleKeyDown };
};
