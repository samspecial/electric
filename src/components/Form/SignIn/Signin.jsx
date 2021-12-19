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

  // const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const loginSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateLoginInfo(values));
    const response = await loginUser(dispatch, {
      email: values.email,
      password: values.password,
    });

    console.log(loading);
    if (response.user) {
      setValues(initialState);
      history.push("/dashboard");
    }
    if (response.err) {
      console.log(loading);
      console.log(response.err);
    }
    // } else {
    //   console.log(response.user);
    //   const { message, status } = errorMessage;
    //   setAlert("Failed", message, "warning");
    // }
    // } catch (error) {
    else {
      console.log(loading);
      // setErrors(true);
      const { message, status } = errorMessage;
      setAlert(status, message, "danger");
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
          type={showPassword ? "password" : "text"}
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
          {showPassword ? <FiEye /> : <FiEyeOff />}
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
