import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import CreditCard from "../Form/CreditCard";
import Signup from "../Form/SignUp/Signup";
import SignupCarousel from "../Form/SignUp/SignupCarousel";
import { Button, FormComponent, FormContainer, InputField } from "../Styles";
import Toast from "../Toast";

const Register = () => {
  const [confirmationToken, setConfirmationToken] = useState("");
  const [responseMessage, setResponseMessage] = useState({});
  const [otp, setOtp] = useState("");
  const history = useNavigate();
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    setConfirmationToken(confirmationToken);
  }, [confirmationToken]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const handleChange = (event) => {
    setOtp(event.target.value);
  };

  const options = { otpString: otp, ...confirmationToken };
  console.log(options);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(`${BASE_URL}/auth/activate`, options);

      setResponseMessage(response.data);
      // const { message, status } = response.data;
      // if (message === "user created" && status === "success")
      //   return <CreditCard />;
      // history("/dashboard");
      //console.log(response.data);
    } catch (error) {
      setAlert("Error", error.response.data.error, "danger");
    }
  };

  return (
    <FormContainer>
      <Toast />
      <Signup
        confirmationToken={confirmationToken}
        setConfirmationToken={setConfirmationToken}
      />
      {confirmationToken.length === 0 ? (
        <SignupCarousel />
      ) : responseMessage?.message === "user created" &&
        responseMessage?.status === "success" ? (
        <CreditCard responseMessage={responseMessage} />
      ) : (
        <FormComponent onSubmit={handleSubmit}>
          <h2>We can't wait to have you in 🎉</h2>
          <p>
            An verification code has been sent to your email address. You can
            click the verify button below to have your email confirmed now.
          </p>
          <label htmlFor="otpCode">
            <InputField
              type="text"
              name="otpCode"
              value={otp}
              onChange={handleChange}
            />
          </label>
          <Button accent="success">Verify</Button>
        </FormComponent>
      )}
    </FormContainer>
  );
};

export default Register;
