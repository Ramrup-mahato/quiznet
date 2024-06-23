import React, { useContext } from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import ContextStore from "../../../context/Context";
import UserManagerPage from "../../../components/Admin/UserManager/UserManagerPage";

const UsersManager = () => {
  const { userDetails } = useContext(ContextStore);
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"User Manager"}
          avatar={userDetails?.avatar}
          userName={userDetails?.username}
        >
          {/* <ContactPage /> */}
          <UserManagerPage />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default UsersManager;
