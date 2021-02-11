import React, { Component } from "react";

import classes from "./Offer.module.css";
import ProducerList from "../../components/Products/ProducerList/ProducerList";
import ProductContainer from "../../components/Products/ProductContainer/ProductContainer";

class Offer extends Component {
  render() {
    return (
      <div className={classes.Offer}>
        <div className={classes.offerTitle}>Fotografia</div>
        <div>Picture</div>
        <ProducerList />
        <div>
          <ProductContainer />
        </div>
      </div>
    );
  }
}

export default Offer;
