import React from "react";

import banner from "../../assets/image/quiznp.png";
import { FaCameraRotate } from "react-icons/fa6";
import ProfileService from "../../service/Profile/ProfileService";
import Loader from "../ReUsable/Loader";
const ProfileMailPage = () => {
  const { userDetails, handleChangeFile, loaderInFolder } = ProfileService();
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
                          className="w-full h-full border-[4px] border-[var(--colG1)] rounded-full object-fill"
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
                </div>
                <div className="flex justify-center items-center">
                  <p className="min-w-[100px] text-[14px] text-gray-500 dark:text-gray-100">
                    Email:
                  </p>
                  <p className="bg-[var(--colW1)] dark:bg-slate-700  p-2 m-1 border-2 rounded-md text-[13px] font-bold text-gray-600 dark:text-gray-100 w-full">
                    {userDetails?.email}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <p className="min-w-[100px] text-[14px] text-gray-500 dark:text-gray-100">
                    Phone:
                  </p>
                  <p className="bg-[var(--colW1)] dark:bg-slate-700  p-2 m-1 border-2 rounded-md text-[13px] font-bold text-gray-600 dark:text-gray-100 w-full">
                    {userDetails?.phone}
                  </p>
                </div>
                <div className="flex justify-center items-center">
                  <p className="min-w-[100px] text-[14px] text-gray-500 dark:text-gray-100">
                    user type:
                  </p>
                  <p className="bg-[var(--colW1)] dark:bg-slate-700  p-2 m-1 border-2 rounded-md text-[13px] font-bold text-gray-600 dark:text-gray-100 w-full">
                    {userDetails?.userType}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMailPage;
