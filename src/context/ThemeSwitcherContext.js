import React, { createContext, useState } from "react";

export const ThemeSwitchContext = createContext();

export function ThemeSwitcherProvider({ children }) {
  const [darkState, setDarkState] = useState(false);

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <ThemeSwitchContext.Provider value={{ darkState, handleThemeChange }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
}
