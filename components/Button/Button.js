import React from 'react';
import propTypes from 'prop-types';
import StyledButton from './Button.styled';

const Button = ({ children, ...props }) => <StyledButton {...props}>{children}</StyledButton>;

Button.propTypes = {
  children: propTypes.node.isRequired,
  className: propTypes.string,
};

Button.defaultProps = {
  className: null,
};

export default Button;
