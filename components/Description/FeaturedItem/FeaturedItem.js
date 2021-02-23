import React from 'react';
import propTypes from 'prop-types';
import StyledFeaturedItem from './FeaturedItem.styled';
import Heading from '../../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';

const FeaturedItem = ({ heading, children }) => (
  <StyledFeaturedItem>
    <Heading>{heading}</Heading>
    <Paragraph>{children}</Paragraph>
  </StyledFeaturedItem>
);

FeaturedItem.propTypes = {
  heading: propTypes.string.isRequired,
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default FeaturedItem;
