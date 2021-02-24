import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import StyledCards, { StyledBackground } from './Cards.styled';

import ThinkSVG from '../../public/assets/icons/think-graphics.svg';
import DoSVG from '../../public/assets/icons/do-graphics.svg';
import EnjoySVG from '../../public/assets/icons/enjoy-graphics.svg';

import Card from './Card/Card';
import Heading from '../Atoms/Heading/Heading';

const Cards = () => {
  const [activeCard, setActiveCard] = useState(1);
  let cardsArray;

  const cards$ = useRef(null);

  useEffect(() => {
    cardsArray = Array.from(cards$.current.children);

    gsap.set(cardsArray[0], { zIndex: 2, y: '50' });
    gsap.set(cardsArray[1], { zIndex: 1, x: '300', y: '-100', scale: 0.5, opacity: '0.8' });
    gsap.set(cardsArray[2], { zIndex: 0, x: '-300', y: '-100', scale: 0.5, opacity: '0.8' });
  }, []);

  const handleClick = (e) => {
    const length = cardsArray.length;

    cards$.current.insertBefore(cardsArray[length - 1], cardsArray[0]);
    cardsArray = Array.from(cards$.current.children);

    console.log(cardsArray);

    gsap.set(cardsArray[0], { zIndex: 2 });
    gsap.set(cardsArray[1], { zIndex: 1 });
    gsap.set(cardsArray[2], { zIndex: 0 });

    gsap.to(cardsArray[0], { y: '50', scale: '1', x: '0', opacity: '1', animation: 'ease-in-out' });
    gsap.to(cardsArray[1], { x: '300', y: '-100', scale: 0.5, opacity: '0.8', animation: 'ease-in-out' });
    gsap.to(cardsArray[2], { x: '-300', y: '-100', scale: 0.5, opacity: '0.8', animation: 'ease-in-out' });
  };

  return (
    <StyledBackground>
      <StyledCards className="container" ref={cards$} onClick={handleClick}>
        <Card>
          <div className="card__image">
            <ThinkSVG viewBox="0 0 467.011 482.519" />
          </div>
          <div className="card__description">
            <Heading className="card__description__heading">Think</Heading>
          </div>
        </Card>
        <Card>
          <div className="card__image">
            <DoSVG viewBox="0 0 374.219 332.339" />
          </div>
          <div className="card__description">
            <Heading className="card__description__heading">Do</Heading>
          </div>
        </Card>
        <Card>
          <div className="card__image">
            <EnjoySVG viewBox="0 0 372.734 340.747" />
          </div>
          <div className="card__description">
            <Heading className="card__description__heading">Enjoy</Heading>
          </div>
        </Card>
      </StyledCards>
    </StyledBackground>
  );
};

export default Cards;
