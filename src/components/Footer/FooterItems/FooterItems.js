import React from "react";

import classes from "./FooterItems.module.css";

const footerItems = (props) => (
  <li className={classes.footerItems}>{props.children}</li>
);

export default footerItems;
