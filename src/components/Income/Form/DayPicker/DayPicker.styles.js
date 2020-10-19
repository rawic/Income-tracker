import styled from 'styled-components';
import DayPickerInputWrapper from './DayPickerInputWrapper';

const StyledDayPicker = styled(DayPickerInputWrapper)`
  &.DayPickerInput {
    width: 110px;
  }
  .DayPicker-Day {
    color: ${({ theme }) => theme.color.black};
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: ${({ theme }) => theme.color.highlight};
    color: ${({ theme }) => theme.color.white};
  }
  input {
    color: ${({ theme }) => theme.color.dim};
  }
`;

export default StyledDayPicker;
