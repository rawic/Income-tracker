/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import StyledInput from './Input.styles';

const Input: React.FC<InputI> = ({ ...props }) => <StyledInput {...props} />;

interface InputI {
  type: string,
  name?: string | undefined,
  min?: string,
  step?: string,
  placeholder?: string | undefined,
  value?: string | number | undefined,
  autoComplete?: string | undefined,
  width?: string | undefined,
  onChange?: (...args: any[]) => void | undefined,
}

export default Input;
