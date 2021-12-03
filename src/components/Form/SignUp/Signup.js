import React, { useState } from "react";
import axios from "axios";
import { Button, FormComponent, InputField, Link } from "../../Styles";
import useForm from "../useForm";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { validateSignupInfo } from "../validateForm";
import "../../../App.css";

const Signup = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const { onChange, values, setValues } = useForm(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const BASE_URL = "http://localhost:4000/api/auth";
  const options = {
    firstname: values.firstname,
    lastname: values.lastname,
    email: values.email,
    password: values.password,
    role: "customer",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrors(validateSignupInfo(values));
      let response = await axios.post(`${BASE_URL}/signup`, options);
      setLoading(true);
      setValues(initialState);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormComponent onSubmit={handleSubmit}>
      <h4>Get started</h4>
      <h5>
        Already have an account? <Link to="/login">Login</Link>
      </h5>
      <label htmlFor="firstname">
        <InputField
          className={errors.firstname ? "error-input" : ""}
          type="text"
          placeholder="Firstname"
          name="firstname"
          value={values.firstname}
          onChange={onChange}
        />
      </label>
      <label htmlFor="lastname">
        <InputField
          id="lastname"
          className={errors.lastname ? "error-input" : ""}
          type="text"
          placeholder="Lastname"
          name="lastname"
          value={values.lastname}
          onChange={onChange}
        />
      </label>
      <label htmlFor="email">
        <InputField
          id="email"
          className={errors.email ? "error-input" : ""}
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
      </label>
      <label htmlFor="password" className="l-password">
        <InputField
          id="password"
          type={showPassword ? "password" : "text"}
          placeholder="Password"
          name="password"
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
      <Button type="submit">
        {" "}
        {loading && Object.keys(errors).length !== 0 ? "Loading" : "Register"}
        {console.log(loading)}
      </Button>

      <small>
        By signing up, I agree to the{" "}
        <Link to="/terms-of-service">Terms of Service</Link> and{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </small>
    </FormComponent>
  );
};

export default Signup;
