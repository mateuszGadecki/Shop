import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Proceed from "./components/Proceed/Proceed";
import Offer from "./containers/Offer/Offer";
import Properties from "./components/Properties/Properties";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/offer">
            <Offer />
          </Route>
          <Route path="/properties">
            <Properties />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route path="/proceed">
            <Proceed />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </Layout>
    );
  }
}

export default App;
