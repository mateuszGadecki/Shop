import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Account.module.css";
import AccountForm from "./AccountForm/AccountForm";
import * as actions from "../../store/actions/index";

class Account extends Component {
  render() {
    return (
      <div className={classes.Account}>
        <AccountForm
          error={this.props.error}
          loading={this.props.loading}
          onAuth={this.props.onAuth}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp, name) =>
      dispatch(actions.auth(email, password, isSignUp, name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
