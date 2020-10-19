import styled from 'styled-components';

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.font.size.h1};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
`;

export const Total = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.h2};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  margin-bottom: 12px;
  text-align: right;
`;
