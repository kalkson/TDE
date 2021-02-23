import React from 'react';
import StyledDescription, { StyledBackground } from './Description.styled';
import Heading from '../Atoms/Heading/Heading';
import Attachment from './Attachment/Attachment';
import ImageWrapper from './ImageWrapper/ImageWrapper';

const Description = () => (
  <StyledBackground>
    <StyledDescription className="container">
      <Heading className="description__heading">
        How it <span style={{ color: 'var(--secondaryColor)' }}>works</span>?
      </Heading>
      <div className="description__content">
        <Attachment />
        <ImageWrapper />
      </div>
    </StyledDescription>
  </StyledBackground>
);

export default Description;
