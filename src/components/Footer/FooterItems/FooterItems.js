import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./FooterItems.module.css";

const footerItems = (props) => (
  <li className={classes.footerItems}>
    <NavLink to={props.link} exact={props.exact}>
      {props.children}
    </NavLink>
  </li>
);

export default footerItems;
