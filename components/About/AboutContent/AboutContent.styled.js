import styled from 'styled-components';
import breakpoints from '../../../styles/breakpoints';

const StyledAboutContent = styled.div`
  align-self: center;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    margin: 120px 0;
    align-items: center;
    max-width: 100%;
  }

  .about__content {
    @media ${breakpoints.tablet} {
      width: auto;
    }

    &__image,
    &__paragraph {
      width: 100%;
      margin: 40px 0;
      @media ${breakpoints.tablet} {
        width: 40%;
        margin: 0;
      }
    }

    &__paragraph {
      color: var(--bgColor);
      position: relative;
      padding: 20px;

      &__border {
        position: absolute;
        background: var(--secondaryColor);
        /* width: 0px; */
        /* height: 0px; */
      }

      &__image {
        & svg {
          width: 100%;
        }
      }

      & > span:nth-of-type(1) {
        left: 0;
        bottom: 0;
        height: 0;
        width: 2px;
      }

      & > span:nth-of-type(2) {
        top: 0;
        left: 0;
        width: 0;
        height: 2px;
      }

      & > span:nth-of-type(3) {
        right: 0;
        top: 0;
        height: 0;
        width: 2px;
      }

      & > span:nth-of-type(4) {
        bottom: 0;
        right: 0;
        width: 0;
        height: 2px;
      }
    }
  }
`;

export default StyledAboutContent;
