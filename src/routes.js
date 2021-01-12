import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

const Categorias = lazy(() => import("./pages/Categorias"));
const Usuarios = lazy(() => import("./pages/Usuarios"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));

function Routes() {
  return (
    <Suspense
      fallback={
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
            <CircularProgress />
          </Grid>
        </Grid>
      }
    >
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/categorias" component={Categorias} />
        <Route path="/usuarios" component={Usuarios} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
