import styled from 'styled-components';

export const StyledHeadings = styled.div`
  display: flex;
`;

export const StyledHeading = styled.p`
  color: ${({ theme }) => theme.color.highlight};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: ${({ theme }) => theme.font.size.secondary};
  padding-left: 25px;
  padding-right: 25px;
  flex: 1 0 auto;
  &:nth-child(n + 2) {
    width: 160px;
    flex: 0 0 160px;
  }
`;
