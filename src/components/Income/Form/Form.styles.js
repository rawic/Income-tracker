import styled from 'styled-components';

export const Form = styled.form`
  align-items: center;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  height: 45px;
`;
