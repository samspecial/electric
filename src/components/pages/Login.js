import React from "react";
import { useAuthState } from "../../context/auth";
import Signin from "../Form/SignIn/Signin";

import { FormContainer } from "../Styles";
import Toast from "../Toast";

const Login = () => {
  const { loading } = useAuthState();

  return (
    <FormContainer>
      {loading && <Toast />}
      <Signin />
    </FormContainer>
  );
};

export default Login;
