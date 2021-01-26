import React from "react";

import classes from "./DrawerToggle.module.css";
import Menu from "../../../../assets/icons/menu-outline.svg";

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <img className={classes.Hamburger} src={Menu} alt="menu" />
  </div>
);

export default drawerToggle;
