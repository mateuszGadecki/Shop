import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  cartItems: [],
  totalPrice: [],
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

const setTotalPrice = (state, action) => {
  let price = [...initialState.totalPrice];
  let totalPrice = 0;
  if (state.cartItems) {
    state.cartItems.map((e) => {
      return price.push(e.orderDetails.price);
    });
  }
  for (let i in price) {
    totalPrice = totalPrice + price[i] + 15;
  }
  console.log(totalPrice);
  return {
    ...state,
    totalPrice: totalPrice,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CART:
      return setCart(state, action);
    case actionTypes.SET_TOTAL_PRICE:
      return setTotalPrice(state, action);
    default:
      return state;
  }
};

export default reducer;
