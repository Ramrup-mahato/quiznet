import React from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminLoginPage from "../../../components/Admin/AdminAuth/AdminLoginPage";

const AdminLogin = () => {
  return (
    <Parents>
      <ContainerBox>
        <AdminLoginPage />
      </ContainerBox>
    </Parents>
  );
};

export default AdminLogin;
