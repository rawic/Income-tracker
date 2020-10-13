import React from 'react';
import StyledSubmitButton from './SubmitButton.styles';

const SubmitButton = ({ children }) => (
  <StyledSubmitButton type="submit">{children}</StyledSubmitButton>
);

export default SubmitButton;
