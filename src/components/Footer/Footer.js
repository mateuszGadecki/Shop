import React from "react";

import classes from "./Footer.module.css";
import FooterItems from "./FooterItems/FooterItems";

const footer = (props) => (
  <div className={classes.Footer}>
    <ul className={classes.FooterItems}>
      <p className={classes.FooterTitle}>Moje Konto</p>
      <FooterItems>Zaloguj się/ Zarejestruj się</FooterItems>
      <FooterItems>Koszyk</FooterItems>
    </ul>
    <ul className={classes.FooterItems}>
      <p className={classes.FooterTitle}> O Nas</p>
      <FooterItems>Kontakt</FooterItems>
      <FooterItems>O sklepie</FooterItems>
    </ul>
    <div>
      <p className={classes.CopyRights}>
        Sklep Fotograficzny Flume. Wszelkie prawa zastrzeżone
      </p>
    </div>
  </div>
);

export default footer;
