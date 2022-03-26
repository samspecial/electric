import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import {
  LOAD_USERS,
  LOAD_USER,
  LOAD_USERS_SUCCESS,
  DELETE_BENEFIT,
  UPDATE_BENEFIT,
  BENEFIT_ERROR,
  LOAD_USERS_FAIL,
  BENEFIT_SUCCESS,
  LOAD_USER_SUCCESS,
  LOADING,
} from "../actionTypes";

const UserState = (props) => {
  const initialState = {
    users: [],
    user: {},
    message: "",
    error: "",
    loading: false,
  };
  let BASE_URL;
  process.env.NODE_ENV === "production"
    ? (BASE_URL = "")
    : (BASE_URL = process.env.REACT_APP_BASE_URL);

  const [state, dispatch] = useReducer(userReducer, initialState);

  // Function to get all contacts for the user.
  const fetchUsers = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    dispatch({ type: LOADING, payload: !initialState.loading });
    try {
      // dispatch({ type: GET_BENEFITS });
      const res = await axios.get(`${BASE_URL}/auth/users`, config);

      dispatch({ type: LOAD_USERS, payload: res.data.data });
      dispatch({ type: LOAD_USERS_SUCCESS, payload: res.data.status });
    } catch (err) {
      //  dispatch({ type: LOADING, payload: initialState.loading });
      dispatch({
        type: LOAD_USERS_FAIL,
        payload: err.response.message,
      });
    }
  };

  const fetchUser = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    dispatch({ type: LOADING, payload: !initialState.loading });
    try {
      // dispatch({ type: GET_BENEFITS });
      const res = await axios.get(`${BASE_URL}/auth/user/${id}`, config);
      dispatch({ type: LOAD_USER, payload: res.data.data });
      dispatch({ type: LOAD_USER_SUCCESS, payload: res.data.status });
    } catch (err) {
      //  dispatch({ type: LOADING, payload: initialState.loading });
      dispatch({
        type: LOAD_USERS_FAIL,
        payload: err.response.message,
      });
    }
  };

  // Function to add a contact.
  const createBenefit = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      const res = await axios.post(
        `${BASE_URL}/auth/benefit`,
        formData,
        config
      );
      dispatch({ type: ADD_BENEFIT, payload: res.data.benefit });

      dispatch({
        type: BENEFIT_SUCCESS,
        payload: res.data.message,
      });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: BENEFIT_ERROR,
        payload: err.response.data,
      });
    }
  };

  // Function to delete a contact.
  const removeBenefit = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      dispatch({
        type: DELETE_BENEFIT,
        payload: id,
      });
      const res = await axios.delete(`${BASE_URL}/auth/benefit/${id}`, config);
    } catch (err) {
      dispatch({
        type: BENEFIT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Function to update the current benefit.
  const updateBenefit = async (benefit) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      const res = await axios.put(
        `${BASE_URL}/auth/benefit/${benefit.id}`,
        { name: benefit.name },
        config
      );

      dispatch({
        type: UPDATE_BENEFIT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: BENEFIT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Function to clear all benefit from the

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        user: state.user,
        message: state.message,
        loading: state.loading,
        error: state.error,
        createBenefit,
        removeBenefit,

        updateBenefit,

        fetchUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
