import { useState, KeyboardEvent } from 'react';

import { addMonth, subMonth, getMonth, getYear } from 'utils';

interface Props {
  initialValue: Date;
  onChange?: (value: Date) => void;
}

export const useMonth = ({ initialValue, onChange }: Props) => {
  const [timestamp, setTimestamp] = useState(initialValue);
  const month = getMonth(timestamp);
  const year = getYear(timestamp);

  const handleDownMonth = () => {
    const value = subMonth(timestamp, 1);

    if (initialValue <= value) {
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
