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

export const initProducts = () => {
  return (dispatch) => {
    axios
      .get("https://flume-shop-default-rtdb.firebaseio.com/Products.json")
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
