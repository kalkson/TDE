import React from 'react';
import propTypes from 'prop-types';
import StyledHeading from './Heading.styled';

const Heading = ({ children, ...props }) => <StyledHeading {...props}>{children}</StyledHeading>;

Heading.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default Heading;
