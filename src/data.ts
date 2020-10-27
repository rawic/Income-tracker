import { v4 as uuidv4 } from 'uuid';
import { IncomeI } from 'utilities/income.interface'

const incomes: IncomeI[] = [
  {
    id: uuidv4(),
    description: 'Income tracker - React app',
    date: {
      date: 'Mon Oct 12 2020 12:00:00 GMT+0200 (Central European Summer Time)',
      formatted: '12/10/2020',
    },
    amount: 1250.76,
  },
  {
    id: uuidv4(),
    description: 'Mowing the lawn',
    date: {
      date: 'Fri Oct 09 2020 12:00:00 GMT+0200 (Central European Summer Time)',
      formatted: '09/10/2020',
    },
    amount: 50,
  },
  {
    id: uuidv4(),
    description: 'Taking out the trash',
    date: {
      date: 'Fri Oct 02 2020 12:00:00 GMT+0200 (Central European Summer Time)',
      formatted: '02/10/2020',
    },
    amount: 5,
  },
  {
    id: uuidv4(),
    description: 'Performance at a concert',
    date: {
      date: 'Thu Sep 24 2020 12:00:00 GMT+0200 (Central European Summer Time)',
      formatted: '24/09/2020',
    },
    amount: 500,
  },
  {
    id: uuidv4(),
    description: 'Childcare',
    date: {
      date: 'Fri Sep 25 2020 12:00:00 GMT+0200 (Central European Summer Time)',
      formatted: '25/09/2020',
    },
    amount: 120,
  },
  {
    id: uuidv4(),
    description: 'Pocket money',
    date: {
      date: 'Tue Sep 15 2020 12:00:00 GMT+0200 (Central European Summer Time)',
      formatted: '15/09/2020',
    },
    amount: 100,
  },
];

export default incomes;
