import React from 'react';
import { StyledListItem, StyledSingleInfo } from './ListItem.styles';

// TODO: Improve component name

const ListItem = ({
  income: { description, amount, date },
  index,
  removeIncome,
}) => {
  // TODO: Add remove income
  const handleRemove = (i) => {
    removeIncome(i);
  };

  return (
    <StyledListItem>
      {/* <button onClick={() => handleRemove(index)} type="button">
        x
      </button> */}
      {/* TODO: Pass it as an array? */}
      <StyledSingleInfo>{description}</StyledSingleInfo>
      <StyledSingleInfo>{date}</StyledSingleInfo>
      <StyledSingleInfo>{amount}</StyledSingleInfo>
    </StyledListItem>
  );
};

export default ListItem;
