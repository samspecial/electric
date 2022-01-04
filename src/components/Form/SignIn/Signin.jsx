// import axios from "axios";
import React, { useState, useContext } from "react";
import {
  useAuthDispatch,
  loginUser,
  useAuthState,
} from "../../../context/auth";
import { useHistory } from "react-router";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { Button, InputField, FormComponent, Link } from "../../Styles";
import "../../../App.css";
import useForm from "../useForm";
import { validateLoginInfo } from "../validateForm";
import AlertContext from "../../../context/alert/alertContext";

const Signin = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const { onChange, values, setValues } = useForm(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();
  const { setAlert } = useContext(AlertContext);

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const loginSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateLoginInfo(values));
    const response = await loginUser(dispatch, {
      email: values.email,
      password: values.password,
    });
    if (response.user) {
      const credentials = {
        connId: response.user.connId,
        isAuthenticated: true,
      };
      localStorage.setItem("connId", JSON.stringify(credentials));
      setValues(initialState);
      history.push("/dashboard");
    }
    if (response.err) {
      console.log(response.err);
    } else {
      const { message } = errorMessage;
      setAlert("Failed", message, "danger");
    }
  };

  return (
    <FormComponent form="signin" noValidate onSubmit={loginSubmit}>
      <h4>Welcome Back</h4>

      <label htmlFor="email">
        <InputField
          className={errors.email ? "error-input" : ""}
          type="email"
          placeholder="email@example.com"
          name="email"
          id="email"
          value={values.email}
          onChange={onChange}
        />
        {errors.emall && <p>{errors.email}</p>}
      </label>

      <label htmlFor="password" className="l-password">
        <InputField
          type={showPassword ? "text" : "password"}
          placeholder="password"
          name="password"
          id="password"
          value={values.password}
          onChange={onChange}
        />
        <span
          className={
            !errors.password ? "password-toggle" : "password-toggle-error"
          }
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </span>
        {errors.password && (
          <small className="error-small">{errors.password}</small>
        )}
      </label>
      <Link display="block" to="/forgot-password">
        Forgot password
      </Link>
      <Button type="submit">
        {!loading && Object.keys(errors).length !== 0 ? "Loading..." : "Login"}
      </Button>
      <small>
        Don't have an account yet? <Link to="/register">Register</Link>
      </small>
    </FormComponent>
  );
};

export default Signin;
