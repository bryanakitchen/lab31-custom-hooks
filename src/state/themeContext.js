import React, { createContext } from 'react';

export const ThemeContext = createContext(null);

export const LightTheme = ({ children }) => {
    
  return (
    <ThemeContext.Provider >
      {children}
    </ThemeContext.Provider>
  );
};
