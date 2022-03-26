import React, { useState, useContext } from "react";
import axios from "axios";
import { Button, FormComponent, InputField, Link } from "../../Styles";
import useForm from "../useForm";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { validateSignupInfo } from "../validateForm";
import AlertContext from "../../../context/alert/alertContext";
import "../../../App.css";
import Toast from "../../Toast";

const Signup = ({ setConfirmationToken }) => {
  const initialState = {
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
  };
  const { onChange, values, setValues } = useForm(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { setAlert } = useContext(AlertContext);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const options = {
    fullname: values.fullname,
    phoneNumber: values.phoneNumber,
    email: values.email,
    password: values.password,
    role: "customer",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrors(validateSignupInfo(values));
      let response = await axios.post(`${BASE_URL}/auth/signup`, options);

      setLoading(true);
      setConfirmationToken(response.data.data);
      setValues(initialState);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response.data.error);
      setAlert("Error", error.response.data.error, "danger");
    }
  };

  return (
    <FormComponent onSubmit={handleSubmit}>
      {/* <Toast /> */}
      <h4>Get started</h4>
      <h5>
        Already have an account? <Link to="/login">Login</Link>
      </h5>
      <label htmlFor="fullname">
        <InputField
          className={errors.fullname ? "error-input" : ""}
          type="text"
          placeholder="Full name"
          name="fullname"
          value={values.fullname}
          onChange={onChange}
        />
        {errors.fullname && (
          <small className="error-small">{errors.fullname}</small>
        )}
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
        {errors.email && <small className="error-small">{errors.email}</small>}
      </label>
      <label htmlFor="phoneNumber">
        <InputField
          id="phoneNumber"
          className={errors.phoneNumber ? "error-input" : ""}
          type="text"
          placeholder="Phone number"
          name="phoneNumber"
          value={values.phoneNumber}
          onChange={onChange}
        />
        {errors.phoneNumber && (
          <small className="error-small">{errors.phoneNumber}</small>
        )}
      </label>
      <label htmlFor="password" className="l-password">
        <InputField
          id="password"
          type={showPassword ? "text" : "password"}
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
