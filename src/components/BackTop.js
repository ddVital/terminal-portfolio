import React, { useState, useEffect } from 'react';
import { ArrowIcon, arrowTopIcon } from './Icons';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust the value (e.g., 200) based on when you want the button to appear
      setIsVisible(scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className={`back-top ${isVisible ? 'back-top--visible' : ''}`} onClick={scrollToTop}>
      {arrowTopIcon()}
    </button>
  );
};

export default BackToTopButton;