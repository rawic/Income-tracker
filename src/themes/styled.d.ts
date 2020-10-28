import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      primary: string,
      secondary: string,
      tertiary: string,
    },
    color: {
      black: string,
      dim: string,
      highlight: string,
      secondary: string,
      white: string,
    },
    font: {
      size: {
        h1: string,
        h2: string,
        primary: string,
        secondary: string,
      },
      weight: {
        regular: string,
        medium: string,
        semibold: string,
        bold: string,
      },
      family: string,
    },
    borderRadius: string,
  }
}