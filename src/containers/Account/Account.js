import React, { Component } from "react";

import classes from "./Account.module.css";
import AccountForm from "../../components/AccountForm/AccountForm";

class Account extends Component {
  render() {
    return (
      <div className={classes.Account}>
        <AccountForm />
      </div>
    );
  }
}

export default Account;
