import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Proceed from "./components/Proceed/Proceed";
import Offer from "./containers/Offer/Offer";
import Properties from "./components/Properties/Properties";
import Cart from "./containers/Cart/Cart";
import Account from "./containers/Account/Account";
import AccountDetails from "./containers/AccountDetails/AccountDetails";
import Logout from "./containers/Account/Logout/Logout";
import * as actions from "./store/actions/index";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/offer">
          <Offer />
        </Route>
        <Route path="/cart">
          <Cart />
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
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/account-details">
            <AccountDetails />
          </Route>
          <Route path="/offer">
            <Offer />
          </Route>
          <Route path="/cart">
            <Cart />
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
          <Redirect to="/" />
        </Switch>
      );
    }
    return <Layout>{routes}</Layout>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
