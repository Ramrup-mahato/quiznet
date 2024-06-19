import React, { useContext } from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import EmployeePage from "../../../components/Admin/Employee/EmployeePage";
import ContextStore from "../../../context/Context";

const Employee = () => {
  const { userDetails } = useContext(ContextStore);
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"Employees"}
          avatar={userDetails?.avatar}
          userName={userDetails?.username}
        >
          <EmployeePage />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default Employee;
