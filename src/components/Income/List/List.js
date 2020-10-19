import React from 'react';
import Table from 'components/Table/Table';
import { sortDateDesc } from 'utilities';
import { StyledHeading, StyledWrapper } from './List.styles';
import ListItem from './ListItem/ListItem';

const IncomeList = ({ income, setIncome }) => {
  const removeIncome = (i) => {
    const newIncome = income.filter((v, index) => index !== i);
    setIncome(newIncome);
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
          {income.sort(sortDateDesc).map((value, index) => (
            <ListItem key={index} income={value} index={index} removeIncome={removeIncome} />
          ))}
        </Table.Body>
      </Table>
    </StyledWrapper>
  );
};

export default IncomeList;
