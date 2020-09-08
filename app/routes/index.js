import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Biography from "../components/Biography";

function Routes() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home" initial={true} />
        <Scene key="portfolio" component={Portfolio} title="Portfolio" />
        <Scene key="biography" component={Biography} title="Biography" />
      </Scene>
    </Router>
  );
}

export default Routes;
