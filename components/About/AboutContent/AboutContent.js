import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import StyledAboutContent from './AboutContent.styled';
import GirlSVG from '../../../public/assets/icons/girl-enjoy.svg';

gsap.registerPlugin(ScrollTrigger);

const AboutContent = () => {
  const paragraph$ = useRef(null);
  const span1$ = useRef(null);
  const span2$ = useRef(null);
  const span3$ = useRef(null);
  const span4$ = useRef(null);
  const image$ = useRef(null);

  const duration = 0.4;

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: image$.current,
        start: 'top bottom',
      },
    });

    timeline.fromTo(
      paragraph$.current,
      {
        opacity: 0,
        y: '-100',
      },
      {
        opacity: 1,
        y: 0,
      }
    );

    timeline.fromTo(
      span1$.current,
      {
        height: 0,
        immediateRender: false,
        autoRound: false,
        ease: 'linear',
      },
      {
        height: '100%',
        duration,
      }
    );

    timeline.fromTo(
      span2$.current,
      {
        width: 0,
        immediateRender: false,
        autoRound: false,
        ease: 'linear',
      },
      {
        width: '100%',
        duration,
      }
    );

    timeline.fromTo(
      span3$.current,
      {
        height: 0,
        immediateRender: false,
        autoRound: false,
        ease: 'linear',
      },
      {
        height: '100%',
        duration,
      }
    );

    timeline.fromTo(
      span4$.current,
      {
        width: 0,
        immediateRender: false,
        autoRound: false,
        ease: 'ease-in',
      },
      {
        width: '100%',
        duration,
      }
    );

    timeline.fromTo(image$.current, { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1 });
  }, []);

  return (
    <StyledAboutContent className="about__content">
      <div ref={image$} className="about__content__image">
        <GirlSVG viewBox="0 0 360.944 374.213" />
      </div>
      <p className="about__content__paragraph" ref={paragraph$}>
        TDE is a simple set of rules to make your life better. But as with the rules, you have to follow them fairly and
        accurately - only then will you see the effects of your hard work. <br />
        <br />
        In today&lsquo;s world taken over by computers and social media, it is hard for us people to focus on taking
        responsibility for our lives. We like to complain and blame everything else, but not ourselves for our fate.{' '}
        <br />
        <br />
        TDE is a way of thinking that will allow us to see and understand how to approach life and what to do so that
        the above problems do not affect us.
        <span className="about__content__paragraph__border" ref={span1$} />
        <span className="about__content__paragraph__border" ref={span2$} />
        <span className="about__content__paragraph__border" ref={span3$} />
        <span className="about__content__paragraph__border" ref={span4$} />
      </p>
    </StyledAboutContent>
  );
};

export default AboutContent;
