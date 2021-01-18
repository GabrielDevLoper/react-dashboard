import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import history from "./history";

import { withThemeProvider } from "./context/ThemeSwitcherContext";
import { CssBaseline } from "@material-ui/core";
import { DrawerProvider } from "./context/DrawerOpenContext";

function App() {
  return (
    <DrawerProvider>
      <Router history={history}>
        <CssBaseline />
        <Routes />
      </Router>
    </DrawerProvider>
  );
}

export default withThemeProvider(App);
