import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatPrice } from 'utilities';
import { StyledCell, StyledRemoveBtn, StyledRow } from './ListItem.styles';

const ListItem = ({ income: { id, description, amount, date }, removeIncome }) => {
  const themeContext = useContext(ThemeContext);

  const handleRemove = (incomeId) => {
    removeIncome(incomeId);
  };

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
        <StyledRemoveBtn onClick={() => handleRemove(id)} type="button">
          x
        </StyledRemoveBtn>
      </StyledCell>
    </StyledRow>
  );
};

ListItem.propTypes = {
  income: PropTypes.exact({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    date: PropTypes.exact({
      date: PropTypes.string.isRequired,
      formatted: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  removeIncome: PropTypes.func.isRequired,
};

export default ListItem;
