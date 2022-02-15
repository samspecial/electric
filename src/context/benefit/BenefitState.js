import React, { useReducer } from "react";
import axios from "axios";
import BenefitContext from "./benefitContext";
import benefitReducer from "./benefitReducer";
import {
  GET_BENEFITS,
  ADD_BENEFIT,
  DELETE_BENEFIT,
  UPDATE_BENEFIT,
  BENEFIT_ERROR,
  BENEFIT_FAIL,
  BENEFIT_SUCCESS,
  LOADING,
} from "../actionTypes";

const BenefitState = (props) => {
  const initialState = {
    benefits: [],
    message: "",
    error: "",
    loading: false,
  };
  let BASE_URL;
  process.env.NODE_ENV === "production"
    ? (BASE_URL = "")
    : (BASE_URL = process.env.REACT_APP_BASE_URL);

  const [state, dispatch] = useReducer(benefitReducer, initialState);

  // Function to get all contacts for the user.
  const fetchBenefits = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    dispatch({ type: LOADING, payload: !initialState.loading });
    try {
      dispatch({ type: GET_BENEFITS });
      const res = await axios.get(`${BASE_URL}/auth/benefits`, config);

      dispatch({ type: GET_BENEFITS, payload: res.data.data });
      dispatch({ type: BENEFIT_SUCCESS, payload: res.data.status });
    } catch (err) {
      //  dispatch({ type: LOADING, payload: initialState.loading });
      dispatch({
        type: BENEFIT_ERROR,
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
      dispatch({ type: ADD_BENEFIT });
      const res = await axios.post(
        `${BASE_URL}/auth/benefit`,
        formData,
        config
      );

      dispatch({
        type: BENEFIT_SUCCESS,
        payload: res.data.message,
      });

      dispatch({ type: LOADING, payload: initialState.loading });
    } catch (err) {
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
      // dispatch({
      //   type: DELETE_BENEFIT,
      //   payload: id,
      // });
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
      withCredential: true,
    };

    try {
      const res = await axios.put(
        `${BASE_URL}/auth/benefit/${benefit.id}`,
        { name: benefit },
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
    <BenefitContext.Provider
      value={{
        benefits: state.benefits,
        message: state.message,
        loading: state.loading,
        error: state.error,
        createBenefit,
        removeBenefit,

        updateBenefit,

        fetchBenefits,
      }}
    >
      {props.children}
    </BenefitContext.Provider>
  );
};

export default BenefitState;
