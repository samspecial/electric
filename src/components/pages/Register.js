import React from "react";
import Signup from "../Form/SignUp/Signup";
import SignupCarousel from "../Form/SignUp/SignupCarousel";
import { FormContainer } from "../Styles";

const Register = () => {
  return (
    <FormContainer>
      <Signup />
      <SignupCarousel />
    </FormContainer>
  );
};

export default Register;
