import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import LocaleUtils from 'react-day-picker/moment';
import DayPickerI from '../DayPicker.interface'

// @ts-ignore
const { classNames } = DayPickerInput.defaultProps;

const DayPickerInputWrapper: React.FC<DayPickerI> = ({ className, onDayChange, value, placeholder }) => (
  <DayPickerInput
    classNames={{
      ...classNames,
      container: `${classNames.container} ${className}`,
    }}
    format="DD/MM/YYYY"
    formatDate={LocaleUtils.formatDate}
    parseDate={LocaleUtils.parseDate}
    onDayChange={onDayChange}
    value={value}
    placeholder={placeholder}
  />
);

export default DayPickerInputWrapper;
