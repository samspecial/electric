import React from "react";
import { render } from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import AlertState from "./context/alert/AlertState";
import { AuthProvider } from "./context/auth/AuthProvider";
import PackageState from "./context/package/PackageState";
import SubscriptionState from "./context/subscription/SubscriptionState";
import UserState from "./context/user/UserState";

import "./preloader.css";

const loader = document.querySelector(".dots-container");
const showLoader = () => loader.classList.remove("loader--hide");
const hideLoader = () => loader.classList.add("loader--hide");

render(
  <React.StrictMode>
    <AuthProvider>
      <UserState>
        <PackageState>
          <SubscriptionState>
            <AlertState>
              <Router>
                <App hideLoader={hideLoader} showLoader={showLoader} />
              </Router>
            </AlertState>
          </SubscriptionState>
        </PackageState>
      </UserState>
    </AuthProvider>
  </React.StrictMode>,
  document.querySelector("#root")
);
