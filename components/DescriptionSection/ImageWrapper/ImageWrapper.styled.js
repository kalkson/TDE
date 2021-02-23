import styled from 'styled-components';

const StyledImageWrapper = styled.div`
  width: 30vw;
  height: 90vh;
  position: sticky;
  top: 5vh;
  right: 0;
  overflow: hidden;

  & > * {
    position: absolute;
  }

  & > *:first-child {
    z-index: 1;
  }

  display: none;

  @media (min-width: 1024px) {
    display: block;
  }

  & > *:nth-child(2) {
    z-index: 2;
    transform: translateY(100%);
  }

  & > *:nth-child(3) {
    z-index: 3;
    transform: translateY(100%);
  }
  /* margin-top: 15px; */
`;

export default StyledImageWrapper;
