import React, { useContext } from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import DashboardPage from "../../../components/Admin/Dashboard/DashboardPage";
import ContextStore from "../../../context/Context";

const Dashboard = () => {
  const { userDetails } = useContext(ContextStore);
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"Dashboard"}
          avatar={userDetails?.avatar}
          userName={userDetails?.username}
        >
          <DashboardPage />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default Dashboard;
