import axios from "axios";

import * as types from "../actionTypes";

let BASE_URL;
process.env.NODE_ENV === "production"
  ? (BASE_URL = "")
  : (BASE_URL = process.env.REACT_APP_BASE_URL);

// Function to register user. (Will sign the user up for the application and get a token for the user.)
export const registerUser = async (dispatch, formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({ type: types.SIGN_UP });
    const response = await axios.post(
      `${BASE_URL}/auth/signup`,
      formData,
      config
    );
    const { status } = response;
    console.log(status);

    dispatch({
      type: types.SIGN_UP_SUCCESS,
      payload: status,
    });
  } catch (err) {
    dispatch({
      type: types.SIGN_UP_FAIL,
      payload: err.error,
    });
  }
};

export const loginUser = async (dispatch, formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  try {
    dispatch({ type: types.SIGN_IN, payload: true });
    const response = await axios.post(
      `${BASE_URL}/auth/signin`,
      formData,
      config
    );
    const { user } = response.data;

    if (user) {
      dispatch({
        type: types.SIGN_IN_SUCCESS,
        payload: user,
      });
      return response.data;
    }
  } catch (err) {
    dispatch({
      type: types.SIGN_IN_FAIL,
      payload: err.response.data,
    });
    return err.response.data;
  }
};

export const logoutUser = (dispatch) => {
  dispatch({ type: types.LOGOUT });
};
