import React from 'react';
import StyledDayPicker from './DayPicker.styles';

import DayPickerI from './DayPicker.interface'

const DayPicker: React.FC<DayPickerI> = ({ onDayChange, placeholder, value }) => (
  <StyledDayPicker onDayChange={onDayChange} placeholder={placeholder} value={value} />
);

export default DayPicker;
