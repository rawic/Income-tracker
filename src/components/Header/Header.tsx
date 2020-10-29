import React from 'react';
import { formatPrice } from 'utilities';
import { Heading, Total } from './Header.styles';

const Header: React.FC<{ totalIncome: number }>= ({ totalIncome }) => (
  <header>
    <Heading>Income Tracker</Heading>
    <Total>
      PLN&nbsp;
      <span data-testid="total-income">{formatPrice(totalIncome)}</span>
    </Total>
  </header>
);

export default Header;
