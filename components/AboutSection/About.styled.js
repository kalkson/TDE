import styled from 'styled-components';

const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px 0 0;

  .about {
    &__heading {
      margin: 0 auto;
      color: var(--bgColor);
    }
  }
`;

export const StyledBackground = styled.div`
  width: 100%;
  background: #152549;
  height: fit-content;
`;

export default StyledAbout;
