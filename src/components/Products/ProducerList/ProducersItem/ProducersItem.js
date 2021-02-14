import React from "react";

import classes from "./ProducerItem.module.css";

const producers = (props) => (
  <li>
    <button className={classes.ProducerItem}>{props.children}</button>
  </li>
);

export default producers;
