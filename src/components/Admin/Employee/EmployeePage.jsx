import React from "react";
import { FaPlus } from "react-icons/fa6";
import EmployeeService from "../../../service/EmployeeService/EmployeeService";
import { MdDelete } from "react-icons/md";
import { FaHandshakeSimple } from "react-icons/fa6";
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
    addEditModal,
    handleSearchText,
    handleSelectEmployee,
    handleAddNewEmployee,
  } = EmployeeService();
  return (
    <div className="p-4">
      <div className="w-full bg-violet-200 rounded-full flex justify-between items-center p-3">
        <h1 className="font-medium text-[14px] text-gray-600">
          Total Employee:{" "}
          <span className="font-bold text-[14px] text-[var(--colB1)]">
            {employeeList.length}
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
        {employeeList?.map((emp, i) => (
          <div
            key={i}
            className="p-3 bg-[var(--colW2)] dark:bg-slate-800 flex flex-col justify-center items-center rounded-lg shadow-lg"
          >
            {emp?.image ? (
              <img
                src={emp?.image}
                alt="employee image"
                className="w-[200px] h-[200px] object-cover bg-cover rounded-full border-[4px] border-[var(--colW3)] 
                  shadow-2xl shadow-slate-500 dark:shadow-slate-400"
              />
            ) : (
              <p
                className="w-[200px] h-[200px] font-bold text-[100px] flex justify-center items-center text-violet-600 rounded-full border-[4px] border-[var(--colW3)] 
              shadow-2xl shadow-slate-500 dark:shadow-slate-400"
              >
                {emp?.name[0].toUpperCase()}
              </p>
            )}
            <div className="w-full flex flex-col p-3">
              <p className="font-bold text-[20px] text-slate-600 dark:text-slate-100">
                {emp?.name}
              </p>
              <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                {emp?.phone}
              </p>
              <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                {emp?.email}
              </p>
              <div className=" flex gap-3 ">
                <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                  Course:
                </p>
                <p className="font-bold text-[14px] text-[var(--colB1)]">
                  {emp?.topicAssign}
                </p>
              </div>
              <div className=" flex gap-3 ">
                <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                  Status:
                </p>

                <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                  {emp?.status}
                </p>
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-2">
              <button className=" flex bg-red-400 justify-center items-center gap-3 p-2 rounded-full cursor-pointer">
                Delete <MdDelete size={20} />{" "}
              </button>
              <button
                onClick={() => handleModal(emp, "edit")}
                className=" flex bg-green-400 justify-center items-center gap-2 p-2 rounded-full cursor-pointer"
              >
                Edit <FaRegEdit size={20} />{" "}
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
  handleAddNewEmployee,
}) => {
  const avatar = "";
  const name = "rahul";
  return (
    <>
      <Modal open={openModal} onClose={handleModal}>
        <div className="w-[500px] min-h-[500px] bg-[var(--colW2)] dark:bg-slate-800 p-3  rounded-xl ">
          {addEditModal == "add" ? (
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
                      {ele?.image ? (
                        <img
                          src={ele?.image}
                          alt="employee image"
                          className="w-10 h-10 object-cover bg-cover rounded-full border-[4px] border-[var(--colW3)]  "
                        />
                      ) : (
                        <p className="w-10 h-10 font-bold text-[17px] flex justify-center items-center text-violet-600 rounded-full border-[4px] border-[var(--colW3)] ">
                          {ele?.name[0].toUpperCase()}
                        </p>
                      )}
                      <div>
                        <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                          {ele?.name}
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
          {modalData && modalData.length > 0 ? (
            <div className="flex justify-center items-center flex-col">
              {modalData[0]?.image ? (
                <img
                  src={modalData[0]?.image}
                  alt="employee image"
                  className="w-[150px] h-[150px] object-cover bg-cover rounded-full border-[4px] border-[var(--colW3)] 
                  shadow-2xl shadow-slate-500 dark:shadow-slate-400"
                />
              ) : (
                <p
                  className="w-[150px] h-[150px] font-bold text-[100px] flex justify-center items-center text-violet-600
                   rounded-full border-[4px] border-[var(--colW3)] 
              shadow-2xl shadow-slate-500 dark:shadow-slate-400"
                >
                  {modalData[0]?.name[0].toUpperCase()}
                </p>
              )}
              <TextInput
                label={"Name"}
                placeholder={"please Enter Name"}
                value={modalData[0]?.name}
              />
              <TextInput
                label={"Email"}
                placeholder={"please Enter email"}
                value={modalData[0]?.email}
              />
              <TextInput
                label={"Phone"}
                placeholder={"please Enter phone"}
                value={modalData[0]?.phone}
              />
              <TextInput
                label={"Phone"}
                placeholder={"please Enter phone"}
                value={modalData[0]?.topicAssign}
              />
              <div className="w-full grid grid-cols-2 gap-2 py-2">
                <button className=" flex border-[2px] border-red-400 justify-center items-center gap-3 p-2 rounded-full cursor-pointer">
                  Cancel
                </button>
                <button
                  onClick={handleAddNewEmployee}
                  className=" flex bg-green-400 justify-center items-center gap-2 p-2 rounded-full cursor-pointer"
                >
                  Save
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
