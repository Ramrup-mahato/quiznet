import React, { useContext } from "react";
import TextInput from "../../ReUsable/TextInput";
import DataTable from "react-data-table-component";
import Loader from "../../ReUsable/Loader";
import ContextStore from "../../../context/Context";
import UserManagerService from "../../../service/UserManager/UserManagerService";
import Modal from "../../Modal/Modal";
import { MdBlock, MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const UserManagerPage = () => {
  const { loaderInFolder } = useContext(ContextStore);

  const {
    userData,
    columns,
    userState,
    handleChange,
    filter,
    handleSelectStatus,
    handleModal,
    handleBlockUser,
  } = UserManagerService();
  return (
    <div className="p-4">
      {loaderInFolder ? (
        <Loader folderLoader={true} />
      ) : (
        <div className="bg-[var(--colW2)] dark:bg-slate-800 p-2 rounded-md rounded-t-3xl ">
          <div className="flex justify-between items-center pb-3  ">
            <div className="w-[60%]">
              <TextInput
                classStyle={"border-none "}
                RoundFull={true}
                placeholder={"Search ..."}
                value={userState?.search}
                handleChange={handleChange}
              />
            </div>
            <div className="flex justify-center items-center bg-white dark:bg-slate-700 rounded-full p-1">
              <div
                className={`p-2 w-[70px] flex justify-center items-center  font-bold rounded-full cursor-pointer 
              ${
                userState?.status === "active"
                  ? "  text-[#00E396] bg-[#e4fff6] shadow-xl"
                  : undefined
              }`}
                onClick={() => handleSelectStatus("active")}
              >
                <p className="text-[12px]">Active</p>
              </div>
              <div
                className={`w-[70px] flex justify-center items-center p-2  font-bold rounded-full cursor-pointer
             ${
               userState?.status === "inactive"
                 ? " text-[#FEB019] bg-[#fbf3e1] shadow-xl"
                 : undefined
             }`}
                onClick={() => handleSelectStatus("inactive")}
              >
                <p className="text-[12px]">InActive</p>
              </div>
              <div
                className={`p-2 w-[70px] flex justify-center items-center font-bold rounded-full cursor-pointer  ${
                  userState?.status === "blocked" &&
                  " text-rose-500 bg-red-100 shadow-xl"
                }`}
                onClick={() => handleSelectStatus("blocked")}
              >
                <p className="text-[12px]">Blocked</p>
              </div>
            </div>
          </div>
          <DataTable
            //   title="Contact List"
            columns={columns}
            data={filter(userData, userState.search)}
            defaultSortField="name"
            striped
            // pagination
            subHeader={false}
            // subHeaderComponent={subHeaderComponent}
          />
        </div>
      )}
      <SeeUserModal
        userState={userState}
        handleModal={handleModal}
        handleBlockUser={handleBlockUser}
      />
    </div>
  );
};

export default UserManagerPage;

const SeeUserModal = ({ userState, handleModal, handleBlockUser }) => {
  return (
    <Modal open={userState?.userModal} onClose={handleModal}>
      <div className="w-[500px]  bg-[var(--colW2)] dark:bg-slate-800 shadow-md shadow-slate-500 rounded-tr-3xl rounded-bl-3xl ">
        <div className="p-3 bg-[var(--colW2)] dark:bg-slate-800 flex flex-col justify-center items-center rounded-lg shadow-lg">
          {userState?.data?.avatar ? (
            <img
              src={userState?.data?.avatar}
              alt="employee..."
              className="w-[200px] h-[200px] object-cover bg-cover rounded-full border-[4px] border-[var(--colW3)] 
                  shadow-2xl shadow-slate-500 dark:shadow-slate-400"
            />
          ) : (
            <p
              className="w-[200px] h-[200px] font-bold text-[100px] flex justify-center items-center text-violet-600 rounded-full border-[4px] border-[var(--colW3)] 
              shadow-2xl shadow-slate-500 dark:shadow-slate-400"
            >
              {userState?.data?.username?.slice(0, 1).toUpperCase()}
            </p>
          )}
          <div className="w-full flex flex-col p-3">
            <p className="font-bold text-[20px] text-slate-600 dark:text-slate-100">
              Username: {userState?.data?.username}
            </p>
            <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
              Phone: {userState?.data?.phone}
            </p>
            <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
              User Email: {userState?.data?.email}
            </p>

            <div className=" flex gap-3 justify-start items-center ">
              <p className="font-bold text-[14px] text-slate-600 dark:text-slate-100">
                Status:
              </p>

              <div
                className={`px-3 py-2 w-[80px] rounded-full flex justify-center items-center cursor-pointer
           
            ${
              userState?.data?.isBlocked === true
                ? "text-rose-500 bg-red-100 shadow-xl"
                : `${
                    userState?.data?.isActive === true &&
                    "text-[#00E396] bg-[#e4fff6]"
                  }
            ${
              userState?.data?.isActive === false &&
              "text-[#FEB019] bg-[#fbf3e1]"
            }`
            }`}
              >
                <p className="text-[12px] font-bold">{`
            ${
              userState?.data?.isBlocked === true
                ? "Blocked"
                : `${userState?.data?.isActive === true ? "Active" : ""}
            ${userState?.data?.isActive === false ? "In Active" : ""}`
            }`}</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end items-center px-4">
            {userState?.data?.isBlocked === true ? (
              <button
                onClick={() =>
                  handleBlockUser(
                    userState?.data?.isBlocked,
                    userState?.data?._id
                  )
                }
                className=" flex text-[#00E396] bg-[#e4fff6] justify-center items-center gap-2 p-2 rounded-full cursor-pointer  px-4"
              >
                UnBlocked User <MdBlock size={20} />
              </button>
            ) : (
              <button
                className=" flex bg-red-100 justify-center items-center gap-3 p-2 rounded-full cursor-pointer  px-4 text-rose-500"
                onClick={() =>
                  handleBlockUser(
                    userState?.data?.isBlocked,
                    userState?.data?._id
                  )
                }
              >
                Blocked User <MdBlock size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
