import React from "react";

import banner from "../../assets/image/quiznp.png";
import { FaCameraRotate } from "react-icons/fa6";
import ProfileService from "../../service/Profile/ProfileService";
import Loader from "../ReUsable/Loader";
import { FaEdit, FaRegCheckCircle } from "react-icons/fa";
import Modal from "../Modal/Modal";
import TextInput from "../ReUsable/TextInput";
const ProfileMailPage = () => {
  const {
    userDetails,
    handleChangeFile,
    loaderInFolder,
    profile,
    handleModal,
    handleEdit,
    handleSelectRadio,
    handleInput,
    handleSubmit,
  } = ProfileService();
  return (
    <div className="w-full min-h-[90vh] flex justify-center items-center gap-5 flex-col sm:px-5   pt-[50px]  sm:pt-[60px] pb-5 sm:pb-10">
      <div className="flex gap-8 ">
        <div className="w-full  min-h-[80vh]  flex justify-center items-center">
          <div
            className="w-full  lg:w-[1000px] h-[500px] flex flex-col justify-end items-end bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
                 dark:shadow-gray-700 text-black dark:text-white rounded-b-sm rounded-t-3xl "
          >
            <div className="h-[100px]  sm:h-[150px] md:h-[200px] w-full relative">
              <img
                src={banner}
                alt="banner "
                className="w-full h-[100px] sm:h-[150px] lg:h-[200px] rounded-t-3xl"
              />
              <div className=" absolute bottom-[-50px]  sm:bottom-[-75px]  lg:bottom-[-100px] left-[35px] sm:left-[53px] lg:left-[70px] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] bg-blue-300 mt-[-100px] rounded-full">
                <div className="w-full h-full relative">
                  {loaderInFolder === true ? (
                    <Loader folderLoader={true} />
                  ) : (
                    <>
                      {userDetails?.avatar ? (
                        <img
                          src={userDetails?.avatar}
                          alt={userDetails?.username}
                          className="w-full h-full border-[4px] border-[var(--colG1)] rounded-full object-cover"
                        />
                      ) : (
                        <p
                          className="w-full h-full rounded-full border-white border-2 imageAvatar flex justify-center items-center font-bold 
                   bg-[#512Dab] text-[var(--colW2)] text-[50px]"
                        >
                          {userDetails?.username?.slice(0, 1)?.toUpperCase()}
                        </p>
                      )}
                    </>
                  )}
                  <div className="absolute right-[-5px] bottom-3 sm:right-2 sm:bottom-4 lg:right-4 lg:bottom-5 bg-white w-7 h-7 border-[2px] border-[var(--colB2)] rounded-full flex justify-center items-center cursor-pointer">
                    <label htmlFor="profileImage" className="cursor-pointer">
                      <FaCameraRotate className=" text-[var(--colB2)]" />
                    </label>
                  </div>
                  <input
                    id="profileImage"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => handleChangeFile(e)}
                  />
                </div>
              </div>
            </div>
            <div className="w-full dark:text-gray-100 md:max-w-[700px] h-full flex p-3 sm:px-5 flex-col justify-center items-center ">
              <div className="w-full">
                <div className="flex justify-center items-center">
                  <p className="min-w-[100px] text-[14px] text-gray-500 dark:text-gray-100 ">
                    UserName:
                  </p>
                  <p className="bg-[var(--colW1)] dark:bg-slate-700  p-2 m-1 border-2 rounded-md text-[13px] font-bold text-gray-600 dark:text-gray-100 w-full">
                    {userDetails?.username}
                  </p>
                  <div className="size-6 justify-center items-center">
                    <FaEdit
                      size={20}
                      className="cursor-pointer text-red-900"
                      onClick={() =>
                        handleEdit("username", userDetails?.username)
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <p className="min-w-[100px] text-[14px] text-gray-500 dark:text-gray-100">
                    Email:
                  </p>
                  <p className="bg-[var(--colW1)] dark:bg-slate-700  p-2 m-1 border-2 rounded-md text-[13px] font-bold text-gray-600 dark:text-gray-100 w-full">
                    {userDetails?.email}
                  </p>
                  <div className="size-6 justify-center items-center">
                    <FaRegCheckCircle
                      size={20}
                      className=" text-[var(--colG4)]"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <p className="min-w-[100px] text-[14px] text-gray-500 dark:text-gray-100">
                    Phone:
                  </p>
                  <p className="bg-[var(--colW1)] dark:bg-slate-700  p-2 m-1 border-2 rounded-md text-[13px] font-bold text-gray-600 dark:text-gray-100 w-full">
                    {userDetails?.phone}
                  </p>
                  <div className="size-6 justify-center items-center">
                    <FaEdit
                      size={20}
                      className="cursor-pointer text-red-900"
                      onClick={() => handleEdit("phone", userDetails?.phone)}
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <p className="min-w-[100px] text-[14px] text-gray-500 dark:text-gray-100">
                    user type:
                  </p>
                  <p className="bg-[var(--colW1)] dark:bg-slate-700  p-2 m-1 border-2 rounded-md text-[13px] font-bold text-gray-600 dark:text-gray-100 w-full">
                    {userDetails?.userType}
                  </p>
                  <div className="size-6 justify-center items-center">
                    <FaEdit
                      size={20}
                      className="cursor-pointer text-red-900"
                      onClick={() =>
                        handleEdit("userType", userDetails?.userType)
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <EditModal
              profile={profile}
              handleModal={handleModal}
              handleSelectRadio={handleSelectRadio}
              handleInput={handleInput}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMailPage;

const EditModal = ({
  handleModal,
  profile,
  handleSubmit,
  handleSelectRadio,
  handleInput,
}) => {
  return (
    <Modal open={profile.modal} onClose={handleModal}>
      <div className="w-[500px]   bg-[var(--colW2)] dark:bg-slate-800 shadow-md shadow-slate-500 rounded-tr-3xl rounded-bl-3xl ">
        <div
          className="flex items-center bg-[var(--colB1)] dark:bg-gray-950 text-black dark:text-[var(--colW2)]
        font-semibold text-base shadow-md shadow-slate-500 dark:shadow-gray-900 p-2 rounded-tr-3xl"
        >
          <h3> Change {profile.editFor} </h3>
        </div>
        <div className="p-4 max-h-[500px] ">
          {profile.editFor === "userType" ? (
            <div className="flex gap-10 justify-center">
              <div className="flex justify-center items-center ">
                <input
                  type="radio"
                  id="Student"
                  className="reg"
                  checked={profile.value === "student" ? true : false}
                  onChange={() => handleSelectRadio("student")}
                  name="student"
                />
                <label
                  htmlFor="Student"
                  className="px-5 text-[14px] font-bold text-slate-600 dark:text-slate-100 cursor-pointer"
                >
                  Student
                </label>
              </div>
              <div className="flex justify-center items-center ">
                <input
                  id="Expert"
                  type="radio"
                  className="reg"
                  checked={profile.value === "expert" ? true : false}
                  onChange={() => handleSelectRadio("expert")}
                  name="expert"
                />
                <label
                  htmlFor="Expert"
                  className="px-5 text-[14px] font-bold text-slate-600 dark:text-slate-100 cursor-pointer"
                >
                  Expert
                </label>
              </div>
            </div>
          ) : (
            <TextInput
              label={profile.editFor}
              error={profile.error.length>0?true:false}
              errorMessage={profile.error}
              require
              placeholder={` Enter correct ${profile.editFor}`}
              handleChange={handleInput}
              value={profile.value}
            />
          )}
          <div className="w-full flex justify-end items-center gap-2 p-3">
            <button
              className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-white dark:bg-slate-700 border-[2px] border-rose-500 s cursor-pointer rounded-md py-1 px-3"
              onClick={handleModal}
            >
              Cancel
            </button>
            <button
              className="w-[100px] flex justify-center items-center font-medium text=[14px] shadow-2xl bg-[var(--colB1)] border border-[var(--colB1)] text-white cursor-pointer rounded-md py-1 px-3"
              type="submit"
              onClick={() => handleSubmit()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
