import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (idToken, userId, displayName) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: idToken,
    userId: userId,
    displayName: displayName,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (email, password, isSignup, name) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
      displayName: name,
    };

    let url;
    if (isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCQePxp3Wegn4cgDq0QQN-4D5bq_hNJvLU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCQePxp3Wegn4cgDq0QQN-4D5bq_hNJvLU";
    }
    axios
      .post(url, authData)
      .then((response) => {
        dispatch(
          authSuccess(
            response.data.idToken,
            response.data.localId,
            response.data.displayName
          )
        );
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((error) => {
        dispatch(authFail(error.response.data.error));
      });
  };
};
