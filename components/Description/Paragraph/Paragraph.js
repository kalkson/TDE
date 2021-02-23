import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StyledParagraph = styled.p`
  font-size: 2rem;
  line-height: 3.2rem;
  padding-left: 20px;
`;

const Paragraph = ({ children }) => {
  const paragraph$ = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      paragraph$.current,
      { opacity: 0, y: '-100' },
      {
        opacity: 1,
        y: '0',
        scrollTrigger: {
          trigger: paragraph$.current,
        },
        start: 'top top',
      }
    );
  });

  return <StyledParagraph ref={paragraph$}>{children}</StyledParagraph>;
};

Paragraph.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default Paragraph;
