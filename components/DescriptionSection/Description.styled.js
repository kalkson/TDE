import styled from 'styled-components';

export const StyledBackground = styled.div`
  background: var(--bgColor) url('assets/icons/background-2.svg') top center no-repeat;
  display: flex;
  position: relative;

  .description {
    &__content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

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
