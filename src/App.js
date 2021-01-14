import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import "./App.css";
import history from "./history";

import { withThemeProvider } from "./context/ThemeSwitcherContext";

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default withThemeProvider(App);
