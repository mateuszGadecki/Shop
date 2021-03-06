import React from "react";

import classes from "./OrderHistoryItem.module.css";

const orderHistoryItem = (props) => {
  const totalPrice = props.totalPrice;
  const orderItem = props.orderData.map((item) => (
    <div className={classes.singleItem}>
      <div className={classes.historyItemImageContainer}>
        <img
          className={classes.historyItemImage}
          src={item.smallImage}
          alt={item.productName}
        />
      </div>
      <ul className={classes.singleProductDetails}>
        <li>Marka: {item.producer}</li>
        <li>Model: {item.productName}</li>
        <li>Cena: {item.price}</li>
      </ul>
    </div>
  ));
  return (
    <div className={classes.orderHistoryItem}>
      <div>{orderItem}</div>
      <div className={classes.historyTotalPrice}>
        {" "}
        Razem z dostawą: {totalPrice} PLN
      </div>
    </div>
  );
};

export default orderHistoryItem;
