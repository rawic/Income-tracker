import React from 'react';
import Table from 'components/Table/Table';
import { StyledHeading, StyledWrapper } from './List.styles';
import ListItem from './ListItem/ListItem';

// TODO: Improve component name

const IncomeList = ({ income, setIncome }) => {
  // TODO: Add remove income
  const removeIncome = (i) => {
    const newIncome = income.filter((v, index) => index !== i);
    setIncome(newIncome);
  };

  // TODO: Fix sortByDate
  const sortByDate = (a, b) => {
    return a.date - b.date;
  };

  return (
    <StyledWrapper>
      <StyledHeading>Incomes</StyledHeading>
      <Table>
        <Table.Headings>
          <Table.Heading>Description</Table.Heading>
          <Table.Heading>Date</Table.Heading>
          <Table.Heading>Amount (PLN)</Table.Heading>
        </Table.Headings>

        <Table.Body>
          {income.sort(sortByDate).map((value, index) => (
            <ListItem
              key={index}
              income={value}
              index={index}
              removeIncome={removeIncome}
            />
          ))}
        </Table.Body>
      </Table>
    </StyledWrapper>
  );
};

export default IncomeList;
