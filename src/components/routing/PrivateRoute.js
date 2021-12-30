import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "../../context/auth/AuthProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, errorMessage, isAuthenticated } = useAuthState();
  const connId = localStorage.getItem("connId");
  const [connString, setConnectionString] = useState(JSON.parse(connId));

  const getUserCredentials = () => {
    if (connString === null) setConnectionString(JSON.parse(connId));
    return connString;
  };
  getUserCredentials();
  console.log(connString);
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          "Now Loading"
        ) : connString?.isAuthenticated === true &&
          connString?.connId.length > 0 ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
