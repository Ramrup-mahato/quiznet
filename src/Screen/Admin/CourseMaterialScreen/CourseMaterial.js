import React from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import ContactPage from "../../../components/Admin/Contact/ContactPage";

const CourseMaterial = () => {
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"Course Material"}
          avatar={""}
          userName={"niku singh"}
        >
          <ContactPage />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default CourseMaterial;
