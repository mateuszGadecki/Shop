import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  customerData: [],
  loading: false,
  purchased: false,
  totalPrice: null,
};

const purchaseOrderInit = (state, action) => {
  return {
    ...state,
    purchased: false,
  };
};

const purchaseOrderStart = (state, action) => {
  return {
    ...state,
    loading: false,
  };
};

const purchaseOrderSuccess = (state, action) => {
  const newOrder = action.orderData;
  const customerData = action.customerData;

  return {
    ...state,
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
    customerData: state.orders.concat(customerData),
    totalPrice: action.totalPrice,
  };
};
const purchaseOrderFail = (state, action) => {
  return {
    ...state,
    loading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_ORDER_INIT:
      return purchaseOrderInit(state, action);
    case actionTypes.PURCHASE_ORDER_START:
      return purchaseOrderStart(state, action);
    case actionTypes.PURCHASE_ORDER_SUCCESS:
      return purchaseOrderSuccess(state, action);
    case actionTypes.PURCHASE_ORDER_FAIL:
      return purchaseOrderFail(state, action);
    default:
      return state;
  }
};

export default reducer;
