/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import StyledInput from './Input.styles';

const Input = ({ ...props }) => <StyledInput {...props} />;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoComplete: PropTypes.string,
  width: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: undefined,
  value: undefined,
  autoComplete: undefined,
  width: undefined,
  onChange: undefined,
};

export default Input;
