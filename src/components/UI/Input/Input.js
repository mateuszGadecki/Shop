import React from "react";

import classes from "./Input.module.css";

const input = (props) => {
  const inputClasses = [];
  return (
    <div className={classes.group}>
      <input
        style={{ backgroundColor: props.background }}
        className={inputClasses.join(" ")}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        required
      />
      <span className={classes.highLight}></span>
      <span className={classes.bar}></span>
      <label>{props.label}</label>
    </div>
  );
};

export default input;
