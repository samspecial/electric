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

export default (state, action) => {
  switch (action.type) {
    case GET_PACKAGES:
      return {
        ...state,
        packages: action.payload,
        loading: false,
      };
    case ADD_PACKAGE:
      return {
        ...state,
        packages: [action.payload, ...state.packages],
        loading: false,
      };
    case UPDATE_PACKAGE:
      return {
        ...state,
        packages: state.packages.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
        loadng: false,
      };
    case DELETE_PACKAGE:
      return {
        ...state,
        packages: state.packages.filter((p) => p?.id !== action.payload),
        loading: false,
      };
    case PACKAGE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case PACKAGE_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
