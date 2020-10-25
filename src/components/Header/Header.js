import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from 'utilities';
import { Heading, Total } from './Header.styles';

const Header = ({ totalIncome }) => (
  <header>
    <Heading>Income Tracker</Heading>
    <Total>
      PLN&nbsp;
      <span data-testid="total-income">{formatPrice(totalIncome)}</span>
    </Total>
  </header>
);

Header.propTypes = {
  totalIncome: PropTypes.number.isRequired,
};

export default Header;
