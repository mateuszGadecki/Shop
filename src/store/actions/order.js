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

export const purchaseOrder = (orderData, customerData, totalPrice, token) => {
  const data = {
    totalPrice: totalPrice,
    customerData: customerData,
    orderData: orderData,
  };
  return (dispatch) => {
    dispatch(purchaseOrderStart());
    axios
      .post(
        "https://flume-shop-default-rtdb.firebaseio.com/Orders.json?auth=" +
          token,
        data
      )
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

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrdersSuccess = (orderData) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orderData: orderData,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrders = (token) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    axios
      .get(
        "https://flume-shop-default-rtdb.firebaseio.com/Orders.json?auth=" +
          token
      )
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((error) => {
        dispatch(fetchOrdersFail(error));
        console.log(error);
      });
  };
};
