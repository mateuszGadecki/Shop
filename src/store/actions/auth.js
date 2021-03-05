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
        console.log(response);
        dispatch(
          authSuccess(
            response.data.idToken,
            response.data.localId,
            response.data.displayName
          )
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(authFail(error));
      });
  };
};
