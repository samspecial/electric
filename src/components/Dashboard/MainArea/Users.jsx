import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { FormComponent, InputField, Button, Link } from "../../Styles";
import useForm from "../../Form/useForm";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { validateSignupInfo } from "../../Form/validateForm";
import AlertContext from "../../../context/alert/alertContext";
import "../../../App.css";
import Toast from "../../Toast";

const Users = () => {
  const connString = JSON.parse(localStorage.getItem("connId"));

  const initialState = {
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
    userRole: "",
  };
  const { onChange, values, setValues } = useForm(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, isSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const { setAlert } = useContext(AlertContext);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const options = {
    fullname: values.fullname,
    phoneNumber: values.phoneNumber,
    email: values.email,
    password: values.password,
    role: values.userRole,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      setErrors(validateSignupInfo(values));
      setLoading(true);
      isSubmitted(true);
      let response = await axios.post(`${BASE_URL}/auth/signup`, options);
      console.log("Data: ", response.data.data);
      console.log("Message: ", response.data.message);

      setAlert("Success", "User created", "success");

      setValues(initialState);
      setLoading(false);
      isSubmitted(false);
    } catch (error) {
      console.log("Value", error.response.data.error);

      setAlert("Error", error.response.data.error, "danger");
      setLoading(false);
      isSubmitted(false);
    }
  };

  useEffect(() => {
    <Toast />;
  }, [submitted]);
  return connString?.user.role === "admin" ? (
    <div>
      <h2>Onboard a new user</h2>
     
      <Toast />

      <FormComponent onSubmit={handleSubmit}>
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
          {errors.email && (
            <small className="error-small">{errors.email}</small>
          )}
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
        <label htmlFor="userRole">
          <select name="userRole" id="userRole" selected onChange={onChange}>
            <option value="Admin">Admin</option>
            <option value="Officer">Officer</option>
          </select>
        </label>
        <Button type="submit">
          {" "}
          {loading && Object.keys(errors).length !== 0 ? "Loading" : "Register"}
        </Button>
      </FormComponent>
    </div>
  ) : (
    <NotFound />
  );
};

export default Users;
