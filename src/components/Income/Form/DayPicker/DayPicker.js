import React from 'react';
import PropTypes from 'prop-types';
import StyledDayPicker from './DayPicker.styles';

const DayPicker = ({ onDayChange, placeholder, value }) => (
  <StyledDayPicker onDayChange={onDayChange} placeholder={placeholder} value={value} />
);

DayPicker.propTypes = {
  onDayChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

DayPicker.defaultProps = {
  placeholder: '',
};

export default DayPicker;
