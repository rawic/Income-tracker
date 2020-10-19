import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatPrice } from 'utilities';
import { StyledCell, StyledRemoveBtn, StyledRow } from './ListItem.styles';

const ListItem = ({ income: { description, amount, date }, index, removeIncome }) => {
  const handleRemove = (i) => {
    removeIncome(i);
  };

  const themeContext = useContext(ThemeContext);

  return (
    <StyledRow>
      <StyledCell>{description}</StyledCell>

      <StyledCell>
        <FontAwesomeIcon icon={['far', 'clock']} color={themeContext.color.secondary} />{' '}
        {date.formatted}
      </StyledCell>

      <StyledCell>
        <FontAwesomeIcon icon={['fas', 'coins']} color={themeContext.color.highlight} />{' '}
        {formatPrice(amount)}
      </StyledCell>

      <StyledCell>
        <StyledRemoveBtn onClick={() => handleRemove(index)} type="button">
          x
        </StyledRemoveBtn>
      </StyledCell>
    </StyledRow>
  );
};

export default ListItem;
