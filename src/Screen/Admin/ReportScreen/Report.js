import React from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import ReportPage from "../../../components/Admin/Report/ReportPage";

const Report = () => {
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar selected={"Report Question"} avatar={""} userName={"niku singh"}>
          <ReportPage />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default Report;
