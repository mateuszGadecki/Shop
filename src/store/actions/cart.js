import * as actionTypes from "./actionTypes";
import axios from "../../axios-products";

export const cartFail = () => {
  return {
    type: actionTypes.CART_FAIL,
  };
};

export const cartStart = () => {
  return {
    type: actionTypes.CART_START,
  };
};

export const setCart = (cartItems) => {
  return {
    type: actionTypes.SET_CART,
    cartItems: cartItems,
  };
};

export const initCartItems = () => {
  return (dispatch) => {
    dispatch(cartStart());
    axios
      .get("/cart.json")
      .then((response) => {
        dispatch(setCart(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(cartFail(error));
      });
  };
};

export const cartPost = (orderProps) => {
  return () => {
    axios.post("/cart.json", orderProps).catch((error) => {
      console.log(error);
    });
  };
};

// export const cartInit = () => {
//   return {
//     type: actionTypes.CART_INIT,
//   };
// };
