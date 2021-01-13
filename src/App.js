import React, { useContext, useState } from "react";
import { Router } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Routes from "./routes";
import "./App.css";
import history from "./history";

// import {
//   ThemeSwitcherProvider,
//   ThemeSwitchContext,
// } from "./context/ThemeSwitcherContext";

function App() {
  const [darkState, setDarkState] = useState(true);

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const palletType = darkState ? "dark" : "light";

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router history={history}>
        <Routes />
        <Switch checked={darkState} onChange={handleThemeChange} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
