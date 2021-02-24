import React from 'react';
import propTypes from 'prop-types';
import StyledCard from './Card.styled';

const Card = ({ children }) => <StyledCard className="card">{children}</StyledCard>;

Card.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default Card;
