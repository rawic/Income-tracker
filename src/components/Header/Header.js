import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from 'utilities';
import { Heading, Total } from './Header.styles';

const Header = ({ totalIncome }) => (
  <header>
    <Heading>Income Tracker</Heading>
    <Total>
      PLN&nbsp;
      {formatPrice(totalIncome)}
    </Total>
  </header>
);

Header.propTypes = {
  totalIncome: PropTypes.number.isRequired,
};

export default Header;
