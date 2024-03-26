import React from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";

const Dashboard = () => {
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar selected={'Dashboard'}>
          <div className="w-full h-full ">
            <h1>Hello </h1>
          </div>
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default Dashboard;
