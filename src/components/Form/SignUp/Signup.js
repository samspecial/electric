import React, { useState } from "react";
import { Button, FormComponent } from "../../Styles";
import Input from "../Input";
import { Link } from "react-router-dom";
import useForm from "../useForm";
import { FiEye, FiEyeOff } from "react-icons/fi";
import validateInfo from "../validateForm";
import "../../../App.css";

const Signup = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const { onChange, values, handleSubmit, errors } = useForm(
    validateInfo,
    initialState
  );
  // Form stages
  //   const [errors, setErrors] = useState();

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     setErrors(validateInfo(values));
  //   };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormComponent onSubmit={handleSubmit}>
      <h4>Get started</h4>
      <small>
        Already have an account? <Link to="/login">Sign in</Link>
      </small>
      <div className="form-label">
        <Input
          type="text"
          placeholder="Firstname"
          name="firstname"
          value={values.firstname}
          onChange={onChange}
        />
        {errors && <small className="error-small">{errors.firstname}</small>}
      </div>
      <div className="form-label">
        <Input
          type="text"
          placeholder="Lastname"
          name="lastname"
          value={values.lastname}
          onChange={onChange}
        />
        {errors && <small className="error-small">{errors.lastname}</small>}
      </div>
      <div className="form-label">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
        {errors && <small className="error-small">{errors.email}</small>}
      </div>
      <div className="form-label">
        <Input
          id="password"
          type={showPassword ? "password" : "text"}
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={onChange}
        />
        <span
          className="password-toggle"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FiEye /> : <FiEyeOff />}
        </span>
        {errors && <small className="error-small">{errors.password}</small>}
      </div>
      <Button type="submit">Register</Button>

      <small>
        By signing up, I agree to the{" "}
        <Link to="/terms-of-service">Terms of Service</Link> and{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </small>
    </FormComponent>
  );
};

export default Signup;
