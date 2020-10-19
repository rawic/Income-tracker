import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

const distance = 50;

const FadeInAnimation = ({ children, wrapperElement = 'div', delay = 0 }) => {
  const Component = wrapperElement;
  const compRef = useRef(null);
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

FadeInAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  wrapperElement: PropTypes.string,
  delay: PropTypes.number,
};

FadeInAnimation.defaultProps = {
  wrapperElement: 'div',
  delay: 0,
};

export default FadeInAnimation;
