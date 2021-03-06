import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Strona Główna
    </NavigationItem>
    <NavigationItem link="/aboutUs">O nas</NavigationItem>
    <NavigationItem link="/offer">Oferta</NavigationItem>
    <NavigationItem link="/contact">Kontakt</NavigationItem>
    <NavigationItem link="/cart">Koszyk</NavigationItem>
    <NavigationItem link="/account">Konto</NavigationItem>
  </ul>
);

export default navigationItems;
