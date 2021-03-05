import * as actionTypes from "./actionTypes";
import axios from "axios";

export const purchaseOrderStart = (id, orderData, customerData) => {
  return {
    type: actionTypes.PURCHASE_ORDER_START,
    orderId: id,
    orderData: orderData,
    customerData: customerData,
  };
};

export const purchaseOrderSuccess = () => {
  return {
    type: actionTypes.PURCHASE_ORDER_SUCCESS,
  };
};

export const purchaseOrderFail = (error) => {
  return {
    type: actionTypes.PURCHASE_ORDER_FAIL,
    error: error,
  };
};

export const purchaseOrder = (orderData, customerData, totalPrice) => {
  const data = {
    totalPrice: totalPrice,
    customerData: customerData,
    orderData: orderData,
  };
  return (dispatch) => {
    dispatch(purchaseOrderStart());
    axios
      .post("https://flume-shop-default-rtdb.firebaseio.com/Orders.json", data)
      .then((response) => {
        dispatch(
          purchaseOrderSuccess(
            response.data.name,
            orderData,
            customerData,
            totalPrice
          )
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(purchaseOrderFail(error));
      });
  };
};

export const purchaseOrderInit = () => {
  return {
    type: actionTypes.PURCHASE_ORDER_INIT,
  };
};
