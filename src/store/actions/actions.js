import axios from "axios";
import * as actionTypes from "./actionTypes";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    products: products,
  };
};

export const initProducts = () => {
  return (dispatch) => {
    axios
      .get("https://flume-shop-default-rtdb.firebaseio.com/Products.json")
      .then((response) => {
        dispatch(setProducts(response.data));
      });
  };
};
