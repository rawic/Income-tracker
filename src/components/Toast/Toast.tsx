import React from 'react';
import { StyledWrapper, StyledToast } from './Toast.style';
import ToastCompositionI from './Toast.interface';

const Toast: React.FC & ToastCompositionI = ({ children }) => <StyledToast>{children}</StyledToast>;

Toast.Wrapper = StyledWrapper;

export default Toast;
