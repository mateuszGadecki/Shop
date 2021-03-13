import React, { Component } from "react";

import classes from "./HomePage.module.css";
import video from "../../assets/videos/background_film.mov";

class HomePage extends Component {
  render() {
    return (
      <div className={classes.HomePage}>
        <video className={classes.video} autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
        <div className={classes.HomePageTitle}>
          Najlepszy aparat to ten, <br /> który masz przy sobie.
        </div>
      </div>
    );
  }
}

export default HomePage;
