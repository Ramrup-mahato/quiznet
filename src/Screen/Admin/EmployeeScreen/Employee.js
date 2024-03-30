import React from "react";
import Parents from "../../../components/ReUsable/Parents";
import ContainerBox from "../../../components/ReUsable/ContainerBox";
import AdminSideBar from "../../../components/Admin/AdminSideBar/AdminSideBar";
import EmployeePage from "../../../components/Admin/Employee/EmployeePage";

const Employee = () => {
  return (
    <Parents>
      <ContainerBox>
        <AdminSideBar
          selected={"Employees"}
          avatar={""}
          userName={"niku singh"}
        >
          <EmployeePage />
        </AdminSideBar>
      </ContainerBox>
    </Parents>
  );
};

export default Employee;
