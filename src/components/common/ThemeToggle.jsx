import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="theme-toggle-track">
        {/* Sun icon (light mode) */}
        <Sun className="theme-toggle-icon theme-toggle-sun" size={14} />

        {/* Sliding thumb */}
        <div className="theme-toggle-thumb">
          {theme === 'dark' ? (
            <Moon size={12} />
          ) : (
            <Sun size={12} />
          )}
        </div>

        {/* Moon icon (dark mode) */}
        <Moon className="theme-toggle-icon theme-toggle-moon" size={14} />
      </div>
    </button>
  );
};

export default ThemeToggle;