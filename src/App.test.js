import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components';
import theme from 'themes/default';

import './fontawesome';
import App from './App';

describe('App', () => {
  test('Add new income', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );

    const totalIncome = screen.getByTestId('total-income');
    const totalIncomeValue = totalIncome.textContent;
    const descriptionInput = screen.getByPlaceholderText('Income description');
    const amountInput = screen.getByPlaceholderText('Amount');
    const dateInput = screen.getByPlaceholderText('Date');

    const descriptionText = 'Income test description';
    const amountValue = 13.75;
    const dateValue = '23/10/2020';
    
    userEvent.paste(amountInput, amountValue);
    userEvent.paste(dateInput, dateValue);
    userEvent.paste(descriptionInput, descriptionText);

    userEvent.click(screen.getByText('Add income'));

    const newTotalIncomeValue = totalIncome.textContent;

    expect(descriptionInput.value).toBe('');
    expect(amountInput.value).toBe('');
    expect(dateInput.value).toBe('');
    expect(totalIncomeValue === newTotalIncomeValue).toBeFalsy();

    expect(screen.getByText('Income test description')).toBeInTheDocument();
  });
});
