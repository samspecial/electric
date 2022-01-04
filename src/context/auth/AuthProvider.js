import React, { useContext, useReducer, createContext } from "react";
import { loginUser, registerUser, logoutUser } from "./actions";

import { initialState, AuthReducer } from "./authReducer";

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }

  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }

  return context;
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthStateContext.Provider
      value={{
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        errorMessage: state.errorMessage,
        loginUser,
        registerUser,
        logoutUser,
      }}
    >
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
