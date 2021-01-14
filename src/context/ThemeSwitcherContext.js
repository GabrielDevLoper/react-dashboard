import React, { createContext, useContext, useState } from "react";
import {
  deepOrange,
  deepPurple,
  lightBlue,
  orange,
} from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

const Context = createContext();

function ThemeSwitcherProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const palletType = darkMode ? "dark" : "light";
  // const mainPrimaryColor = darkMode ? orange[500] : lightBlue[500];
  // const mainSecondaryColor = darkMode ? deepOrange[900] : deepPurple[500];

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        dark: colors.indigo.A700,
        main: "#ff6f00",
        light: colors.indigo.A200,
      },
      secondary: {
        dark: colors.orange.A700,
        main: colors.orange.A400,
        light: colors.orange.A200,
      },
      background: {
        default: "#1c2025",
        dark: "#1c2025",
        paper: "#282c34",
      },
      text: {
        primary: "#e6e5e8",
        secondary: "#adb0bb",
      },
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        dark: colors.indigo.A700,
        main: colors.indigo.A400,
        light: colors.indigo.A200,
      },
      secondary: {
        dark: colors.orange.A700,
        main: colors.orange.A400,
        light: colors.orange.A200,
      },
      background: {
        default: colors.common.white,
        dark: "#f5f8f7",
        paper: colors.common.white,
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
      },
    },
  });

  return (
    <Context.Provider
      value={{ darkMode, handleThemeChange, darkTheme, lightTheme }}
    >
      {children}
    </Context.Provider>
  );
}

export const useStore = () => useContext(Context);

export function withProvider(Component) {
  return function WrapperComponent(props) {
    return (
      <ThemeSwitcherProvider>
        <Component {...props} />
      </ThemeSwitcherProvider>
    );
  };
}

export { Context, ThemeSwitcherProvider };

export function useApp() {
  const { darkMode, handleThemeChange, darkTheme, lightTheme } = useStore();

  return { darkMode, handleThemeChange, darkTheme, lightTheme };
}

export function withThemeProvider(Component) {
  const WrapperComponent = ({ props }) => {
    const { darkMode, darkTheme, lightTheme } = useApp();
    const theme = darkMode ? darkTheme : lightTheme;
    return (
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}
        <Component {...props} />
      </ThemeProvider>
    );
  };
  return withProvider(WrapperComponent);
}

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
