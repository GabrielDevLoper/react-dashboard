import React, { createContext, useContext, useState } from "react";

const DrawerContext = createContext();

export function DrawerProvider({ children }) {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <DrawerContext.Provider value={{ open, handleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export const useDrawer = () => {
  const { open, handleDrawer } = useContext(DrawerContext);

  return { open, handleDrawer };
};
