import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('');

  return (
    <ThemeContext.Provider value{{ theme, setTheme }} >
      {children}
    </ThemeContext.Provider>
  );

};

export const useTheme = () => {
  const { theme, setTheme } = useContext(themeContext);
  return ( theme, setTheme );
}