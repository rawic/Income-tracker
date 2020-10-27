import React from 'react';
import StyledSubmitButton from './SubmitButton.styles';

const SubmitButton: React.FC<{ children: string}> = ({ children }) => (
  <StyledSubmitButton type="submit">{children}</StyledSubmitButton>
);

export default SubmitButton;
