import React from 'react';

const SectionHeader = ({ 
  title, 
  subtitle, 
  highlightedText = '', 
  className = '' 
}) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
        {highlightedText && (
          <span className="text-gradient"> {highlightedText}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-[#b0b0b0] max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;