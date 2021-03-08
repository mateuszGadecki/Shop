import React from "react";

import classes from "./Footer.module.css";
import FooterItems from "./FooterItems/FooterItems";

const footer = (props) => {
  let accountLink;
  if (!props.isAuth) {
    accountLink = (
      <FooterItems link="/account">Zaloguj się/ Zarejestruj się</FooterItems>
    );
  } else {
    accountLink = <FooterItems link="/account-details">Konto</FooterItems>;
  }
  return (
    <div className={classes.Footer}>
      <ul className={classes.FooterItems}>
        <p className={classes.FooterTitle}>Moje Konto</p>
        {accountLink}
        <FooterItems link="/cart">Koszyk</FooterItems>
      </ul>
      <ul className={classes.FooterItems}>
        <p className={classes.FooterTitle}> O Nas</p>
        <FooterItems link="/contact">Kontakt</FooterItems>
        <FooterItems link="/aboutUs">O sklepie</FooterItems>
      </ul>
      <div>
        <p className={classes.CopyRights}>
          Sklep Fotograficzny Flume. Wszelkie prawa zastrzeżone
        </p>
      </div>
    </div>
  );
};

export default footer;
