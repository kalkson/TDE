import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import Logo from '../../public/assets/icons/logo.svg';
import HeroSVG from '../../public/assets/icons/hero.svg';
import Button from '../Button/Button';
import ArrowsSVG from '../../public/assets/icons/scroll-arrows.svg';
import breakpoints from '../../styles/breakpoints';

const StyledHeader = styled.header`
  position: relative;
  overflow-y: hidden;
  min-height: 800px;

  .hero-text {
    grid-template-columns: repeat(2, auto);
    display: grid;
    width: fit-content;
    margin-top: 100px;
    height: fit-content;

    & > span {
      font-size: 4rem;
      font-weight: 700;

      @media ${breakpoints.tablet} {
        font-size: 6rem;
      }
    }

    & > span:nth-child(even) {
      color: var(--secondaryColor);
    }

    & > span:nth-child(odd) {
      text-align: right;
      padding-right: 15px;
    }
  }

  .hero-image {
    display: none;

    @media ${breakpoints.tablet} {
      width: auto;
      height: auto;
      display: block;
      margin-top: 150px;
      margin-bottom: 150px;
    }
  }

  .hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${breakpoints.tablet} {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  }

  .hero-button {
    position: absolute;
    bottom: 120px;
    left: calc(50% - 150px);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    @media ${breakpoints.tablet} {
      left: 150px;
    }

    &__add {
      color: var(--bgColor);
      margin-top: 10px;
    }

    &__image {
      margin-top: 10px;
      animation: arrow-pulse 1.4s infinite alternate-reverse;

      @keyframes arrow-pulse {
        0% {
          transform: scale(1);
        }
        100% {
          transform: scale(1.2);
        }
      }
    }
  }
`;

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
  width: 100vw;
  height: fit-content;
  background: url('assets/icons/background-1.svg') left bottom no-repeat;
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
