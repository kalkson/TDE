import styled from 'styled-components';

const StyledButton = styled.button`
  width: 300px;
  background: var(--secondaryColor);
  font-size: 3.2rem;
  font-weight: 500;
  color: var(--primaryColor);
  border-radius: 32px;
  border: none;
  padding: 10px 0;
  box-shadow: 0 3px 24px black;

  transition: transform 300ms linear;

  &:hover {
    transform: translateY(-5px);
  }
`;

export default StyledButton;
