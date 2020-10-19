import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './Input.styles';

const Input = ({ type, id, placeholder, value, ...props }) => (
  <StyledInput
    type={type}
    name={id}
    id={id}
    placeholder={placeholder}
    autoComplete="off"
    value={value}
    {...props}
  />
);

export default Input;
