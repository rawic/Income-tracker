import React from 'react';
import { StyledWrapper, StyledToast } from './Toast.style';

const Toast = ({ children }) => <StyledToast>{children}</StyledToast>;

Toast.Wrapper = StyledWrapper;

export default Toast;
