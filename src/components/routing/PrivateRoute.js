import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "../../context/auth/AuthProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, errorMessage, isAuthenticated } = useAuthState();
  const [connString, setConnectionString] = useState(null);

  useEffect(() => {
    const connId = localStorage.getItem("connId");
    if (connString === null) setConnectionString(JSON.parse(connId));
    return connString;
  }, [connString]);

  console.log(connString);
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          "Now Loading"
        ) : isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
