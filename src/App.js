import React, { useState, useEffect } from 'react';
import initialIncomes from './data';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import IncomeForm from './components/Income/Form/Form';
import IncomeList from './components/Income/List/List';

const App = () => {
  const [income, setIncome] = useState(initialIncomes);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    const total = income.reduce((prev, curr) => prev + parseInt(curr.amount, 10), 0);

    setTotalIncome(total);
  }, [income]);

  return (
    <Layout>
      <Header totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome} />
      <IncomeList income={income} setIncome={setIncome} />
    </Layout>
  );
};

export default App;
