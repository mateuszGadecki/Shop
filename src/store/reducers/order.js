import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  customerData: [],
  fetchedOrders: [],
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

const fetchOrdersStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const fetchOrdersSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    fetchedOrders: action.orderData,
  };
};

const fetchOrdersFail = (state, action) => {
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
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrdersStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrdersFail(state, action);
    default:
      return state;
  }
};

export default reducer;
