import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  cartItems: [],
};
const cart = [...initialState.cartItems];

const setCart = (state, action) => {
  cart.push(action.cartItems);
  return {
    ...state,
    cartItems: cart,
    loading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CART:
      return setCart(state, action);
    default:
      return state;
  }
};

export default reducer;
