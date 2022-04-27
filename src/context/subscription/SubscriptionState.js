import React, { useReducer } from "react";
import axios from "axios";
import SubscriptionContext from "./SubscriptionContext";
import SubscriptionReducer from "./SubscriptionReducer";
import {
  GET_ALL_SUBSCRIPTIONS,
  GET_SUBSCRIPTIONS,
  SUBSCRIPTION_ERROR,
  SUBSCRIPTION_SUCCESS,
  LOADING,
} from "../actionTypes";

const SubscriptionState = (props) => {
  const initialState = {
    allSubscriptions: [],
    subscriptions: [],

    message: "",
    error: "",
    loading: false,
  };
  let BASE_URL;
  process.env.NODE_ENV === "production"
    ? (BASE_URL = "")
    : (BASE_URL = process.env.REACT_APP_BASE_URL);

  const [state, dispatch] = useReducer(SubscriptionReducer, initialState);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  // Function to get all subscription for the current user.
  const fetchSubscriptions = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/auth/subscriptions`, config);
      dispatch({ type: LOADING, payload: !initialState.loading });
      dispatch({ type: GET_SUBSCRIPTIONS, payload: res.data.data });
      // dispatch({ type: SUBSCRIPTION_SUCCESS, payload: res.data.status });
      console.log(res.data.data);
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: SUBSCRIPTION_ERROR,
        payload: err.response.message,
      });
    }
  };

  const fetchAllSubscriptions = async () => {
    dispatch({ type: LOADING, payload: !initialState.loading });
    try {
      const res = await axios.get(`${BASE_URL}/auth/allsubscriptions`, config);
      console.log(res);

      dispatch({ type: GET_ALL_SUBSCRIPTIONS, payload: res.data.data });
      dispatch({ type: SUBSCRIPTION_SUCCESS, payload: res.data.status });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: SUBSCRIPTION_ERROR,
        payload: err.response.message,
      });
    }
  };

  // Function to add/join a subscription.
  const createSubscription = async (formData) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/auth/subscription`,
        formData,
        config
      );
      dispatch({ type: ADD_SUBSCRIPTION, payload: res.data.subscription });

      dispatch({
        type: SUBSCRIPTION_SUCCESS,
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: SUBSCRIPTION_ERROR,
        payload: err.response.data,
      });
    }
  };

  // Function to delete a package.
  // const removePackage = async (id) => {
  //   try {
  //     dispatch({
  //       type: DELETE_PACKAGE,
  //       payload: id,
  //     });
  //     const res = await axios.delete(`${BASE_URL}/auth/plan/${id}`, config);
  //   } catch (err) {
  //     dispatch({
  //       type: PACKAGE_ERROR,
  //       payload: err.response.msg,
  //     });
  //   }
  // };

  // // Function to update the current package.
  // const updatePackage = async (plan) => {
  //   try {
  //     const res = await axios.put(
  //       `${BASE_URL}/auth/plan/${plan.id}`,
  //       { name: plan.name },
  //       config
  //     );

  //     dispatch({
  //       type: UPDATE_PACKAGE,
  //       payload: res.data,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: PACKAGE_ERROR,
  //       payload: err.response.msg,
  //     });
  //   }
  // };

  return (
    <SubscriptionContext.Provider
      value={{
        allSubscriptions: state.allSubscriptions,
        subscriptions: state.subscriptions,

        message: state.message,
        loading: state.loading,
        error: state.error,
        createSubscription,
        fetchSubscriptions,
        fetchAllSubscriptions,
      }}
    >
      {props.children}
    </SubscriptionContext.Provider>
  );
};

export default SubscriptionState;
