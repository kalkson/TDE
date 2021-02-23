import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Logo from '../../public/assets/icons/logo.svg';
import HeroSVG from '../../public/assets/icons/hero.svg';
import Button from '../Atoms/Button/Button';
import ArrowsSVG from '../../public/assets/icons/scroll-arrows.svg';
import StyledHeader from './Header.styled';

const StyledNav = styled.nav`
  margin-top: 20px;

  & > nav {
    & > a {
      margin-left: 15px;
      font-weight: 500;
      color: var(--primaryColor);
    }
  }
`;

const StyledBackground = styled.div`
  width: 100%;
  height: fit-content;
  background: url('assets/icons/background-1.svg') center bottom no-repeat;
`;

const Header = () => {
  const span1$ = useRef(null);
  const span2$ = useRef(null);
  const span3$ = useRef(null);
  const span4$ = useRef(null);
  const span5$ = useRef(null);
  const span6$ = useRef(null);

  const image$ = useRef(null);

  useEffect(() => {
    gsap.fromTo(image$.current, { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 0.5 });

    const timeline = gsap.timeline();
    timeline.fromTo(span2$.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    timeline.fromTo(span4$.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    timeline.fromTo(span6$.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });

    console.log(image$);
  }, []);

  return (
    <StyledBackground>
      <StyledHeader className="container">
        <StyledNav className="d-flex flex-row justify-content-between">
          <Logo />
          <nav className="align-self-center">
            <a type="button" href="localhost:3000">
              What is TDE?
            </a>
            <a type="button" href="localhost:3000">
              Begin
            </a>
          </nav>
        </StyledNav>
        <div className="hero-container">
          <div className="hero-text">
            <span className="hero-text-element" ref={span1$}>
              think
            </span>
            <span className="hero-text-element" ref={span2$}>
              deeply
            </span>
            <span className="hero-text-element" ref={span3$}>
              do
            </span>
            <span className="hero-text-element" ref={span4$}>
              wisely
            </span>
            <span className="hero-text-element" ref={span5$}>
              enjoy
            </span>
            <span className="hero-text-element" ref={span6$}>
              strongly
            </span>
          </div>
          <div ref={image$} className="hero-image">
            <HeroSVG />
          </div>
        </div>
        <div className="hero-button">
          <Button>Click here</Button>
          <span className="hero-button__add">or scroll down</span>
          <ArrowsSVG className="hero-button__image" />
        </div>
      </StyledHeader>
    </StyledBackground>
  );
};

export default Header;
