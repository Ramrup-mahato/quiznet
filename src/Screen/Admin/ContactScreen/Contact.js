import React, { useContext } from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import ContactPage from "../../../components/Admin/Contact/ContactPage";
import ContextStore from "../../../context/Context";

const Contact = () => {
  const { userDetails } = useContext(ContextStore);
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"Contact user"}
          avatar={userDetails?.avatar}
          userName={userDetails?.username}
        >
          <ContactPage />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default Contact;
