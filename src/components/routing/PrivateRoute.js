import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "../../context/auth/AuthProvider";

const PrivateRoute = () => {
  const connString = JSON.parse(localStorage.getItem("connId"));
  const { user } = useAuthState();

  return connString?.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
