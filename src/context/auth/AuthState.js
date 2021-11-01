import React from "react";
import AuthContext from "./authContext";
import { register, logout, login, authState } from "./action";

export const AuthState = ({ props }) => {
  return (
    <AuthContext.Provider value={(authState, register, logout, login)}>
      {children}
    </AuthContext.Provider>
  );
};
