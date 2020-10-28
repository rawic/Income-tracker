import styled from 'styled-components';

export const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.font.size.h2};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding-left: 25px;
  margin-bottom: 20px;
`;

export const StyledWrapper = styled.section`
  margin-top: 20px;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 12px;
  padding-top: 25px;
  padding-bottom: 25px;
`;
