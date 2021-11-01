import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Dashboard from "./components/pages/Dashboard";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import PrivateRoute from "./components/routing/PrivateRoute";
import { AuthProvider } from "./context/auth";

export default function App({ hideLoader }) {
  useEffect(() => {
    hideLoader();
  });
  return (
    <AuthProvider>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </AuthProvider>
  );
}

App.propTypes = {
  hideLoader: PropTypes.func.isRequired,
};
