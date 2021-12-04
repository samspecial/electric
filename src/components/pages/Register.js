import React from "react";
import Signup from "../Form/SignUp/Signup";
import SignupCarousel from "../Form/SignUp/SignupCarousel";
import { FormContainer } from "../Styles";
import Toast from "../Toast";

const Register = () => {
  return (
    <FormContainer>
      <Toast />
      <Signup />
      <SignupCarousel />
    </FormContainer>
  );
};

export default Register;
