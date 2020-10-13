import React from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import { formatDate, parseDate } from 'react-day-picker/moment';

const classNames = DayPickerInput.defaultProps.classNames;

const DayPickerInputWrapper = ({ className = '', ...rest }) => (
  <DayPickerInput
    classNames={{
      ...classNames,
      container: `${classNames.container} ${className}`,
    }}
    format="DD/MM/YYYY"
    formatDate={formatDate}
    parseDate={parseDate}
    placeholder={`${formatDate(new Date())}`}
    {...rest}
  />
);

const DayPicker = styled(DayPickerInputWrapper)`
  &.DayPickerInput {
    width: 110px;
  }
  .DayPicker-Day {
    color: ${({ theme }) => theme.color.highlight};
  }
  input {
    color: ${({ theme }) => theme.color.dim};
  }
`;

export default DayPicker;
