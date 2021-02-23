import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

const StyledHeader = styled.header`
  position: relative;
  overflow: hidden;
  min-height: 800px;

  .hero-text {
    grid-template-columns: repeat(2, auto);
    display: grid;
    width: fit-content;
    margin-top: 100px;
    height: fit-content;

    & > span {
      font-size: 4rem;
      font-weight: 700;

      @media ${breakpoints.tablet} {
        font-size: 6rem;
      }
    }

    & > span:nth-child(even) {
      color: var(--secondaryColor);
    }

    & > span:nth-child(odd) {
      text-align: right;
      padding-right: 15px;
    }
  }

  .hero-image {
    display: none;

    @media ${breakpoints.tablet} {
      width: auto;
      height: auto;
      display: block;
      margin-top: 150px;
      margin-bottom: 150px;
    }
  }

  .hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${breakpoints.tablet} {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .hero-button {
    position: absolute;
    bottom: 120px;
    left: calc(50% - 150px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    @media ${breakpoints.tablet} {
      left: 150px;
    }

    &__add {
      color: var(--bgColor);
      margin-top: 10px;
    }

    &__image {
      margin-top: 10px;
      animation: arrow-pulse 1.4s infinite alternate-reverse;

      @keyframes arrow-pulse {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.2);
        }
      }
    }
  }
`;

export default StyledHeader;
