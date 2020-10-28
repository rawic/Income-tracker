import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  background: {
    primary: '#222222',
    secondary: '#383838',
    tertiary: '#454545',
  },
  color: {
    black: '#000000',
    dim: '#B0B0B0',
    highlight: '#FFC42D',
    secondary: '#608CFF',
    white: '#ffffff',
  },
  font: {
    size: {
      h1: '36px',
      h2: '18px',
      primary: '14px',
      secondary: '16px',
    },
    weight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    family: "'Work Sans', sans-serif",
  },
  borderRadius: '12px',
};

export default theme;
