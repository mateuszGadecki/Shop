import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
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
    return (
      <Layout>
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
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
