import React from "react";
import Signin from "../Form/SignIn/Signin";

import { FormContainer } from "../Styles";
import Toast from "../Toast";

const Login = () => {
  return (
    <FormContainer>
      <Toast />
      <Signin />
    </FormContainer>
  );
};

export default Login;
