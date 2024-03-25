import React from "react";
import Parents from "../../components/ReUsable/Parents";
import NavBar from "../../components/NavBar";
import ContainerBox from "../../components/ReUsable/ContainerBox";
import RegistrationPage from "../../components/auth/RegistrationPage";

const Registration = () => {
  return (
    <Parents>
      <ContainerBox>
        <RegistrationPage />
      </ContainerBox>
    </Parents>
  );
};

export default Registration;
