import styled from 'styled-components';

const StyledInput = styled.input`
  align-items: center;
  color: ${({ theme }) => theme.color.dim};
  display: flex;
  flex: ${({ width }) => (width ? '0 0 ' + width + 'px' : '1 0 0')};
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.primary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  height: 100%;
  min-width: 100px;
  padding-left: 20px;
  padding-right: 20px;
  width: ${({ width }) => width && width + 'px'};
`;

export default StyledInput;
