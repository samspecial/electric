import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthState } from "../../context/auth/AuthProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuthState();
  const [connString, setConnectionString] = useState(null);

  useEffect(() => {
    const connId = localStorage.getItem("connId");
    if (connString === null) setConnectionString(JSON.parse(connId));
    return connString;
  }, [connString]);

  console.log(connString);
  return isAuthenticated === true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
