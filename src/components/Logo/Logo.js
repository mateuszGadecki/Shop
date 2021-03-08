import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Logo.module.css";

const logo = (props) => (
  <NavLink to="/" className={classes.Logo}>
    Flume
  </NavLink>
);

export default logo;
