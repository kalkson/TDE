import styled from 'styled-components';

const StyledDescription = styled.section`
  position: relative;
  /* overflow-x: initial; */

  .description {
    width: 100%;

    &__heading {
      margin: 350px auto 200px;
      color: var(--primaryColor);
      width: fit-content;
    }
  }
`;

export default StyledDescription;
