import React, { useContext } from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import ReportPage from "../../../components/Admin/Report/ReportPage";
import ContextStore from "../../../context/Context";

const Report = () => {
  const { userDetails } = useContext(ContextStore);
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"Report Question"}
          avatar={userDetails?.avatar}
          userName={userDetails?.username}
        >
          <ReportPage />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default Report;
