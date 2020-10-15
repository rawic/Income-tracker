import React from 'react';
import { Heading, Total } from './Header.styles';

import { formatPrice } from 'utilities';

const Header = ({ totalIncome }) => (
  <header>
    <Heading>Income Tracker</Heading>
    <Total>PLN {formatPrice(totalIncome)}</Total>
  </header>
);

export default Header;
