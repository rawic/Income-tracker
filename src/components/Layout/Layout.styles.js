import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import backgroundPattern from 'assets/images/background-pattern.jpg';

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap');

	*, *::before, *::after {
		box-sizing: border-box;
	}

  body {
		${reset}
		background-image: url(${backgroundPattern});
		background-position: center;
		color: ${({ theme }) => theme.color.white};
		display: flex;
		font-family: ${({ theme }) => theme.font.family};
		font-size: ${({ theme }) => theme.font.size.primary};
		justify-content: center;
		padding-top: 112px;
	}

	button {
		cursor: pointer;
	}
	
	input {
		background-color: transparent;
		border: 0;
	}

	input:focus {
		outline: none;
	}

	::-webkit-input-placeholder {
		color: ${({ theme }) => theme.color.dim};
		opacity: 1;
	}

	input:placeholder {
		color: ${({ theme }) => theme.color.dim};
	}
`;

export const Wrapper = styled.section`
  max-width: 684px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;
