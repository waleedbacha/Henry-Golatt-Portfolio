import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Get from localStorage on first load
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('hg-theme');
      if (saved) return saved;

      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark'; // default
  });

  useEffect(() => {
    // Apply theme to <html> element
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hg-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}