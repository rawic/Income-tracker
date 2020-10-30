import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import FadeInAnimationI from './FadeInAnimation.interface'

const distance = 50;

const FadeInAnimation: React.FC<FadeInAnimationI> = ({ children, tag: wrapperElement = 'div', delay = 0 }) => {
  const Component = wrapperElement;
  const compRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    gsap.from(compRef.current, 0.5, {
      y: distance,
      opacity: 0,
      delay,
    });
    gsap.to(compRef.current, 0.5, {
      delay: delay + 3,
      opacity: 0,
      y: -100,
    });
  }, [compRef, delay]);
  return <Component ref={compRef}>{children}</Component>;
};

export default FadeInAnimation;
