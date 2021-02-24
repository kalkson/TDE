import styled from 'styled-components';

export const StyledBackground = styled.div`
  width: 100%;
  background: var(--bgColor);
  height: 1000px;
`;

const StyledCards = styled.section`
  padding: 200px 0;
  display: flex;
  justify-content: center;
  position: relative;

  & .card {
    position: absolute;
  }
`;

export default StyledCards;
