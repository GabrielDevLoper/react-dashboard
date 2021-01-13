import React, { useContext } from "react";
import { Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Routes from "./routes";
import "./App.css";
import history from "./history";

import {
  ThemeSwitcherProvider,
  ThemeSwitchContext,
} from "./context/ThemeSwitcher";

function App() {
  const { darkState } = useContext(ThemeSwitchContext);
  const palletType = darkState ? "dark" : "light";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  return (
    <ThemeSwitcherProvider>
      <ThemeProvider theme={darkTheme}>
        <Router history={history}>
          <Routes />
        </Router>
      </ThemeProvider>
    </ThemeSwitcherProvider>
  );
}

export default App;
