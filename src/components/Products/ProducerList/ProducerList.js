import React from "react";

import Producers from "./ProducersItem/ProducersItem";

const producerList = (props) => (
  <ul>
    <Producers clicked={props.filter}>Canon</Producers>
    <Producers clicked={props.filter}>FujiFilm</Producers>
    <Producers clicked={props.filter}>Panasonic</Producers>
    <Producers clicked={props.filter}>Nikon</Producers>
    <Producers clicked={props.filter}>Olympus</Producers>
    <Producers clicked={props.filter}>Pentax</Producers>
    <Producers clicked={props.filter}>Sigma</Producers>
    <Producers clicked={props.filter}>Sony</Producers>
  </ul>
);

export default producerList;
