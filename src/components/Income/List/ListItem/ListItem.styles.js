import styled from 'styled-components';

export const StyledListItem = styled.div`
  display: flex;
`;

export const StyledSingleInfo = styled.div`
  padding: 10px 25px;
  flex: 1 0 auto;
  border-bottom: 1px solid #484848;
  &:nth-child(n + 2) {
    width: 160px;
    flex: 0 0 160px;
  }
`;
