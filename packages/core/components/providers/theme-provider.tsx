import React from 'react';
import { ThemeContext } from '../use-theme/theme-context';
import useDarkMode from "../themes/themes";

const DarkModeProvider:React.FC = ({ children }) => {
   const [mode, toggleMode] = useDarkMode();

   return (
      <ThemeContext.Provider value={{ mode, toggleMode }}>{children}</ThemeContext.Provider>
   );
};

export default DarkModeProvider;