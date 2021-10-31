import { useState, useEffect } from 'react';

import { INFO_GOALS } from 'persistence';

export const useHome = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const goals = localStorage.getItem('goals');
    const persistedGoals = goals ? JSON.parse(goals) : INFO_GOALS;

    const data = Object.keys(persistedGoals).map(key => ({
      name: key,
      ...persistedGoals[key],
    }));

    // @ts-ignore
    setGoals(data);
  }, []);

  return {
    goals,
  };
};
