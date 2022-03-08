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
  const history = useNavigate();
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    setConfirmationToken(confirmationToken);
  }, [confirmationToken]);

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const options = { token: confirmationToken };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(`${BASE_URL}/auth/activate`, options);
      console.log(response);
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
            A confirmation mail has been sent to your email address. You can
            click the verify button below to have your email confirmed now.
          </p>
          <label htmlFor="confirmationToken">
            <InputField
              type="hidden"
              hidden={true}
              name="confimationToken"
              readOnly
            />
          </label>
          <Button accent="success">Verify</Button>
        </FormComponent>
      )}
    </FormContainer>
  );
};

export default Register;
