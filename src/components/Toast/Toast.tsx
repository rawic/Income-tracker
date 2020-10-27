import React from 'react';
import { StyledWrapper, StyledToast } from './Toast.style';

const Toast = ({ children }: ToastProps) => <StyledToast>{children}</StyledToast>;

type ToastProps = {
  children: string
}

Toast.Wrapper = StyledWrapper;

export default Toast;
