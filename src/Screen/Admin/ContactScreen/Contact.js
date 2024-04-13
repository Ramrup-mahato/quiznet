import React from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import ReportPage from "../../../components/Admin/Report/ReportPage";
import ContactPage from "../../../components/Admin/Contact/ContactPage";

const Contact = () => {
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"Contact user"}
          avatar={""}
          userName={"niku singh"}
        >
          {/* <ReportPage /> */}
          <ContactPage />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default Contact;
