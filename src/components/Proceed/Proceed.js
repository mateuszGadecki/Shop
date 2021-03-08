import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import classes from "./Proceed.module.css";
import Spinner from "../UI/Spinner/Spinner";
import confirmation from "../../assets/icons/confirm.png";

class Proceed extends Component {
  componentDidMount() {
    setTimeout(this.switchHandler, 1200);
    setTimeout(this.redirectToHomePage, 2400);
  }

  state = {
    statement: "Przetwarzanie...",
    graphicSymbol: (
      <div className={classes.spinnerContainer}>
        <Spinner />
      </div>
    ),
    redirect: null,
  };

  redirectToHomePage = () => {
    this.setState({ redirect: <Redirect to="/" /> });
  };

  switchHandler = () => {
    const ready = (
      <div className={classes.confirm}>
        <img
          className={classes.confirmation}
          src={confirmation}
          alt="confirmation"
        />
      </div>
    );
    this.setState({ statement: "Gotowe!" });
    this.setState({ graphicSymbol: ready });
  };

  render() {
    return (
      <div className={classes.Proceed}>
        {this.state.redirect}
        <div className={classes.statement}>{this.state.statement}</div>
        <div className={classes.graphicSymbol}>{this.state.graphicSymbol}</div>
      </div>
    );
  }
}

export default Proceed;
