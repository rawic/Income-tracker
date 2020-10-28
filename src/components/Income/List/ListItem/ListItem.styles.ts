import styled from 'styled-components';

export const StyledRow = styled.div`
  display: flex;
  position: relative;
`;

export const StyledCell = styled.div`
  border-bottom: 1px solid #484848;
  flex: 1 0 auto;
  padding: 10px 25px;
  &:nth-of-type(n + 2) {
    flex: 0 0 160px;
    width: 160px;
  }
  &:last-child {
    align-items: center;
    display: flex;
    flex: 0 0 40px;
    padding: 0;
    text-align: center;
    width: 40px;
  }
`;

export const StyledRemoveBtn = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  &:hover {
    color: ${({ theme }) => theme.color.highlight};
  }
`;
