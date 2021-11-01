import { useReducer } from "react";
import axios from "axios";
import authReducer from "./authReducer";
import * as types from "../actionTypes";

const initialState = {
  loading: false,
  isAuthenticated: null,
  user: null,
  statusMessage: {},
};
const [state, dispatch] = useReducer(authReducer, initialState);
let BASE_URL;
process.env.NODE_ENV === "production"
  ? (BASE_URL = "")
  : (BASE_URL = "http://localhost:4000/api/auth");

// Function to register user. (Will sign the user up for the application and get a token for the user.)
export const register = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    dispatch({ type: types.SIGN_UP });
    const response = await axios.post("/signup", formData, config);
    const { status } = response;

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

export const login = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  try {
    dispatch({ type: types.SIGN_IN });
    const response = await axios.post("/signin", formData, config);

    dispatch({
      type: types.SIGN_IN_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: types.SIGN_IN_FAIL,
      payload: err.error,
    });
  }
};

export const logout = () => {
  dispatch({ type: types.LOGOUT });
};

export const authState = {
  loading: state.loading,
  isAuthenticated: state.isAuthenticated,
  user: state.user,
  statusMessage: state.statusMessage,
};
