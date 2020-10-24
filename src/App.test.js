import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'themes/default';

import App from './App';

describe('App', () => {
  test('Add new income', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );

    const descriptionInput = screen.getByPlaceholderText('Income description');
    const amountInput = screen.getByPlaceholderText('Amount');
    const dateInput = screen.getByPlaceholderText('Date');

    fireEvent.change(descriptionInput, {
      target: { value: 'Income test description' },
    });

    fireEvent.change(amountInput, {
      target: { value: 1325.23 },
    });

    fireEvent.change(dateInput, {
      target: { value: '23/10/2020' },
    });

    fireEvent.click(screen.getByText('Add income'));

    expect(descriptionInput.value).toBe('');
    //expect(amountInput.value).toBe(null);
    expect(dateInput.value).toBe('');
  });
});
