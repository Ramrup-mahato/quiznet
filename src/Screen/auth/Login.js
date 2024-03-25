import React from "react";
import LoginPage from "../../components/auth/LoginPage";
import ContainerBox from "../../components/ReUsable/ContainerBox";
import Parents from "../../components/ReUsable/Parents";
import NavBar from "../../components/NavBar";

const Login = () => {
  return (
    <Parents>
      <ContainerBox>
        <LoginPage />
      </ContainerBox>
    </Parents>
  );
};

export default Login;
