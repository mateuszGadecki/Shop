import * as actionTypes from "./actionTypes";

export const setCart = (cartItems) => {
  return {
    type: actionTypes.SET_CART,
    cartItems: cartItems,
  };
};
export const removeCartItem = (id) => {
  return {
    type: actionTypes.REMOVE_CART_ITEM,
    id: id,
  };
};
export const setTotalPrice = () => {
  return {
    type: actionTypes.SET_TOTAL_PRICE,
  };
};
export const updateTotalPriceOnDelete = (price) => {
  return {
    type: actionTypes.UPDATE_TOTAL_PRICE_ON_DELETE,
    price: price,
  };
};

export const cartPost = (orderProps) => {
  return (dispatch) => {
    dispatch(setCart(orderProps));
  };
};
