import React from "react";
import { FaPlus } from "react-icons/fa6";
import EmployeeService from "../../../service/EmployeeService/EmployeeService";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Modal from "../../Modal/Modal";
import TextInput from "../../ReUsable/TextInput";

const EmployeePage = () => {
  let {
    employeeList,

    handleModal,
    moduleSearch,
    searchText,
    openModal,
    modalData,
    employee,
    addEditModal,
    handleSearchText,
    handleSelectEmployee,
    handleAddNewEmployee,
    handleSaveEmployee,
  } = EmployeeService();
  return (
    <div className="p-4">
      <div className="w-full bg-violet-200 rounded-full flex justify-between items-center p-3">
        <h1 className="font-medium text-[14px] text-gray-600">
          Total Employee:{" "}
          <span className="font-bold text-[14px] text-[var(--colB1)]">
            {employeeList?.length}
          </span>
        </h1>
        <div className="flex gap-2 justify-center items-center">
          <p className="font-medium text-[10px] text-slate-500">Add Employee</p>
          <FaPlus
            size={30}
            onClick={() => handleModal("", "add")}
            className="w-10 h-10 text-[var(--colB1)] bg-[#E7F4FF] p-2 shadow-lg rounded-full cursor-pointer hover:bg-blue-100  "
          />
        </div>
      </div>
      <div className="grid grid-cols-2 p-5 gap-4  ">
        {employeeList?.length > 0 &&
          employeeList?.map((emp, i) => (
            <div
              key={i}
              className="p-3 bg-[var(--colW2)] dark:bg-slate-800 flex flex-col justify-center items-center rounded-lg shadow-lg"
            >
              {emp?.avatar ? (
                <img
                  src={emp?.avatar}
                  alt="employee..."
                  className="w-[200px] h-[200px] object-cover bg-cover rounded-full border-[4px] border-[var(--colW3)] 
                  shadow-2xl shadow-slate-500 dark:shadow-slate-400"
                />
              ) : (
                <p
                  className="w-[200px] h-[200px] font-bold text-[100px] flex justify-center items-center text-violet-600 rounded-full border-[4px] border-[var(--colW3)] 
              shadow-2xl shadow-slate-500 dark:shadow-slate-400"
                >
                  {emp?.username?.slice(0, 1).toUpperCase()}
                </p>
              )}
              <div className="w-full flex flex-col p-3">
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    Name:
                  </p>
                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {emp?.username}
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    Phone:
                  </p>
                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {emp?.phone}
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    Email:
                  </p>
                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {emp?.email}
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    Active:
                  </p>
                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {emp?.isActive ? "Yes" : "No"}
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    Blocked:
                  </p>
                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {emp?.isBlocked ? "Yes" : "No"}
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    User Type:
                  </p>

                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {emp?.userType}
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    User id:
                  </p>

                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {emp?._id}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-end items-end">
                <button
                  className=" flex bg-red-400 justify-center items-center gap-3 py-2 px-3  rounded-full cursor-pointer w-[100px]"
                  onClick={() => handleSaveEmployee("student", emp)}
                >
                  Delete <MdDelete size={20} />{" "}
                </button>
              </div>
            </div>
          ))}
      </div>
      <EmployeeModal
        openModal={openModal}
        handleModal={handleModal}
        searchText={searchText}
        handleSearchText={handleSearchText}
        moduleSearch={moduleSearch}
        modalData={modalData}
        addEditModal={addEditModal}
        handleSelectEmployee={handleSelectEmployee}
        handleAddNewEmployee={handleAddNewEmployee}
        employee={employee}
        handleSaveEmployee={handleSaveEmployee}
      />
    </div>
  );
};
const EmployeeModal = ({
  openModal,
  handleModal,
  searchText,
  handleSearchText,
  moduleSearch,
  modalData,
  addEditModal,
  handleSelectEmployee,
  handleSaveEmployee,
  employee,
}) => {
  return (
    <>
      <Modal open={openModal} onClose={handleModal}>
        <div className="w-[500px] min-h-[500px] bg-[var(--colW2)] dark:bg-slate-800 p-3  rounded-xl ">
          {addEditModal === "add" ? (
            <div className="w-full h-full relative  ">
              <TextInput
                placeholder={"Search New Team"}
                value={searchText}
                classStyle={"mb-3 "}
                handleChange={handleSearchText}
              />
              {moduleSearch && moduleSearch.length > 0 && (
                <div
                  className=" absolute top-14 w-full bg-[var(--colW3)] dark:bg-gray-800 p-2 shadow-2xl rounded-lg
               shadow-slate-500 dark:shadow-slate-400 "
                >
                  {moduleSearch?.map((ele, i) => (
                    <div
                      className="bg-[var(--colW2)] dark:bg-slate-700 p-2 m-2 rounded-lg cursor-pointer flex gap-5"
                      key={i}
                      onClick={() => handleSelectEmployee(ele)}
                    >
                      {ele?.avatar ? (
                        <img
                          src={ele?.avatar}
                          alt="employee..."
                          className="w-10 h-10 object-cover bg-cover rounded-full border-[4px] border-[var(--colW3)]  "
                        />
                      ) : (
                        <p className="w-10 h-10 font-bold text-[17px] flex justify-center items-center text-violet-600 rounded-full border-[4px] border-[var(--colW3)] ">
                          {ele?.username?.slice(0, 1).toUpperCase()}
                        </p>
                      )}
                      <div>
                        <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                          {ele?.username}
                        </p>
                        <p className="font-bold text-[var(--colB1)] text-[14px]">
                          {ele?.email}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            ""
          )}
          {employee?.showSelectEmployee ? (
            <div className="p-3 bg-[var(--colW2)] dark:bg-slate-800 flex flex-col justify-center items-center rounded-lg shadow-lg">
              {modalData?.avatar ? (
                <img
                  src={modalData?.avatar}
                  alt="employee..."
                  className="w-[200px] h-[200px] object-cover bg-cover rounded-full border-[4px] border-[var(--colW3)] 
               shadow-2xl shadow-slate-500 dark:shadow-slate-400"
                />
              ) : (
                <p
                  className="w-[200px] h-[200px] font-bold text-[100px] flex justify-center items-center text-violet-600 rounded-full border-[4px] border-[var(--colW3)] 
           shadow-2xl shadow-slate-500 dark:shadow-slate-400"
                >
                  {modalData?.username?.slice(0, 1).toUpperCase()}
                </p>
              )}
              <div className="w-full flex flex-col p-3">
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    Name:
                  </p>
                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {modalData?.username}
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    Phone:
                  </p>
                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {modalData?.phone}
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    Email:
                  </p>
                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {modalData?.email}
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    Active:
                  </p>
                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {modalData?.isActive ? "Yes" : "No"}
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    Blocked:
                  </p>
                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {modalData?.isBlocked ? "Yes" : "No"}
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    User Type:
                  </p>

                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {modalData?.userType}
                  </p>
                </div>
                <div className=" flex gap-3 ">
                  <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                    User id:
                  </p>

                  <p className="font-bold text-[14px] text-[var(--colB1)]">
                    {modalData?._id}
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-end items-end">
                <button
                  onClick={() => handleSaveEmployee("employee", modalData)}
                  className=" flex bg-[var(--colG2)] justify-center items-center gap-2 p-2 rounded-full cursor-pointer w-[100px]  font-bold"
                >
                  Add
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </Modal>
    </>
  );
};

export default EmployeePage;
