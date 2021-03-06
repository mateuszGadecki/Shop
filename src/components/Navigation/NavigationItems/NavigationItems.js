import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import Aux from "../../../hoc/Aux/Aux";

const navigationItems = (props) => {
  let navigationItems;
  if (!props.isAuthenticated) {
    navigationItems = (
      <Aux>
        <NavigationItem link="/" exact>
          Strona Główna
        </NavigationItem>
        <NavigationItem link="/aboutUs">O nas</NavigationItem>
        <NavigationItem link="/offer">Oferta</NavigationItem>
        <NavigationItem link="/contact">Kontakt</NavigationItem>
        <NavigationItem link="/cart">Koszyk</NavigationItem>
        <NavigationItem link="/account">Zaloguj się</NavigationItem>
      </Aux>
    );
  } else {
    navigationItems = (
      <Aux>
        <NavigationItem link="/" exact>
          Strona Główna
        </NavigationItem>
        <NavigationItem link="/aboutUs">O nas</NavigationItem>
        <NavigationItem link="/offer">Oferta</NavigationItem>
        <NavigationItem link="/contact">Kontakt</NavigationItem>
        <NavigationItem link="/cart">Koszyk</NavigationItem>
        <NavigationItem link="/account-details">Konto</NavigationItem>
        <NavigationItem link="/logout">Wyloguj się</NavigationItem>
      </Aux>
    );
  }
  return <ul className={classes.NavigationItems}>{navigationItems}</ul>;
};

export default navigationItems;
