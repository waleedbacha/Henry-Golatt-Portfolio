import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // Show button after scrolling 400px
      setIsVisible(scrollTop > 400);

      // Calculate scroll progress (0 to 1)
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG circle progress
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - scrollProgress);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'scroll-to-top-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
    >
      {/* Progress ring */}
      <svg className="scroll-to-top-ring" width="52" height="52" viewBox="0 0 52 52">
        {/* Background circle */}
        <circle
          className="scroll-to-top-ring-bg"
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          strokeWidth="2"
        />
        {/* Progress circle */}
        <circle
          className="scroll-to-top-ring-progress"
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 26 26)"
        />
      </svg>

      {/* Arrow icon */}
      <ArrowUp className="scroll-to-top-icon" size={20} />
    </button>
  );
};

export default ScrollToTop;