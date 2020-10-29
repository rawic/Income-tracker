/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import StyledInput from './Input.styles';

import InputI from './Input.interface'

const Input: React.FC<InputI> = ({ ...props }) => <StyledInput {...props} />;

export default Input;
