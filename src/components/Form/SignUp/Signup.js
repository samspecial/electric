import React, { useState } from "react";
import axios from "axios";
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
  const { onChange, values, setValues } = useForm(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmiting] = useState(false);

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
    setLoading(true);
    try {
      setErrors(validateInfo(values));
      setIsSubmiting(true);
      console.log(options);
      let response = await axios.post(`${BASE_URL}/signup`, options);
      setValues(initialState);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      setIsError(true);
      console.log(error);
      setIsSubmiting(false);
    }
  };

  //   useEffect(() => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       callback();
  //     }
  //   }, [errors]);
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
        {errors.firstname && (
          <small className="error-small">{errors.firstname}</small>
        )}
      </div>
      <div className="form-label">
        <Input
          type="text"
          placeholder="Lastname"
          name="lastname"
          value={values.lastname}
          onChange={onChange}
        />
        {errors.lastname && (
          <small className="error-small">{errors.lastname}</small>
        )}
      </div>
      <div className="form-label">
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
        {errors.email && <small className="error-small">{errors.email}</small>}
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
        {errors.password && (
          <small className="error-small">{errors.password}</small>
        )}
      </div>
      <Button type="submit">{!loading ? "Register" : "Loading..."}</Button>

      <small>
        By signing up, I agree to the{" "}
        <Link to="/terms-of-service">Terms of Service</Link> and{" "}
        <Link to="/privacy-policy">Privacy Policy</Link>
      </small>
    </FormComponent>
  );
};

export default Signup;
