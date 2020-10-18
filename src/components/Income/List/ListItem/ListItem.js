import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledListItem, StyledSingleInfo } from './ListItem.styles';

import { formatPrice } from 'utilities';

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

  const themeContext = useContext(ThemeContext);

  return (
    <StyledListItem>
      {/* <button onClick={() => handleRemove(index)} type="button">
        x
      </button> */}
      {/* TODO: Pass it as an array? */}
      <StyledSingleInfo>{description}</StyledSingleInfo>
      <StyledSingleInfo>
        <FontAwesomeIcon
          icon={['far', 'clock']}
          color={themeContext.color.secondary}
        />{' '}
        {date.formatted}
      </StyledSingleInfo>
      <StyledSingleInfo>
        <FontAwesomeIcon
          icon={['fas', 'coins']}
          color={themeContext.color.highlight}
        />{' '}
        {formatPrice(amount)}
      </StyledSingleInfo>
    </StyledListItem>
  );
};

export default ListItem;
