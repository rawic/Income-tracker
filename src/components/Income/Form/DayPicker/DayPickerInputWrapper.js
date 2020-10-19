import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { formatDate, parseDate } from 'react-day-picker/moment';

const { classNames } = DayPickerInput.defaultProps;

const DayPickerInputWrapper = ({ className = '' }) => (
  <DayPickerInput
    classNames={{
      ...classNames,
      container: `${classNames.container} ${className}`,
    }}
    format="DD/MM/YYYY"
    formatDate={formatDate}
    parseDate={parseDate}
    placeholder={`${formatDate(new Date())}`}
  />
);

export default DayPickerInputWrapper;
