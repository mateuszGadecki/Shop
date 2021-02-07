import React from "react";

import classes from "./Title.module.css";

const title = (props) => (
  <p style={{ fontSize: props.fontSize }} className={classes.Title}>
    {props.children}
  </p>
);

export default title;
