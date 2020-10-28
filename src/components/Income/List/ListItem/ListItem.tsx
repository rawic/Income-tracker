import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatPrice } from 'utilities';
import { StyledCell, StyledRemoveBtn, StyledRow } from './ListItem.styles';

import { IncomeI } from 'utilities/income.interface'

const ListItem = ({ income: { id, description, amount, date }, removeIncome }: { income: IncomeI, removeIncome: (id: string) => void }) => {
  const themeContext = useContext(ThemeContext);

  const handleRemove = (incomeId: string) => {
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

export default ListItem;
