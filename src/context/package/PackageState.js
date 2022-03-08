import React, { useReducer } from "react";
import axios from "axios";
import PackageContext from "./PackageContext";
import PackageReducer from "./PackageReducer";
import {
  GET_PACKAGES,
  ADD_PACKAGE,
  DELETE_PACKAGE,
  UPDATE_PACKAGE,
  PACKAGE_ERROR,
  PACKAGE_FAIL,
  PACKAGE_SUCCESS,
  LOADING,
} from "../actionTypes";

const PackageState = (props) => {
  const initialState = {
    packages: [],
    message: "",
    error: "",
    loading: false,
  };
  let BASE_URL;
  process.env.NODE_ENV === "production"
    ? (BASE_URL = "")
    : (BASE_URL = process.env.REACT_APP_BASE_URL);

  const [state, dispatch] = useReducer(PackageReducer, initialState);

  // Function to get all contacts for the user.
  const fetchPackages = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    dispatch({ type: LOADING, payload: !initialState.loading });
    try {
      const res = await axios.get(`${BASE_URL}/auth/plans`, config);

      dispatch({ type: GET_PACKAGES, payload: res.data.data });
      dispatch({ type: PACKAGE_SUCCESS, payload: res.data.status });
    } catch (err) {
      console.log(err.response);
      dispatch({
        type: PACKAGE_ERROR,
        payload: err.response.message,
      });
    }
  };

  // Function to add a package.
  const createPackage = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      const res = await axios.post(`${BASE_URL}/auth/plan`, formData, config);
      dispatch({ type: ADD_PACKAGE, payload: res.data.package });

      dispatch({
        type: PACKAGE_SUCCESS,
        payload: res.data.message,
      });
    } catch (err) {
      dispatch({
        type: PACKAGE_ERROR,
        payload: err.response.data,
      });
    }
  };

  // Function to delete a package.
  const removePackage = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      dispatch({
        type: DELETE_PACKAGE,
        payload: id,
      });
      const res = await axios.delete(`${BASE_URL}/auth/package/${id}`, config);
    } catch (err) {
      dispatch({
        type: PACKAGE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Function to update the current package.
  const updatePackage = async (benefit) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    try {
      const res = await axios.put(
        `${BASE_URL}/auth/package/${benefit.id}`,
        { name: benefit.name },
        config
      );

      dispatch({
        type: UPDATE_PACKAGE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: PACKAGE_ERROR,
        payload: err.response.msg,
      });
    }
  };

  return (
    <PackageContext.Provider
      value={{
        packages: state.packages,
        message: state.message,
        loading: state.loading,
        error: state.error,
        createPackage,
        removePackage,
        updatePackage,
        fetchPackages,
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
};

export default PackageState;
