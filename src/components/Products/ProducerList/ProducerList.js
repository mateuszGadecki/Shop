import React from "react";

import Producers from "./ProducersItem/ProducersItem";

const producerList = (props) => (
  <ul>
    <Producers currentProducer={props.currentProducer} clicked={props.filter}>
      Canon
    </Producers>
    <Producers currentProducer={props.currentProducer} clicked={props.filter}>
      FujiFilm
    </Producers>
    <Producers currentProducer={props.currentProducer} clicked={props.filter}>
      Panasonic
    </Producers>
    <Producers currentProducer={props.currentProducer} clicked={props.filter}>
      Nikon
    </Producers>
    <Producers currentProducer={props.currentProducer} clicked={props.filter}>
      Olympus
    </Producers>
    <Producers currentProducer={props.currentProducer} clicked={props.filter}>
      Pentax
    </Producers>
    <Producers currentProducer={props.currentProducer} clicked={props.filter}>
      Sigma
    </Producers>
    <Producers currentProducer={props.currentProducer} clicked={props.filter}>
      Sony
    </Producers>
  </ul>
);

export default producerList;
