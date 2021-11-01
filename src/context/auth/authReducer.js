import * as types from "../actionTypes";

const initialState = {
  loading: false,
  isAuthenticated: null,
  user: null,
  statusMessage: {},
};

export default (state, action) => {
  switch (action.type) {
    case types.SIGN_IN:
    case types.SIGN_UP:
      return {
        ...state,
        loading: true,
      };
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.SIGN_UP_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        statusMessage: action.payload,
      };

    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        isAuthenticated: true,
      };

    case types.SIGN_UP_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        statusMessage: action.payload,
      };

    case types.LOGOUT:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
