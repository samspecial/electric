export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAIL = "SIGN_UP_FAIL";
export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAIL = "SIGN_IN_FAIL";
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const AUTH_FAIL = "AUTH_FAIL";

//LOAD USERS
export const LOAD_USER = "LOAD_USER";
export const LOAD_USERS = "LOAD_USERS";
export const LOAD_USERS_FAIL = "LOAD_USERS_FAIL";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USERS_SUCCESS = "LOAD_USERS_SUCCESS";

//ALERT ACTIONS
export const SET_ALERT = "SET_ALERT";
export const REMOVE_ALERT = "REMOVE_ALERT";

//BENEFIT
export const GET_BENEFITS = "GET_BENEFITS";
export const ADD_BENEFIT = "ADD_BENEFIT";
export const DELETE_BENEFIT = "DELETE_BENEFIT";
export const SET_CURRENT = "SET_CURRENT";
export const CLEAR_CURRENT = "CLEAR_CURRENT";
export const UPDATE_BENEFIT = "UPDATE_BENEFIT";
export const BENEFIT_SUCCESS = "BENEFIT_SUCCESS";
export const BENEFIT_FAIL = "BENEFIT_FAIL";
export const LOADING = "LOADING";

//PACKAGE
export const GET_PACKAGES = "GET_PACKAGES";
export const ADD_PACKAGE = "ADD_PACKAGE";
export const DELETE_PACKAGE = "DELETE_PACKAGE";
export const UPDATE_PACKAGE = "UPDATE_PACKAGE";
export const PACKAGE_ERROR = "PACKAGE_ERROR";
export const PACKAGE_FAIL = "PACKAGE_FAIL";
export const PACKAGE_SUCCESS = "PACKAGE_SUCCESS";

//SUBSCRIPTIONS
export const GET_ALL_SUBSCRIPTIONS = "GET_ALL_SUBSCRIPTIONS";
export const GET_SUBSCRIPTIONS = "GET_SUBSCRIPTIONS";
export const GET_ACTIVE_SUBSCRIPTION = "GET_ACTIVE_SUBSCRIPTION";
export const DEACTIVATE_SUBSCRIPTION = "DEACTIVATE_SUBSCRIPTION";

//Write cron job to deactivate and renew subscriptions for user -
//For subscription renewal, a charge is carried out
