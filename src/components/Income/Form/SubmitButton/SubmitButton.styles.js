import styled from 'styled-components';

const StyledSubmitButton = styled.button`
  background-color: transparent;
  background-size: 200% auto;
  border: 0;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  color: ${({ theme }) => theme.color.white};
  flex-shrink: 0;
  flex-shrink: 0;
  font-family: inherit;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  height: 100%;
  overflow: hidden;
  padding-left: 15px;
  padding-right: 15px;
  text-transform: uppercase;
  transition: 0.5s;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.background.tertiary} 0%,
    ${({ theme }) => theme.background.tertiary} 51%,
    #222 100%
  );
  &:hover {
    background-position: right center;
  }
`;

export default StyledSubmitButton;
