import styled from 'styled-components';

const StyledForm = styled.form`
  align-items: center;
  background-color: ${({ theme }) => theme.background.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  height: 45px;
`;

export default StyledForm;
