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

export default (state, action) => {
  switch (action.type) {
    case GET_BENEFITS:
      return {
        ...state,
        benefits: action.payload,
        loading: false,
      };
    case ADD_BENEFIT:
      return {
        ...state,
        benefits: [action.payload, ...state.benefits],
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
    case BENEFIT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case BENEFIT_SUCCESS:
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
