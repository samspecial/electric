import React, { useEffect } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

import Home from "./components/pages/Home";

import "./preloader.css";

const loader = document.querySelector(".dots-container");
const showLoader = () => loader.classList.remove("loader--hide");
console.log(showLoader, loader)
const hideLoader = () => loader.classList.add("loader--hide");


export default function App({ hideLoader }) {
    useEffect(() => {
        hideLoader();
    });
    return (
        <div>
            <Home />
        </div>
    );
}



render(
    <React.StrictMode>
        <App hideLoader={hideLoader} showLoader={showLoader} />
    </React.StrictMode>,
    document.querySelector("#root")
);

App.propTypes = {
    hideLoader: PropTypes.func.isRequired
}
