import React, { createContext, useState } from "react";

const ThemeSwitchContext = createContext();

function ThemeSwitcherProvider({ children }) {
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

export { ThemeSwitchContext, ThemeSwitcherProvider };
