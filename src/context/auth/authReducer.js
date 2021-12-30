import * as types from "../actionTypes";

export const initialState = {
  loading: false,
  isAuthenticated: null,
  user: {},
  errorMessage: {},
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...initialState,
        loading: action.payload,
      };
    case types.SIGN_UP:
      return {
        ...initialState,
        loading: action.payload,
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
        errorMessage: action.payload,
      };

    case types.SIGN_IN_SUCCESS:
      return {
        ...initialState,
        user: action.payload,
        loading: false,
        isAuthenticated: true,
      };

    case types.SIGN_IN_FAIL:
      return {
        ...initialState,
        isAuthenticated: false,
        errorMessage: action.payload,
        user: null,
      };

    case types.LOGOUT:
      localStorage.removeItem("connId");
      return {
        ...initialState,
        isAuthenticated: false,
        user: null,
        loading: true,
        errorMessage: action.payload,
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
