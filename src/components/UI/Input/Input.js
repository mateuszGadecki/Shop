import React from "react";

import classes from "./Input.module.css";

const input = (props) => (
  <div className={classes.group}>
    <input className={classes.text} required />
    <span className={classes.highLight}></span>
    <span className={classes.bar}></span>
    <label>{props.label}</label>
  </div>
);
export default input;
