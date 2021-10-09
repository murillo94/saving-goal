import { useState, useRef } from 'react';

import { getMonth, getYear, formatCurrency, distanceBetweenDates } from 'utils';

export const useHome = () => {
  const initialMonth = useRef(new Date()).current;
  const [amount, setAmount] = useState('25000');
  const [reachDate, setReachDate] = useState<Date>(initialMonth);

  const goalDate = `${getMonth(reachDate)} ${getYear(reachDate)}.`;
  const newAmount = amount ?? '0';
  const formatAmount = formatCurrency(newAmount, { prefix: '$' });
  const distanceDates = distanceBetweenDates(initialMonth, reachDate);
  const monthlyAmount = parseFloat(newAmount) / distanceDates;
  const formatMonthlyAmount = formatCurrency(String(monthlyAmount), {
    decimalScale: monthlyAmount % 1 != 0 ? 2 : 0,
    prefix: '$',
  });

  const handleAmount = (value: string) => {
    setAmount(value);
  };

  const handleReachDate = (value: Date) => {
    setReachDate(value);
  };

  const handleSubmit = () => {
    alert(
      JSON.stringify(
        {
          amount,
          reachDate,
        },
        null,
        2,
      ),
    );
  };

  return {
    initialMonth,
    goalDate,
    distanceDates,
    amount,
    formatAmount,
    formatMonthlyAmount,
    handleAmount,
    handleReachDate,
    handleSubmit,
  };
};
