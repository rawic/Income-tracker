import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import Input from './Input';

import theme from 'themes/default';

describe('Input', () => {
  test('renders Input component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Input type="text" name="test" />
      </ThemeProvider>
    );
  });
});
