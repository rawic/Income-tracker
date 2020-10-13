import React from 'react';
import { Heading, Total } from './Header.styles';

const Header = ({ totalIncome }) => (
  <header>
    <Heading>Income Tracker</Heading>
    <Total>PLN {totalIncome}</Total>
  </header>
);

export default Header;
