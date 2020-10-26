import { arrayOf, exact, string, number, func } from 'prop-types';

export const incomesType = arrayOf(
  exact({
    id: string.isRequired,
    description: string.isRequired,
    date: exact({
      date: string.isRequired,
      formatted: string.isRequired,
    }),
    amount: number.isRequired,
  })
);

export const setIncomesType = func;
