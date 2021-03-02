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
      <button
        onClick={() => {
          props.removeItemHandler(props.cartItemDetails.orderDetails.id);
          props.updateTotalPriceOnDelete(
            props.cartItemDetails.orderDetails.price
          );
        }}
        className={classes.removeButton}
      >
        X
      </button>
    </div>
  );
};

export default cartList;
