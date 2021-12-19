import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import AlertContext from "../../context/alert/alertContext";
import Signup from "../Form/SignUp/Signup";
import SignupCarousel from "../Form/SignUp/SignupCarousel";
import { Button, FormComponent, FormContainer, InputField } from "../Styles";
import Toast from "../Toast";

const Register = () => {
  const [confirmationToken, setConfirmationToken] = useState("");
  const history = useHistory();
  const { setAlert } = useContext(AlertContext);

  useEffect(() => {
    setConfirmationToken(confirmationToken);
  }, [confirmationToken]);

  const BASE_URL = "http://localhost:4000/api/auth";
  const options = { token: confirmationToken };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(`${BASE_URL}/activate`, options);
      const { message, status } = response.data;
      if (message === "user created" && status === "success")
        history.push("/dashboard");
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
      ) : (
        <FormComponent onSubmit={handleSubmit}>
          <h2>You're almost in 🎉</h2>
          <p>
            A mail has been sent to your email address containing a confirmation
            token. You can click the verify button below to have your email
            confirmed now.
          </p>
          <label htmlFor="confirmationToken">
            <InputField
              type="text"
              hidden={true}
              placeholder="Firstname"
              name="confimationToken"
              value={confirmationToken}
              readOnly
            />
          </label>
          <Button>Verify</Button>
        </FormComponent>
      )}
    </FormContainer>
  );
};

export default Register;
