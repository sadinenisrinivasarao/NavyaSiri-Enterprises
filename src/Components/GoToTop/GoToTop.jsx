import React, { useEffect, useState } from 'react';
import './GoToTop.css'; 

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="go-to-top" onClick={scrollToTop} style={{ display: isVisible ? 'block' : 'none' }}>
      ↑
    </div>
  );
};

export default GoToTop;
