import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./history";

import { withThemeProvider } from "./context/ThemeSwitcherContext";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <Router history={history}>
      <CssBaseline />
      <Routes />
    </Router>
  );
}

export default withThemeProvider(App);
