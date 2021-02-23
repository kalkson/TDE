import React from 'react';
import styled from 'styled-components';
import StyledAbout from './About.styled';
import Heading from '../Heading/Heading';
import AboutContent from './AboutContent/AboutContent';

const StyledBackground = styled.div`
  width: 100vw;
  background: #152549;
  height: fit-content;
`;

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
