import { add, sub, getYear as getYearFns, differenceInMonths } from 'date-fns';

export const addMonth = (date: Date, value: number) =>
  add(date, { months: value });

export const subMonth = (date: Date, value: number) =>
  sub(date, { months: value });

export const getMonth = (date: Date) =>
  new Date(date).toLocaleString('en-US', { month: 'long' });

export const getYear = (date: Date) => getYearFns(date);

export const distanceBetweenDates = (initialDate: Date, endDate: Date) =>
  differenceInMonths(endDate, initialDate) + 1;
