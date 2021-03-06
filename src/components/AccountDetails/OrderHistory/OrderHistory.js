import React from "react";

import classes from "./OrderHistory.module.css";
import Title from "../../UI/Title/Title";
import OrderHistoryItem from "./OrderHistoryItem/OrderHistoryItem";

const orderHistory = (props) => {
  let orderHistory, orderList;
  if (props.fetchedOrderDetails) {
    orderList = props.fetchedOrderDetails.map((order) => (
      <OrderHistoryItem
        key={order.id}
        orderData={order.orderData}
        totalPrice={order.totalPrice}
      />
    ));
    orderHistory = <div>{orderList}</div>;
  } else {
    orderHistory = <div className={classes.noOrders}>Brak zamówień</div>;
  }
  return (
    <div className={classes.orderHistory}>
      <div className={classes.orderHistoryTitle}>
        <Title fontSize="2.3rem">Historia Zamówień</Title>
      </div>
      {orderHistory}
    </div>
  );
};

export default orderHistory;
