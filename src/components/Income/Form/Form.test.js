import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

import theme from 'themes/default';

import incomes from 'data';

describe('Form', () => {
  test('render Form component', () => {
    const onChange = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Form incomes={incomes} setIncomes={onChange} />
      </ThemeProvider>
    );
  });
});
