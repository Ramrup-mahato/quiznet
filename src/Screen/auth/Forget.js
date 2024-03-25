import React from "react";
import Parents from "../../components/ReUsable/Parents";
import ContainerBox from "../../components/ReUsable/ContainerBox";
import ForgetPassword from "../../components/auth/ForgetPassword";

const Forget = () => {
  return (
    <Parents>
      <ContainerBox>
        <ForgetPassword /> 
      </ContainerBox>
    </Parents>
  );
};

export default Forget;
