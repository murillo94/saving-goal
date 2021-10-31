import { useState, useRef, useEffect } from 'react';

import { INFO_GOALS } from 'persistence';
import { getMonth, getYear, formatCurrency, distanceBetweenDates } from 'utils';

export const useEdit = () => {
  const initialMonth = useRef(new Date()).current;
  const [amount, setAmount] = useState('');
  const [reachDate, setReachDate] = useState<Date>(initialMonth);

  const goalDate = `${getMonth(reachDate)} ${getYear(reachDate)}.`;
  const newAmount = amount || '0';
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
    const goals = localStorage.getItem('goals');
    const persistedGoals = goals ? JSON.parse(goals) : INFO_GOALS;

    localStorage.setItem(
      'goals',
      JSON.stringify({
        ...persistedGoals,
        'buy-a-house': {
          title: INFO_GOALS['buy-a-house'].title,
          goal: {
            amount,
            reachDate,
          },
        },
      }),
    );
  };

  useEffect(() => {
    const goals = localStorage.getItem('goals');
    const persistedGoals = goals ? JSON.parse(goals) : INFO_GOALS;
    const amount = persistedGoals['buy-a-house'].goal.amount;
    const reachDate = persistedGoals['buy-a-house'].goal.reachDate;
    const formatReachDate = reachDate ? new Date(reachDate) : initialMonth;

    setAmount(amount);
    setReachDate(formatReachDate);
  }, []);

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
