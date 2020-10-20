import React from 'react';
import { incomesType, setIncomesType } from 'types';
import Table from 'components/Table/Table';
import { sortDateDesc } from 'utilities';
import { StyledHeading, StyledWrapper } from './List.styles';
import ListItem from './ListItem/ListItem';

const IncomeList = ({ incomes, setIncomes }) => {
  const removeIncome = (id) => {
    const newIncome = incomes.filter((i) => i.id !== id);
    setIncomes(newIncome);
  };

  return (
    <StyledWrapper>
      <StyledHeading>Incomes</StyledHeading>
      <Table>
        <Table.Header>
          <Table.Heading>Description</Table.Heading>
          <Table.Heading>Date</Table.Heading>
          <Table.Heading>Amount (PLN)</Table.Heading>
          <Table.Heading />
        </Table.Header>

        <Table.Body>
          {incomes.sort(sortDateDesc).map((income) => (
            <ListItem
              key={income.id}
              income={income}
              index={income.id}
              removeIncome={removeIncome}
            />
          ))}
        </Table.Body>
      </Table>
    </StyledWrapper>
  );
};

IncomeList.propTypes = {
  incomes: incomesType.isRequired,
  setIncomes: setIncomesType.isRequired,
};

export default IncomeList;
