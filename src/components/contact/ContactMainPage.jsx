import React from "react";
import SettingService from "../../service/Setting/SettingService";
import TextInput from "../ReUsable/TextInput";
import banner from "../../assets/image/quiznp.png";

const ContactMainPage = () => {
  const { userDetails, token } = SettingService();
  return (
    <div className="w-full min-h-[90vh] flex justify-center items-center gap-5 flex-col sm:px-5   pt-[50px]  sm:pt-[60px] pb-5 sm:pb-10">
      <div className="flex gap-8 ">
        <div className="w-full  min-h-[80vh]  flex justify-center items-center">
          <div
            className="w-full  lg:w-[1000px] h-[500px] flex flex-col bg-[var(--colW3)] dark:bg-gray-900 shadow-xl shadow-[var(--colG3)]
                 dark:shadow-gray-700 text-black dark:text-white rounded-b-sm rounded-t-3xl "
          >
            <div className="h-[200px] w-full relative">
              <img src={banner} alt="banner " className="w-full h-[200px] rounded-t-3xl" />
              <div className=" absolute bottom-[-100px] left-[70px] w-[200px] h-[200px] bg-red-300 mt-[-100px] rounded-full">
                <img
                  src={userDetails?.avatar}
                  alt={userDetails?.username}
                  className="w-full h-full border-[4px] border-[var(--colG1)] rounded-full"
                />
              </div>
            </div>
            <div className="w-full flex p-3 sm:px-5 flex-col justify-center items-center ">
              <div>
                <p>Ramrup Mahato</p>
                <p>ramrupmahato@gmail.com</p>
                <p>9898736485</p>
                <p>user type: Export </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMainPage;
