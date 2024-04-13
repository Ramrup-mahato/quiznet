import React from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import FaqPage from "../../../components/Admin/FAQ/FaqPage";

const Faq = () => {
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"FAQ"}
          avatar={""}
          userName={"niku singh"}
        >
         <FaqPage />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default Faq;
