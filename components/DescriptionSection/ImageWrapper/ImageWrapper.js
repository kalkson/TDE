import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import StyledImageWrapper from './ImageWrapper.styled';

const ImageWrapper = () => {
  const container$ = useRef(null);

  let imagesActivity = {
    isFirstActive: false,
    isSecondActive: false,
  };

  let elements = [];

  const listener = () => {
    const { top } = container$.current.parentNode.getBoundingClientRect();

    if (top < -400 && top > -900 && imagesActivity.isFirstActive === false) {
      imagesActivity = {
        ...imagesActivity,
        isFirstActive: true,
      };

      gsap.to(elements[1], {
        y: '0',
      });
    } else if (top >= -400 && imagesActivity.isFirstActive === true) {
      imagesActivity = {
        ...imagesActivity,
        isFirstActive: false,
      };
      gsap.to(elements[1], {
        y: '100%',
      });
    }

    if (top < -1500 && top > -2000 && imagesActivity.isSecondActive === false) {
      imagesActivity = {
        ...imagesActivity,
        isSecondActive: true,
      };
      gsap.to(elements[2], {
        y: '0',
      });
    } else if (top >= -1500 && imagesActivity.isSecondActive === true) {
      imagesActivity = {
        ...imagesActivity,
        isSecondActive: false,
      };
      gsap.to(elements[2], {
        y: '100%',
      });
    }
  };

  useEffect(() => {
    elements = Array.from(container$.current.children);
    document.addEventListener('scroll', listener);

    return () => {
      document.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <StyledImageWrapper className="sticky-image" ref={container$}>
      <Image src="/assets/photos/think.jpg" layout="fill" objectFit="cover" />
      <Image src="/assets/photos/do.jpg" layout="fill" objectFit="cover" />
      <Image src="/assets/photos/think.jpg" layout="fill" objectFit="cover" />
    </StyledImageWrapper>
  );
};

export default ImageWrapper;
