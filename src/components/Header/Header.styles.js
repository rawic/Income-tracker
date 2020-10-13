import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.h1};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  text-align: center;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;
`;

export const Total = styled.p`
  font-size: ${({ theme }) => theme.font.size.h2};
  text-align: right;
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  margin-bottom: 12px;
`;
