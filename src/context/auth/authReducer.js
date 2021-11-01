import * as types from "../actionTypes";

export const initialState = {
  loading: false,
  isAuthenticated: null,
  user: {},
  statusMessage: {},
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
    case types.SIGN_UP:
      return {
        ...initialState,
        loading: true,
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...initialState,
        user: action.payload,
        loading: false,
      };
    case types.SIGN_UP_FAIL:
      return {
        ...initialState,
        loading: false,
        user: null,
        statusMessage: action.payload,
      };

    case types.SIGN_IN_SUCCESS:
      return {
        ...initialState,
        user: action.payload,
        loading: false,
        isAuthenticated: true,
      };

    case types.SIGN_UP_FAIL:
      return {
        ...initialState,
        isAuthenticated: false,
        statusMessage: action.payload,
      };

    case types.LOGOUT:
      return {
        ...initialState,
        loading: true,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...initialState,
        user: null,
        isAuthenticated: false,
      };
    default:
      return initialState;
  }
};