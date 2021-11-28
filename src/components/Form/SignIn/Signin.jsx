// import axios from "axios";
import React, { useState, useContext } from "react";
import {
  useAuthDispatch,
  loginUser,
  useAuthState,
} from "../../../context/auth";
import { useHistory } from "react-router";
import { Button } from "../../Styles";
import Input from "../Input";
import useForm from "../useForm";
import { validateLoginInfo } from "../validateForm";
import AlertContext from "../../../context/alert/alertContext";

const Signin = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const { onChange, values, setValues } = useForm(initialState);
  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();
  const { setAlert } = useContext(AlertContext);

  // const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const history = useHistory();

  const loginSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);

    setErrors(validateLoginInfo(values));

    const response = await loginUser(dispatch, {
      email: values.email,
      password: values.password,
    });
    if (response.data) {
      console.log(response.data);
      setValues(initialState);
      history.push("/dashboard");
    } else {
      const { message, status } = errorMessage;
      setAlert(message, "danger");
    }
  };

  return (
    <form noValidate onSubmit={loginSubmit}>
      <div>
        <label htmlFor="email">Email Address</label>
        <Input
          type="email"
          placeholder="email@example.com"
          name="email"
          id="email"
          value={values.email}
          onChange={onChange}
        />
        {errors.emall && <p>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Email</label>
        <input
          type="password"
          placeholder="enter your secret"
          name="password"
          id="password"
          value={values.password}
          onChange={onChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <Button type="submit">{loading ? "Loading..." : "Login"}</Button>
    </form>
  );
};

export default Signin;
