import * as actionTypes from "../actions/actionTypes";

const initialState = {
  currProducer: "Canon",
  currProducts: null,
};

const setProducts = (state, action) => {
  return {
    ...state,
    currProducts: action.products,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return setProducts(state, action);
    default:
      return state;
  }
};

export default reducer;
