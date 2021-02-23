import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  cartItems: null,
};

const cartStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const cartFail = (state, action) => {
  return {
    ...state,
    loading: false,
  };
};

const setCart = (state, action) => {
  let cartItems = action.cartItems;
  return {
    ...state,
    cartItems: cartItems,
    loading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CART:
      return setCart(state, action);
    case actionTypes.CART_START:
      return cartStart(state, action);
    case actionTypes.CART_FAIL:
      return cartFail(state, action);
    default:
      return state;
  }
};

export default reducer;
