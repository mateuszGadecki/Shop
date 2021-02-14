import React from "react";

import classes from "./Picture.module.css";

const picture = (props) => (
  <img className={classes.Photo} src={props.source} alt={props.alt} />
);

export default picture;
