import React, { useEffect, useRef } from 'react';
import propTypes from 'prop-types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import StyledHeading from './Heading.styled';

gsap.registerPlugin(ScrollTrigger);

const Heading = ({ children, ...props }) => {
  const heading$ = useRef(null);

  useEffect(() => {
    console.log(heading$);
    gsap.fromTo(
      heading$.current,
      { opacity: 0, y: '-50' },
      { opacity: 1, y: '0', scrollTrigger: { trigger: heading$.current } }
    );
  }, []);

  return (
    <StyledHeading {...props} ref={heading$}>
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default Heading;
