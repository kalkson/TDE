import styled from 'styled-components';
import breakpoints from '../../../styles/breakpoints';

const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 180px;
  box-shadow: 0 0 90px 30px rgba(0, 0, 0, 0.4);

  @media ${breakpoints.tablet} {
    width: 700px;
    height: 400px;
  }
  /* transition: transform 300ms linear; */

  &:hover {
    transform: translateY(-15px);
    cursor: pointer;
  }

  .card {
    &__image {
      width: 60%;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;

      & svg {
        width: 80%;
        height: 80%;
      }
    }

    &__description {
      width: 40%;
      background: var(--primaryColor);
      padding: 20px;

      &__heading {
        color: var(--bgColor);
      }
    }
  }
`;

export default StyledCard;
