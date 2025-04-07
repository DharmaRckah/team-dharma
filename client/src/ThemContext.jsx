// ThemeContext.jsx
import React, { createContext, useState } from 'react';

// Create a Context for the theme
export const ThemeContext = createContext();

// Create a ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('blue');

  const toggleTheme = () => {
    console.log("value",theme)
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};