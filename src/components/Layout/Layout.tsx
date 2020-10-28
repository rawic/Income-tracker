import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'themes/default';
import { Wrapper, GlobalStyle } from './Layout.styles';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
);

export default Layout;
