import React from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import DashboardPage from "../../../components/Admin/Dashboard/DashboardPage";

const Dashboard = () => {
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"Dashboard"}
          avatar={""}
          userName={"ramrup mahato"}
        >
          <DashboardPage />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default Dashboard;
