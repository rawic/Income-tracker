import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Wrapper, GlobalStyle } from './Layout.styles';
import theme from 'themes/default';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
);

export default Layout;
