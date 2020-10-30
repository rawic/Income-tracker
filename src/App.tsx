import React, { useState, useEffect } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import initialIncomes from 'data';
import Layout from 'components/Layout/Layout';
import Header from 'components/Header/Header';
import IncomeForm from 'components/Income/Form/Form';
import IncomeList from 'components/Income/List/List';

import AppI from './App.interface'

const App = () => {
  const { storedValue: incomes, setStoredValue: setIncomes }: AppI = useLocalStorage(
    'incomes',
    initialIncomes
  );

  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const total = incomes.reduce((prev, curr) => prev + curr.amount, 0);

    setTotalIncome(total);
  }, [incomes]);

  return (
    <Layout>
      <Header totalIncome={totalIncome} />
      <IncomeForm incomes={incomes} setIncomes={setIncomes} />
      <IncomeList incomes={incomes} setIncomes={setIncomes} />
    </Layout>
  );
};

export default App;
