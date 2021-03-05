import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Account.module.css";
import AccountForm from "./AccountForm/AccountForm";
import * as actions from "../../store/actions/index";

class Account extends Component {
  render() {
    return (
      <div className={classes.Account}>
        <AccountForm onAuth={this.props.onAuth} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp, name) =>
      dispatch(actions.auth(email, password, isSignUp, name)),
  };
};

export default connect(null, mapDispatchToProps)(Account);
