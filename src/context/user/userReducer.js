import {
  LOAD_USERS,
  LOAD_USER,
  LOAD_USER_SUCCESS,
  DELETE_BENEFIT,
  UPDATE_BENEFIT,
  BENEFIT_ERROR,
  BENEFIT_FAIL,
  BENEFIT_SUCCESS,
  LOAD_USERS_FAIL,
  LOAD_USERS_SUCCESS,
  LOADING,
} from "../actionTypes";

export default (state, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case LOAD_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case UPDATE_BENEFIT:
      return {
        ...state,
        benefits: state.benefits.map((benefit) =>
          benefit.id === action.payload.id ? action.payload : benefit
        ),
        loadng: false,
      };
    case DELETE_BENEFIT:
      return {
        ...state,
        benefits: state.benefits.filter(
          (benefit) => benefit?.id !== action.payload
        ),
        loading: false,
      };
    case LOAD_USERS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case LOAD_USER_SUCCESS:
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
