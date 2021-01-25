import React, { createContext, useContext } from "react";
import {
  deepOrange,
  deepPurple,
  lightBlue,
  orange,
} from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import { useLocalStorage } from "../customHooks/useLocalStorage";

const Context = createContext();

function ThemeSwitcherProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const palletType = darkMode ? "dark" : "light";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        dark: colors.indigo.A700,
        main: "#282c34",
        light: colors.indigo.A200,
      },
      secondary: {
        dark: colors.orange.A700,
        main: "#ff1744",
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
        main: "#3d5afe",
        light: colors.indigo.A200,
      },
      secondary: {
        dark: colors.orange.A700,
        main: "#ff1744",
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
