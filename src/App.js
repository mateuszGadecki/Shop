import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/aboutUs">
            <AboutUs />
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
