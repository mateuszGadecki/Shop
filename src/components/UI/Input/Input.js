import React from "react";

import classes from "./Input.module.css";

const input = (props) => {
  let inputClass, highlightClass, barClass, labelClass;
  inputClass = classes.inputBlue;
  highlightClass = classes.highlightBlue;
  barClass = classes.barBlue;
  labelClass = classes.labelBlue;

  if (props.invalid && props.shouldValidate) {
    inputClass = classes.inputRed;
    highlightClass = classes.highlightRed;
    barClass = classes.barRed;
    labelClass = classes.labelRed;
  }
  return (
    <div className={classes.group}>
      <input
        className={inputClass}
        style={{ backgroundColor: props.background }}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
        required
      />
      <span className={highlightClass}></span>
      <span className={barClass}></span>
      <label className={labelClass}>{props.label}</label>
    </div>
  );
};

export default input;
