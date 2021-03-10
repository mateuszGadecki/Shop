import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  customerName: null,
};

const authStart = (state, action) => {
  return {
    ...state,
    error: null,
    loading: true,
    customerName: null,
  };
};

const authSuccess = (state, action) => {
  return {
    ...state,
    token: action.idToken,
    userId: action.userId,
    customerName: action.displayName,
    error: null,
    loading: false,
  };
};

const authFail = (state, action) => {
  let errorMes;
  switch (action.error.message) {
    case "EMAIL_EXISTS":
      errorMes = "Adres email istnieje";
      break;
    case "INVALID_EMAIL":
      errorMes = "Błędny adres email";
      break;
    case "EMAIL_NOT_FOUND":
      errorMes = "Nie znaleziono podanego adresu email";
      break;
    case "WEAK_PASSWORD : Password should be at least 6 characters":
      errorMes = "Hasło powinno mieć minimum 6 znaków";
      break;
    default:
      errorMes = "Błąd";
      break;
  }
  return {
    ...state,
    error: errorMes,
    loading: false,
  };
};

const authLogout = (state, action) => {
  return {
    ...state,
    token: null,
    userId: null,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
