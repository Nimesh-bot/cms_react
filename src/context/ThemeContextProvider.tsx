import React, { createContext, useContext, useState } from "react";
import { Theme, ThemeContextType } from "./themeContext";

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

type Props = {
  children?: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
