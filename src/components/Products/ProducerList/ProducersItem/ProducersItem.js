import React from "react";

import classes from "./ProducerItem.module.css";

const producers = (props) => {
  let toggleActiveClass = [];
  if (props.currentProducer === props.children) {
    toggleActiveClass = [classes.ProducerItem, classes.active].join(" ");
  } else {
    toggleActiveClass = [classes.ProducerItem];
  }

  return (
    <li>
      <button
        value={props.children}
        onClick={props.clicked}
        className={toggleActiveClass}
      >
        {props.children}
      </button>
    </li>
  );
};

export default producers;
