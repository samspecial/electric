import React from "react";
import { render } from "react-dom";
// import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import "./preloader.css";

const loader = document.querySelector(".dots-container");
const showLoader = () => loader.classList.remove("loader--hide");
const hideLoader = () => loader.classList.add("loader--hide");

render(
    <React.StrictMode>
        <Router>
            <App hideLoader={hideLoader} showLoader={showLoader} />
        </Router>
        </React.StrictMode>,
    document.querySelector("#root")
);

// App.propTypes = {
//     hideLoader: PropTypes.func.isRequired
// }
