import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const StyledHeading = styled.p`
  color: ${({ theme }) => theme.color.highlight};
  flex: 1 0 auto;
  font-size: ${({ theme }) => theme.font.size.secondary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding-left: 25px;
  padding-right: 25px;
  &:nth-child(n + 2) {
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
