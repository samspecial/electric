import axios from "axios";

import * as types from "../actionTypes";

let BASE_URL;
process.env.NODE_ENV === "production"
  ? (BASE_URL = "")
  : (BASE_URL = "http://localhost:4000/api/auth");

// Function to register user. (Will sign the user up for the application and get a token for the user.)
export const registerUser = async (dispatch, formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({ type: types.SIGN_UP });
    const response = await axios.post(`${BASE_URL}/signup`, formData, config);
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
    dispatch({ type: types.SIGN_IN });
    const response = await axios.post(`${BASE_URL}/signin`, formData, config);
    const { user } = response.data;
    console.log(user);
    if (user) {
      dispatch({
        type: types.SIGN_IN_SUCCESS,
        payload: user,
      });
      return response;
    }

    dispatch({ type: types.SIGN_IN_FAIL, error: data.errors });
    console.log(data.errors[0]);
    return;
  } catch (err) {
    dispatch({
      type: types.SIGN_IN_FAIL,
      payload: err.error,
    });
  }
};

export const logoutUser = () => {
  dispatch({ type: types.LOGOUT });
};
