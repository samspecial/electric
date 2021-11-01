import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthState } from "../../context/auth/AuthProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, errorMessage, isAuthenticated } = useAuthState();

  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          "Now Loading"
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
