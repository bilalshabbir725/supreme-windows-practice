import React, { lazy, useCallback } from "react";
import "./App.css";
import { Footer, NavBar } from "./Components";
import {
  Gallery,
  Contact,
  Upvc,
  Timber,
  Aluminium,
  Casement,
  Sash,
  Secondary,
  TiltTurn,
  Conservatories,
  Doors,
} from "./Pages";
import { Home } from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import { routes } from "./utils";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/** Windows */}
        <Route path={routes.upvc} component={Upvc} />
        <Route path={routes.timber} component={Timber} />
        <Route path={routes.aluminium} component={Aluminium} />
        <Route path={routes.casement} component={Casement} />
        <Route path={routes.sash} component={Sash} />
        <Route path={routes.secondary} component={Secondary} />
        <Route path={routes.tiltnturm} component={TiltTurn} />

        <Route path={routes.doors} component={Doors} />
        <Route path={routes.conservatories} component={Conservatories} />
        <Route path={routes.gallery} component={Gallery} />
        <Route path={routes.contactus} component={Contact} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
