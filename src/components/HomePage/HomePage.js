import React, { Component } from "react";

import classes from "./HomePage.module.css";

class HomePage extends Component {
  state = {
    hover: false,
  };

  hoverHandler = () => {
    this.setState({ hover: true });
  };

  exitHoverHandler = () => {
    this.setState({ hover: false });
  };

  render() {
    let hoverClassName = [];
    if (this.state.hover) {
      hoverClassName = [classes.p_elem, classes.hoverClass].join(" ");
    } else {
      hoverClassName = [classes.p_elem];
    }

    return (
      <div className={classes.HomePage}>
        <div className={classes.perspective_text}>
          <div className={classes.perspective_line}>
            <p className={hoverClassName}></p>
            <p className={hoverClassName}>Aparat</p>
          </div>
          <div className={classes.perspective_line}>
            <p className={hoverClassName}>Aparat</p>
            <p className={hoverClassName}>to przycisk</p>
          </div>
          <div className={classes.perspective_line}>
            <p className={hoverClassName}>to przycisk</p>
            <p className={hoverClassName}>ZAPISZ</p>
          </div>
          <div className={classes.perspective_line}>
            <p className={hoverClassName}>ZAPISZ</p>
            <p className={hoverClassName}>dla oka umysłu</p>
          </div>
          <div className={classes.perspective_line}>
            <p className={hoverClassName}>dla oka umysłu</p>
            <p className={hoverClassName}></p>
          </div>
        </div>
        <div className={classes.ButtonContainer}>
          <button
            onMouseEnter={this.hoverHandler}
            onMouseLeave={this.exitHoverHandler}
            className={classes.HomePageButton}
          >
            Poznaj naszą ofertę
          </button>
          <span className={classes.Line}></span>
        </div>
      </div>
    );
  }
}

export default HomePage;
