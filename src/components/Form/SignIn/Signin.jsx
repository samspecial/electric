import axios from "axios";
import React, { useState } from "react";
import { Button } from "../../Styles";
import Input from "../Input";
import useForm from "../useForm";
import { validateLoginInfo } from "../validateForm";

const Signin = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const { onChange, values, setValues } = useForm(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const BASE_URL = "http://localhost:4000/api/auth";
  const options = {
    email: values.email,
    password: values.password,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    // withCredentials: true,
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(options);
      setErrors(validateLoginInfo(values));
      let response = await axios.post(`${BASE_URL}/signin`, options, config);
      console.log(response);
      console.log(req.headers);
      setValues(initialState);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrors(true);
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
