import {
  GET_ALL_SUBSCRIPTIONS,
  GET_SUBSCRIPTIONS,
  SUBSCRIPTION_ERROR,
  SUBSCRIPTION_SUCCESS,
  LOADING,
  ADD_SUBSCRIPTION,
} from "../actionTypes";

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_SUBSCRIPTIONS:
      return {
        ...state,
        allSubscriptions: action.payload,
        loading: false,
      };
    case GET_SUBSCRIPTIONS:
      return {
        ...state,
        subscriptions: action.payload,
        loading: false,
      };
    case ADD_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: [action.payload, ...state.subscriptions],
        loading: false,
      };

    case SUBSCRIPTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SUBSCRIPTION_SUCCESS:
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
