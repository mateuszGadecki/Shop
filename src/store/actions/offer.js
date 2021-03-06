import axios from "axios";
import * as actionTypes from "./actionTypes";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products,
  };
};

export const setCurrProduct = (product) => {
  return {
    type: actionTypes.SET_CURRENT_PRODUCT,
    product: product,
  };
};
export const setCurrProducer = (producer) => {
  return {
    type: actionTypes.SET_CURRENT_PRODUCER,
    producer: producer,
  };
};

export const initProductsStart = () => {
  return {
    type: actionTypes.INIT_PRODUCTS_START,
  };
};
export const initProductsFail = (error) => {
  return {
    type: actionTypes.INIT_PRODUCTS_FAIL,
    error: error,
  };
};

export const initProducts = () => {
  return (dispatch) => {
    dispatch(initProductsStart());
    axios
      .get("https://flume-shop-default-rtdb.firebaseio.com/Products.json")
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch((error) => {
        dispatch(initProductsFail(error));
        console.log(error);
      });
  };
};
