import React from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { formatDate, parseDate } from 'react-day-picker/moment';

const { classNames } = DayPickerInput.defaultProps;

const DayPickerInputWrapper = ({ className = '', onDayChange, value, placeholder }) => (
  <DayPickerInput
    classNames={{
      ...classNames,
      container: `${classNames.container} ${className}`,
    }}
    format="DD/MM/YYYY"
    formatDate={formatDate}
    parseDate={parseDate}
    onDayChange={onDayChange}
    value={value}
    placeholder={placeholder}
  />
);

DayPickerInputWrapper.propTypes = {
  className: PropTypes.string,
  onDayChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

DayPickerInputWrapper.defaultProps = {
  className: '',
};

export default DayPickerInputWrapper;
