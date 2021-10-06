import { add, sub, getYear as getYearFns } from 'date-fns';

export const addMonth = (date: Date, value: number) =>
  add(date, { months: value });

export const subMonth = (date: Date, value: number) =>
  sub(date, { months: value });

export const getMonth = (date: Date) =>
  new Date(date).toLocaleString('en-US', { month: 'long' });

export const getYear = (date: Date) => getYearFns(date);
