import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { AuthProvider } from "./context/auth/AuthProvider";

import "./preloader.css";

const loader = document.querySelector(".dots-container");
const showLoader = () => loader.classList.remove("loader--hide");
const hideLoader = () => loader.classList.add("loader--hide");

render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App hideLoader={hideLoader} showLoader={showLoader} />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);

// App.propTypes = {
//     hideLoader: PropTypes.func.isRequired
// }
