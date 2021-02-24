import React from "react";

import classes from "./CartList.module.css";

const cartList = (props) => {
  return (
    <div className={classes.CartList}>
      <div>
        {props.cartItemDetails.orderDetails.producent}{" "}
        {props.cartItemDetails.orderDetails.productName}
      </div>
      <div>{props.cartItemDetails.orderDetails.price} PLN</div>
      <div>1-2 dni robocze</div>
      <div>15 PLN</div>
      <div>X</div>
    </div>
  );
};

export default cartList;
