import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import gsap from 'gsap';
import StyledDescription from './Description.styled';
import Heading from '../Heading/Heading';
import Attachment from './Attachment/Attachment';

const StyledBackground = styled.div`
  background: var(--bgColor) url('assets/icons/background-2.svg') top center no-repeat;
  display: flex;
  position: relative;

  .content-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .sticky-image {
    width: 30vw;
    height: 90vh;
    position: sticky;
    top: 5vh;
    right: 0;
    overflow: hidden;

    & > * {
      position: absolute;
    }

    & > *:first-child {
      z-index: 1;
    }

    display: none;

    @media (min-width: 1024px) {
      display: block;
    }

    & > *:nth-child(2) {
      z-index: 2;
      transform: translateY(100%);
    }

    & > *:nth-child(3) {
      z-index: 3;
      transform: translateY(100%);
    }
    /* margin-top: 15px; */
  }
`;

const Description = () => {
  const wrapper$ = useRef(null);
  const container$ = useRef(null);

  useEffect(() => {
    const elements = Array.from(container$.current.children);

    let canChange = true;
    let canChange2 = true;

    document.addEventListener('scroll', (e) => {
      const { top } = wrapper$.current.getBoundingClientRect();
      const { offsetHeight: height } = wrapper$.current;

      console.log(top, height);

      if (top < -400 && top > -900 && canChange) {
        canChange = false;
        gsap.to(elements[1], {
          y: '0',
          onComplete: () => {
            canChange = true;
          },
        });
      } else if (top >= -400 && canChange) {
        canChange = false;
        gsap.to(elements[1], {
          y: '100%',
          onComplete: () => {
            canChange = true;
          },
        });
      }

      if (top < -1500 && top > -2000 && canChange2) {
        canChange2 = false;
        gsap.to(elements[2], {
          y: '0',
          onComplete: () => {
            canChange2 = true;
          },
        });
      } else if (top >= -1500 && canChange2) {
        canChange2 = false;
        gsap.to(elements[2], {
          y: '100%',
          onComplete: () => {
            canChange2 = true;
          },
        });
      }
    });
  }, []);

  return (
    <StyledBackground>
      <StyledDescription className="container">
        <Heading className="description__heading">
          How it <span style={{ color: 'var(--secondaryColor)' }}>works</span>?
        </Heading>
        <div className="content-container" ref={wrapper$}>
          <Attachment />
          <div className="sticky-image" ref={container$}>
            <Image src="/assets/photos/think.jpg" layout="fill" objectFit="cover" />
            <Image src="/assets/photos/do.jpg" layout="fill" objectFit="cover" />
            <Image src="/assets/photos/think.jpg" layout="fill" objectFit="cover" />
          </div>
        </div>
      </StyledDescription>
    </StyledBackground>
  );
};

export default Description;
