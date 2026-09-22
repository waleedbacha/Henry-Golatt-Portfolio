import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-accent text-[#0a0a0a] hover:shadow-lg hover:shadow-[#00ff88]/20',
    secondary: 'border border-[#2a2a2a] hover:bg-[#1a1a1a]',
    outline: 'border border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88]/10',
  };

  return (
    <button
      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;