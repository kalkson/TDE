import React from 'react';
import StyledAbout, { StyledBackground } from './About.styled';
import Heading from '../Atoms/Heading/Heading';
import AboutContent from './AboutContent/AboutContent';

const About = () => (
  <StyledBackground>
    <StyledAbout className="container">
      <Heading className="about__heading">
        What is <span style={{ color: 'var(--secondaryColor)' }}>TDE?</span>
      </Heading>
      <AboutContent />
    </StyledAbout>
  </StyledBackground>
);

export default About;
