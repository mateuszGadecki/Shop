import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem>Strona Główna</NavigationItem>
    <NavigationItem>O nas</NavigationItem>
    <NavigationItem>Oferta</NavigationItem>
    <NavigationItem>Kontakt</NavigationItem>
    <NavigationItem>Konto</NavigationItem>
    <NavigationItem>Koszyk</NavigationItem>
  </ul>
);

export default navigationItems;
